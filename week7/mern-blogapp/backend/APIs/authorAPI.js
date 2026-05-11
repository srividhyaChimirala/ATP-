
import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ArticleModel } from "../models/ArticleModel.js";
import { verifyToken } from "../middlewares/VerifyToken.js";

export const authorApp = exp.Router();


// Write article (protected route)
authorApp.post("/article", verifyToken("AUTHOR"), async (req, res) => {
  // get article object from client
  const articleObj = req.body;

  // get user from decoded token
  const user = req.user;

  // check author
  const author = await UserModel.findById(articleObj.author);

  if (!author) {
    return res.status(404).json({ message: "Invalid author" });
  }

  // cross check emails
  if (author.email !== user.email) {
    return res.status(403).json({ message: "You are not authorized" });
  }

  // create article document
  const articleDoc = new ArticleModel(articleObj);

  // save
  await articleDoc.save();

  // send response
  res.status(201).json({ message: "Article published successfully" });
});


// Read own articles
authorApp.get("/articles", verifyToken("AUTHOR"), async (req, res) => {
  // get author id from decoded token
  const authorIdOfToken = req.user?.id;

  // get articles by author id
  const articlesList = await ArticleModel.find({
    author: authorIdOfToken,
  });

  // send response
  res.status(200).json({
    message: "articles",
    payload: articlesList,
  });
});


// Edit article
authorApp.put("/articles", verifyToken("AUTHOR"), async (req, res) => {
  // get author id from token
  const authorIdOfToken = req.user?.id;

  // get modified article from client
  const { articleId, title, category, content } = req.body;

  const modifiedArticle = await ArticleModel.findOneAndUpdate(
    { _id: articleId, author: authorIdOfToken },
    { $set: { title, category, content } },
    { new: true }
  );

  // if article not found or unauthorized
  if (!modifiedArticle) {
    return res.status(403).json({
      message: "Not authorized to edit article",
    });
  }

  // send response
  res.status(200).json({
    message: "Article modified",
    payload: modifiedArticle,
  });
});


// Delete article (soft delete)
authorApp.patch("/articles", verifyToken("AUTHOR"), async (req, res) => {
  // get author id from token
  const authorIdOfToken = req.user?.id;

  const { articleId, isArticleActive } = req.body;

  // get article by id and author
  const articleOfDB = await ArticleModel.findOne({
    _id: articleId,
    author: authorIdOfToken,
  });

  if (!articleOfDB) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  // check current state
  if (isArticleActive === articleOfDB.isArticleActive) {
    return res.status(200).json({
      message: "Article already in the same state",
    });
  }

  // update status
  articleOfDB.isArticleActive = isArticleActive;

  await articleOfDB.save();

  // send response
  res.status(200).json({
    message: "Article updated",
    payload: articleOfDB,
  });
});
