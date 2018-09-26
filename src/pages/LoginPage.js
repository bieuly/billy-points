import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="/dashboard">Login page</Link>
            </div>
        )
    }

}

export default LoginPage