import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { delay, map, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  onLogin(email: string, password: string) {
    return this.http.get<any[]>("api/adminData").pipe(
      delay(500),
      map((users) => {
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (!user) {
          throw new Error("Email atau password salah");
        }
        localStorage.setItem("token", user.token);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
