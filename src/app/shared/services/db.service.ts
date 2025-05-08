import { Injectable } from "@angular/core";
import { admin } from "../dummies/admin.dummy";
import { employee } from "../dummies/employee.dummy";
import { OnLeaveDTO } from "../../pages/on-leave/dtos/on-leave.dto";
import { COLLECTION } from "../enums/collection.enum";
import { EmployeeDTO } from "../../pages/employee/dtos/employee.dto";

@Injectable({
  providedIn: "root",
})
export class DbService {
  private db: { [key: string]: any[] } = {};

  constructor() {
    const employeeData = [...employee];
    const leaveData: OnLeaveDTO[] =
      this.generateLeaveFromEmployee(employeeData);

    this.db[COLLECTION.admin] = [...admin];
    this.db[COLLECTION.employee] = employeeData;
    this.db[COLLECTION.leave] = leaveData;
  }

  getAll(collectionName: string): any[] {
    return [...(this.db[collectionName] || [])];
  }

  createDb() {
    return { ...this.db };
  }

  private generateLeaveFromEmployee(employees: EmployeeDTO[]): OnLeaveDTO[] {
    return employees.map((emp, index) => {
      const start = new Date(2025, 4, 1 + index);
      const end = new Date(start);
      end.setDate(start.getDate());

      return {
        id: index + 1,
        employeeID: emp.id,
        employee: `${emp.firstName} ${emp.lastName}`,
        reason: "Cuti tahunan",
        startDate: start.toISOString().split("T")[0],
        endDate: end.toISOString().split("T")[0],
      };
    });
  }
}
