import { Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/guards/auth.guard";

import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { IconsComponent } from "../pages/icons/icons.component";
import { MapComponent } from "../pages/map/map.component";
import { NotificationsComponent } from "../pages/notifications/notifications.component";
import { TablesComponent } from "../pages/tables/tables.component";
import { TypographyComponent } from "../pages/typography/typography.component";
import { UserComponent } from "../pages/user/user.component";

export const ExamplesRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "icons", component: IconsComponent, canActivate: [AuthGuard] },
  { path: "maps", component: MapComponent, canActivate: [AuthGuard]  },
  { path: "notifications", component: NotificationsComponent, canActivate: [AuthGuard]  },
  { path: "user", component: UserComponent, canActivate: [AuthGuard]  },
  { path: "tables", component: TablesComponent, canActivate: [AuthGuard]  },
  { path: "typography", component: TypographyComponent, canActivate: [AuthGuard]  }
];
