import React, { Component } from 'react';
import { Button, Card, Message, Icon, Form, Image, Segment } from 'semantic-ui-react'
import styled from 'styled-components';
import firebase from 'firebase';

const SignUpPageContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-areas:
        ". . . ."
        ". signUpForm signUpForm ."
        ". . . ."
`;

const SignUpFormContainer = styled.div`
    grid-area: signUpForm
`;

const SignUpForm = styled(Form)`
    height: 100%;
`;

const FormButton = styled(Button)`
    margin-bottom: 10px !important;
`;

class SignUpPage extends Component {

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
                [e.target.id]: e.target.value,
                error: false
            }
        })
    }

    handleLoginSubmit = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.login.username, this.state.login.password)  
            firebase.auth().onAuthStateChanged((user) => {
                this.props.history.push(`/dashboard/${user.uid}`)
            })
        } catch(error) {
            this.setState({
                login: {
                    error: true
                }
            })
        }
    }

    render() {
        return (
            <SignUpPageContainer>
                <SignUpFormContainer>
                    <h1>We're glad to have you.</h1>
                    {this.state.login.error ? <Message>Username or Password is invalid</Message> : null}
                    <SignUpForm onSubmit={this.handleLoginSubmit}>
                            <Segment style={{"min-width": "356px"}}>
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
                                <FormButton id="signUp" type="submit" primary fluid size='large'>
                                    Register
                                </FormButton>
                            </Segment>
                        </SignUpForm>
                </SignUpFormContainer>
            </SignUpPageContainer>
        )
    }

}

export default SignUpPage;