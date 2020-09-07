import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// Pages
import Home from './pages/Home.js';
import All from './pages/All.js';
import SecondStep from './pages/SecondStep.js';
import Active from './pages/Active.js';
import LongTerm from './pages/LongTerm.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
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
            <Route path="/" component={Home} exact />
            <Route path="/all" component={All} />
            <Route path="/step2" component={SecondStep} />
            <Route path="/active" component={Active} />
            <Route path="/passive" component={LongTerm} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </Router>


      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
    </>
  );
}

export default App;
