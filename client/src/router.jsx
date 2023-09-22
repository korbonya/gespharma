import {
    createBrowserRouter,
  } from "react-router-dom";

  import LoginPage from "./features/auth/loginPage";
  import DashboardPages from "./routes/dashboard";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPages />,
        children: [
            {
                path: "",
                element: <h1>Dashboard</h1>,
            },
            {
                path: "users",
                element: <h1>Users</h1>,
            },
            {
                path: "products",
                element: <h1>Products</h1>,
            },
            {
                path: "categories",
                element: <h1>Categories</h1>,
            },
        ]
    }
  ]);