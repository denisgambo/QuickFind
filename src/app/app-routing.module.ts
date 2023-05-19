import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'new-account',
    loadChildren: () => import('./pages/new-account/new-account.module').then( m => m.NewAccountPageModule)
  },
  {
    path: 'list-maisons',
    loadChildren: () => import('./pages/maisons/list-maisons/list-maisons.module').then( m => m.ListMaisonsPageModule)
  },
  {
    path: 'detail-maison',
    loadChildren: () => import('./pages/maisons/detail-maison/detail-maison.module').then( m => m.DetailMaisonPageModule)
  },
  {
    path: 'list-produits',
    loadChildren: () => import('./pages/speedyshop/list-produits/list-produits.module').then( m => m.ListProduitsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
