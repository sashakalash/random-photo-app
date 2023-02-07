import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePhotoListComponent } from './components/favorite-photo-list/favorite-photo-list.component';

const routes: Routes = [
  {
    path: '',
    component: FavoritePhotoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
