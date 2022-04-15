import Circles from './components/Circles/Index';
import Post from './components/Slide/Index';
import { useState } from 'react';
import './styles.scss';

const GoodThingsContainer = () => {
  const [selectedCircle, setSelectedCircle] = useState(0);

  return (
    <div className='good-things-container'>
      <div className='background-green'>
        <h1>good things</h1>
        <Post selectedCircle={ selectedCircle }/>
      </div> 
      <Circles 
        selectedCircle={ selectedCircle }
        setSelectedCircle={ setSelectedCircle }
      />
    </div>
  );
}

export default GoodThingsContainer;