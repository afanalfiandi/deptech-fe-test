import { Injectable } from "@angular/core";
import { employeeData } from "../dummies/employee.dummy";
import { admin } from "../dummies/admin.dummy";

@Injectable({
  providedIn: "root",
})
export class DbService {
  private db: { [key: string]: any[] } = {};

  constructor() {
    this.db["admin"] = [...admin];
    this.db["employee"] = [...employeeData];
  }

  getAll(collectionName: string): any[] {
    return [...(this.db[collectionName] || [])];
  }

  createDb() {
    return { admin: admin };
  }
}
