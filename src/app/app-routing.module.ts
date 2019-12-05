import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'class',
    loadChildren: () => import('./class/class.module').then( m => m.ClassPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./place/place.module').then( m => m.PlacePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
