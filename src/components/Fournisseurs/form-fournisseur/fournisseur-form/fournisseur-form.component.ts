import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fournisseur-form',
  standalone: true,
  imports: [],
  templateUrl: './fournisseur-form.component.html',
  styleUrl: './fournisseur-form.component.scss'
})
export class FournisseurFormComponent {

  formGroup:FormGroup;





  constructor(
    private dialogRef: MatDialogRef<FournisseurFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', Validators.required],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      // Envoyer les données à votre service pour l'ajout de la voiture
      // Ici, je ferme simplement le popup
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
