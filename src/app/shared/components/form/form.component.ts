import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AdminService } from "../../../pages/admin/admin.service";

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
  mode: "edit" | "add" = "add";
  data: any;
  collectionName!: string;
  mockData: any[] = [];

  constructor(private fb: FormBuilder, private adminService: AdminService) {}

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
      if (this.mode === "add") {
        if (this.collectionName === "admin") {
          this.adminService.addData(this.form.value).subscribe(() => {
            window.history.back();
          });
        } else {
          // TODO : DO SOMETHING ELSE HERE
        }
      } else {
        if (this.collectionName === "admin") {
          this.adminService.updateData(this.form.value).subscribe(() => {
            window.history.back();
          });
        } else {
          // TODO : DO SOMETHING ELSE HERE
        }
      }

      this.form.reset();
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
