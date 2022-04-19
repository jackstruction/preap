import React from 'react';



const Image = (props) => {
    return (
        <>
                <img src={props.imgsrc} alt={props.label} />
                <label htmlFor={props.id}>{props.label}</label>
        </>
    );
    }   


export default Image;