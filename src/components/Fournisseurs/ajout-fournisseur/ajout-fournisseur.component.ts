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
(error) => {
console.error('Erreur lors de la création du fournisseur', error);
// Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
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
