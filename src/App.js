import React, { Component } from 'react';
import './App.css';
import { getPlants } from './api/plants'

// const renderLine = (plant, key) => <li key={key}><b>{key}</b>: plant[key]}</li>

class App extends Component {
  constructor (props) {
    super(props)
     // debugger;
    this.state = { plants: [] }
  }

  componentDidMount() {
    getPlants().then(data => {
       // debugger;
      this.setState({ plants: data.entity.data })
        // debugger;
    })
  }

  render() {
    // const { plant } = this.state
    const plantList = this.state.plants.map(plant => {
      return <li key={plant.id}>{plant.attributes.name}</li>
    });

      return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to PlantEd</h1>
        </header>
        <ul style={{ listStyle: 'none'}}>
          {
            plantList
          }
        </ul>
      </div>
    );
  }
}

export default App;
