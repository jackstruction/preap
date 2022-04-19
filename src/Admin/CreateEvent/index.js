import React from 'react';
import Text from '../../components/input/Text';
import Number from '../../components/input/Number';
import Wallet from '../../components/input/Wallet';
import Button from '../../components/Button';



const createEvent = () => {
    return (
        <>
        <h2>Create Event</h2>
        <div id="container">
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


export default createEvent;

