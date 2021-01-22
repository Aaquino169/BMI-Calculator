import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HeightAndWeight(props) {

  const [inches,setInches] = useState(0)
  const [feet,setFeet] = useState(0)
  const [weight,setWeight] = useState(0)
  const [bmi,setBMI] = useState(0)

  const calculateBMI = () => {
    const footToInches = feet * 12
    // console.log("feet coverted to inches:",footToInches)
    const height = footToInches+inches
    // console.log(height)
    const bmi = Math.floor(weight / height**2 * 703)
    // setBMI(bmi)
    console.log(bmi);
  }
  /*

    1 foot = 12 inches

    BMI formula 
    lbs / inches ** 2 * 703
    
  */
  
  console.log("feet:",feet)
  console.log("inches:",inches)
  console.log("pounds:",weight)

  return (
    <div>
      <form onSubmit={calculateBMI()}>
        <h2>Height</h2>
        <label>Feet:</label>
        <input name="feet" inputMode="numeric" onChange={e => setFeet(parseInt(e.target.value))}></input>
        <label>Inches:</label>
        <input name="inches" onChange={e => setInches(parseInt(e.target.value))}></input>
        <h2>Weight</h2>
        <label>Pounds:</label>
        <input onChange={e => setWeight(parseInt(e.target.value))} ></input>
        <br/>
        <Link to={"/results/" + bmi}>
          <button >Calculate</button>
        </Link>
      </form>
    </div>
  );
}

export default HeightAndWeight;