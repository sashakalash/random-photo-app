import { createReducer, on } from '@ngrx/store';
import * as ACTIONS from './actions';

export interface PhotoState {
  photos: string[];
  favorite: string;
}

export const initialState = {
  photos: [],
  favorite: ''
};

export const photoReducer = createReducer(
  initialState,
  // on(ACTIONS.savePhotos, (state, photos: string[]) => {
  //   return {
  //     ...state,
  //     photos
  //   }
  // }),
  // on(ACTIONS.addToFavorite, (state) => 0)
);
