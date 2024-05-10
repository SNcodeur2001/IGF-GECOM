import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ClientService } from '../../../app/services/clients/client-service';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [
            CommonModule,
            RouterLink
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  clients: any[] = [];
  showDeletePopup: boolean = false;
  clientToDeleteId: number | null = null;






  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    this.clientService.getClient().subscribe(
      (response) => {
        this.clients = response;
      },
      (error) => {
        console.error('Error fetching clients:', error);
      }
    );
  }

  deleteClient(id: number): void {
    // if (confirm('Are you sure you want to delete this Founisseur?')) {
    //   this.clientService.deleteClient(id).subscribe(
    //     () => {
    //       this.clients = this.clients.filter(client => client.id !== id);
    //     },
    //     (error) => {
    //       console.error('Error deleting client:', error);
    //     }
    //   );
    // }
    this.clientToDeleteId = id;
    this.showDeletePopup = true;
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-client', id], { relativeTo: this.route });
  }


  closeDeletePopup(): void {
    this.showDeletePopup = false;
  }

  confirmDelete(): void {
    if (this.clientToDeleteId) {
      this.clientService.deleteClient(this.clientToDeleteId).subscribe(
        () => {
          this.clients = this.clients.filter(client => client.id !== this.clientToDeleteId);
          this.closeDeletePopup();
        },
        (error) => {
          console.error('Error deleting client:', error);
          this.closeDeletePopup();
        }
      );
    }
  }

  cancelDelete(): void {
    this.closeDeletePopup();
  }
}
