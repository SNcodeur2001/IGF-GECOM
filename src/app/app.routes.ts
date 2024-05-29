import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

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
        loadComponent: () => import('../components/Familles/famille/famille.component').then(m => m.FamilleComponent)
      },
      {
        path: 'articles',
        loadComponent: () => import('../components/Articles/article/article.component').then(m => m.ArticleComponent)
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
        loadComponent: () => import('../components/Familles/ajout-famille/ajout-famille.component').then(m => m.AjoutFamilleComponent)
      },
      {
        path: 'edit-famille/:id',
        loadComponent: () => import('../components/Familles/edit-famille/edit-famille.component').then(m => m.EditFamilleComponent)
      },
      {
        path: 'ajout-article',
        loadComponent: () => import('../components/Articles/ajout-article/ajout-article.component').then(m => m.AjoutArticleComponent)
      },
      {
        path: 'edit-article/:id',
        loadComponent: () => import('../components/Articles/edit-article/edit-article/edit-article.component').then(m => m.EditArticleComponent)
      },
      {
        path: 'fournisseur',
        loadComponent: () => import('../components/Fournisseurs/fournisseur/fournisseur.component').then(m => m.FournisseurComponent)
      },
      {
        path: 'ajouter-fournisseurs',
        loadComponent: () => import('../components/Fournisseurs/ajout-fournisseur/ajout-fournisseur.component').then(m => m.AjoutFournisseurComponent)
      },
      {
        path: 'edit-fournisseur/:id',
        loadComponent: () => import('../components/Fournisseurs/edit-fournisseur/edit-fournisseur/edit-fournisseur.component').then(m => m.EditFournisseurComponent)
      },
      {
        path: 'clients',
        loadComponent: () => import('../components/Clients/client/client.component').then(m => m.ClientComponent)
      },
      {
        path: 'ajouter-clients',
        loadComponent: () => import('../components/Clients/ajout-client/ajout-client.component').then(m => m.AjoutClientComponent)
      },
      {
        path: 'edit-client/:id',
        loadComponent: () => import('../components/Clients/edit-client/edit-client.component').then(m => m.EditClientComponent)
      },
      {
        path: 'depots',
        loadComponent: () => import('../components/Depots/depot/depot.component').then(m => m.DepotComponent)
      },
      {
        path: 'ajouter-depot',
        loadComponent: () => import('../components/Depots/ajout-depot/ajout-depot/ajout-depot.component').then(m => m.AjoutDepotComponent)
      },
      {
        path: 'edit-depot/:id',
        loadComponent: () => import('../components/Depots/edit-depot/edit-depot/edit-depot.component').then(m => m.EditDepotComponent)
      },
      {
        path: 'list-article-par-famille/:id',
        loadComponent: () => import('../components/Familles/get-article-by-famille/get-article-by-famille.component').then(m => m.GetArticleByFamilleComponent)
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
