import { Component, OnInit } from "@angular/core";
import { TablesComponent } from "../../shared/components/tables/tables.component";
import { Router } from "@angular/router";
import { AdminFormData } from "./consts/form-data.const";
import { AdminService } from "./admin.service";
import { tap } from "rxjs";
import { TableDataDTO } from "../../shared/dtos/table-data.dto";
import { AdminColumnData } from "./consts/column-data.const";

@Component({
  selector: "app-admin",
  imports: [TablesComponent],
  templateUrl: "./admin.component.html",
  styleUrl: "./admin.component.css",
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private service: AdminService) {}
  data: TableDataDTO = {
    column: [],
    data: [],
  };

  ngOnInit(): void {
    this.onGetData();
  }

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

  onGetData() {
    this.service
      .getData()
      .pipe(
        tap((res) => {
          if (res) {
            this.data.column = AdminColumnData;
            this.data.data = res;
          }
        })
      )
      .subscribe();
  }
}
