import React from 'react';
import { addFovourite,removeFavourite } from '../actions';
import {connect} from 'react-redux';

class MovieCard extends React.Component {

    handleFavouriteClick = () =>{
        let movie = this.props.movie
        this.props.dispatch(addFovourite(movie));
    }

    handleUnFavouriteClick = () =>{
        let movie = this.props.movie
        this.props.dispatch(removeFavourite(movie));
    }

    render(){
        const {movie,isFavourite} = this.props;

        return (
            <div className='movie-card'>
                <div className='left'>
                    <img src={movie.Poster} />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {isFavourite?
                            <button className='unfavourite-btn' onClick={this.handleUnFavouriteClick}>Unfavourite</button>:
                            <button className='favourite-btn' onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
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
  
const connectedMovieCardComponent = connect(mapStateToProps)(MovieCard);

export default connectedMovieCardComponent;
