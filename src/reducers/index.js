import {combineReducers} from 'redux';
import { ADD_MOVIES , ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES } from '../actions/index';

const initialMoviesState = {
    list : [],
    favourites : [],
    showFavourites : false
}
export function movies(state = initialMoviesState, action){
    
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

const initialSearchState = {
    result : {

    }
}

export function search(state = initialSearchState , action){
    return state;
}


export default combineReducers({
    movies,
    search
})
