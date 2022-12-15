
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    document.body.style.margin = '0px';
    return (
      <div>
        <Router>

          <Navbar />
          
          <Routes>

                <Route exact path="/" element={<News key="general" pageSize={6} category="general" active_class="active" />}></Route>  
                <Route exact path="/Health" element={<News key="Business" pageSize={6} category="health" active_class="active" />}></Route>    
                <Route exact path="/Business" element={<News key="Health" pageSize={6} category="business" active_class="active"/>}></Route>    
                <Route exact path="/Entertainment" element={<News key="Entertainment" pageSize={6} category="entertainment" active_class="active"/>}></Route>    
                <Route exact path="/Sports" element={<News key="sports" pageSize={6} category="sports" active_class="active"/>}></Route>    
                <Route exact path="/Technology" element={<News key="Technology" pageSize={6} category="technology" active_class="active"/>}></Route> 
                    
          </Routes>
        </Router>
      </div>

    )
  }
}



