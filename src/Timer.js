import React, { Components } from 'react';
import { useState} from 'react';
//import { Button } from 'react-native';
import Buttons from './Buttons.js';

class Timer extends Components {
    //const [hours, setHours] = useState(0);
    constructor(props){
        super(props);
        this.state = {
          minutes: 0,
          seconds: 0.
     
        };

    }
    //const [minutes, setMinutes] = useState(0);
    //const [seconds, setSeconds] = useState(0);

    // 25 min
    // 10 min
    // 5 min
    // depending on button pressed
    //const twentyFive = 25;
    //const ten = 10;
    //const five = 5;
    render () {
   /* const handleClick = (e) => {
        setMinutes(twentyFive);
    };*/
    
  
    return (
        <div className="timer">
        <p>Mins: {minutes}</p>
        <Buttons twentyFive={twentyFive} ten={ten} five={five} setMinutes={setMinutes}/>
        
        
        </div>
    );
    }
};

export default Timer;