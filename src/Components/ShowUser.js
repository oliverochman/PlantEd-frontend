import React, {Component} from 'react';
import {getUser} from '../Modules/User';
import { Card, CardImg, CardText, CardBlock, CardTitle, Button, Container, Row, Col } from 'reactstrap';



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
            //
            const plantList = this.state.user.relationships.plants.data.map(plant => {
                return (
                    <Card>
                        <CardImg top width="100%" src="" alt="Card image cap" />
                        <CardBlock key={plant.id} className={'no-bullets'} value="plant">
                            <CardTitle>{plant.name}</CardTitle>
                            <CardText>{plant.description}</CardText>
                            <Button>Edit</Button>
                        </CardBlock>
                    </Card>
                )
            });
            return (
                <div>
                    <h3>User</h3>
                    <p>{user.attributes.email}</p>
                    <Container>
                        <Row>
                            <Col>
                                {plantList}
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }

    }
}

export default ShowUser;
