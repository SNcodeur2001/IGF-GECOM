import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FamilleService } from 'src/app/services/famille/famille-service';

@Component({
  selector: 'app-get-article-by-famille',
  standalone: true,
  imports: [
            CommonModule
  ],
  templateUrl: './get-article-by-famille.component.html',
  styleUrl: './get-article-by-famille.component.scss'
})
export class GetArticleByFamilleComponent {
  articles: any[] = [];
  familleId: number = 0; // Initialisation avec une valeur par défaut

  constructor(private route: ActivatedRoute, private familleService: FamilleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const familleId = params['id'];
      this.familleId = familleId;
      this.getArticles()
    });
  }

  getArticles(): void {
    this.familleService.getArticlesByFamille(this.familleId).subscribe(
      (data: any[]) => {
        this.articles = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des articles', error);
      }
    );
  }


}
