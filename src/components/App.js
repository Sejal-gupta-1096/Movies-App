import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, showFavourites } from '../actions';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount(){

    this.props.dispatch(addMovies(data))
    
  }

  

  isFavourite = (movie) =>{
    let favourite = this.props.movies.favourites;
    let index = favourite.indexOf(movie);
    if(index === -1){
      return false;
    }
    return true;
  }

  showFavouriteMovies = (val) =>{
    this.props.dispatch(showFavourites(val));
  }
  
  render(){
    let displayList = this.props.movies.showFavourites ? this.props.movies.favourites : this.props.movies.list
    return(
      <div className="App">  
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${this.props.movies.showFavourites ? '' : 'active-tabs'}`} onClick={() => this.showFavouriteMovies(false)}>Movies</div>
            <div className={`tab ${this.props.movies.showFavourites ? 'active-tabs' : ''}`} onClick={() => this.showFavouriteMovies(true)}>Favourites</div>
          </div>
          <div className='list'>
            {displayList.map( (movie , index) => {
              return <MovieCard isFavourite={this.isFavourite(movie)} movie={movie} key={index} />
            })}
          </div>
        </div>
  
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies : state.movies,
    search : state.search
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
