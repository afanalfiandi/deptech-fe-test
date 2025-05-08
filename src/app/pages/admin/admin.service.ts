import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AdminDTO } from "./dtos/admin.dto";
import { API } from "../../shared/consts/api.const";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  getData(): Observable<AdminDTO[]> {
    return this.http.get<AdminDTO[]>(API.adminApiUrl);
  }

  addData(item: AdminDTO): Observable<AdminDTO> {
    return this.http.post<AdminDTO>(API.adminApiUrl, item);
  }

  updateData(item: AdminDTO): Observable<any> {
    return this.http.put(API.adminApiUrl, item);
  }

  deleteData(id: number): Observable<any> {
    const url = `${API.adminApiUrl}/${id}`;
    return this.http.delete(url);
  }

  getDataByToken(token: string): Observable<AdminDTO | undefined> {
    return this.getData().pipe(
      map((admins) => admins.find((admin) => admin.token === token))
    );
  }
}
