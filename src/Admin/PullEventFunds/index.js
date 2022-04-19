import React from 'react';
import Button from '../../components/Button';
import Number from '../../components/input/Number';

const PullEventFunds = () => {
    return (
        <>
            <h3>Pull Funds</h3>
            <Number placeholder="15" label="Event ID" /> 
            <Button text="Pull Funds" id="pullFunds" />
        </>
                );
    }

    export default PullEventFunds;