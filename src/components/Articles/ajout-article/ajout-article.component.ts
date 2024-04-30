import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article/article-service';
import { DepotService } from 'src/app/services/depot/depot-service';
import { FamilleService } from 'src/app/services/famille/famille-service';
import { FournisseurService } from 'src/app/services/fournisseur/fournisseur-service';

@Component({
  selector: 'app-ajout-article',
  standalone: true,
  imports: [
            FormsModule,
            CommonModule
  ],
  templateUrl: './ajout-article.component.html',
  styleUrl: './ajout-article.component.scss'
})
export class AjoutArticleComponent implements OnInit {
  familles: any[] = []; // Déclarez la propriété familles
  selectedFamille: any; // Déclaration de la propriété selectedFamille
  depots: any[] = [];
  selectedDepot: any; // Déclaration de la propriété selectedFamille
  fournisseurs: any[] = []; // Déclarez la propriété fournisseur
  selectedFournisseur: any; // Déclaration de la propriété selectedFournisseur



  articleData = {
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




  constructor(private articleservice: ArticleService, private router: Router, private route: ActivatedRoute,
    private familleService:FamilleService,
    private depotService:DepotService,
    private fournisseurService:FournisseurService
) { }


ngOnInit(): void {
  this.getFamilles();
  this.getDepots();
  this.getFournisseurs();

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

onSubmit(): void {
  this.articleservice.createArticle(this.articleData)
    .subscribe(
      response => {
        console.log('Article créée avec succès :', response);
        alert("Article inséré avec succès")
        // Réinitialiser les données du formulaire après la création réussie
        this.resetForm();
      },
      error => {
        console.error('Erreur lors de la création de l\'Article :', error);
      }
    );
}

resetForm(): void {
 this. articleData = {
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
}

}
