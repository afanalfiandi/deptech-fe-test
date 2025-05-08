import { Observable } from "rxjs";

export interface ServiceDTO {
  addData(data: any): Observable<any>;
  editData(data: any): Observable<any>;
}
