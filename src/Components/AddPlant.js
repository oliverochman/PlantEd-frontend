import React, { Component } from 'react';
import {getPlants} from '../Modules/Plants';
import { Button } from 'reactstrap';
// import SelectButton from 'SelectButton';

class AddPlant extends Component {
    constructor(props) {
      super(props);
      this.state = {
          plants: []
      };

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        getPlants().then(response => {
            this.setState({plants: response.data})
        })
    }

    // createPlant(e) {
    //     e.preventDefault();
    //     let plant = this.state.plants['0'];
    //     debugger;
    //     if (typeof plant === 'string' && plant.length > 0) {
    //         this.props.selectPlant(plant);
    //     }
    // }
    //
    // selectPlant(plant) {
    //     let timestamp = (new Date()).getTime();
    //     this.state.plants['plant-' + timestamp] =plant;
    //     this.setState({plants : this.state.plants });
    // }

    onClick(event) {
        this.setState({value: event.target.value});
    }

    render() {
      const plantOptions = this.state.plants.map(plant => {
          return <option key={plant.id} value={this.state.value}>{plant.attributes.name}</option>
      });
        return (
            <div>
                <h3>Select your plants from the list here:</h3>
                <select value={this.state.value} onChange={this.onClick} ref="plant">
                    {plantOptions}
                </select>
                {/*<Button size="sm" onClick={this.createPlant.bind(this)}>Add Plant</Button>*/}
                <ul>
                    <li>{this.state.value}</li>
                </ul>
            </div>
        );
    }
}
export default AddPlant;
