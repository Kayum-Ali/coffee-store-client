

import {
    createBrowserRouter,
 
  } from "react-router-dom";
import HomePage from "../Pages/clientSide/HomePage";
import MainLayout from "../layouts/MainLayout";
import AddCoffeePage from "../Pages/clientSide/AddCoffeePage";
import UpdateCoffeePage from "../Pages/clientSide/UpdateCoffeePage";
import CoffeeDetails from "../components/clientSide/CoffeeDatails/CoffeeDetails";



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
        },
        {
          path: "/update-coffee/:id",
          element: <UpdateCoffeePage></UpdateCoffeePage>,
          loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: '/coffee-details/:id',
          element: <CoffeeDetails></CoffeeDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
        }

      ]
    },
  ]);

  export default router