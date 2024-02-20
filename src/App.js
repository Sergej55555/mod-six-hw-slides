import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {

  const [car, setCar] = useState(0);
  const {id, name, description, image} = data[car]; 
  
  const nextCar = () => {

  setCar((car => {
    car ++;
    if(car > data.length-1) {
      car = 0;
    }
    return car;
  }))
  }

  const previousCar = () => {
    setCar((car => {
      car --;
      if (car < 0) {
      return data.length-1;
      }
      return car;
    }))
    }
 
  return (<div>

          <div className='container'>
          <img src={image} width='350px' alt='NYC Hotels'/>
          </div>

          <div className='container'>
          <h1>{id} - {name}</h1> 
          </div>

          <div className='container'>
          <p>{description}</p>
          </div>

          <div className='btn container'>
          <button onClick={previousCar}>Previous car</button>
          <button onClick={nextCar}>Next car</button>
          </div>

        </div>
      )
}

export default App;
