import { Routes } from "@angular/router";
import { MembersComponent } from "../pages/members/members.component";
import { RolesComponent } from "../pages/roles/roles.component";

export const ApplicationRoutes: Routes = [
  { path: "**", redirectTo: "members" },
  { path: "members", component: MembersComponent },
  { path: "roles", component: RolesComponent }
];
