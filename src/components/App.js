import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {

  componentDidMount(){

    this.props.store.subscribe( () => {
      this.forceUpdate();
    })
    this.props.store.dispatch({
      type : 'ADD_MOVIES',
      movies : data
    })
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
            {this.props.store.getState().map( (movie , index) => {
              return <MovieCard movie={movie} key={index} />
            })}
        </div>
      </div>
        
      </div>
    );
  }
  
}

export default App;
