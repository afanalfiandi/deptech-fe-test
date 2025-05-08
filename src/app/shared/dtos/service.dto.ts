import { Observable } from "rxjs";

// crud-service.interface.ts
export interface ServiceDTO {
  addData(data: any): Observable<any>;
  editData(data: any): Observable<any>;
}
