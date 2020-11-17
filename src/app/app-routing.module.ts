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
    path: 'make-alumno',
    loadChildren: () => import('./make-alumno/make-alumno.module').then( m => m.MakeAlumnoPageModule)
  },
  {
    path: 'edit-alumno/:id',
    loadChildren: () => import('./edit-alumno/edit-alumno.module').then( m => m.EditAlumnoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
