import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

function FilterDogDetails({dogs}) { {/**Take dogs object as prop */}
  const {name} = useParams(); {/** returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes. */}

  if (name) { 
    const currentDog = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />; {/** Return details for matched dog from url */}
  }
  
  return null;
}

export default FilterDogDetails;