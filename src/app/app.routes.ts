import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { TestComponent } from '../components/test/test.component';
import { FamilleComponent } from '../components/Familles/famille/famille.component';
import { AjoutFamilleComponent } from '../components/Familles/ajout-famille/ajout-famille.component';
import { ArticleComponent } from '../components/Articles/article/article.component';
import { AjoutArticleComponent } from '../components/Articles/ajout-article/ajout-article.component';
import { FournisseurComponent } from '../components/Fournisseurs/fournisseur/fournisseur.component';
import { AjoutFournisseurComponent } from '../components/Fournisseurs/ajout-fournisseur/ajout-fournisseur.component';
import { AjoutClientComponent } from '../components/Clients/ajout-client/ajout-client.component';
import { ClientComponent } from '../components/Clients/client/client.component';
import { DepotComponent } from '../components/Depots/depot/depot.component';
import { AjoutDepotComponent } from '../components/Depots/ajout-depot/ajout-depot/ajout-depot.component';
import { EditFamilleComponent } from '../components/Familles/edit-famille/edit-famille.component';
import { EditFournisseurComponent } from '../components/Fournisseurs/edit-fournisseur/edit-fournisseur/edit-fournisseur.component';
import { EditClientComponent } from '../components/Clients/edit-client/edit-client.component';
import { EditDepotComponent } from '../components/Depots/edit-depot/edit-depot/edit-depot.component';
import { EditArticleComponent } from '../components/Articles/edit-article/edit-article/edit-article.component';
import { GetArticleByFamilleComponent } from '../components/Familles/get-article-by-famille/get-article-by-famille.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },

      {
        path: 'familles',
        component:FamilleComponent
      },
      {
        path: 'articles',
        component:ArticleComponent
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      },
      {
        path: 'ajout-famille',
        component:AjoutFamilleComponent
      },
      {
        path: 'edit-famille/:id',
        component:EditFamilleComponent
      },
      {
        path: 'ajout-article',
        component:AjoutArticleComponent
      },
      {
        path: 'edit-article/:id',
        component:EditArticleComponent
      },
      {
        path: 'fournisseur',
        component:FournisseurComponent
      },
      {
        path: 'ajouter-fournisseurs',
        component:AjoutFournisseurComponent
      },
      {
        path: 'edit-fournisseur/:id',
        component:EditFournisseurComponent
      },
      {
        path: 'clients',
        component:ClientComponent
      },
      {
        path: 'ajouter-clients',
        component:AjoutClientComponent
      },
      {
        path: 'edit-client/:id',
        component:EditClientComponent
      },
      {
        path: 'depots',
        component:DepotComponent
      },
      {
        path: 'ajouter-depot',
        component:AjoutDepotComponent
      },
      {
        path: 'edit-depot/:id',
        component:EditDepotComponent
      },
      {
        path: 'list-article-par-famille/:id',
        component:GetArticleByFamilleComponent
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
