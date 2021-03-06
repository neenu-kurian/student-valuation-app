import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import SignupPage from './components/signup/SignupPage'
import BatchList from './components/batch/BatchList'
import StudentDetails from './components/batch/StudentDetails'
import LogoutPage from './components/logout/LogoutPage'
import NewBatch from './components/batch/NewBatch'
import './App.css'
import TopBar from './components/layout/TopBar'
import NewStudent from './components/batch/NewStudent';
import AskQuestion from './components/batch/AskQuestion'
import Evaluation from './components/batch/Evaluation'

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
            <Route exact path="/batches" component={BatchList}/>
            <Route exact path="/students/randomstudent/:id" component={AskQuestion}/>
            <Route exact path="/batches/:id" component={StudentDetails}/>
            <Route exact path="/batches/students/newbatch" component={NewBatch}/>
            <Route exact path="/" render={() => <Redirect to="/batches"/>}/>
            <Route exact path="/newstudent/:batchid" component={NewStudent}/>
            <Route exact path="/batches/student/evaluation/:id" component={Evaluation}/>
          </main>
        </div>
      </Router>
    )
  }
}
export default App
