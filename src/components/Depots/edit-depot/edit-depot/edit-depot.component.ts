import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepotService } from 'src/app/services/depot/depot-service';

@Component({
  selector: 'app-edit-depot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-depot.component.html',
  styleUrl: './edit-depot.component.scss'
})
export class EditDepotComponent {
  depotId: number=0;
  depot = {
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
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private depotService:DepotService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const depotId = params['id'];
      this.depotId = depotId; // Stocke l'ID du client
      this.getdepotDetails(depotId);
    });
  }

  getdepotDetails(id: number): void {
    this.http.get<any>('http://192.168.2.5:8000/api/depot/find/' + id).subscribe(
      (response) => {
        this.depot = response;
      },
      (error) => {
        console.error('Error fetching depot details:', error);
      }
    );
  }

  updateDepot(): void {
    this.depotService.updateDepot(this.depotId, this.depot).subscribe(
      () => {
        // Redirection vers une autre page après la mise à jour réussie
        console.log('depot Inséré avec succès ');
        alert("depot modifié avec succès")
        this.router.navigate(['/depots']);

      },
      (error) => {
        // Gestion des erreurs
        console.error('Error updating famille:', error);
      }
    );
  }
}
