
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'
import Landing from './Landing/Landing'
import Header from './Header'
import Projects from './Projects/Projects'
import AboutMe from './AboutMe/AboutMe'
import '../App.css';
import background from './Background.jpg'
import Resume from './Resume/Resume'

const backStyle = {

  backgroundImage: `url(${background})`,
  webkitBackgroundSize: 'cover',
  mozBackgroundSize: 'cover',
  oBackgroundSize: 'cover',
  backgroundSize: 'cover',
  height: '100vh',
  backgroundPosition: 'top center'
}


const App = () => {

  return (
    <div style={backStyle} >

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
