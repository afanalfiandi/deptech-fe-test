import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DbService {
  constructor() {}

  createDb() {
    const adminData = [
      {
        adminID: 1,
        firstName: "Syahrul",
        lastName: "Gunawan",
        email: "syahrul@gmail.com",
        dateOfBirth: "2025-05-07",
        gender: 1,
      },
    ];
    return { adminData };
  }
}
