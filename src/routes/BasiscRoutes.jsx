

import {
    createBrowserRouter,
 
  } from "react-router-dom";
import HomePage from "../Pages/clientSide/HomePage";
import MainLayout from "../layouts/MainLayout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element:  <HomePage></HomePage>,
        }
      ]
    },
  ]);

  export default router