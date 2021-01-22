import { Component } from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import HeightAndWeight from "./Components/HeightAndWeight"
import Results from './Components/Results';

function App() {


  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <h2>Your BMI and Healthy Weight Range</h2>
      <p>There's no "perfect weight" that fits everyone. BMI, or body mass index, measures how healthy your weight is based on how tall you are. It gives you a clue to your risk for weight-related health problems.</p>
      <p>If you're over 20 and not pregnant, find out what your number is and what it means.</p>
      <HeightAndWeight/>
    </div>
  );
}
export default App;
