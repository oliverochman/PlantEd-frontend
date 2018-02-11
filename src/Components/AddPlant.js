import React, {Component} from 'react';
import {getPlants, getPlant} from '../Modules/Plants';
import {Button} from 'reactstrap';
import SelectButton from '../Components/SelectButton';
import {createUserPlant} from '../Modules/UserPlant';
import EventEmitter from '../Modules/EventEmitter';


class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plants: [],
            selectedPlant: ''
        };
    }

    componentDidMount() {
        getPlants().then(response => {
            this.setState({plants: response.data})
        })
    }

    handleSelect(event) {
        this.setState({
            selectedPlant: event.target.value
        })
    }

    selectPlant() {
        const plant = this.state.selectedPlant;
        createUserPlant(plant).then((response) => {
            console.log(response);
            EventEmitter.publish('plant.added', '');
        })
    }

    render() {
        const plantOptions = this.state.plants.map(plant => {
            return <option key={plant.id} value={plant.id}>{plant.attributes.name}</option>
        });
        return (
            <div>
                <h3>Select your plants from the list here:</h3>
                <select className="form-control" onChange={this.handleSelect.bind(this)} is="select">
                    {plantOptions}
                </select>
                <Button size="sm" onClick={this.selectPlant.bind(this)}>Add Plant</Button>
            </div>
        );
    }
}

export default AddPlant;
