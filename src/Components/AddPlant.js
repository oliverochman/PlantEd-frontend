import React, { Component } from 'react';
import {getPlant, getPlants} from "../api/plants";
import PlantList from "/PlantList";

class AddPlant extends Component {
    static defaultProps = {
        plants: [getPlants]
    }

    componentDidMount() {
        getPlants().then(data => {
            this.setState({plants: data.entity.data})
        })
    }

    render() {
        const plantOptions = this.props.plants.map(plant => {
            return <option key={plant} value="plant">{plantList}</option>
        });
        return (
            <div>
                <h3>Add your Plant:</h3>
                <select ref="plant">
                    {plantOptions}
                </select>
            </div>
        );
    }
}
export default AddPlant;