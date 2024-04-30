import { Component } from '@angular/core';
import { FamilleService } from '../../../app/services/famille/famille-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private familleService:FamilleService){}


  onSubmit(): void {
    this.familleService.createFamille(this.familleData)
      .subscribe(
        response => {
          console.log('Famille créée avec succès :', response);
          // Réinitialiser les données du formulaire après la création réussie
          alert("Famille créée avec succès");
          this.resetForm();
        },
        error => {
          console.error('Erreur lors de la création de la famille :', error);
        }
      );
      // console.log("Je suis là");

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
