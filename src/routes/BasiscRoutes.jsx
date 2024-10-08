

import {
  createBrowserRouter,
} from "react-router-dom";
import CoffeeDetails from "../components/clientSide/CoffeeDatails/CoffeeDetails";
import MainLayout from "../layouts/MainLayout";
import AddCoffeePage from "../Pages/clientSide/AddCoffeePage";
import HomePage from "../Pages/clientSide/HomePage";
import UpdateCoffeePage from "../Pages/clientSide/UpdateCoffeePage";
import ErrorPage from "../Pages/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:  <HomePage></HomePage>,
          
        },
        {
          path: "/add-coffee",
          element: <AddCoffeePage></AddCoffeePage>,
        },
        {
          path: "/update-coffee/:id",
          element: <UpdateCoffeePage></UpdateCoffeePage>,
          loader: ({params})=> fetch(`https://coffee-store-server-rouge-iota.vercel.app/coffee/${params.id}`)
        },
        {
          path: '/coffee-details/:id',
          element: <CoffeeDetails></CoffeeDetails>,
          loader: ({params})=> fetch(`https://coffee-store-server-rouge-iota.vercel.app/coffee/${params.id}`)
        }

      ]
    },
  ]);

  export default router