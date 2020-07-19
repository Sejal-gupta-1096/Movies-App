export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


export function addMovies(movies){
    return {
        type : ADD_MOVIES,
        movies : movies
    }
}

export function addFovourite(movie){
    return {
        type : ADD_FAVOURITE,
        movie : movie
    }
}

export function removeFavourite(movie){
    return {
        type : REMOVE_FAVOURITE,
        movie : movie
    }
}

export function showFavourites(val){
    return {
        type : SHOW_FAVOURITES,
        showFavourites : val
    }
}

export function addMovieToList(movie){
    return {
        type : ADD_MOVIE_TO_LIST,
        movie : movie
    }
}

export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=a8b7ae7c&t=${movie}`;

    return function (dispatch){
        fetch(url).then( (response) => {
            return response.json();
        }).then( (movie) => {
            console.log(movie);
            dispatch(addMovieSearch(movie));
        })
    }
    

}

export function addMovieSearch(movie){
    return {
        type : ADD_SEARCH_RESULT,
        movie : movie
    }
}