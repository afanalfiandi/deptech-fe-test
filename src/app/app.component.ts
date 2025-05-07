import { Component } from "@angular/core";
import { MainComponent } from "./shared/layout/main/main.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "deptech";
}
