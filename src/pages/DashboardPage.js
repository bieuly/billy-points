import React, { Component } from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import firebase from 'firebase';

const DashboardContainer = styled.div`
    height: 100%
`;

const Legend = styled.div`
  width: 100%;
  position: fixed;
  box-sizing: border-box;
  font-size: 11px;
  padding-top: 30px;
  padding-right: 40px;
  text-align: right;
`;

const Main = styled.div`
  justify-content: center;
  display: flex;
  height: 100%
`;

const CounterContainer = styled.div`
  align-self: center;
`;

const Counter = styled(CountUp)`
  font-size: 20em;
`;

class DashboardPage extends Component {
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
            <DashboardContainer>
                <Legend>BP = Billy Points</Legend>
                <Main>
                    <CounterContainer>
                        <Counter className end={this.state.points}/>
                        <span> BPs</span>
                    </CounterContainer>
                </Main>
            </DashboardContainer>
        );
    }
}

export default DashboardPage;