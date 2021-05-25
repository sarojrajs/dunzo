import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import SearchResult from './pages/SearchResult';
import Partner from './pages/Partner';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/partner'><Partner/></Route>
          <Route path='/:category'><SearchResult/></Route>
          <Route path='/'exact><Home/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
