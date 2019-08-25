import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ListContacts from "./components/ListContacts";
import AddContacts from "./components/AddContacts";
import RemoveContacts from "./components/RemoveContacts";
import EditContacts from "./components/EditContacts";

class App extends Component {

  render() {

    return (

      <div>

        <h1>Książka telefoniczna</h1>



        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Lista kontaktów</Link>
            </li>
            <li>
              <Link to="/add">Dodaj nowy kontakt</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={ListContacts} />
            <Route path="/add" component={AddContacts} />
            <Route path="/del/:id" component={RemoveContacts} />
            <Route path="/edit/:id" component={EditContacts} />




          </Switch>


        </BrowserRouter>
      </div>
    )
  }
}


export default App;
