import React, {Component} from 'react';
import {getUser} from '../Modules/User';
import EventEmitter from '../Modules/EventEmitter';

class ShowUser extends Component {
    constructor() {
        super();
        this.state = {user: [], isLoading: true,
        }
    }

    componentWillMount() {
        getUser().then(response => {
            this.setState({user: response.data, isLoading: false});
        });
        EventEmitter.subscribe('plant.added', this.fetchUser.bind(this))
    }

    fetchUser() {
        EventEmitter.unsubscribe('plant.added', '');
        getUser().then(response => {
            this.setState({user: response.data, isLoading: false});
            EventEmitter.subscribe('plant.added', this.fetchUser.bind(this))
        })
    }


    render() {

        const user = this.state.user;

        if (this.state.isLoading) {
            return <div>Loading</div>
        } else {
            const plantList = user.relationships.plants.data.map(plant => {
                return (
                    <div className="card">
                        {/*<p>{plant.image}</p>*/}
                        <div>
                            <h5>{plant.name}</h5>
                            <p>{plant.description}</p>
                        </div>
                    </div>
                )
            });
            return (
                <div>
                    <div className="container">
                        {plantList}
                    </div>
                </div>
            );
        }

    }
}

export default ShowUser;
