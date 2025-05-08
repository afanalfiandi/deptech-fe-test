export const EmployeeFormData = [
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
    label: "No. Telepon",
    type: "text",
    key: "phoneNumber",
    required: true,
  },
  {
    label: "Alamat",
    type: "text",
    key: "address",
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
];
