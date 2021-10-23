import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import {Container} from "react-bootstrap"

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ViewForm from './pages/application-form/ViewForm'
import NotFound from './pages/error/404'

import NavigationBar from "./navs/NavigationBar"

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
