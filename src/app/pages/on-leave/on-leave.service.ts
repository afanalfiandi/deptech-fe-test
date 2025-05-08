import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, switchMap, tap } from "rxjs";
import { OnLeaveDTO } from "./dtos/on-leave.dto";
import { API } from "../../shared/consts/api.const";

@Injectable({
  providedIn: "root",
})
export class OnLeaveService {
  constructor(private http: HttpClient) {}

  getData(): Observable<OnLeaveDTO[]> {
    return this.http.get<OnLeaveDTO[]>(API.leaveApiUrl);
  }

  addData(item: OnLeaveDTO): Observable<OnLeaveDTO> {
    return this.getData().pipe(
      tap((existingLeaves) => {
        const overlappingLeave = existingLeaves.find(
          (leave) =>
            leave.employee === item.employee &&
            leave.startDate.slice(0, 7) === item.startDate.slice(0, 7)
        );

        if (overlappingLeave) {
          throw new Error(
            "Pegawai hanya dapat mengambil 1 hari cuti per bulan."
          );
        }

        const totalLeaveInYear = existingLeaves
          .filter(
            (leave) =>
              leave.employeeID === item.employeeID &&
              leave.startDate.slice(0, 4) === item.startDate.slice(0, 4)
          )
          .reduce((total, leave) => total + this.calculateLeaveDays(leave), 0);

        if (totalLeaveInYear + this.calculateLeaveDays(item) > 12) {
          throw new Error(
            "Pegawai tidak dapat mengambil lebih dari 12 hari cuti per tahun."
          );
        }
      }),
      switchMap(() => this.http.post<OnLeaveDTO>(API.leaveApiUrl, item))
    );
  }

  updateData(item: OnLeaveDTO): Observable<any> {
    return this.http.put(`${API.leaveApiUrl}/${item.id}`, item);
  }

  deleteData(id: number): Observable<any> {
    const url = `${API.leaveApiUrl}/${id}`;
    return this.http.delete(url);
  }

  private calculateLeaveDays(leave: OnLeaveDTO): number {
    const start = new Date(leave.startDate);
    const end = new Date(leave.endDate);
    return (end.getTime() - start.getTime()) / (1000 * 3600 * 24) + 1;
  }
}
