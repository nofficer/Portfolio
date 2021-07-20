
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Landing from './Landing/Landing'
import Header from './Header'
import Projects from './Projects/Projects'

import '../App.css';

const App = () => {

  return (
    <div>

      <Router history={history}>
        <div>
        <Header />
        <div>
          <Switch>
          <Route path ='/' exact component={Landing}/>
            <Route path ='/home' exact component={Landing}/>
            <Route path ='/about' exact component={Landing}/>
            <Route path ='/projects' exact component={Projects}/>

          </Switch>
          </div>
        </div>
      </Router>

    </div>
  );
}


export default App;
