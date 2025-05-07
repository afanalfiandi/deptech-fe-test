import { Validators } from "@angular/forms";

export const AdminFormData = [
  {
    label: "Nama Depan",
    type: "text",
    key: "firstName",
    required: true,
  },
  {
    label: "Nama Belakang",
    type: "text",
    key: "lastName",
    required: true,
  },
  {
    label: "Email",
    type: "email",
    key: "email",
    required: true,
  },
  {
    label: "Tanggal Lahir",
    type: "date",
    key: "dateOfBirth",
    required: true,
  },
  {
    label: "Jenis Kelamin",
    type: "select",
    key: "gender",
    required: true,
    option: [
      {
        value: 1,
        label: "Laki-laki",
      },
      {
        value: 2,
        label: "Perempuan",
      },
    ],
  },
  {
    label: "Password",
    type: "password",
    key: "password",
    required: true,
    validators: ["minLength:6"],
  },
];
