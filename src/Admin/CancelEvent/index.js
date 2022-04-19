import React from 'react';
import Text from '../../components/input/Text';
import Button from '../../components/Button';


const CancelEvent = () => {
    return (
        <>
            <h3>Cancel Event</h3>
            <Text id="cancelId" Label="Event ID" placeholder="15" />
            <Button text="Cancel" id="cancelButton" />
        </>
                );
    }

    export default CancelEvent;