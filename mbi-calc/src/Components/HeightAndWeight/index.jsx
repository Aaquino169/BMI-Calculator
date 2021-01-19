import React, { useState } from 'react'
function HeightAndWeight() {

  const [height,setHeight] = useState()
  const [weight,setWeight] = useState()
  const [bmi,setBMI] = useState()

  const handleChange = (e) => {
    setHeight(e)
  }
  /*

    1 foot = 12 inches

    BMI formula 
    lbs / inches ** 2 * 703
    
  */
  return (
    <div>
      <form>
        <h2>Height</h2>
        <label>Feet:</label>
        <input></input>
        <label>Inches:</label>
        <input></input>
        <h2>Weight</h2>
        <label>Pounds:</label>
        <input></input>
        <br/>
        <button type="submit" >Calculate</button>
      </form>
    </div>
  );
}

export default HeightAndWeight;