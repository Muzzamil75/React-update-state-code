import React from 'react';

//receinvg props from CardList
const cards = (props) => {

    return (
        <div className="tc bg-light-green br3 pa3 ma2 dib bw2 shadow-5" >
      
            <img alt="rootbs" src={'https://robohash.org/{$props.id}?200*200'} />          
            <div>
                {props.id}
                <p>{props.name}</p>
            </div>

        </div>

    )
}

export default cards;

