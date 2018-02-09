import React, {Component} from 'react';
import EventEmitter from './Modules/EventEmitter'
import AddPlant from './Components/AddPlant';
import ShowUser from './Components/ShowUser'
import Login from './Components/LoginPage';
import {ToastContainer, toast} from 'react-toastify'
import {Jumbotron, Container, Row, Col, Button} from 'reactstrap';
import ActionCable from 'actioncable'

import './App.css';
import {deAuthenticate} from "./Modules/Auth";

// const cable = ActionCable.createConsumer("ws://localhost:3001/cable");


class App extends Component {

    static notify() {
        let email = JSON.parse(sessionStorage.getItem('credentials')).uid;
        toast(`Logged in as ${email}`, {autoClose: 8000});
    }

    constructor() {
        super();
        this.state = {
            user: '',
            authenticated: App.checkSessionStorage(),
            notifications: []
        }

    }

    static checkSessionStorage() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'));

        return !(credentials === null || credentials.length === 0);
    }

    // componentWillMount() {
    //     cable.subscriptions.create({channel: 'NotificationChannel', user_id: JSON.parse(sessionStorage.getItem('current_user')).id}, {
    //         received: (data) => {
    //             console.log('received message')
    //             return toast(data.notification, {autoClose: 8000})
    //         },
    //     });
    //     EventEmitter.subscribe('authenticate.update', this.updateAuthState.bind(this));
    // }


    componentWillUnmount() {
        EventEmitter.unsubscribe('authenticate.update', null);
    }


    updateAuthState() {

        this.setState({authenticated: true});
        App.notify();
        this.forceUpdate.bind(this);
    }

    resetAuthState() {
        deAuthenticate().then(() => {
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
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Welcome to PlantEd</h1>
                        <p className="lead">Keeping your plants alive</p>
                        {logOutButton}
                    </Container>
                </Jumbotron>
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
                        <ToastContainer/>
                        <ShowUser/>
                        <AddPlant/>
                    </Container>
                </div>

            )
        }
    }
}

export default App;
