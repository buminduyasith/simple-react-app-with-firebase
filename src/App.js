
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>

        <Switch>



          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/" component={Login} />


          <Route component={Error} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
