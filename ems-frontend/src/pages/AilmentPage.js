import React, { Component } from 'react'
import { Link } from "react-router-dom"
import EmsAPI from '../api/EmsAPI.js'



class AilmentPage extends Component {

  state = {
    ailment: null
  }


  addDemographic = async () => {
   
      try {
        let inputAge = document.getElementById("new-age")
        let inputGender = document.getElementById("new-gender")
        // let inputAilment = document.getElementById("new-ailment")
        let inputZip = document.getElementById("new-zip")
     
        if (inputAge && inputGender && inputZip) {
          let newDemographicParams = {
            list: this.state.ailment.id,
            age: inputAge.value,
            gender: inputGender.value,
            // ailment: inputAilment.value,
            zip: inputZip.value
          }
          let data = await EmsAPI.createDemographic(newDemographicParams)
          if (data) {
            this.getAilment()
          }
        }
      }
      catch {

      }
    }


   async getAilment() {
    const id = this.props.match.params.ailmentId

    // console.log("get ailment: ", this.props.match.params.ailmentId)
    // console.log("loading ailment id: ", id)


    let response = await EmsAPI.fetchAilmentByID(id)
    // console.log('response: ', response)

    this.setState({
      ailment: response
      
    })

    // console.log('ailment: ', this.state.ailment)
  //     .then((ailment) => this.setState({
  //       ailment: ailment
  //   }))
   }


  componentDidMount() {
    this.getAilment()
  }


  renderDemographics() {
         let demographicElements = this.state.ailment.demographics.map((demographic, index) => {
          
          // console.log('render demos: ', this.props.match.params.ailmentId)

          
           return (
             <li key={`demographic-${index}`}>
               <Link to={`/ailments/${this.props.match.params.ailmentId}/demographics/${demographic.id}`}>ZIP Code {demographic.zip}</Link>
             </li>
           )
           // pulled out from above /ailments/
          //  this.state.ailment.id
         })
      
    // console.log("Dem Elements: ", demographicElements)
         
        return (
          <ul className="simple-list">
            { demographicElements }
          </ul>
        )
      }

  renderAilment()  {

    // console.log('Ailment in render(): ', this.state.ailment)

     if (!this.state.ailment) {
       return <p>No ailment found!</p>
     }
     
     return (
             <div>
               <h1>{this.state.ailment.name}</h1>
               
             
               { this.renderDemographics() }
               <hr />
               <input id="new-age" placeholder="age"/>
               <input id="new-gender" placeholder="gender"/>
               {/* <input id="new-ailment" placeholder="ailment"/> */}
               <input id="new-zip" placeholder="zip"/>
               <button onClick={this.addDemographic}>Add Demographic</button>
             </div>
           )
          
         }


  render() {
    
    return (
      <div>
        {/* <h1> Ailment Page </h1>
        <h2> Name </h2> */}
      
        <h1>Chief Complaint: </h1>
        <h4>{ this.renderAilment() }</h4>
        {/* <iframe 
          width="600"
          height="450" 
          style="border:0" 
          loading="lazy" 
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDRWop4QSkZ_rQLqaYOtwGx9zvYlZ_EuMY&q={{ demographic.zip }}">
        </iframe> */}
    
        {/* { this.props.match.params.ailmentId } */}
      </div>
    )
  }
}


export default AilmentPage


// import { Component } from "react"
//  import { Link } from "react-router-dom"
//  // api
//  import toDoAPI from "../api/toDoAPI"
//  // contexts
//  import UserContext from "../contexts/UserContext"

//  class TaskListPage extends Component {
//    state = {
//      taskList: null
//    }

//    // helper methods
//    async getTaskList() {
//      try {
//        let taskListId = this.props.match.params.taskListId
//        let token = this.context 
//          ? this.context.token
//          : null
//        let taskListData = await toDoAPI.getTaskListById(taskListId, token)
//        if (taskListData) {
//          this.setState({ taskList: taskListData })
//        }
//      }
//      catch (error) {
//        console.log(error)
//      }
//    }

//    addTask = async () => {
//      try {
//        let inputName = document.getElementById("new-task-name")
//        let inputDueDate = document.getElementById("new-task-due-date")
//        let token = this.context 
//          ? this.context.token
//          : null
//        if (inputName && inputDueDate && token) {
//          let newTaskParams = {
//            list: this.state.taskList.id,
//            name: inputName.value,
//            due_date: inputDueDate.value,
//            completed: false
//          }
//          let data = await toDoAPI.createTask(newTaskParams, token)
//          if (data) {
//            this.getTaskList()
//          }
//        }
//      }
//      catch {

//      }
//    }

//    // life cycle
//    componentDidMount() {
//      this.getTaskList()
//    }

//    // render
//    renderTasks() {
//      let taskElements = this.state.taskList.tasks.map((task, index) => {
//        return (
//          <li key={`task-${index}`}>
//            <Link to={`/task-lists/${this.state.taskList.id}/tasks/${task.id}`}>{task.name}</Link>
//          </li>
//        )
//      })


//      return (
//        <ul className="simple-list">
//          { taskElements }
//        </ul>
//      )
//    }

//    renderTaskList() {
//      if (!this.state.taskList) {
//        return <p>No task list found!</p>
//      }

//      return (
//        <div>
//          <h1>{this.state.taskList.name}</h1>
//          <h3>{this.state.taskList.user}</h3>
//          { this.renderTasks() }
//          <hr />
//          <input id="new-task-name" placeholder="new task"/>
//          <input id="new-task-due-date" placeholder="due date"/>
//          <button onClick={this.addTask}>Add Task</button>
//        </div>
//      )
//    }

//    render() {
//      return (
//        <div>
//          <h1>Task List Page: { this.props.match.params.taskListId } </h1>
//          { this.renderTaskList() }
//        </div>
//      )
//    }
//  }

//  TaskListPage.contextType = UserContext

//  export default TaskListPage;