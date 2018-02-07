import React, {Component} from 'react';
import EventEmitter from './Modules/EventEmitter'
import AddPlant from './Components/AddPlant';
import ShowUser from './Components/ShowUser'
import Login from './Components/LoginPage';
import {ToastContainer, toast} from 'react-toastify'
import {Container, Row, Col} from 'reactstrap';
import './App.css';


class App extends Component {

    static notify() {
        let email = JSON.parse(sessionStorage.getItem('credentials')).uid;
        toast(`Logged in as ${email}`, {autoClose: 8000});
    }

    constructor() {
        super();
        this.state = {plants: [], authenticated: this.checkSessionStorage()}
    }

    checkSessionStorage() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'));

        return !(credentials === null || credentials.length === 0);
    }

    componentDidMount() {
        EventEmitter.subscribe('authenticate.update', this.updateAuthState.bind(this));

    }

    updateAuthState() {
        App.notify();
        this.setState({authenticated: true});

    }


    render() {

        const header = (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to PlantEd</h1>
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
                               {/*<ShowUser/>*/}
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}

export default App;
