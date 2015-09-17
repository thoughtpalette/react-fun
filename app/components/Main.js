import React from 'react';
import Firebase from 'firebase';
import Router from 'react-router';
import axios from 'axios';

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            users: ["chris"]
        }
    }
    // componentDidMount() {

        // this.ref = new Firebase('https://torrid-torch-7417.firebaseio.com');

        // var childRef = this.ref.child('users');

        // this.bindAsArray(childRef, 'users');

        // this.ref.on("value", function ( snapshot )
        // {
        //     this.setState({
        //         users: snapshot.val()
        //     });
        // }.bind(this));
    // }
    render() {
        return (
            <div> Hi, this is a test page {this.state.users}</div>
        )
    }
};

export default Main;