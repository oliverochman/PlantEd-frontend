import React, {Component} from 'react';
import {getUser} from '../Modules/User';
import {AddFrequency} from './Frequency';


class ShowUser extends Component {
    constructor() {
        super();
        this.state = {user: [], isLoading: true}
    }

    componentDidMount() {
        getUser().then(response => {
            this.setState({user: response.data, isLoading: false});
        })
    }


    render() {

        const user = this.state.user;

        if (this.state.isLoading) {
            return <div>Loading</div>
        } else {

            const plantList = this.state.user.relationships.plants.data.map(plant => {
                return (
                    <li key={plant.id} className={'no-bullets'} value="plant">
                        <h4>{plant.name}</h4>
                        <p>{plant.description}</p>
                        <Button>AddFrequency()</Buuton>
                    </li>
                )
            });
            return (
                <div>
                    <h3>User</h3>
                    <p>{user.attributes.email}</p>
                    <ul>
                        {plantList}
                    </ul>
                </div>
            );
        }

    }
}

export default ShowUser;
