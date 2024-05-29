import { Component } from '@angular/core';
import { FamilleService } from '../../../app/services/famille/famille-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { FournisseurFormComponent } from '../../Fournisseurs/form-fournisseur/fournisseur-form/fournisseur-form.component';




@Component({
  selector: 'app-ajout-famille',
  standalone: true,
  imports: [FormsModule,
            CommonModule,
            NgbAlertModule,
           MatTabsModule,
           MatInputModule,
           MatButtonModule,
           MatFormFieldModule,
           ReactiveFormsModule

  ],
  templateUrl: './ajout-famille.component.html',
  styleUrl: './ajout-famille.component.scss'
})
export class AjoutFamilleComponent {


  familleData = {
    type:'details',
    code: '',
    intitule: '',
    unite_de_vente: null,
    suivi_stock: null
  };
  showForm  =false;

  openForm(){
    const dialogRef = this.dialog.open(FournisseurFormComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      // Vous pouvez effectuer des actions après la fermeture du popup si nécessaire
    });
  }

  get selectedType() {
    return this.familleData.type;
  }

  set selectedType(value: string) {
    this.familleData.type = value;
  }

  familleInseree = false;
  familleExistant= false;
  formInvalid = false;


  constructor(private familleService:FamilleService,
              private router: Router,
              public dialog: MatDialog

  ){}


  validateForm(): boolean {
    if (!this.familleData.code || !this.familleData.intitule) {
      this.formInvalid = true;
      return false;
    }
    this.formInvalid = false;
    return true;
  }

  onSubmit(): void {
    if (this.validateForm()) {
      this.familleService.createFamille(this.familleData).subscribe(
        response => {
          console.log('Famille créée avec succès :', response);
          this.familleInseree = true;
          this.resetForm();
        },
        error => {
          if (error.status === 400) {
            this.familleExistant = true;
          } else {
            console.error('Erreur lors de la création de la famille :', error);
          }
        }
      );
    }
  }

  onSubmitQuit(): void {
    if (this.validateForm()) {
      this.familleService.createFamille(this.familleData).subscribe(
        response => {
          console.log('Famille créée avec succès :', response);
          this.router.navigate(['/familles']);
        },
        error => {
          if (error.status === 400) {
            this.familleExistant = true;
          } else {
            console.error('Erreur lors de la création de la famille :', error);
          }
        }
      );
    }
  }

  closePopupRed() {
    this.familleExistant = false;
  }

  closePopupGreen() {
    this.familleInseree = false;
  }

  isFieldDisabled(): boolean {
    return this.selectedType === 'total' || this.selectedType === 'centralisateur';
  }

  resetForm(): void {
    this.familleData = {
      type:'',
      code: '',
      intitule: '',
      unite_de_vente: null,
      suivi_stock: null
    };
  }
}
