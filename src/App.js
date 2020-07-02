import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Feedback from './components/Feedback';
import LogIn from './components/LogIn';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Router>
        {/* <SignUp /> */}
        {/* <Home /> */}
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/feedback' component={Feedback} />
          <Route path='/signup' component={SignUp} />
          <Route path='/blog' component={Blog} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
