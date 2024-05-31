import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FamilleService } from 'src/app/services/famille/famille-service';

@Component({
  selector: 'app-edit-famille',
  standalone: true,
  imports: [
          RouterLink,
          HttpClientModule,
          FormsModule,
          CommonModule
  ],
  templateUrl: './edit-famille.component.html',
  styleUrl: './edit-famille.component.scss'
})
export class EditFamilleComponent {
  famille: any = {};
  familleId: number = 0; // Initialisation avec une valeur par défaut
  editable = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
    private familleService:FamilleService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const familleId = params['id'];
      this.familleId = familleId; // Stocke l'ID du client
      this.getFamilleDetails(familleId);

    });
    this.getId();
  }

  getFamilleDetails(id: number): void {
    this.http.get<any>('http://192.168.2.27:8000/api/famille/find/' + id).subscribe(
      (response) => {
        this.famille = response;
      },
      (error) => {
        console.error('Error fetching famille details:', error);
      }
    );
  }

updateFamille(): void {
    this.familleService.updateFamille(this.familleId, this.famille).subscribe(
      () => {
        // Redirection vers une autre page après la mise à jour réussie
        console.log('Famille updated successfully');
        alert("Famille updated successfully")
        this.router.navigate(['/familles']);

      },
      (error) => {
        // Gestion des erreurs
        console.error('Error updating famille:', error);
      }
    );
  }

  toggleEdit(): void {
    this.editable = !this.editable;
  }

  getId(){
    console.log(this.familleId);

  }

  goToEditListArticle(id: number): void {
    this.router.navigate(['/list-article-par-famille', id], { relativeTo: this.route });
  }

}
