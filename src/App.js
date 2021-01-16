import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Loading from './components/Loading.js';

// Pages
import Home from './pages/Home.js';
import All from './pages/All.js';
import SecondStep from './pages/SecondStep.js';
import Active from './pages/Active.js';
import LongTerm from './pages/LongTerm.js';
import NotFound from './pages/NotFound.js';



function App() {

  return (
    <Loading>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      <link 
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" 
      />
      <link 
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />

      <Router>
        <section id="app">
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} component={Home} exact/>
            <Route path={process.env.PUBLIC_URL + '/all'} component={All}/>
            <Route path={process.env.PUBLIC_URL + '/step2'} component={SecondStep}/>
            <Route path={process.env.PUBLIC_URL + '/active'} component={Active}/>
            <Route path={process.env.PUBLIC_URL + '/passive'} component={LongTerm}/>
            <Route component={NotFound}/>
          </Switch>
        </section>
      </Router>


      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin></script>
    </Loading>
  );
}

export default App;
