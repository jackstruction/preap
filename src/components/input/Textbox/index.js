import React from 'react';



const Textbox = (props) => {
    return (
        <>
                <label for={props.id}>{props.label}</label>
                <input type="textarea" id={props.id} value={props.value} />
        </>
    );
    }   


export default Textbox;



