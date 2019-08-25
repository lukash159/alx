import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class EditContacts extends Component {

    state = {
        redirect: false
    }

    id = this.props.match.params.id;
    kfs = JSON.parse(localStorage.getItem("KT"));

    state = {

        imie: this.kfs[this.id].imie,
        nazwisko: this.kfs[this.id].nazwisko,
        email: this.kfs[this.id].email,
        telefon: this.kfs[this.id].telefon
    }

    valueChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    editContact = () => {

        let kfs = JSON.parse(localStorage.getItem("KT"));
        let id = this.props.match.params.id;

        kfs[id].imie = this.state.imie;
        kfs[id].nazwisko = this.state.nazwisko;
        kfs[id].email = this.state.email;
        kfs[id].telefon = this.state.telefon;

        localStorage.setItem("KT", JSON.stringify(kfs));
        this.setState({ redirect: true });
    };

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
                        <tr><input type="text" name="imie" value={this.state.imie} onChange={this.valueChange} /></tr>
                        <tr><input type="text" name="nazwisko" value={this.state.nazwisko} onChange={this.valueChange} /></tr>
                        <tr><input type="text" name="email" value={this.state.email} onChange={this.valueChange} /></tr>
                        <tr><input type="text" name="telefon" value={this.state.telefon} onChange={this.valueChange} /></tr>
                    </td>
                </table>
                <p>
                    <button onClick={this.editContact}>Zapisz dane</button>
                    <button onClick={this.cancel}>Anuluj</button>
                </p>
            </div>
        )

    };
}

export default EditContacts;