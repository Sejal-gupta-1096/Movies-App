import React from 'react';
import { addMovieToList, handleMovieSearch } from '../actions';
import { StoreContext } from '..';

class Navbar extends React.Component {

    handleAddToMovies = (movie) => {
        this.props.store.dispatch(addMovieToList(movie));
    }
    handleSearch = () =>{
        var searchText = document.getElementById('input').value;
        this.props.store.dispatch(handleMovieSearch(searchText));
    }
    render(){
        return (
            <div className='nav'>
                <div className='search-container'>
                    <input id='input'/>
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>

                    {
                        this.props.store.getState().search.showSearchResults && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={this.props.store.getState().search.result.Poster} />
                                <div className='movie-info'>
                                    <span>{this.props.store.getState().search.result.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(this.props.store.getState().search.result)}>Add To Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
          );
    }
  
}

class NavbarWrapper extends React.Component{
    render(){
        return(
            <StoreContext.Consumer>
                {
                    (store) =>{
                        return(<Navbar store={store} />)
                    }
                }
            </StoreContext.Consumer>
        )
    }
}
export default NavbarWrapper;
