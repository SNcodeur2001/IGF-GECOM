import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DepotService } from 'src/app/services/depot/depot-service';

@Component({
  selector: 'app-ajout-depot',
  standalone: true,
  imports: [
            CommonModule,
            FormsModule,
            RouterLink
  ],
  templateUrl: './ajout-depot.component.html',
  styleUrl: './ajout-depot.component.scss'
})
export class AjoutDepotComponent {
  depotData = {
    nom: '',
    responsable_depot: '',
    adresse: '',
    complement: '',
    code_postal: '',
    region: '',
    ville: '',
    pays: '',
    telephone: '',
    email:''
  };
  constructor(private depotService: DepotService) { }

  onSubmit(): void {
    this.depotService.createDepot(this.depotData)
      .subscribe(
        response => {
          console.log('depot créée avec succès :', response);
          alert("depot créée avec succès :")
          // Réinitialiser les données du formulaire après la création réussie
          this.resetForm();
        },
        error => {
          console.error('Erreur lors de la création du depot :', error);
        }
      );
  }

  resetForm(): void {
    this.depotData = {
      nom: '',
      responsable_depot: '',
      adresse: '',
      complement: '',
      code_postal: '',
      region: '',
      ville: '',
      pays: '',
      telephone: '',
      email:''
    };
  }
}
