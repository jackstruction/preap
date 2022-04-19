import React from 'react';
import CreateEvent from './CreateEvent';
import PullEventFunds from './PullEventFunds';
import UpdateScanners from './UpdateScanners';
import CancelEvent from './CancelEvent';




const Admin = () => {
    return (
        <>
        <h1>Admin Functions</h1>
        <div id="container">
        <CreateEvent />
        <PullEventFunds />
        <UpdateScanners />
        <CancelEvent />
            </div>
        </>
    );
    }   


export default Admin;
