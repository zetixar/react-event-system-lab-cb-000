import React from 'react';

export default class Keypad extends React.Component {
  detectEnteringPassword = () => {
    console.log('Entering password...');
  }

  render(){
    return(
      <div>
        <input onKeyUp={this.detectEnteringPassword} type="password" placeholder="password" />
      </div>
    )
  }
}
