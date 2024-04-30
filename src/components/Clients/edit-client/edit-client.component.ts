import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/clients/client-service';

@Component({
  selector: 'app-edit-client',
  standalone: true,
  imports: [
            RouterLink,
            HttpClientModule,
            FormsModule,
            CommonModule
  ],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss'
})
export class EditClientComponent {
  clientId: number=0;
  client: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router,
    private clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const clientId = params['id'];
      this.clientId = clientId; // Stocke l'ID du client
      this.getClientDetails(clientId);
    });
  }

  getClientDetails(id: number): void {
    this.http.get<any>('http://192.168.2.5:8000/api/client/find/' + id).subscribe(
      (response) => {
        this.client = response;
      },
      (error) => {
        console.error('Error fetching client details:', error);
      }
    );
  }



  updateClient(): void {
    this.clientService.updateClient(this.clientId, this.client).subscribe(
      () => {
        // Redirection vers une autre page après la mise à jour réussie
        console.log('client Inséré avec succès ');
        alert("client modifié avec succès")
        this.router.navigate(['/clients']);

      },
      (error) => {
        // Gestion des erreurs
        console.error('Error updating famille:', error);
      }
    );
  }

}
