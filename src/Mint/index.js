import React from 'react';
import Textline from '../components/Text';
import NumLine from '../components/NumLine';
import Wallet from '../components/input/Wallet';
import Button from '../components/Button';
import Image from '../components/Image';
import Number from '../components/input/Number';

const imgurl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"

const Mint = () => {
    return (
        <>
        <h1>Mint Token</h1>
        <div id="container">
        <Image id="m-image" label="Event Image" imgsrc={imgurl} placeholder='Image URL' />
        <Textline id="m-name" text='Beatles Concert' />
        <NumLine id="m-quantRem" label="Token Quantity" placeholder='50 Tokens' />
        <NumLine id="m-price" label="Token Price" placeholder='21 Matic' />
        <Number id="m-quantBuy" label="Token Amount" placeholder='5' />
        </div>
        <Button text="Mint Event Tokens" id="MintEvent" style="--secondary" />
        </>
    );
    }   


export default Mint;



