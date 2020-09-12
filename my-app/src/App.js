import React from 'react';
import  {Switch, Route,  BrowserRouter as Router } from 'react-router-dom';

import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'
import AboutUs from './pages/AboutUs.js';
import NavigationBar from './components/NavigationBar.js'
import ProjectPage from './components/project/projectPage'

import Portfolio from './pages/portfolio/portfolioPage.js';


import Timeline from './pages/Timeline/Timeline.jsx'

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavigationBar/> 
          <Switch>
            
              <Route path="/signIn" component={SignIn}/> 
              <Route path="/signUp" component={SignUp}/>
              <Route path="/project" component={ProjectPage}/>
              <Route path="/aboutUs" component={AboutUs}/>


              <Route path="/" component={Timeline}/> 
              //possibly replacing portfolio path with token or unique id
              <Route path="/portfolio" component={Portfolio}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
