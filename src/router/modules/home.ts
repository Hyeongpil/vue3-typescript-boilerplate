import { RouteRecordRaw } from "vue-router";
import { lazyLoadLayout, lazyLoadPage } from "../helper";

export const homeRouterNames = {
  homePage: "homePage",
  testPage: "testPage",
} as const;

export const homeRouter: RouteRecordRaw = {
  path: "/home",
  component: () => lazyLoadLayout("Default"),
  children: [
    {
      path: "",
      name: homeRouterNames.homePage,
      component: () => lazyLoadPage("home/Home"),
    },
    {
      path: "test",
      name: homeRouterNames.testPage,
      component: () => lazyLoadPage("home/Test"),
    },
  ],
};
