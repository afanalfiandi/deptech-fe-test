import { Component } from "@angular/core";
import { AuthService } from "../../../pages/auth/auth.service";
import { AdminService } from "../../../pages/admin/admin.service";
import { Router } from "@angular/router";
import { AdminFormData } from "../../../pages/admin/consts/form-data.const";
import { MODE } from "../../enums/mode.enum";
import { COLLECTION } from "../../enums/collection.enum";

@Component({
  selector: "app-navbar",
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router
  ) {}
  onLogout() {
    this.authService.logout();
  }

  onSettings() {
    const token = localStorage.getItem("token");
    if (token) {
      this.adminService.getDataByToken(token).subscribe((admin) => {
        if (admin) {
          this.router.navigate(["/form"], {
            state: {
              formData: AdminFormData,
              mode: MODE.edit,
              data: admin,
              collectionName: COLLECTION.admin,
            },
          });
        }
      });
    }
  }
}
