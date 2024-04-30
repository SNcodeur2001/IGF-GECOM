import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article-service';
import { FamilleService } from 'src/app/services/famille/famille-service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
            CommonModule,
            RouterLink,
            FormsModule
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit{
  articles: any[] = [];
  familles: any[] = []; // Déclarez la propriété familles

  selectedFamille: string = ''; // Ajoutez une propriété pour stocker la famille sélectionnée

  constructor(private articleservice: ArticleService, private router: Router, private route: ActivatedRoute,
              private familleService:FamilleService
  ) { }

  ngOnInit(): void {
    this.getArticle();
    this.loadFamilles(); // Chargez les familles au démarrage du composant
  }

  getArticle(): void {
    this.articleservice.getArticle().subscribe(
      (response) => {
        this.articles = response;
      },
      (error) => {
        console.error('Error fetching article:', error);
      }
    );
  }

  deleteArticle(id: number): void {
    if (confirm('Are you sure you want to delete this article?')) {
      this.articleservice.deleteArticle(id).subscribe(
        () => {
          this.articles = this.articles.filter(articles => articles.id !== id);
        },
        (error) => {
          console.error('Error deleting article:', error);
        }
      );
    }
  }

  goToEdit(id: number): void {
    this.router.navigate(['/edit-article', id], { relativeTo: this.route });
  }

  loadFamilles() {
    this.familleService.getFamille().subscribe(
      (response) => {
        this.familles = response; // Stockez les familles récupérées dans la propriété familles
      },
      (error) => {
        console.error('Error fetching families:', error);
      }
    );
  }
}
