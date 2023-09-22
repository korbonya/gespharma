import {
    createBrowserRouter,
  } from "react-router-dom";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="text-green-500 text-4xl underline">Hello world!</div>,
    },
  ]);