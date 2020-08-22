import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Pages
import Home from './pages/Home.js';
import All from './pages/All.js';
import SecondStep from './pages/SecondStep.js';
import Active from './pages/Active.js';
import LongTerm from './pages/LongTerm.js';

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <Router>
        <section id="app">
          <Route path="/" component={Home} exact/>
          <Route path="/all" component={All} />
          <Route path="/step2" component={SecondStep} />
          <Route path="/active" component={Active} />
          <Route path="/passive" component={LongTerm} />
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
