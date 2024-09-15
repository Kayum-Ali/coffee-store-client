

import {
    createBrowserRouter,
 
  } from "react-router-dom";
import HomePage from "../Pages/clientSide/HomePage";
import MainLayout from "../layouts/MainLayout";
import AddCoffeePage from "../Pages/clientSide/AddCoffeePage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element:  <HomePage></HomePage>,
          loader: ()=> fetch('http://localhost:5000/coffee')
        },
        {
          path: "/add-coffee",
          element: <AddCoffeePage></AddCoffeePage>,
        }

      ]
    },
  ]);

  export default router