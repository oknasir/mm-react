import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ApplicationForm from './pages/application-form/'
import ViewForm from './pages/application-form/ViewForm'
import NotFound from './pages/error/404'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home title="Nasir Mehmood's Resume" />
        </Route>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/application-form">
          <ApplicationForm />
        </Route>
        <Route path="/view-form">
          <ViewForm />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
