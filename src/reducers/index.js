import {combineReducers} from 'redux';
import { ADD_MOVIES , ADD_FAVOURITE, REMOVE_FAVOURITE, SHOW_FAVOURITES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT } from '../actions/index';

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

    if(action.type === ADD_MOVIE_TO_LIST){
        return {
            ...state,
            list : [action.movie , ...state.list],

        }
    }

    return state;
}

const initialSearchState = {
    result : {

    },
    showSearchResults : false
}

export function search(state = initialSearchState , action){

    if(action.type === ADD_SEARCH_RESULT){
        return {
            ...state,
            result : action.movie,
            showSearchResults : true
        }
    }
    if(action.type === ADD_MOVIE_TO_LIST){
        return {
            ...state,
            showSearchResults : false
        }
    }
    return state;
}


export default combineReducers({
    movies,
    search
})
