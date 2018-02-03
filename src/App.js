import React, {Component} from 'react';
import {getPlants} from './api/plants';
import Selector, {Components} from './components/Selector';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {plants: []}
    }

    componentDidMount() {
        getPlants().then(data => {
            this.setState({plants: data.entity.data})
        })
    }

    render() {
        const plantList = this.state.plants.map(plant => {
            return <li key={plant.id}>{plant.attributes.name}</li>
        });
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to PlantEd</h1>
                </header>
                <ul style={{listStyle: 'none'}}>
                    {plantList}
                </ul>
            </div>
        );
    }
}

export default App;
