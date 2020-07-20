import React from 'react';
import { addMovieToList, handleMovieSearch } from '../actions';
import {connect} from 'react-redux';


class Navbar extends React.Component {

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
    }
    handleSearch = () =>{
        var searchText = document.getElementById('input').value;
        this.props.dispatch(handleMovieSearch(searchText));
    }
    render(){
        return (
            <div className='nav'>
                <div className='search-container'>
                    <input id='input'/>
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>

                    {
                        this.props.search.showSearchResults && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={this.props.search.result.Poster} />
                                <div className='movie-info'>
                                    <span>{this.props.search.result.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(this.props.search.result)}>Add To Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
          );
    }
  
}

function mapStateToProps(state){
    return{
      search : state.search
    }
  }
  
const connectedNavbarComponent = connect(mapStateToProps)(Navbar);

export default connectedNavbarComponent;
