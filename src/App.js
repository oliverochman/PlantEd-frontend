import React, {Component} from 'react';
import EventEmitter from './Modules/EventEmitter'
import AddPlant from './Components/AddPlant';
import Login from './Components/LoginPage';
import './App.css';


class App extends Component {


    constructor() {
        super();
        this.state = {plants: [], authenticated: false}
    }

    componentDidMount() {
        EventEmitter.subscribe('authenticate.update', this.updateAuthState.bind(this));

    }

    updateAuthState(){
        this.setState({authenticated: true})
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
                    <Login/>;
                </div>
            )
        } else {
            return (
                <div>
                    {header}
                    <AddPlant/>
                </div>

            )


        }
    }
}

export default App;
