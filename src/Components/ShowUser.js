import React, {Component} from 'react';
import {getUser} from '../Modules/User';

class ShowUser extends Component {
    constructor() {
        super();
        this.state = {user: ''}
    }

    componentWillMount() {
        getUser().then(response => {
            this.setState({user: response.data.data})
        })
    }

    displayUser() {
        return this.state.user.attributes.email
    };

    displayUserPlants() {
        return this.state.user.relationships.plants.data
    };

    render() {


        return (
            <div>
                <h3>User</h3>
                <p>{this.displayUser.bind(this)}</p>
                <ul>
                    <li>{this.displayUserPlants.bind(this)}</li>
                </ul>
            </div>
        );
    }
}

export default ShowUser;