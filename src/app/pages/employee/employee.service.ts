import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeDTO } from "./dtos/employee.dto";
import { API } from "../../shared/consts/api.const";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getData(): Observable<EmployeeDTO[]> {
    return this.http.get<EmployeeDTO[]>(API.employeeApiUrl);
  }

  addData(item: EmployeeDTO): Observable<EmployeeDTO> {
    return this.http.post<EmployeeDTO>(API.employeeApiUrl, item);
  }

  updateData(item: EmployeeDTO): Observable<any> {
    return this.http.put(API.employeeApiUrl, item);
  }

  deleteData(id: number): Observable<any> {
    const url = `${API.employeeApiUrl}/${id}`;
    return this.http.delete(url);
  }
}
