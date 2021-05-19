import React from 'react';
import {useState} from 'react';
import {Graph} from './Graph'
import {Constant} from './Constant'


function App() {
  const [animating, setAnimating] = useState(false);
  const [result, setResult] = useState(1);
  const [constant, setConstant] = useState(1);
  const [previousConstant, setPreviousConstant] = useState(1);

  console.log(animating)
  const handleConstantChange = (value) => {
    if (value) {
      setAnimating(true);
      console.log('animating')
      setPreviousConstant(constant);
      setConstant(value);
    }
  }

  const handleStopAnimation = () => {
   
    setAnimating(false)

    console.log('stopping animation')

  }

  return (
    <div className="App">
      
      <Graph stopAnimation = {handleStopAnimation} animating={animating} previousConstant={previousConstant} constant={constant} result={result} />
      <Constant onValueChange={handleConstantChange}/>
    </div>
  );
}

export default App;
