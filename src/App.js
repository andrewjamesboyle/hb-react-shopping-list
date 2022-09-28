import { Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth/Auth';
import Header from './components/Header';
import Items from './components/Items/Items';
import backgroundImage from './supermarket.jpeg';
import { Redirect } from 'react-router-dom';


function App() {
  
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/items" component={Items} />
        <Route exact path="/">
          <Redirect to="/items" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
