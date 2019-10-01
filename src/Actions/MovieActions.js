import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./Type";

export const addMovie = newMovie => {
  return {
    type: ADD_MOVIE,
    newMovie
  };
};

export const deleteMovie = id => {
  return {
    type: DELETE_MOVIE,
    id
  };
};

export const editMovie = updatedMovie => {
  return {
    type: EDIT_MOVIE,
    updatedMovie
  };
};
