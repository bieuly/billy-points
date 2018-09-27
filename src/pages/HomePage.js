import React, { Component } from 'react';
import { Button, Card, Icon, Form, Image, Segment } from 'semantic-ui-react'
import styled from 'styled-components';
import firebase from 'firebase';

const HomePageContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-areas:
        ". . . .  ."
        ". . title loginForm ."
        ". . . . ."
`;

const LoginFormContainer = styled.div`
    grid-area: loginForm
`;

const LoginForm = styled(Form)`
    height: 100%;
`;

const FormButton = styled(Button)`
    margin-bottom: 10px !important;
`;

const TitleContainer = styled.div`
    grid-area: title;
    max-width: 300px;
`;

class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            login: {
                username: "",
                password: ""
            }
        }
    }



    handleOnChange = (e) => {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.id]: e.target.value
            }
        })
    }

    handleLoginSubmit = async () => {
        await firebase.auth().signInWithEmailAndPassword(this.state.login.username, this.state.login.password);
        firebase.auth().onAuthStateChanged((user) => {
            this.props.history.push("/dashboard")
        })
    }

    render() {
        return (
            <HomePageContainer>
                <TitleContainer>
                    <h1>Hello!</h1>
                    <h2>Register to keep track of your points</h2>
                </TitleContainer>
                <LoginFormContainer>
                    <h1></h1>
                    <LoginForm onSubmit={this.handleLoginSubmit}>
                            <Segment>
                                <Form.Input
                                    id='username'
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    onChange={(e)=>this.handleOnChange(e)}
                                />
                                <Form.Input
                                    id='password'
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={(e)=>this.handleOnChange(e)}
                                />
                                <FormButton id="login" type="submit" primary fluid size='large'>
                                Login
                                </FormButton>
                                <FormButton id="signup" type="submit" fluid size='large'>
                                Sign Up
                                </FormButton>
                            </Segment>
                        </LoginForm>
                </LoginFormContainer>
            </HomePageContainer>
        )
    }

}

export default HomePage