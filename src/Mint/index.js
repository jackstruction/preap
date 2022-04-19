import React from 'react';
import Text from '../components/input/Text';
import Number from '../components/input/Number';
import Wallet from '../components/input/Wallet';
import Button from '../components/Button';
import Image from '../components/Image';

const imgurl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"

const Mint = () => {
    return (
        <>
        <h1>Mint Token</h1>
        <div id="container">
        <Image id="m-image" label="Event Image" imgsrc={imgurl} placeholder='Image URL' />
        <Text id="c-name" label="Event Name" placeholder='Beatles Concert' />
        <Number id="c-quant" label="Token Quantity" placeholder='50 Tokens' />
        <Number id="c-price" label="Token Price" placeholder='21 Matic' />
        <Wallet id="c-wallet" label="Event Name" />
        <Number id="c-royalty" label="Royalty Percentage" placeholder='5%' />
        <Text id="c-ipfsHash" label="IPFS URL" placeholder='IPFS://' />
        </div>
        <Button text="Create Event" id="createEvent" style="--secondary" />
        </>
    );
    }   


export default Mint;



