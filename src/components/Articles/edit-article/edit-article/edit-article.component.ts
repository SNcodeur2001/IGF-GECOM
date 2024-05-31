import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article-service';
import { DepotService } from 'src/app/services/depot/depot-service';
import { FamilleService } from 'src/app/services/famille/famille-service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur-service';
@Component({
  selector: 'app-edit-article',
  standalone: true,
  imports: [
            FormsModule,
            CommonModule
  ],
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.scss'
})
export class EditArticleComponent {
  articleId: number=0;
  editable = false;

  article = {
    reference: '',
    designation: '',
    famille_id: '',
    suivi_stock: '',
    prix_achat: '',
    dernier_prix_achat: '',
    unite_achat_vente: '',
    depot_id: '',
    id_fournisseur: ''
  };

  familles: any[] = []; // Déclarez la propriété familles
  selectedFamille: any; // Déclaration de la propriété selectedFamille
  depots: any[] = [];
  selectedDepot: any; // Déclaration de la propriété selectedFamille
  fournisseurs: any[] = []; // Déclarez la propriété fournisseur
  selectedFournisseur: any;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private familleService:FamilleService,
                private depotService:DepotService,
                private fournisseurService:FournisseurService,
                private articleService:ArticleService
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.articleId = articleId; // Stocke l'ID du client
      this.getArticleDetails(articleId);
      this.getFamilles();
      this.getDepots();
      this.getFournisseurs();

    });
  }

  getArticleDetails(id: number): void {
    this.http.get<any>('http://192.168.2.27:8000/api/article/find/' + id).subscribe(
      (response) => {
        this.article = response;
      },
      (error) => {
        console.error('Error fetching article details:', error);
      }
    );
  }

  updateArticle(): void {
    this.articleService.updateArticle(this.articleId, this.article).subscribe(
      () => {
        // Redirection vers une autre page après la mise à jour réussie
        console.log('Article Modifié avec succès ');
        this.router.navigate(['/articles']);

      },
      (error) => {
        // Gestion des erreurs
        console.error('Error updating Articles:', error);
      }
    );
  }


getFamilles(): void {
  this.familleService.getFamille().subscribe(
    (response) => {
      this.familles = response; // Stockez les familles récupérées dans la variable familles
    },
    (error) => {
      console.error('Error fetching familles:', error);
    }
  );
}

getDepots(): void {
  this.depotService.getDepot().subscribe(
    (response) => {
      this.depots = response; // Stockez les depots récupérées dans la variable depots
    },
    (error) => {
      console.error('Error fetching depots:', error);
    }
  );
}

getFournisseurs(): void {
  this.fournisseurService.getFournisseur().subscribe(
    (response) => {
      this.fournisseurs = response; // Stockez les fournisseurs récupérées dans la variable fournisseurs
    },
    (error) => {
      console.error('Error fetching fournisseurs:', error);
    }
  );

}

  toggleEdit():void{
    this.editable = !this.editable;
  }


  @ViewChild('selectPicker') selectPicker!: ElementRef;


  // ngAfterViewInit(): void {
  //   $(this.selectPicker.nativeElement).selectpicker();
  // }
}
