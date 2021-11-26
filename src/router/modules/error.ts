import { RouteRecordRaw } from "vue-router";
import { lazyLoadLayout, lazyLoadPage } from "../helper";

export const errorRouterNames = {
  notFoundPage: "notFoundPage",
} as const;

export const errorRouter: RouteRecordRaw = {
  path: "/error",
  component: () => lazyLoadLayout("Default"),
  children: [
    {
      path: "404",
      name: errorRouterNames.notFoundPage,
      component: () => lazyLoadPage("404"),
    },
  ],
};
