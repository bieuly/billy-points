import React, { Component } from 'react';
import firebase from 'firebase';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      points: 0
    }
  }

  componentDidMount() {
    const pointsRef = firebase.database().ref().child("points");
    const billyRef = pointsRef.child("billy");
    const billyPointsRef = billyRef.child("points");
    billyPointsRef.on('value', snap => {
      this.setState({
        points: snap.val()
      });
    });
  }

  render() {
    return (
      <div className="App">
        {`You have ${this.state.points} billy points!`}
      </div>
    );
  }
}

export default App;
