import React, {Component} from 'react';
import {getUser} from '../Modules/User';
import EventEmitter from '../Modules/EventEmitter';
import { Collapse } from 'reactstrap';


class ShowUser extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {user: [], isLoading: true,
            collapse: false
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

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }


    render() {

        const user = this.state.user;

        if (this.state.isLoading) {
            return <div>Loading</div>
        } else {
            const plantList = user.relationships.plants.data.map(plant => {
                return (
                    <div>
                        <Collapse multi-collapse isOpen={this.state.collapse}>
                            <div className="container-fluid" onClick={this.toggle}>
                                {/*<p>{plant.image}</p>*/}
                                <div>
                                    <h5>{plant.name}</h5>
                                    <p>{plant.description}</p>
                                </div>
                            </div>
                        </Collapse>
                        <div className="card" onClick={this.toggle}>
                            {/*<p>{plant.image}</p>*/}
                            <div>
                                <h5>{plant.name}</h5>
                                <p>{plant.description}</p>
                            </div>
                        </div>
                    </div>
                )
            });
            return (
                <div>
                    {/*<h3>User</h3>*/}
                    {/*<p>{user.attributes.email}</p>*/}
                    <div className="container">
                        {plantList}
                    </div>
                </div>
            );
        }

    }
}

export default ShowUser;
