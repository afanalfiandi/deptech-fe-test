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
        email: "abc123@gmail.com",
        dateOfBirth: "1999-05-07",
        gender: 1,
        password: "abc123",
        token: "fake-jwt-token-123",
      },
      {
        adminID: 2,
        firstName: "Eko",
        lastName: "Pratama",
        email: "abc124@gmail.com",
        dateOfBirth: "2000-01-16",
        gender: 1,
        password: "abc124",
        token: "fake-jwt-token-124",
      },
      {
        adminID: 2,
        firstName: "Vilza",
        lastName: "Agustina",
        email: "abc125@gmail.com",
        dateOfBirth: "2000-05-06",
        gender: 2,
        password: "abc125",
        token: "fake-jwt-token-125",
      },
    ];
    return { adminData };
  }
}
