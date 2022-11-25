import { lazy } from "react";

import MainLayout from "../layout/MainLayout";
// import Loadable from 'ui-component/Loadable';

const Home = lazy(() => import("../pages/Home"));
const CountDownPage = lazy(() => import("../pages/CountdownPage"));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/:event",
      element: <CountDownPage />
    }
  ]
};

export default MainRoutes;
