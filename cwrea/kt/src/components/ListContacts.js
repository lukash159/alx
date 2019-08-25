import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListContacts extends Component {

    state = {
        dane: JSON.parse(localStorage.getItem("KT"))
    }


    render() {
        return (

            <table>
                <tr>
                    <td>Imię</td>
                    <td>Nazwisko</td>
                    <td>Email</td>
                    <td>Telefon</td>
                </tr>
                {this.state.dane != null ? this.state.dane.map((value, key) => <tr>
                    <td>{value.imie}</td>
                    <td>{value.nazwisko}</td>
                    <td>{value.email}</td>
                    <td>{value.telefon}</td>
                    <td><Link to={`/del/${key}`}>Usun</Link></td>
                    <td><Link to={`/edit/${key}`}>Edytuj</Link></td>
                </tr>) : <tr><td colspan='4'>Brak danych.</td></tr>}
            </table>
        );
    }
}








export default ListContacts;