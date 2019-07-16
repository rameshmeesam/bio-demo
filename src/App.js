import React from 'react';
import './App.css';
import BoiView from './js/components/BoiView';
import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderForm from './js/components/OrderForm';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
        
          <Route exact path="/" component={BoiView} />
          <Route path="/order" component={OrderForm} />

        </div>
      </Router>
      

    </div>
  );
}

export default App;
