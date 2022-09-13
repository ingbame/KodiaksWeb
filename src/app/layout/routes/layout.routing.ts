import { Routes } from "@angular/router";

export const LayoutRoutes: Routes = [
  {
    path: "examples",
    loadChildren: () => import("../../examples/examples.module").then(m => m.ExamplesModule)
  }
];
