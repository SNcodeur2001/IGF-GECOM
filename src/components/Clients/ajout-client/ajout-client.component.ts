import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientService } from 'src/app/services/clients/client-service';

@Component({
  selector: 'app-ajout-client',
  standalone: true,
  imports: [
            RouterLink,
            FormsModule,
            CommonModule
  ],
  templateUrl: './ajout-client.component.html',
  styleUrl: './ajout-client.component.scss'
})
export class AjoutClientComponent {
  clientData = {
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
    private clientService: ClientService,
    private router: Router) { }

ngOnInit(): void {
}

onSubmit() {
this.clientService.createClient(this.clientData).subscribe(
(response) => {
console.log('client créé avec succès', response);
alert("client créé avec succès");
this.resetForm();

// this.router.navigate(['/clients']);
},
(error) => {
console.error('Erreur lors de la création du client', error);
// Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
}
);
}

resetForm(): void {
  this.clientData = {
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
