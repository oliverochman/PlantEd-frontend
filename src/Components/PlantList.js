import React, {Component} from 'react';
import {getPlants} from '../api/plants';

class PlantList extends Component {
    constructor(props) {
        super(props)
        this.state = {plants: []}
    }

    componentDidMount() {
        debugger;
        getPlants().then(data => {
            this.setState({plants: data.entity.data})
        })
    }

    render() {
        debugger;
        const plantList = this.state.plants.map(plant => {
            return <li key={plant.id}>{plant.attributes.name}</li>
        });
        return (
            <div>
                <ul style={{listStyle: 'none'}}>
                    {plantList}
                </ul>
            </div>
        );
    }
}

export default PlantList;
