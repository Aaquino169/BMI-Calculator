import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

function HeightAndWeight(props) {

  const [heightF,setHeightF] = useState(0)
  const [heightI,setHeightI] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setBMI] = useState(0)
  const [result,serResult] = useState("")

  function handleFeet(e){
    let f = (e.target.value)*12;
    setHeightF(f);
  }

  function handleInches(e){
    let i = e.target.value;
    setHeightI(i);
  }

  function handleWeight(e){
    let w = e.target.value;
    setWeight(w);
  }

  

  // const calculateBMI = () => {
  //   const footToInches = feet * 12
  //   // console.log("feet coverted to inches:",footToInches)
  //   const height = footToInches+inches
  //   // console.log(height)
  //   const bmii = Math.floor(weight / height**2 * 703)
    
  //   setBMI(bmii)
  //   console.log("this is the bmi in state:",bmi);

  useEffect(() => {
    let height = Number(heightF) + Number(heightI);
    console.log(height)
    let bmii = (weight / height ** 2) * 703;
    console.log(bmii)
    setBMI(bmii.toFixed(2))

  }, [heightF,heightI,weight]);

  
  /*

    1 foot = 12 inches

    BMI formula 
    lbs / inches ** 2 * 703
    
  */
  
  console.log("weight:",weight)
  return (
    <div className="app">
        <h2>Height</h2>
        <input type="number" onChange={handleFeet} placeholder="Feet" />
        <input type="number" onChange={handleInches} placeholder="Inches" />

        <h2>Weight</h2>
        <input type="number" onChange={handleWeight} placeholder="Pounds"/>
        <h2>BMI : {bmi}</h2>
    </div>
  );
}

export default HeightAndWeight;