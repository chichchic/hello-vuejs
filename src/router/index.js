import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import nullGuard from "@/middlewares/nullGuard";

Vue.use(VueRouter);

const router = Promise.all(routes).then((routes) => {
  const vRouter = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  vRouter.beforeEach((to, from, next) => {
    nullGuard({ to, from }, next, next.bind(null, { name: "DateTime" }));
  });
  return vRouter;
});

export default router;
