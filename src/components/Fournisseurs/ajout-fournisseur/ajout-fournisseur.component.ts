import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur-service';

@Component({
  selector: 'app-ajout-fournisseur',
  standalone: true,
  imports: [RouterLink,
             FormsModule,
            HttpClientModule,
            CommonModule
          ],
  templateUrl: './ajout-fournisseur.component.html',
  styleUrl: './ajout-fournisseur.component.scss'
})
export class AjoutFournisseurComponent {

  fournisseurData = {
    compte_tiers: '',
    intitule: '',
    adresse: '',
    complement: '',
    code_postal: '',
    region: '',
    ville: '',
    pays: '',
    telephone: '',
    email: '',
    ninea: ''
  };


  constructor(private http: HttpClient,
    private fournisseurService: FournisseurService,
    private router: Router) { }

ngOnInit(): void {
}

onSubmit() {
this.fournisseurService.createFournisseur(this.fournisseurData).subscribe(
(response) => {
console.log('Fournisseur créé avec succès', response);
alert("Fournisseur créé avec succès");
this.resetForm();

// this.router.navigate(['/fournisseurs']);
},
error => {
  if (error.status === 400) {
    // Le code existe déjà dans la base de données
    alert("Le compte tiers existe déjà dans la base de données");
  } else {
    // Une autre erreur s'est produite
    console.error('Erreur lors de la création de la famille :', error);
  }
}
);
}

onSubmitQuit() {
  this.fournisseurService.createFournisseur(this.fournisseurData).subscribe(
  (response) => {
  console.log('Fournisseur créé avec succès', response);
  alert("Fournisseur créé avec succès");

  this.router.navigate(['/fournisseur']);
  },
  error => {
    if (error.status === 400) {
      // Le code existe déjà dans la base de données
      alert("Un champ existe deja existe déjà dans la base de données");
    } else {
      // Une autre erreur s'est produite
      console.error('Erreur lors de la création de la famille :', error);
    }
  }
  );
  }

resetForm(): void {
  this.fournisseurData = {
    compte_tiers: '',
    intitule: '',
    adresse: '',
    complement: '',
    code_postal: '',
    region: '',
    ville: '',
    pays: '',
    telephone: '',
    email: '',
    ninea: ''
  };

}


}
