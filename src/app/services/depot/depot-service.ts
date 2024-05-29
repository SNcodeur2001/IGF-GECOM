import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DepotService {
  private apiUrl: string = 'http://192.168.2.5:8000/api/depot';


  constructor(private http: HttpClient) {}

  getDepot(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  deleteDepot(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateDepot(depotId: number, depot: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${depotId}`, depot);
  }

  createDepot(data: any) {
    return this.http.post('http://192.168.2.33:8000/api/depot/create', data);
  }
}
