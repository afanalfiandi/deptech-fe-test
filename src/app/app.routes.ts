import { Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { FormComponent } from "./shared/components/form/form.component";
import { DeleteFormComponent } from "./shared/components/delete-form/delete-form.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "form",
    component: FormComponent,
  },
  {
    path: "delete",
    component: DeleteFormComponent,
  },
];
