import React, { Component } from 'react';
import {getPlants} from '../Modules/Plants';
import { Button } from 'reactstrap';
// import SelectButton from 'SelectButton';

class AddPlant extends Component {
    constructor() {
      super();
      this.state = {plants: []}
    }

    componentDidMount() {
        getPlants().then(response => {
            this.setState({plants: response.data})
        })
    }

    createPlant(e) {
        e.preventDefault();
        let plant = this.state.plants['0'];
        debugger;
        if (typeof plant === 'string' && plant.length > 0) {
            this.props.selectPlant(plant);
        }
    }

    selectPlant(plant) {
        let timestamp = (new Date()).getTime();
        this.state.plants['plant-' + timestamp] =plant;
        this.setState({plants : this.state.plants });
    }

    render() {
      const plantOptions = this.state.plants.map(plant => {
          return <option key={plant.id} value="plant">{plant.attributes.name}</option>
      });
        return (
            <div>
                <h3>Select your plants from the list here:</h3>
                <select ref="plant">
                    {plantOptions}
                </select>
                <Button size="sm" onClick={this.createPlant.bind(this)}>Add Plant</Button>
                <ul>
                    <li>{this.state.selectPlant}</li>
                </ul>
            </div>
        );
    }
}
export default AddPlant;
