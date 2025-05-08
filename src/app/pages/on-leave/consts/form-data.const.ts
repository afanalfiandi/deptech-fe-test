export const LeaveFormData = [
  {
    label: "Nama Pegawai",
    type: "select",
    key: "employee",
    required: true,
    option: [
      {
        label: "",
        value: "",
      },
    ],
  },
  {
    label: "Alasan Cuti",
    type: "text",
    key: "reason",
    required: true,
  },
  {
    label: "Tanggal Mulai",
    type: "date",
    key: "startDate",
    required: true,
  },
  {
    label: "Tanggal Selesai Cuti",
    type: "date",
    key: "endDate",
    required: true,
  },
];
