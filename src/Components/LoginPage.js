import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            authenticated: false
        }
    }

    handleSubmit() {
        let request = new XMLHttpRequest();
        //request.open('POST', 'https://planted-api.herokuapp.com/api/v1/auth/sign_in');
        request.open('POST', 'http://localhost:3001/api/v1/auth/sign_in');
        request.setRequestHeader('Content-Type', 'application/json');
        debugger;
        request.send(JSON.stringify({email: this.state.email, password: this.state.password}));  //The shit we get from the form
        request.addEventListener('load', () => {
            // change state

            const uid = request.getResponseHeader('uid');
            const client = request.getResponseHeader('client');
            const accessToken = request.getResponseHeader('access-token');
            const expiry = request.getResponseHeader('expiry');
        })

    }


    render() {

        return (
            <div className='row jusify-content-center'>
                <div className='col-10 col-sm-7 col-md-5 col-lg-4'>
                    <form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail"
                                   placeholder="with a placeholder"
                                   value={this.state.email}
                                   onChange={(e) => this.setState( {email: e.target.value})}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword"
                                   placeholder="password placeholder"
                                   value={this.state.password}
                                   onChange={(e) => this.setState( {password: e.target.value})}/>
                        </FormGroup>
                        <Button onClick={this.handleSubmit.bind(this)}>Login</Button>
                    </form>
                </div>
            </div>

        );
    }
}

export default Login;
