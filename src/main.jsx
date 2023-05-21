import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/ErrorElement/ErrorPage.jsx";
import Home from "./component/HomeLayout/Home.jsx";
import Blog from "./component/ConstantLayout/Blog.jsx";
import Login from "./component/LoginRegestationLayout/Login.jsx";
import Regestation from "./component/LoginRegestationLayout/Regestation.jsx";
import AuthProvider from "./component/AuthProvider/AuthProvider.jsx";
import AllToys from "./component/AllToys/AllToys.jsx";
import AddAToy from "./component/AddAToy/AddAToy.jsx";
import MyToys from "./component/MyToys/MyToys.jsx";
import UpdateAToy from "./component/UpdateAToy/UpdateAToy.jsx";
import ToyDetails from "./component/ToysDetails/ToyDetails.jsx";
import PrivateRoute from "./component/ProtectRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/regestation",
        element: <Regestation />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/addAtoy",
        element: (
          <PrivateRoute>
            <AddAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateToy",
        element: (
          <PrivateRoute>
            <UpdateAToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
