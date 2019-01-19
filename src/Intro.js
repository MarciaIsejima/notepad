import React from 'react';

const Intro = (props) => {
    return  (
        <p>
          {props.user.name}, edit <code>src/App.js</code> and save to reload.
        </p>
    )
}

export default Intro;