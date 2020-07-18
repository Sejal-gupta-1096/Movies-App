import React from 'react';
import {data} from '../data';
import { addMovieToList } from '../actions';

class Navbar extends React.Component {

    constructor(){
        super();
        this.state = {
            showSearchResults : true
        }
    }

    handleAddToMovies = (movie) => {
        this.props.store.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults : false
        })
    }
    handleSearch = () =>{

    }
    render(){
        return (
            <div className='nav'>
                <div className='search-container'>
                    <input />
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>

                    {
                        this.state.showSearchResults && 
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={data[0].Poster} />
                                <div className='movie-info'>
                                    <span>{data[0].Title}</span>
                                    <button onClick={() => this.handleAddToMovies(data[0])}>Add To Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
          );
    }
  
}

export default Navbar;
