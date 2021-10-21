import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import AboutUs from './AboutUs'
import ViewForm from './ViewForm'
import NotFound from './404'

function App() {
  const [page, setPage] = useState('home')
  return (
    <BrowserRouter>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/view-form">View Form</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/application-form">Application Form</Link>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/view-form">
            <ViewForm />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
