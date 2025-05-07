import { Component, OnInit } from "@angular/core";
import { TablesComponent } from "../../shared/components/tables/tables.component";
import { Router } from "@angular/router";
import { AdminFormData } from "./consts/form-data.const";

@Component({
  selector: "app-admin",
  imports: [TablesComponent],
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.css",
})
export class AdminComponent {
  constructor(private router: Router) {}
  data: any = {
    column: [
      { colName: "Nama Depan", key: "firstName" },
      { colName: "Nama Belakang", key: "lastName" },
      { colName: "Email", key: "email" },
      { colName: "Tanggal Lahir", key: "dateOfBirth" },
      { colName: "Jenis Kelamin", key: "gender" },
    ],
    data: [
      {
        firstName: "Syahrul",
        lastName: "Gunawan",
        email: "syahrul@gmail.com",
        dateOfBirth: "2025-05-07",
        gender: 1,
      },
    ],
  };

  onAddData() {
    this.router.navigate(["/form"], {
      state: { formData: AdminFormData, mode: "add" },
    });
  }

  onEditData() {
    this.router.navigate(["/form"], {
      state: { formData: AdminFormData, mode: "edit", data: this.data.data[0] },
    });
  }

  onDeleteData() {
    this.router.navigate(["/delete"], {
      state: { data: this.data.data[0] },
    });
  }
}
