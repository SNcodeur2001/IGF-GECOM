import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur-service';

@Component({
  selector: 'app-edit-fournisseur',
  standalone: true,
  imports: [
            CommonModule,
            HttpClientModule,
            FormsModule
  ],
  templateUrl: './edit-fournisseur.component.html',
  styleUrl: './edit-fournisseur.component.scss'
})
export class EditFournisseurComponent {
  fournisseurId: number=0;
  fournisseur: any = {};
  editable=false;


  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const fournisseurId = params['id'];
      this.fournisseurId = fournisseurId; // Stocke l'ID du fournisseur
      this.getFournisseurDetails(fournisseurId);
    });
  }

  getFournisseurDetails(id: number): void {
    this.http.get<any>('http://192.168.2.27:8000/api/fournisseur/find/' + id).subscribe(
      (response) => {
        this.fournisseur = response;
      },
      (error) => {
        console.error('Error fetching fournisseur details:', error);
      }
    );
  }

  updateFournisseur(): void {
    this.fournisseurService.updateFournisseur(this.fournisseurId, this.fournisseur).subscribe(
      () => {
        // Redirection vers une autre page après la mise à jour réussie
        console.log('Fournisseur Inséré avec succès ');
        alert("Fournisseur modifié avec succès")
        this.router.navigate(['/fournisseur']);

      },
      (error) => {
        // Gestion des erreurs
        console.error('Error updating famille:', error);
      }
    );
  }

  toggleEdit():void{
    this.editable = !this.editable
  }

}
