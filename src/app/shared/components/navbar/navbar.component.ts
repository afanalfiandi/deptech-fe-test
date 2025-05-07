import { Component } from "@angular/core";
import { AuthService } from "../../../pages/auth/auth.service";

@Component({
  selector: "app-navbar",
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}
  onLogout() {
    this.authService.logout();
  }
}
