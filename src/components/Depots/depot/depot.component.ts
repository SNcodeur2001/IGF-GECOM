import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { DepotService } from 'src/app/services/depot/depot-service';

@Component({
  selector: 'app-depot',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './depot.component.html',
  styleUrl: './depot.component.scss'
})
export class DepotComponent {


  depots: any[] = [];

  constructor(private depotservice: DepotService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepot();
  }

  getDepot(): void {
    this.depotservice.getDepot().subscribe(
      (response) => {
        this.depots = response;
      },
      (error) => {
        console.error('Error fetching depot:', error);
      }
    );
  }

  deleteDepot(id: number): void {
    if (confirm('Are you sure you want to delete this depot?')) {
      this.depotservice.deleteDepot(id).subscribe(
        () => {
          this.depots = this.depots.filter(depots => depots.id !== id);
        },
        (error) => {
          console.error('Error deleting depot:', error);
        }
      );
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-depot', id], { relativeTo: this.route });
  }
}
