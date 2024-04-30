import { HttpClient, HttpClientModule} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FamilleService {
  private apiUrl = 'http://192.168.2.5:8000/api/famille';


  constructor(private http: HttpClient, private router:Router) { }

  createFamille(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }

  getFamille(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  deleteFamille(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }


  updateFamille(familleId: number, familleData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${familleId}`, familleData);
  }
}
