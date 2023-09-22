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
    }
  ]);