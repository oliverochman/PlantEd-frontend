import React, {Component} from 'react';
import AddPlant from './Components/AddPlant';
import './App.css';
import PlantList from "./Components/PlantList";

class App extends Component {
    constructor(){
        super();
        this.state = {plants: []}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to PlantEd</h1>
                </header>
                <PlantList/>
                <AddPlant/>
            </div>
        );
    }
}

export default App;
