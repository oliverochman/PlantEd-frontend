import React, {Component} from 'react';
import AddPlant from './Components/AddPlant';
import Login from './Components/LoginPage';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {plants: []}
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to PlantEd</h1>
                </header>
                <AddPlant/>
            </div>
        );
    }
}

export default App;
