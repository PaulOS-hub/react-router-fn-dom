import Home from "../pages/home";
import Children from "../pages/children";
import Children1 from "../pages/children1";
import Brother from "../pages/brother";
import { lazy } from "react";
import Root from "../pages/root";
const routerConfig = [
  {
    path: "/root",
    component: Root,
  },
  {
    path: "/home",
    component: lazy(() => import("../pages/home")), // 懒加载
    children: [
      {
        path: "/home/children/:id", // 放前面，放后面匹配到.children就不匹配了
        component: Children1,
      },
      {
        path: "/home/children",
        component: Children,
      },
      {
        path: "/home/brother",
        component: Brother,
      },
    ],
  },
];
export default routerConfig;
