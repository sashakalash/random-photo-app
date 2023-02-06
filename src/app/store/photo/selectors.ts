import { PhotoState } from "./reducer";

export const selectPhotos = (state: PhotoState) => state.photos;
export const selectFavoritePhoto = (state: PhotoState) => state.favorite;
