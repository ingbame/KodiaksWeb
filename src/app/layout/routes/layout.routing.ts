import { Routes } from "@angular/router";

export const LayoutRoutes: Routes = [
  {
    path: "home",
    loadChildren: () => import("../../home/home.module").then(m => m.HomeModule)
  },
  {
    path: "examples",
    loadChildren: () => import("../../examples/examples.module").then(m => m.ExamplesModule)
  }
];
