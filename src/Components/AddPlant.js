import React, { Component } from 'react';
import {getPlants} from '../Modules/Plants';

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

    render() {
      const plantOptions = this.state.plants.map(plant => {
          return <option key={plant.id} value="plant">{plant.attributes.name}</option>
      });
        return (
            <div className="form-inline" id="select-plant">
                <h4>Select a plant to add it to your own collection:</h4>
                <select className="form-control" ref="plant" id="select">
                    {plantOptions}
                </select>
            </div>
        );
    }
}
export default AddPlant;
