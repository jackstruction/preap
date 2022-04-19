import React from 'react';



const Number = (props) => {
    return (
        <>
                <label htmlFor={props.id}>{props.label}</label>
                <input type="number" id={props.id} placeholder={props.placeholder} />
        </>
    );
    }   


export default Number;



