import React from 'react';
import Wallet from '../components/input/Wallet';
import Button from '../components/Button';
import Number from '../components/input/Number';

const Scan = () => {
    return (
        <>
            <h2>Scan Event Tokens</h2>
            <div id="container">
                <Wallet id="scan-wallet" label="Wallet" />
                <Number id="scan-quant" label="Token Quantity" placeholder='50 Tokens' />
                <Button text="Scan" id="scan" style="--secondary" />
            </div>
        </>
    );
}

export default Scan;