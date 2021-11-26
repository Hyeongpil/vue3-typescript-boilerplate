import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // 스크롤 유지 (선택)
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

// 라우팅 이전 조치
router.beforeEach(async (to, from, next) => {
  return next();
});

// 라우팅 이후 조치
router.afterEach(() => {
  //
});

export default router;
