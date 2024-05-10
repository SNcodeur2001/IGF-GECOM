import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur-service';

@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [CommonModule,
            RouterLink
  ],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.scss'
})
export class FournisseurComponent {

  fournisseurs: any[] = [];
  showDeletePopup: boolean = false;
  fournisseurToDeleteId: number | null = null;








  constructor(private fournisseurService: FournisseurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFournisseur();
  }

  getFournisseur(): void {
    this.fournisseurService.getFournisseur().subscribe(
      (response) => {
        this.fournisseurs = response;
      },
      (error) => {
        console.error('Error fetching fournisseurs:', error);
      }
    );
  }

  deleteFournisseur(id: number): void {
    // if (confirm('Are you sure you want to delete this Founisseur?')) {
    //   this.fournisseurService.deleteFournisseur(id).subscribe(
    //     () => {
    //       this.fournisseurs = this.fournisseurs.filter(fournisseur => fournisseur.id !== id);
    //     },
    //     (error) => {
    //       console.error('Error deleting Fournisseur:', error);
    //     }
    //   );

    this.fournisseurToDeleteId = id;
    this.showDeletePopup = true;
    // }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-fournisseur', id], { relativeTo: this.route });
  }


  closeDeletePopup(): void {
    this.showDeletePopup = false;
  }

  confirmDelete(): void {
    if (this.fournisseurToDeleteId) {
      this.fournisseurService.deleteFournisseur(this.fournisseurToDeleteId).subscribe(
        () => {
          this.fournisseurs = this.fournisseurs.filter(fournisseur => fournisseur.id !== this.fournisseurToDeleteId);
          this.closeDeletePopup();
        },
        (error) => {
          console.error('Error deleting fournisseur:', error);
          this.closeDeletePopup();
        }
      );
    }
  }

  cancelDelete(): void {
    this.closeDeletePopup();
  }
}
