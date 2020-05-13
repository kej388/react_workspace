import React from 'react';

class Student extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id : "Id",
            name : "Who",
            address : "Seoul"
        }
    }

    render() {
        return (
            <div>
                <h2>id : {this.state.id}</h2>
                <p>name : {this.state.name}</p>
                <p>address : {this.state.address}</p>
            </div>
        )
    }
}

export default Student;

