import React from 'react';
import Text from '../../components/input/Text';
import Textbox from '../../components/input/Textbox';
import Number from '../../components/input/Number';
import Image from '../../components/Image';

const imgurl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"


const Event = (props) => {
    return (
        <>
        <div id="eventContainer">
            <h3 id="eventName">{props.first}</h3>
            <Image id="m-image" label="Event Image" placeholder='Image URL' imgsrc={imgurl} />
            <Text id="m-name" label="Event Name" placeholder='Kitty Concert' />
            </div>
            <div id="mintContainer">
            <Number id="m-remaining" label="Remaining Tokens" placeholder='50/50 Tokens Remaining' />
            <Textbox id='m-metadata' label='Additional Event Metadata' value='This is where the metadata will go' />
        </div>
        </>
    );
    }   


export default Event;

