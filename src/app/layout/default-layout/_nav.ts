import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Société'
  },
  {
    name: 'Accueil',
    url: '/dashboard',
    iconComponent: { name: 'cil-home' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  // {
  //   title: true,
  //   name: 'Produits'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   title: true,
  //   name: 'Test'
  // },
  // {
  //   name: 'Test',
  //   url: '/test/test1',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'headings' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  {
    name: 'Produits',
    title: true
  },
  {
    name: 'Familles',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Liste des familles',
        url: '/familles',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Ajout d\'une famille',
        url: '/ajout-famille',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Modification',
      //   url: '/base/cards',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Carousel',
      //   url: '/base/carousel',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Collapse',
      //   url: '/base/collapse',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'List Group',
      //   url: '/base/list-group',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Placeholder',
      //   url: '/base/placeholder',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Spinners',
      //   url: '/base/spinners',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  {
    name: 'Articles',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Liste des articles',
        url: '/articles',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Ajout d\'un article',
        url: '/ajout-article',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Dropdowns',
      //   url: '/buttons/dropdowns',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  {
    name: 'Contacts',
    title: true
  },
  {
    name: 'Fournisseurs',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Liste des fournisseurs',
        url: '/fournisseur',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Ajout d\'un fournisseur',
        url: 'ajouter-fournisseurs',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Checks & Radios',
      //   url: '/forms/checks-radios',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Range',
      //   url: '/forms/range',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  {
    name: 'Clients',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Liste des clients',
        url: '/clients',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Ajout d\'un client',
        url: 'ajouter-clients',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Checks & Radios',
      //   url: '/forms/checks-radios',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Range',
      //   url: '/forms/range',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  // {
  //   name: 'Clients',
  //   iconComponent: { name: 'cil-chart-pie' },
  //   url: '/charts'
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE'
  //       }
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // },
  {
    name: 'Stockage',
    title: true
  },
  {
    name: 'Depôts',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Mes depôts',
        url: '/depots',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Ajouter depôt',
        url: '/ajouter-depot',
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Modal',
      //   url: '/notifications/modal',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Toast',
      //   url: '/notifications/toasts',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'nav-icon-bullet'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'nav-icon-bullet'
  //     }
  //   ]
  // },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/5.x/',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank' }
  // }
];
