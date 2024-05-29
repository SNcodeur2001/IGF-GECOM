import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://192.168.2.5:8000/api/client';

  constructor(private http: HttpClient) { }

  createClient(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }

  getClient(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateClient(clientId: number, client: any): Observable<any> {
    return this.http.put(`http://192.168.2.33:8000/api/client/update/${clientId}`, client);
  }
}
