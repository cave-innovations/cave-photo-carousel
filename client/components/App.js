import React from 'react';
import Gallery from './Gallery/Gallery.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Gallery />
      </div>
    )
  }
}

export default App;