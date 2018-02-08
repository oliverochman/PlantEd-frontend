import React, {Component} from 'react';
import EventEmitter from './Modules/EventEmitter'
import AddPlant from './Components/AddPlant';
import ShowUser from './Components/ShowUser'
import Login from './Components/LoginPage';
import {ToastContainer, toast} from 'react-toastify'
import {Container, Row, Col, Button} from 'reactstrap';

import './App.css';
import {deAuthenticate} from "./Modules/Auth";


class App extends Component {

    static notify() {
        let email = JSON.parse(sessionStorage.getItem('credentials')).uid;
        toast(`Logged in as ${email}`, {autoClose: 8000});
    }

    constructor() {
        super();
        this.state = {user: '', authenticated: App.checkSessionStorage()}

    }

    static checkSessionStorage() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'));

        return !(credentials === null || credentials.length === 0);
    }

    componentWillMount() {
        EventEmitter.subscribe('authenticate.update', this.updateAuthState.bind(this));
    }


    componentWillUnmount() {
        EventEmitter.unsubscribe('authenticate.update', null);
    }


    updateAuthState() {

        this.setState({authenticated: true});
        App.notify();
        this.forceUpdate.bind(this);
    }

    resetAuthState(){
        deAuthenticate().then(()=>{
            this.setState({authenticated: false});
            //this.forceUpdate.bind(this);
            window.location.reload()
        })

    }


    render() {
        let logOutButton;

        if (this.state.authenticated === true) {
            logOutButton = <Button color="secondary" onClick={this.resetAuthState.bind(this)}>Log out</Button>
        }


        const header = (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to PlantEd</h1>
                    {logOutButton}
                </header>
            </div>
        );


        if (this.state.authenticated === false) {
            return (
                <div>
                    {header}
                    <Container>
                        <Row>
                            <Col>
                                <Login/>
                            </Col>
                        </Row>
                    </Container>
                </div>

            )
        } else {
            return (

                <div>
                    {header}
                    <Container>
                        <Row>
                            <Col>
                                <ToastContainer/>
                                <AddPlant/>
                            </Col>
                            <Col>
                                <ShowUser/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}

export default App;
