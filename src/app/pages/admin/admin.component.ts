import { Component, OnInit } from "@angular/core";
import { TablesComponent } from "../../shared/components/tables/tables.component";
import { Router } from "@angular/router";
import { AdminFormData } from "./consts/form-data.const";
import { AdminService } from "./admin.service";
import { tap } from "rxjs";
import { TableDataDTO } from "../../shared/dtos/table-data.dto";
import { AdminColumnData } from "./consts/column-data.const";
import { AdminDTO } from "./dtos/admin.dto";
import { COLLECTION } from "../../shared/enums/collection.enum";

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
      state: {
        formData: AdminFormData,
        mode: "add",
        collectionName: COLLECTION.admin,
      },
    });
  }

  onEditData(value: AdminDTO) {
    this.router.navigate(["/form"], {
      state: {
        formData: AdminFormData,
        mode: "edit",
        data: value,
        collectionName: COLLECTION.admin,
      },
    });
  }

  onDeleteData(id: number) {
    this.router.navigate(["/delete"], {
      state: {
        id: id,
        collectionName: COLLECTION.admin,
      },
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
