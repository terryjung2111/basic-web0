import React from 'react'
import Header from './screens/header/Header';
import Footer from './screens/footer/Footer';
import About from './screens/body/About';
import Contact from './screens/body/Contact';
import Project from './screens/body/Project';
import Home from './screens/body/Home';
import {Route, Switch} from 'react-router-dom';


const App = () => {
  return (
    <div>
      {/*Header*/}
      <div style={{ border: '2px solid red' }}>
        <Header />
      </div>
      {/*Body*/}
      <div style={{ border: '2px solid blue' }}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/project">
            <Project/>
          </Route>
        </Switch>
      </div>
      {/*Footer*/}
      <div style={{ border: '2px solid green' }}>
        <Footer />
      </div>
    </div>
  )
}

export default App;