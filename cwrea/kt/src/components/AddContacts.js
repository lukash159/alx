import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AddContacts extends Component {

    state = {
        redirect: false
    }

    addContact = () => {
        let newContact = {
            imie: document.querySelector("input[name='imie']").value,
            nazwisko: document.querySelector("input[name='nazwisko']").value,
            email: document.querySelector("input[name='email']").value,
            telefon: document.querySelector("input[name='telefon']").value
        }

        if (localStorage.getItem("KT")) {
            let kfs = JSON.parse(localStorage.getItem("KT"));
            kfs.push(newContact);
            localStorage.setItem("KT", JSON.stringify(kfs));

        }

        else {
            localStorage.setItem("KT", JSON.stringify([newContact]));
        }
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
            <div>
                <table>
                    <td>
                        <tr><label>Imię </label> </tr>
                        <tr><label>Nazwisko </label></tr>
                        <tr><label>Email </label></tr>
                        <tr><label>Telefon </label></tr>
                    </td>
                    <td>
                        <tr><input type="text" name="imie" /></tr>
                        <tr><input type="text" name="nazwisko" /></tr>
                        <tr> <input type="text" name="email" /></tr>
                        <tr><input type="text" name="telefon" /></tr>
                    </td>
                </table>
                <p>
                    <button onClick={this.addContact}>Zapisz dane</button>
                    <button onClick={this.cancel}>Anuluj</button>
                </p>
            </div>
        );
    }
}

export default AddContacts;