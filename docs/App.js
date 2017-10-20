import React, { Component } from 'react';
import Button from '../dist';

class App extends Component {

  onClick(event) {
    console.log(event);
    console.log('click');
  }

  render() {
    return (
      <div>
        <div>
          <div>Default</div>
          <Button
            primary={true}
            disabled={false}
            label="Default"
            onClick={ () => this.onClick(this) }
          />
        </div>
      </div>
    );
  }
}

export default App;
