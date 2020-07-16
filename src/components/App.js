import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';

class App extends React.Component {

  componentDidMount(){

    this.props.store.subscribe( () => {
      this.forceUpdate();
      console.log(this.props.store.getState())
    })
    this.props.store.dispatch(addMovies(data))
    
  }

  

  isFavourite = (movie) =>{
    let favourite = this.props.store.getState().favourites;
    let index = favourite.indexOf(movie);
    if(index === -1){
      return false;
    }
    return true;
  }
  
  render(){

    return (
      <div className="App">  
        <Navbar />
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourites</div>
          </div>
          <div className='list'>
            {this.props.store.getState().list.map( (movie , index) => {
              return <MovieCard isFavourite={this.isFavourite(movie)} movie={movie} key={index} store={this.props.store} />
            })}
        </div>
      </div>
        
      </div>
    );
  }
  
}

export default App;
