import React, { Component } from 'react';
import firebase from 'firebase';
import CountUp from 'react-countup';
import styled from 'styled-components';

const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

const Legend = styled.div`
  display:block;
  font-size: 11px;
  padding-top: 30px;
  padding-right: 40px;
  text-align: right;
`;

const Main = styled.div`
  display: flex;
  height: calc(100% - 100px);
  width: 100%;
`;

const CounterContainer = styled.div`
  width: 100%;
  text-align: center;
  align-self: center;
`;

const Counter = styled(CountUp)`
  font-size: 20em;
`;

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

  handleCountingFinished = () => {
    this.state.setState({
      countingFinished: true
    })
  }

  render() {
    return (
      <AppContainer>
        <Legend>BP = Billy Points</Legend>
        <Main>
          <CounterContainer>
              <Counter className end={this.state.points}/>
            <span> BPs</span>
          </CounterContainer>
        </Main>
      </AppContainer>
    );
  }
}

export default App;
