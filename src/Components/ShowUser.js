import React, {Component} from 'react';
import {getUser} from '../Modules/User';

class ShowUser extends Component {
    constructor() {
        super();
        this.state = {user: ''}
    }

    componentDidMount() {
        getUser().then(response => {
            this.setState({user: response.data.first})
        })
    }

    render() {
        return (
            <div>
                <h3>User</h3>
                <p key={this.state.user.id}>{this.state.user}</p>
            </div>
        );
    }
}

export default ShowUser;
