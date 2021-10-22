import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import {Container} from "react-bootstrap"

import Home from './Home'
import AboutUs from './AboutUs'
import ViewForm from './ViewForm'
import NotFound from './404'

import NavigationBar from "./NavigationBar"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NavigationBar />

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
      </Container>
    </BrowserRouter>
  );
}

export default App;
