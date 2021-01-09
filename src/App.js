import Landing from './components/Landing'
import Home from './components/Home';
import VidPage from './components/VidPage'
import Gallery from './components/Gallery'
import Published from './components/Published'
import WebDev from './components/WebDev'
import './App.css';

import {HashRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router basename="/">
      <Switch>
          <Route exact path="/" component={Landing}>
            <Landing />
        </Route>
        <Route exact path="/Home" component={Home}>
            <Home />
        </Route>
        <Route exact path="/VidPage" component={VidPage}>
            <VidPage />
        </Route>
        <Route exact path="/Gallery" component={Gallery}>
          <Gallery />
        </Route>
        <Route exact path="/Published" component={Published}>
          <Published />
        </Route>
        <Route exact path="/WebDev" component={WebDev}>
          <WebDev/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
