import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FamilleService } from 'src/app/services/famille/famille-service';

@Component({
  selector: 'app-famille',
  standalone: true,
  imports: [RouterLink,
            CommonModule,
            FormsModule
  ],
  templateUrl: './famille.component.html',
  styleUrl: './famille.component.scss'
})
export class FamilleComponent implements OnInit{
  rechercheFamille: string = '';
  familles: any[] = [];
  showDeletePopup: boolean = false;
  familleToDeleteId: number | null = null;






  constructor(private familleService: FamilleService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getFamille();
  }

  getFamille(): void {
    this.familleService.getFamille().subscribe(
      (response) => {
        this.familles = response;
      },
      (error) => {
        console.error('Error fetching famille:', error);
      }
    );
  }

  deleteFamille(id: number): void {
    // if (confirm('Are you sure you want to delete this famille?')) {
    //   this.familleService.deleteFamille(id).subscribe(
    //     () => {
    //       this.familles = this.familles.filter(familles => familles.id !== id);
    //     },
    //     (error) => {
    //       console.error('Error deleting famille:', error);
    //     }
    //   );
    // }


    this.familleToDeleteId = id;
  this.showDeletePopup = true;
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-famille', id], { relativeTo: this.route });
  }

  // goToEditListArticle(id: number): void {
  //   this.router.navigate(['/list-article-par-famille', id], { relativeTo: this.route });
  // }


  closeDeletePopup(): void {
    this.showDeletePopup = false;
  }

  confirmDelete(): void {
    if (this.familleToDeleteId) {
      this.familleService.deleteFamille(this.familleToDeleteId).subscribe(
        () => {
          this.familles = this.familles.filter(famille => famille.id !== this.familleToDeleteId);
          this.closeDeletePopup();
        },
        (error) => {
          console.error('Error deleting famille:', error);
          this.closeDeletePopup();
        }
      );
    }
  }

  cancelDelete(): void {
    this.closeDeletePopup();
  }

  getArticlesByFamille(id:number): void {
    this.familleService.getArticlesByFamille(id).subscribe(
      (response) => {
        this.familles = response;
      },
      (error) => {
        console.error('Error fetching famille:', error);
      }
    );
  }

  filtrerFamilles(): any[] {
    if (!this.rechercheFamille.trim()) {
      return this.familles; // Si la recherche est vide, retourne toutes les familles
    }
    return this.familles.filter(famille =>
      famille.code.toLowerCase().includes(this.rechercheFamille.toLowerCase()) ||
      famille.intitule.toLowerCase().includes(this.rechercheFamille.toLowerCase()) ||
      famille.unite_de_vente.toLowerCase().includes(this.rechercheFamille.toLowerCase()) ||
      famille.suivi_stock.toLowerCase().includes(this.rechercheFamille.toLowerCase())
    );
  }
}
