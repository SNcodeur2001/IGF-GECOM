import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fournisseur } from "src/app/models/Fournisseur/fournisseur";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private apiUrl: string = 'http://192.168.1.33:8000/api/fournisseur';

  fournisseur: Fournisseur = {
    compte_tiers: '',
    intitule: '',
    adresse: '',
    complement: '',
    region: '',
    ville: '',
    pays: '',
    telephone: '',
    email: '',
    code_postal: '',
    ninea: ''
  };

  constructor(private http: HttpClient) {}

  getFournisseur(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read`);
  }

  deleteFournisseur(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  updateFournisseur(fournisseurId: number, fournisseur: any): Observable<any> {
    return this.http.put(`http://192.168.1.33:8000/api/fournisseur/update/${fournisseurId}`, fournisseur);
  }

  createFournisseur(data: any) {
    return this.http.post('http://192.168.1.33:8000/api/fournisseur/create', data);
  }
}
