import { Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { FormComponent } from "./shared/components/form/form.component";
import { DeleteFormComponent } from "./shared/components/delete-form/delete-form.component";
import { AuthLayoutComponent } from "./shared/layout/auth-layout/auth-layout.component";
import { MainComponent } from "./shared/layout/main/main.component";
import { AuthGuard } from "./core/guards/auth.guard";

export const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [{ path: "", component: AuthComponent }],
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "admin",
        component: AdminComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "form",
        component: FormComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "delete",
        component: DeleteFormComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];
