import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form",
  imports: [],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
})
export class FormComponent implements OnInit {
  formData!: any;
  mode: "edit" | "add" = "add";
  data: any;

  ngOnInit(): void {
    const state = history.state;
    if (state) {
      this.formData = state.formData;
      this.mode = state.mode;
      this.data = state.data;
    }

    console.log(this.data);
  }
}
