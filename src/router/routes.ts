import { RouteRecordRaw } from "vue-router";
import { errorRouter, homeRouter } from "./modules";

export const routes: Array<RouteRecordRaw> = [homeRouter, errorRouter];
