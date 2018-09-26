import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import styled from 'styled-components';

const HomePageContainer = styled.div`
    height: 100%;
`;

class HomePage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <HomePageContainer>
                <Grid textAlign='' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        />

                        <Link to="/dashboard">
                            <Button primary fluid size='large'>
                            Login
                            </Button>
                        </Link>
                    </Segment>
                    </Form>
                    <Message>
                    New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
                </Grid>
            </HomePageContainer>
        )
    }

}

export default HomePage