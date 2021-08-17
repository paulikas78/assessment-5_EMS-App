import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import AilmentPage from './pages/AilmentPage'
import DemographicPage from './pages/DemographicPage'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/ailments/:ailmentId" exact component={AilmentPage} />
            <Route path="/ailments/:ailmentId/demographics/:demographicId" exact component={DemographicPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App