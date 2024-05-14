import { Component } from '@angular/core';
import { FamilleService } from '../../../app/services/famille/famille-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-famille',
  standalone: true,
  imports: [FormsModule,
            CommonModule
  ],
  templateUrl: './ajout-famille.component.html',
  styleUrl: './ajout-famille.component.scss'
})
export class AjoutFamilleComponent {
  familleData = {
    code: '',
    intitule: '',
    unite_de_vente: '',
    suivi_stock: ''
  };

  constructor(private familleService:FamilleService,
              private router: Router,

  ){}


  onSubmit(): void {
    this.familleService.createFamille(this.familleData)
      .subscribe(
        response => {
          console.log('Famille créée avec succès :', response);
          // Réinitialiser les données du formulaire après la création réussie
          // alert("Famille créée avec succès");
          this.resetForm();
        },
        error => {
          if (error.status === 400) {
            // Le code existe déjà dans la base de données
            // alert("Le code famille existe déjà dans la base de données");
          } else {
            // Une autre erreur s'est produite
            console.error('Erreur lors de la création de la famille :', error);
          }
        }
      );
  }

  onSubmitQuit(): void {
    this.familleService.createFamille(this.familleData)
      .subscribe(
        response => {
          console.log('Famille créée avec succès :', response);
          // Réinitialiser les données du formulaire après la création réussie
          // alert("Famille créée avec succès");
          this.router.navigate(['/familles']);
        },
        error => {
          if (error.status === 400) {
            // Le code existe déjà dans la base de données
            // alert("Le code famille existe déjà dans la base de données");
          } else {
            // Une autre erreur s'est produite
            console.error('Erreur lors de la création de la famille :', error);
          }
        }
      );
  }


  resetForm(): void {
    this.familleData = {
      code: '',
      intitule: '',
      unite_de_vente: '',
      suivi_stock: ''
    };
  }
}
