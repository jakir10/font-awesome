import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Start from "../Pages/Start/Start";
import Search from "../Pages/Search/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Start></Start>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "/icon",
        element: <Search></Search>,
      },
      {
        path: "/docs",
        element: <Search></Search>,
      },
      {
        path: "/plans",
        element: <Search></Search>,
      },
      {
        path: "/support",
        element: <Search></Search>,
      },
      {
        path: "/podcast",
        element: <Search></Search>,
      },
    ],
  },
]);
