import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'bio',
    loadChildren: () => import('./bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'bab1',
    loadChildren: () => import('./bab1/bab1.module').then( m => m.Bab1PageModule)
  },
  {
    path: 'bab2',
    loadChildren: () => import('./bab2/bab2.module').then( m => m.Bab2PageModule)
  },
  {
    path: 'bab3',
    loadChildren: () => import('./bab3/bab3.module').then( m => m.Bab3PageModule)
  },
  {
    path: 'bab4',
    loadChildren: () => import('./bab4/bab4.module').then( m => m.Bab4PageModule)
  },
  {
    path: 'bab1pp',
    loadChildren: () => import('./bab1pp/bab1pp.module').then( m => m.Bab1ppPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'bab3pp',
    loadChildren: () => import('./bab3pp/bab3pp.module').then( m => m.Bab3ppPageModule)
  },
  {
    path: 'bab4pp',
    loadChildren: () => import('./bab4pp/bab4pp.module').then( m => m.Bab4ppPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'kimia',
    loadChildren: () => import('./kimia/kimia.module').then( m => m.KimiaPageModule)
  },
  {
    path: 'notakimia',
    loadChildren: () => import('./notakimia/notakimia.module').then( m => m.NotakimiaPageModule)
  },
  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then( m => m.PhotoPageModule)
  },
  {
    path: 'jadual',
    loadChildren: () => import('./jadual/jadual.module').then( m => m.JadualPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then( m => m.BlogPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
