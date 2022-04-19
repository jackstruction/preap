import React from 'react';
import Textline from '../../components/Text';
import NumLine from '../../components/NumLine';
import Image from '../../components/Image';
import '../Market.css';

const imgurl="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80"


const Event = (props) => {
    return (
        <div className="eventContainer">
            <h3 id="eventName">{props.first}</h3>
            <Image id="m-image" placeholder='Image URL' imgsrc={imgurl} />
            <Textline id="m-name" text='Kitty Concert' />
            <div id="mintContainer">
            <NumLine id="m-remaining" label="Remaining Tokens" placeholder='50/50 Tokens Remaining' />
            <NumLine id="m-price" label="Token Price" placeholder='21 Matic' />
        </div>
        </div>
    );
    }   


export default Event;

