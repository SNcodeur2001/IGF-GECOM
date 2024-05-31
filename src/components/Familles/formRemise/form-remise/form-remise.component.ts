import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-remise',
  standalone: true,
  imports: [],
  templateUrl: './form-remise.component.html',
  styleUrl: './form-remise.component.scss'
})
export class FormRemiseComponent {

    // Déclaration du groupe de formulaires pour gérer les contrôles du formulaire
    formGroup: FormGroup;

    // Constructeur pour injecter les dépendances nécessaires
    constructor(
      private dialogRef: MatDialogRef<FormRemiseComponent>, // Référence à la boîte de dialogue modale
      @Inject(MAT_DIALOG_DATA) public data: any, // Données injectées dans la boîte de dialogue
      private formBuilder: FormBuilder // Service pour créer des groupes de contrôles de formulaire réactif
    ) {
      // Initialisation du groupe de formulaires avec des champs et des validateurs
      this.formGroup = this.formBuilder.group({
        client: ['', Validators.required], // Champ 'client' avec validation requise
        remise: ['', Validators.required], // Champ 'remise' avec validation requise
      });
    }

    // Méthode pour gérer la soumission du formulaire
    onSubmit() {
      // Vérifie si le formulaire est valide
      if (this.formGroup.valid) {
        // Envoyer les données au service backend pour le traitement
        // Ici, on ferme simplement la boîte de dialogue
        this.dialogRef.close();
      }
    }

    // Méthode pour gérer l'annulation du formulaire
    onCancel() {
      // Ferme la boîte de dialogue sans soumettre
      this.dialogRef.close();
    }

}
