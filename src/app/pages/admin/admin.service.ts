import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AdminDTO } from "./dtos/admin.dto";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private apiUrl = "api/admin";

  constructor(private http: HttpClient) {}

  getData(): Observable<AdminDTO[]> {
    return this.http.get<AdminDTO[]>(this.apiUrl);
  }

  addData(item: AdminDTO): Observable<AdminDTO> {
    return this.http.post<AdminDTO>(this.apiUrl, item);
  }

  updateData(item: AdminDTO): Observable<any> {
    return this.http.put(this.apiUrl, item);
  }

  deleteData(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  getDataByToken(token: string): Observable<AdminDTO | undefined> {
    return this.getData().pipe(
      map((admins) => admins.find((admin) => admin.token === token))
    );
  }
}
