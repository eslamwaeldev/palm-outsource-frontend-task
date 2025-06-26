import { createBrowserRouter } from "react-router";
import DefaultLayout from "../layout/DefaultLayout";
import ErrorPage from "../pages/ErrorPage";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/404",
    element: <ErrorPage />,
  },
]);

export default router;
