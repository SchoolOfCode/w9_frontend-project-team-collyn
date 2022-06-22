import React, { useState } from 'react';

import ProjectInterestField from '../ProjectInterest';
import ProjectTypeField from '../ProjectType';
import StrengthField from '../Strength';
import AvailabilityField from '../Availability';

function Dropdown({ userInput, setUserInput, infoMatch }) {
  const [avail, setAvail] = useState('');
  const [strength, setStrength] = useState('');
  const [projInt, setProjInt] = useState('');
  const [projType, setProjType] = useState('');

  function handleClick(e) {
    e.preventDefault();
    // how connect to backend?
    // change visual of what people see - how do we revert back to 'null' value once we've hit the button?
    setUserInput({
      project_interest: projInt,
      project_type: projType,
      strength: strength,
      availability: avail,
    });
    setAvail('');
    setStrength('');
    setProjType('');
    setProjInt('');
  }

  return (
    <>
      <form className="dropdown-form">
        <div className="dropdown-left">
          <ProjectInterestField projInt={projInt} setProjInt={setProjInt} />
          <ProjectTypeField projType={projType} setProjType={setProjType} />
        </div>
        <div className="dropdown-right">
          <StrengthField strength={strength} setStrength={setStrength} />
          <AvailabilityField avail={avail} setAvail={setAvail} />
        </div>
      </form>
      <div className="dropdown-button">
        <button
          onClick={(e) => {
            handleClick(e);
            infoMatch(userInput);
          }}
        >
          Get suggestions
        </button>
      </div>
    </>
  );
}

export default Dropdown;
