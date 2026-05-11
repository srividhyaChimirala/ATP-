
import exp from "express";
import { verifyToken } from "../middlewares/VerifyToken.js";
import { ArticleModel } from "../models/ArticleModel.js";

export const userApp = exp.Router();


// Read articles of all authors
userApp.get("/articles", verifyToken("USER"), async (req, res) => {
  // read articles
  const articlesList = await ArticleModel.find({
    isArticleActive: true,
  });

  // send response
  res.status(200).json({
    message: "articles",
    payload: articlesList,
  });
});


// Add comment to an article
userApp.put("/articles", verifyToken("USER"), async (req, res) => {
  // get body from request
  const { articleId, comment } = req.body;

  // find article
  const articleDocument = await ArticleModel
    .findOne({ _id: articleId, isArticleActive: true })
    .populate("comments.user");

  console.log(articleDocument);

  // if article not found
  if (!articleDocument) {
    return res.status(404).json({
      message: "Article not found",
    });
  }

  // get user id from token
  const userId = req.user?.id;

  // add comment
  articleDocument.comments.push({
    user: userId,
    comment: comment,
  });

  // save
  await articleDocument.save();

  // send response
  res.status(200).json({
    message: "Comment added successfully",
    payload: articleDocument,
  });
});
