import React from 'react';

const zerowallet = "0x0000000000000000000000000000000000000000";

const Wallet = (props) => {
    return (
        <>
                <label for={props.id}>{props.label}</label>
                <input type="text" id={props.id} placeholder={zerowallet} />
        </>
    );
    }   


export default Wallet;

