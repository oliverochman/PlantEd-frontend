import React, {Component} from 'react';
import {getUser} from '../Modules/User';
import { Button, Container, Row, Col } from 'reactstrap';



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
            const plantList = user.relationships.plants.data.map(plant => {
                return (
                    <div className="card">
                        <p>{plant.image}</p>
                        <img className="card-img-top" src="" alt="Card cap"/>
                        <div>
                            <h5>{plant.name}</h5>
                            <p>{plant.description}</p>
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
