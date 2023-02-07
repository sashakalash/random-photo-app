import { PhotoListComponent } from './photo-list/components/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullSizePhotoComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: 'photos/:id',
    component: FullSizePhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
