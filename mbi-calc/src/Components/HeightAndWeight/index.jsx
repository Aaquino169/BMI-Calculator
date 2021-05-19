import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

function HeightAndWeight(props) {

  const [heightF,setHeightF] = useState(0)
  const [heightI,setHeightI] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setBMI] = useState(0)
  const [result,setResult] = useState("")

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

  function handleResult(){
    if(  bmi !== 0 && bmi < 18.5) {
      setResult ("You are under-weight. A few more pounds can lessen your chances of thinning bones and a weakened immune system, as well as feeling tired. Women who are underweight may have irregular periods or stop having them altogether. Underweight men may have lower sperm counts.The healthy range for BMI is between 18.5 and 24.9.")
    }else if(18.5 < bmi && bmi < 24.9){
      setResult("You're in a good place now. The healthy range for BMI is between 18.5 and 24.9. Keep up your healthy habits to maintain your weight.")
    }else if(25 < bmi && bmi < 30){
      setResult("You are over-weight.Since your weight puts you in the overweight range, losing some extra pounds is a good first step toward lowering your chances of health problems. The healthy range for BMI is between 18.5 and 24.9.")
    }else if(30 < bmi){
      setResult("You are Obese. Since your weight puts you in the obese range, you're much more likely to have serious health problems.. The healthy range for BMI is between 18.5 and 24.9.")
    }else{
      return ""
    }
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
    setBMI(bmii.toFixed(1))
    handleResult()
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
        <p>{result}</p>
    </div>
  );

}

export default HeightAndWeight;