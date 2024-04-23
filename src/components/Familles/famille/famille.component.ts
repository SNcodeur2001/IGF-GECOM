import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FamilleService } from 'src/app/services/famille-service';

@Component({
  selector: 'app-famille',
  standalone: true,
  imports: [RouterLink,
            CommonModule
  ],
  templateUrl: './famille.component.html',
  styleUrl: './famille.component.scss'
})
export class FamilleComponent implements OnInit{
  familles: any[] = [];
  constructor(private familleService:FamilleService){}

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
    if (confirm('Are you sure you want to delete this famille?')) {
      this.familleService.deleteFamille(id).subscribe(
        () => {
          this.familles = this.familles.filter(familles => familles.id !== id);
        },
        (error) => {
          console.error('Error deleting famille:', error);
        }
      );
    }
  }
}
