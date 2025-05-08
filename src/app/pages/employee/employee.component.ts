import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MODE } from "../../shared/enums/mode.enum";
import { COLLECTION } from "../../shared/enums/collection.enum";
import { EmployeeFormData } from "./consts/form-data.const";
import { TablesComponent } from "../../shared/components/tables/tables.component";
import { TableDataDTO } from "../../shared/dtos/table-data.dto";
import { EmployeeDTO } from "./dtos/employee.dto";
import { EmployeeService } from "./employee.service";
import { tap } from "rxjs";
import { EmployeeColumnData } from "./consts/column-data.const";

@Component({
  selector: "app-employee",
  imports: [TablesComponent],
  templateUrl: "./employee.component.html",
  styleUrl: "./employee.component.css",
})
export class EmployeeComponent implements OnInit {
  data: TableDataDTO = {
    column: [],
    data: [],
  };

  constructor(private router: Router, private service: EmployeeService) {}

  ngOnInit(): void {
    this.onGetData();
  }

  onAddData() {
    this.router.navigate(["/form"], {
      state: {
        formData: EmployeeFormData,
        mode: MODE.add,
        collectionName: COLLECTION.employee,
      },
    });
  }

  onEditData(value: EmployeeDTO) {
    this.router.navigate(["/form"], {
      state: {
        formData: EmployeeFormData,
        mode: MODE.edit,
        data: value,
        collectionName: COLLECTION.employee,
      },
    });
  }

  onDeleteData(id: number) {
    this.router.navigate(["/delete"], {
      state: {
        id: id,
        collectionName: COLLECTION.employee,
      },
    });
  }

  onGetData() {
    this.service
      .getData()
      .pipe(
        tap((res) => {
          if (res) {
            this.data.column = EmployeeColumnData;
            this.data.data = res;
          }
        })
      )
      .subscribe();
  }
}
