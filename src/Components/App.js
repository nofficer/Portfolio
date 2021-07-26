
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Landing from './Landing/Landing'
import Header from './Header'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import '../App.css';
import background from './Background.jpg'
import Resume from './Resume/Resume'




const App = () => {

  return (
    <div className='backStyle'>

      <Router history={history}>
        <div >
        <Header />
        <div>
          <Switch>
          <Route path ='/' exact component={Landing}/>
            <Route path ='/home' exact component={Landing}/>
            <Route path ='/about' exact component={AboutMe}/>
            <Route path ='/projects' exact component={Projects}/>
            <Route path ='/resume' exact component={Resume}/>
          </Switch>
          </div>
        </div>
      </Router>

    </div>
  );
}


export default App;
