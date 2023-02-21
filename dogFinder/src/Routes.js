import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function Routes({dogs}) { {/** takes dogs object as props */}
  return (
    <Switch>                        {/** Wraps routes in switch statement for exculsive matching */}
      <Route exact path="/dogs">
        <DogList dogs={dogs} />     {/** returns component according to the route selected */}
      </Route>
      <Route path="/dogs/:name">
        <FilterDogDetails dogs={dogs} /> {/** If route name specific return this filtered component */}
      </Route>
      <Redirect to="/dogs" /> {/**If any other just redirect to home page */}
    </Switch>
  );
}

export default Routes;
