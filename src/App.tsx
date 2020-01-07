import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Header from './Sections/Header';
import Footer from './Sections/Footer';
import NotFound from './Sections/NotFound';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header/> 
        <Switch>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
