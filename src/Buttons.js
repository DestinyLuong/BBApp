import React from 'react';
import { Button } from 'react-native';

function Buttons({twentyFive, five, ten, setMinutes}) {

  /*
      <Button>10</Button>
       <Button onPress={() => Alert.alert('Simple Button pressed')}
            title="Short"
            color="#841584"/>
      <Button>25</Button>
  */
      //const twentyFive = this.twentyFive;
      //const ten = this.ten;
      //const five = this.five;
    return (
      <div className="Buttons">  
        <Button class="button" onClick={() => setMinutes(twentyFive)}
        title = "Work"    
        />
        <Button class="button" onClick={() => setMinutes(five)}
            title = "Short Break"    
        />
        <Button class="button" onClick={() => setMinutes(ten)}
            title = "Long Break"    
        />
        <Button class="button" onClick={() => setMinutes(twentyFive)}
            title = "Custom"    
        />
      </div>
      );
}

export default Buttons;