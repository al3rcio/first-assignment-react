import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <label onClick={props.change}> {props.greet} </label>
            <input className="box-input" type="text" placeholder="Name?" onChange={props.change} value={props.name} />
        </div>
    )    
};

export default userInput;