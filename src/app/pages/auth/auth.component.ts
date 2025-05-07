import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  imports: [ReactiveFormsModule],
  templateUrl: "./auth.component.html",
  styleUrl: "./auth.component.css",
})
export class AuthComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      const { email, password } = formData;

      this.onValidateAuth(email, password);
    } else {
      this.form.markAllAsTouched();
    }
  }

  onValidateAuth(email: string, password: string) {
    this.service.onLogin(email, password).subscribe({
      next: (user) => {
        if (user) {
          this.router.navigate(["/dashboard"]);
        }
      },
      error: (err) => {
        alert("Login gagal, email atau password salah");
      },
    });
  }
}
