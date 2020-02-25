import React, { useState } from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";
import Movie from "./Movies/Movie"
import MovieList from "./Movies/MovieList"
import SavedList from './Movies/SavedList';



const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
    <div>
      <SavedList list={savedList} />
      <Route path="/" exact component={MovieList}/> 
      <Route path="/movie/:id" render={props => 
      <Movie {...props} addToSavedList={addToSavedList}/>}/>  
     
    </div>
    </Router>
  );
};

export default App;
