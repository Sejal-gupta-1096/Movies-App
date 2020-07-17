import { ADD_MOVIES , ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from '../actions/index';

const initialState = {
    list : [],
    favourites : [],
    showFavourites : false
}
export default function movies(state = initialState, action){
    
    if(action.type === ADD_MOVIES){
        return {
            ...state,
            list : action.movies
        }
    }

    if(action.type === ADD_FAVOURITE){
        return {
            ...state,
            favourites : [action.movie , ...state.favourites]
        }
    }

    if(action.type === REMOVE_FAVOURITE){
        let filtered = state.favourites.filter( (movie) =>{
            return movie.Title !== action.movie.Title
        })
        return {
            ...state,
            favourites : filtered
        }
    }

    if(action.type === SHOW_FAVOURITES){
        return {
            ...state,
            showFavourites : action.showFavourites
        }
    }
    return state;
}