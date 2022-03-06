import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Home"))
  },
  {
    path: "/about-me",
    component: lazy(() => import("../pages/About"))
  },
  {
    path: "/my-resume",
    component: lazy(() => import("../pages/Resume"))
  },
  {
    path: "/my-portfolio",
    component: lazy(() => import("../pages/Portfolio"))
  },
  {
    path: "/my-blog",
    component: lazy(() => import("../pages/Blog"))
  },
  {
    path: "/contact-me",
    component: lazy(() => import("../pages/Contact"))
  }
];

export default routes;