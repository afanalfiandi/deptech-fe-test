import { OnLeaveDTO } from "../../pages/on-leave/dtos/on-leave.dto";
import { employee } from "./employee.dummy";

export const leave: OnLeaveDTO[] = employee.map((emp, index) => ({
  id: index + 1,
  employeeID: emp.id,
  employee: emp.firstName + " " + emp.lastName,
  reason: "Cuti tahunan",
  startDate: "2025-05-01",
  endDate: "2025-05-03",
}));
