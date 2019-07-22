import React, { useState } from 'react';
import { MovieList} from "./Movies/MovieList";
import { Movie } from "./Movies/Movie";
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Routes>Replace this Div with your Routes
        <Route path="/" exact component={MovieList}/>
        <Rout path="/movies/" component={Movie}/>
      </Routes>
    </div>
  );
};

export default App;
