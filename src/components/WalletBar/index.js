import React from 'react';
import Button from '../Button';
//import './Header.css';

let userBalance = 0;

const WalletBar = (props) => {
    return (
        <>
        <div id="walletBalance">Your Balance is {userBalance}</div>
        <div id="walletbar">
            <Button  text="Connect Wallet" id="walletButton" style="--tertiary" onCl
            ick={console.log('you did it')} />
            </div>
        </>
    );
    }


export default WalletBar;



