// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import QuizView from "@/views/QuizView.vue";
import ResultView from "@/views/ResultView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/quizes/:id", component: QuizView },
  { path: "/result", component: ResultView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
