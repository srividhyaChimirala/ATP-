// // import { createBrowserRouter, RouterProvider } from "react-router";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RootLayout from "./components/RootLayout";
// import Home from "./components/Home";
// import Register from "./components/Register";
// import Login from "./components/Login";
// import UserProfile from "./components/UserProfile";
// import AuthorProfile from "./components/AuthorProfile";
// import AuthorArticles from "./components/AuthorArticles";
// import EditArticle from "./components/EditArticle";
// import WriteArticles from "./components/WriteArticles";
// import ArticleByID from "./components/ArticleById";
// import { Toaster } from "react-hot-toast";
// import Unauthorized from "./components/Unauthorized";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   const routerObj = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         {
//           path: "",
//           element: <Home />,
//         },
//         {
//           path: "register",
//           element: <Register />,
//         },
//         {
//           path: "login",
//           element: <Login />,
//         },
//         {
//           path: "user-profile",
//           element: (
//             <ProtectedRoute allowedRoles={["USER"]}>
//               <UserProfile />
//             </ProtectedRoute>
//           ),
//         },
//         {
//           path: "author-profile",
//           element: (
//             <ProtectedRoute allowedRoles={["AUTHOR"]}>
//               <AuthorProfile />
//             </ProtectedRoute>
//           ),

//           children: [
//             {
//               index: true,
//               element: <AuthorArticles />,
//             },
//             {
//               path: "articles",
//               element: <AuthorArticles />,
//             },
//             {
//               path: "write-article",
//               element: <WriteArticles />,
//             },
//           ],
//         },
//         {
//           path: "article/:id",
//           element: <ArticleByID />,
//         },
//         {
//           path: "edit-article",
//           element: <EditArticle />,
//         },
//         {
//           path: "unauthorized",
//           element: <Unauthorized />,
//         },
//       ],
//     },
//   ]);

//   return (
//     <div>
//       <Toaster position="top-center" reverseOrder={false} />
//       <RouterProvider router={routerObj} />
//     </div>
//   );
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import AuthorProfile from "./components/AuthorProfile";
import AuthorArticles from "./components/AuthorArticles";
import EditArticle from "./components/EditArticle";
import WriteArticles from "./components/WriteArticles";
import ArticleByID from "./components/ArticleById";
import Unauthorized from "./components/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "register",
          element: <Register />,
        },

        {
          path: "login",
          element: <Login />,
        },

        // USER ROUTE
        {
          path: "user-profile",
          element: (
            <ProtectedRoute allowedRoles={["USER"]}>
              <UserProfile />
            </ProtectedRoute>
          ),
        },

        // AUTHOR ROUTES
        {
          path: "author-profile",
          element: (
            <ProtectedRoute allowedRoles={["AUTHOR"]}>
              <AuthorProfile />
            </ProtectedRoute>
          ),

          children: [
            {
              index: true,
              element: <AuthorArticles />,
            },

            {
              path: "articles",
              element: <AuthorArticles />,
            },

            {
              path: "write-article",
              element: <WriteArticles />,
            },
          ],
        },

        // ARTICLE DETAILS
        {
          path: "article/:id",
          element: <ArticleByID />,
        },

        // EDIT ARTICLE
        {
          path: "edit-article/:id",
          element: (
            <ProtectedRoute allowedRoles={["AUTHOR"]}>
              <EditArticle />
            </ProtectedRoute>
          ),
        },

        // UNAUTHORIZED
        {
          path: "unauthorized",
          element: <Unauthorized />,
        },

        // 404 PAGE
        {
          path: "*",
          element: (
            <div className="text-center mt-20 text-2xl font-bold">
              404 - Page Not Found
            </div>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />

      <RouterProvider router={routerObj} />
    </>
  );
}

export default App;
