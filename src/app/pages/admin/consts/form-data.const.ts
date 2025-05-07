export const AdminFormData = [
  {
    label: "Nama Depan",
    type: "text",
    key: "firstName",
  },
  {
    label: "Nama Belakang",
    type: "text",
    key: "lastName",
  },
  {
    label: "Email",
    type: "email",
    key: "email",
  },
  {
    label: "Tanggal Lahir",
    type: "date",
    key: "dateOfBirth",
  },
  {
    label: "Jenis Kelamin",
    type: "select",
    key: "gender",
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
  },
];
