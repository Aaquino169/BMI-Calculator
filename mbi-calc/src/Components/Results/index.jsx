import React, { useState } from 'react'

function Results(props) {
// obese 30 < i
  // <p>
  //   Since your weight puts you in the obese range, you're much more likely to have serious health problems.

  //   The healthy range for BMI is between 18.5 and 24.9.
  // </p>

//   overweight 25 < i < 30
//   Since your weight puts you in the overweight range, losing some extra pounds is a good first step toward lowering your chances of health problems. 

// The healthy range for BMI is between 18.5 and 24.9. 

// If you have a very muscular build, though, you could have an overweight BMI and still be OK.

// healthy 18.5 < i < 24.9
// You're in a good place now. The healthy range for BMI is between 18.5 and 24.9. Keep up your healthy habits to maintain your weight.

// unhealthy <18.5
// A few more pounds can lessen your chances of thinning bones and a weakened immune system, as well as feeling tired. Women who are underweight may have irregular periods or stop having them altogether. Underweight men may have lower sperm counts.

// The healthy range for BMI is between 18.5 and 24.9.
  return (
    <div>
      <h1>
        this is results page
      </h1>
    </div>
  );
}

export default Results;