import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../../pages/admin/admin.service";
import { COLLECTION } from "../../enums/collection.enum";
import { ToastNotif } from "../../../core/decorators/toast.decorator";
import { MESSAGE } from "../../enums/message.enum";
import { Observable } from "rxjs";
import { EmployeeService } from "../../../pages/employee/employee.service";
import { OnLeaveService } from "../../../pages/on-leave/on-leave.service";

@Component({
  selector: "app-delete-form",
  imports: [],
  templateUrl: "./delete-form.component.html",
  styleUrl: "./delete-form.component.css",
})
export class DeleteFormComponent implements OnInit {
  collectionName!: string;
  id!: number;

  constructor(
    private adminService: AdminService,
    private employeeService: EmployeeService,
    private leaveService: OnLeaveService
  ) {}
  ngOnInit(): void {
    const state = history.state;
    if (state) {
      this.collectionName = state.collectionName;
      this.id = state.id;
    }
  }

  onDelete() {
    const serviceMap: {
      [key: string]: {
        deleteData: (data: any) => Observable<any>;
      };
    } = {
      [COLLECTION.admin]: this.adminService,
      [COLLECTION.employee]: this.employeeService,
      [COLLECTION.leave]: this.leaveService,
    };

    const service = serviceMap[this.collectionName];

    if (service) {
      service.deleteData(this.id).subscribe((res) => {
        ToastNotif("success", MESSAGE.deleteSuccess);
        window.history.back();
      });
    }
  }
}
