import { Injectable } from "@angular/core";
import { employeeData } from "../dummies/employee.dummy";
import { admin } from "../dummies/admin.dummy";
import { COLLECTION } from "../enums/collection.enum";

@Injectable({
  providedIn: "root",
})
export class DbService {
  private db: { [key: string]: any[] } = {};

  constructor() {
    this.db[COLLECTION.admin] = [...admin];
    this.db[COLLECTION.employee] = [...employeeData];
  }

  getAll(collectionName: string): any[] {
    return [...(this.db[collectionName] || [])];
  }

  createDb() {
    return { admin: admin };
  }
}
