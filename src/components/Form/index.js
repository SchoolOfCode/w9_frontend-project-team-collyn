import React, {useState} from "react";


import ProjectInterestField from "../ProjectInterest";
import ProjectTypeField from "../ProjectType";
import StrengthField from "../Strength";
import AvailabilityField from "../Availability";

function Dropdown ( {userInput, setUserInput, getProjects }) {
    const [avail, setAvail] = useState("");
    const [strength, setStrength] = useState("");
    const [projInt, setProjInt] = useState("");
    const [projType, setProjType] = useState("");

    function handleClick (e) {
        e.preventDefault()
        // how connect to backend?
        // change visual of what people see - how do we revert back to 'null' value once we've hit the button?
        console.log("click that handle");
        // setUserInput([projInt, projType, avail, strength]);
        setUserInput(["penny", "raf", "brooka", "rebecca"]);
        console.log(userInput);
        setAvail("");
        setStrength("");
        setProjType("");
        setProjInt("");
        getProjects();
    }
    // const userInput

  

    console.log(avail)
    console.log(strength)
    console.log(projInt)
    console.log(projType)
    return(
        <div>
            <form>
            <ProjectInterestField projInt={projInt} setProjInt={setProjInt}/>
            <ProjectTypeField  projType={projType} setProjType={setProjType} />
            <StrengthField strength={strength} setStrength={setStrength}  />
            <AvailabilityField avail={avail} setAvail={setAvail} />
            <button onClick={handleClick}>Get suggestions</button>         
            </form>
        </div>
    )

}

export default Dropdown