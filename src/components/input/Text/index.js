import React from 'react';



const Text = (props) => {
    return (
        <>
                <label for={props.id}>{props.label}</label>
                <input type="text" id={props.id} placeholder={props.placeholder} />
        </>
    );
    }   


export default Text;



