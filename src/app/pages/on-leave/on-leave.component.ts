import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OnLeaveService } from "./on-leave.service";
import { OnLeaveDTO } from "./dtos/on-leave.dto";
import { TablesComponent } from "../../shared/components/tables/tables.component";
import { MODE } from "../../shared/enums/mode.enum";
import { COLLECTION } from "../../shared/enums/collection.enum";
import { LeaveFormData } from "./consts/form-data.const";
import { OnLeaveColumnData } from "./consts/column-data.const";
import { tap } from "rxjs";
import { MONTH } from "../../shared/consts/month.const";
import { TableDataDTO } from "../../shared/dtos/table-data.dto";
import { EmployeeService } from "../employee/employee.service";
import { ToastNotif } from "../../core/decorators/toast.decorator";

@Component({
  selector: "app-on-leave",
  imports: [TablesComponent],
  templateUrl: "./on-leave.component.html",
  styleUrl: "./on-leave.component.css",
})
export class OnLeaveComponent {
  monthData = MONTH;
  data: TableDataDTO = {
    column: [],
    data: [],
  };

  leaveData!: OnLeaveDTO[];
  employeeOptions: { label: string; value: string }[] = [];
  leaveFormData = LeaveFormData;

  constructor(
    private router: Router,
    private service: OnLeaveService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.onGetData();
    this.onGetEmployeeData();
  }

  onAddData() {
    this.router.navigate(["/form"], {
      state: {
        formData: LeaveFormData,
        mode: MODE.add,
        collectionName: COLLECTION.leave,
      },
    });
  }

  onEditData(value: OnLeaveDTO) {
    this.router.navigate(["/form"], {
      state: {
        formData: LeaveFormData,
        mode: MODE.edit,
        data: value,
        collectionName: COLLECTION.leave,
      },
    });
  }

  onDeleteData(id: number) {
    this.router.navigate(["/delete"], {
      state: {
        id: id,
        collectionName: COLLECTION.leave,
      },
    });
  }

  onGetData() {
    this.service
      .getData()
      .pipe(
        tap((res) => {
          if (res) {
            this.data.column = OnLeaveColumnData;
            this.data.data = res;
            this.leaveData = res;
          }
        })
      )
      .subscribe();
  }

  onSubmitLeave(item: OnLeaveDTO) {
    this.service
      .addData(item)
      .pipe(
        tap((data) => {
          this.leaveData.push(data);
          this.onGetData();
        })
      )
      .subscribe();
  }

  onGetEmployeeData() {
    this.employeeService
      .getData()
      .pipe(
        tap((employees) => {
          this.employeeOptions = employees.map((emp) => ({
            label: `${emp.firstName} ${emp.lastName}`,
            value: `${emp.firstName} ${emp.lastName}`,
          }));

          const employeeField = this.leaveFormData.find(
            (field) => field.key === "employee"
          );
          if (employeeField) {
            employeeField.option = this.employeeOptions;
          }
        })
      )
      .subscribe();
  }

  onMonthChange(event: any) {
    const selectedMonth = parseInt(event.target.value);

    const filteredLeaveData = this.leaveData.filter((item) => {
      const month = new Date(item.startDate).getMonth() + 1;
      return month === selectedMonth;
    });

    if (filteredLeaveData.length === 0)
      ToastNotif("warning", "Data cuti belum tersedia");
    this.data.data = filteredLeaveData;
  }
}
