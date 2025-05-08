import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EmployeeDTO } from "./dtos/employee.dto";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private apiUrl = "api/employee";

  constructor(private http: HttpClient) {}

  getData(): Observable<EmployeeDTO[]> {
    return this.http.get<EmployeeDTO[]>(this.apiUrl);
  }

  addData(item: EmployeeDTO): Observable<EmployeeDTO> {
    return this.http.post<EmployeeDTO>(this.apiUrl, item);
  }

  updateData(item: EmployeeDTO): Observable<any> {
    return this.http.put(this.apiUrl, item);
  }

  deleteData(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
