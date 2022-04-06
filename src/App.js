import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Problem1 from './views/Problem1';
import Problem2 from './views/Problem2';
import Header from './components/Header/Header';
import Problem3 from './views/Problem3';
import FourOhFour from './components/FourOhFour';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/problem-1" />
          </Route>
          <Route path="/problem-1">
            <Problem1 />
          </Route>
          <Route path="/problem-2">
            <Problem2 />
          </Route>
          <Route path="/problem-3">
            <Problem3 />
          </Route>
          <Route>
            <FourOhFour />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
