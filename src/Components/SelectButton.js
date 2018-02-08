import React, { Component } from 'react';

class SelectButton extends Component {
    constructor(props, context) {
        super(props, context);

        this.createList = this.createList.bind(this);
    }

    createList(plant) {
        return <li key={plant.key}>{plant.attributes.name}</li>
    }

    render() {
        let plantEntries = this.props.entries;
        let listPlants = plantEntries.map(this.createList);

        return (
            <ul className="theList">
                {listPlants}
            </ul>
        );
    }
};
export default SelectButton;

