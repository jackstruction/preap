import React from 'react';
import Button from '../Button';
//import './Header.css';


const Header = () => {
    return (
        <>
        <header><div id="logo">Logo Goes Here</div>
        <div id="navbar">
            <Button  text="Mint" id="MintNav" style="--secondary" />
            <Button  text="Market" id="MarketNav" style="--secondary" />
            <Button  text="Admin" id="AdminNav" style="--secondary" />
            <Button  text="About" id="About" style="--secondary" />
            </div>
        </header>
        </>
    );
    }   


export default Header;



