import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import GamesList from './components/games/GamesList'
import GameDetails from './components/games/GameDetails'
import LogoutPage from './components/logout/LogoutPage'
import NewBatch from './components/games/NewBatch'
import './App.css'
import TopBar from './components/layout/TopBar'
import NewStudent from './components/games/NewStudent';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <TopBar/>
          </nav>
          <main style={{
            marginTop: 75
          }}>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/logout" component={LogoutPage}/>
            <Route exact path="/signup" component={SignupPage}/>
            <Route exact path="/batches" component={GamesList}/>
            <Route exact path="/batches/students"/>
            <Route exact path="/batches/:id" component={GameDetails}/>
            <Route exact path="/newstudent/newbatch" component={NewBatch}/>
            <Route exact path="/" render={() => <Redirect to="/batches"/>}/>
            <Route exact path="/newstudent/:batchid" component={NewStudent}/>
          </main>
        </div>
      </Router>
    )
  }
}
export default App
