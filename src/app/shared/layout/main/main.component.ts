import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SidenavComponent } from "../../components/sidenav/sidenav.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: "app-main",
  imports: [RouterOutlet, SidenavComponent, NavbarComponent],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.css",
})
export class MainComponent {}
