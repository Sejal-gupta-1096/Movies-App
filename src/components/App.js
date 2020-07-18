import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, showFavourites } from '../actions';

class App extends React.Component {

  componentDidMount(){

    this.props.store.subscribe( () => {
      this.forceUpdate();
      console.log(this.props.store.getState())
    })
    this.props.store.dispatch(addMovies(data))
    
  }

  

  isFavourite = (movie) =>{
    let favourite = this.props.store.getState().movies.favourites;
    let index = favourite.indexOf(movie);
    if(index === -1){
      return false;
    }
    return true;
  }

  showFavouriteMovies = (val) =>{
    this.props.store.dispatch(showFavourites(val));
  }
  
  render(){
    let displayList = this.props.store.getState().movies.showFavourites ? this.props.store.getState().movies.favourites : this.props.store.getState().movies.list
    return (
      <div className="App">  
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${this.props.store.getState().movies.showFavourites ? '' : 'active-tabs'}`} onClick={() => this.showFavouriteMovies(false)}>Movies</div>
            <div className={`tab ${this.props.store.getState().movies.showFavourites ? 'active-tabs' : ''}`} onClick={() => this.showFavouriteMovies(true)}>Favourites</div>
          </div>
          <div className='list'>
            {displayList.map( (movie , index) => {
              return <MovieCard isFavourite={this.isFavourite(movie)} movie={movie} key={index} store={this.props.store} />
            })}
        </div>
      </div>
        
      </div>
    );
  }
  
}

export default App;
