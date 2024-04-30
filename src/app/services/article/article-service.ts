import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://192.168.2.5:8000/api/article';

  constructor(private http: HttpClient) { }

  createArticle(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, data);
  }

  getArticle(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateArticle(depotId: number, depot: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${depotId}`, depot);
  }

}
