import { AdminDTO } from "../../pages/admin/dtos/admin.dto";

export const admin: AdminDTO[] = [
  {
    id: 1,
    firstName: "Syahrul",
    lastName: "Gunawan",
    email: "abc123@gmail.com",
    dateOfBirth: "1999-05-07",
    gender: 1,
    password: "abc123",
    token: "fake-jwt-token-123",
  },
  {
    id: 2,
    firstName: "Eko",
    lastName: "Pratama",
    email: "abc124@gmail.com",
    dateOfBirth: "2000-01-16",
    gender: 1,
    password: "abc124",
    token: "fake-jwt-token-124",
  },
  {
    id: 3,
    firstName: "Vilza",
    lastName: "Agustina",
    email: "abc125@gmail.com",
    dateOfBirth: "2000-05-06",
    gender: 2,
    password: "abc125",
    token: "fake-jwt-token-125",
  },
];
