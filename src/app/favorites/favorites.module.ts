import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritePhotoListComponent } from './components/favorite-photo-list/favorite-photo-list.component';
import { SharedModule } from '../shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [
    FavoritePhotoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesRoutingModule,
  ]
})
export class FavoritesModule { }
