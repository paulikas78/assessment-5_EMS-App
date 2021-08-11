// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import AilmentPage from './pages/AilmentPage'
import DemographicPage from './pages/DemographicPage'
// import UserContext from './contexts/UserContext';

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



// import './App.css';
// import { Component } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import TaskListPage from './pages/TaskListPage'
// import TaskPage from './pages/TaskPage'
// import LoginPage from './pages/LoginPage'
// import UserContext from './contexts/UserContext';

// class App extends Component {

//   state = {
//     user: null
//   }

// // helper function

// updateUser = (newUserData) => {
//   this.setState({user: newUserData})
// }






// // render login page method

// renderLoginPage = (routeProps) => {
//   return <LoginPage {...routeProps} completeLogin={this.updateUser} />
// }



//   render() {
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <UserContext.Provider value={this.state.user}>
//           <div>
//             <Route path="/" exact component={HomePage} />
//             <Route path="/login" exact render={this.renderLoginPage} />
//             <Route path="/task-lists/:taskListId" exact component={TaskListPage} />
//             <Route path="/task-lists/:taskListId/tasks/:taskId" exact component={TaskPage} />
//           </div>
//           </UserContext.Provider>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }







// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
