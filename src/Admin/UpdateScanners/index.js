import React from 'react';
import Button from '../../components/Button';
import Text from '../../components/input/Text';
import Wallet from '../../components/input/Wallet';


const UpdateScanners = () => {

    return (
        <>
            <h3>Update Scanners</h3>
            <Wallet id="usScannerId" Label="Scanner Address" />
            <Text id="usEventId" placeholder="15" label="Event ID" />
            <Button text="Add" id="usAdd" />
            <Button text="Remove" id="usRemove" /> 
        </>
                );
    }

    export default UpdateScanners;