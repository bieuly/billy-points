import React, { Component } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { Route, Switch, withRouter } from "react-router-dom";
import styled from 'styled-components';

const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

class App extends Component {

  handleCountingFinished = () => {
    this.state.setState({
      countingFinished: true
    })
  }

  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/dashboard" component={DashboardPage}/>
        </Switch>
      </AppContainer>
    );
  }
}

export default App;
