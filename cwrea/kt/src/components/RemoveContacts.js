import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class RemoveContacts extends Component {

    state = {
        redirect: false
    }

    delContact = () => {

        let id = this.props.match.params.id;
        let kfs = JSON.parse(localStorage.getItem("KT"));
        kfs.splice(id, 1);
        localStorage.setItem("KT", JSON.stringify(kfs));
        this.setState({ redirect: true });
    }

    cancel = () => {
        this.setState({ redirect: true });
    }


    render() {
        if (this.state.redirect === true) {
            return <Redirect to="/" />
        }
        return (
            <p>
                Czy chcesz usunąć kontakt?
                <button onClick={this.delContact}>Tak</button>
                <button onClick={this.cancel}>Nie</button>
            </p>
        )

    };
}




export default RemoveContacts;