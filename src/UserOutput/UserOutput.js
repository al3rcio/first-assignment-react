import React from 'react';
import './UserOutput.css';
import App from '../App';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h2> First paragraph </h2>
            <p> 
                <strong> {props.name} </strong> ipsum dolor sit amet, 
                consectetur adipisicing elit. 
                Qui dicta minus molestiae vel beatae natus eveniet ratione 
                temporibus aperiam harum alias officiis assumenda officia 
                quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet,  adipisicing elit. 
                <strong> {props.name} </strong> dicta minus molestiae vel beatae natus eveniet ratione 
                temporibus aperiam harum alias officiis assumenda officia 
                quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Qui dicta minus molestiae vel beatae natus eveniet ratione 
                temporibus aperiam harum alias officiis assumenda officia 
                quibusdam deleniti eos cupiditate dolore doloribus! 
            </p>
            <h2> Second paragraph </h2>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod 
                commodi nam tempore recusandae. <strong> {props.name} </strong> sed nulla eum vero 
                expedita ex delectus voluptates rem at neque quos facere 
                sequi unde optio aliquam!
            </p>
        </div>
    )
};

export default userOutput;