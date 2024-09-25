import React, { useState } from 'react';
import './index.css'

function App() {

  //state   
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')


  // show image based on BMI CALCULATION
  let imgSrc;

  if (bmi < 1){
    imgSrc = null
  } else {
    if (bmi < 20) {
      imgSrc = require('../src/assets/underweightx.jpeg')
    }else if (bmi >= 25 && bmi < 30){
      imgSrc = require('../src/assets/healthy.jpg')
    } else {
      imgSrc = require('../src/assets/overweight.jpg')
    }
  }

  let calcBmi = (event) => {
    event.preventDefault()
      if(weight === 0 || height === 0){
        alert('Please enter a valid weight and height')
      }else{
        let bmi = (weight / (height * height) * 703)
        setBmi(bmi.toFixed(1))


        // Logic for message 
        if(bmi < 25){
          setMessage('You are underWeight')
        } else if (bmi >=25 && bmi < 30){
          setMessage('You are healthy weight')
        }else {
          setMessage('You are OverWeight')
        }
      }
  }

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (LBS):</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height (In Inches):</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Clear</button>
          </div>
        </form>

        <div className='center'>
          <h2>BMI Result: {bmi}</h2>
          <p>{message}</p>
        </div>

        <div className='img-container'>
            <img src={imgSrc} alt=''></img>  
        </div>
      </div>
    </div>
  );
}

export default App;
