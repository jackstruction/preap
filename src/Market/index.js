import React from 'react';
//import Text from '../components/input/Text';
//import Textbox from '../components/input/Textbox';
//import Number from '../components/input/Number';
//import Image from '../components/Image';
import Event from './Event';
import "./Market.css";


const imgurl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"


const Market = () => {
    return (
        <>
        <h1>Marketplace</h1>
        <div className="eventList">
        <Event className="events" first="This" />
        <Event className="events" first="That" />
        <Event className="events" first="The Other" />
        </div>
        </>
    );
    }   


export default Market;



