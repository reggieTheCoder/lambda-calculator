import React, {
    useState
} from "react";

// import components
import SpecialButton from "./SpecialButton";

// import array data from data.js file
import {specials} from "../../../data";


const Specials = (props) => {
    //  add the imported data to state
    const [specialState, setSpecialState] = useState(specials);

    return ( 
        <div className="specials">  {
            specialState.map((special, index) => {
                return <SpecialButton key = {index} special = {special } clearDisplay = {props.clearDisplay} />
            })
        } 
        </div>
    );
};
export default Specials;