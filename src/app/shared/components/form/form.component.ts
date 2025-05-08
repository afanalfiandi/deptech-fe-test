import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AdminService } from "../../../pages/admin/admin.service";
import { COLLECTION } from "../../enums/collection.enum";
import { ToastNotif } from "../../../core/decorators/toast.decorator";
import { MESSAGE } from "../../enums/message.enum";
import { MODE } from "../../enums/mode.enum";
import { EmployeeService } from "../../../pages/employee/employee.service";
import { Observable } from "rxjs";
import { OnLeaveService } from "../../../pages/on-leave/on-leave.service";

@Component({
  selector: "app-form",
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  formData!: any[];
  mode: MODE.edit | MODE.add = MODE.add;
  data: any;
  collectionName!: string;
  mockData: any[] = [];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private employeeService: EmployeeService,
    private leaveService: OnLeaveService
  ) {}

  ngOnInit(): void {
    const state = history.state;
    if (state) {
      this.formData = state.formData;
      this.mode = state.mode;
      this.data = state.data;
      this.collectionName = state.collectionName;
    }

    this.onInitFormGroup();
  }

  onInitFormGroup() {
    const formGroup: any = {};

    this.formData.forEach((item) => {
      let validators = [];

      if (item.required) {
        validators.push(Validators.required);
      }

      if (item.type === "email") validators.push(Validators.email);

      if (item.validators) {
        validators = validators.concat(this.parseValidators(item.validators));
      }

      formGroup[item.key] = ["", validators];
    });

    formGroup["id"] = [""];
    this.form = this.fb.group(formGroup);

    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const serviceMap: {
        [key: string]: {
          addData: (data: any) => Observable<any>;
          updateData: (data: any) => Observable<any>;
        };
      } = {
        [COLLECTION.admin]: this.adminService,
        [COLLECTION.employee]: this.employeeService,
        [COLLECTION.leave]: this.leaveService,
      };
      const service = serviceMap[this.collectionName];

      if (this.mode === MODE.add) {
        if (service) {
          service.addData(this.form.value).subscribe({
            next: (res) => {
              if (res) {
                ToastNotif("success", MESSAGE.addSuccess);
                this.form.reset();
                window.history.back();
              }
            },
            error: (err) => {
              ToastNotif("error", err);
            },
          });
        }
      } else {
        if (service) {
          service.updateData(this.form.value).subscribe({
            next: (res) => {
              ToastNotif("success", MESSAGE.editSuccess);
              this.form.reset();
              window.history.back();
            },
            error: (err) => {
              ToastNotif("error", err);
            },
          });
        }
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  trackByFn(index: number, item: any) {
    return item.key;
  }

  readonly validatorMap: Record<string, any[]> = {
    password: [Validators.minLength(6)],
  };

  parseValidators(validators: string[] = []) {
    const result = [];

    for (const rule of validators) {
      if (rule.startsWith("minLength:")) {
        const val = parseInt(rule.split(":")[1], 10);
        result.push(Validators.minLength(val));
      }

      if (rule === "email") {
        result.push(Validators.email);
      }
    }

    return result;
  }
}
