import { createAction } from '@ngrx/store';

export const getPhotos = createAction('[Photos] Get Photos');
export const savePhotos = createAction('[Photos] Save Photos');
export const addToFavorite = createAction('[Photos] Add To Favorite');
