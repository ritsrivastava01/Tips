import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'tip-details',
    loadChildren: () =>
      import('./pages/tip-details/tip-details.module').then(
        m => m.TipDetailsPageModule
      )
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then(
        m => m.AboutUsPageModule
      )
  },
  {
    path: 'contribute',
    loadChildren: () =>
      import('./pages/contribute/contribute.module').then(
        m => m.ContributePageModule
      )
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
