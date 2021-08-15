import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmsAPI from "../api/EmsAPI"
import AilmentSummary from '../components/AilmentSummary'


class HomePage extends Component {

  state = {
    ailments: []
  }




  componentDidMount(){
    EmsAPI.fetchAilments()
      .then((apiResponseJSON) => {
        console.log(apiResponseJSON)
        this.setState({
          ailments: apiResponseJSON
        })
      }
    )
  }



        addAilment = async () => {
          let input = document.getElementById("new-ailment")
          if (input) {
            let newAilmentParam = {
              name: input.value
              
            }
            let data = await EmsAPI.addAilment(newAilmentParam)

            console.log("API response: ", data)

             if (data) {
                let newAilments = [...this.state.ailments, data]
                this.setState({ailments: newAilments})
                console.log(this.state)
            }
          }
        }


        //    deleteTaskList = async (taskListId) => {
//      try {
//        let token = this.context
//          ? this.context.token
//          : null
//        if (taskListId > 0 && token) {
//          let result = await toDoAPI.deleteTaskList(taskListId, token)
//          if (result.success) {
//            let newTaskLists = this.state.taskLists.filter((taskList, index) => {
//              return taskList.id !== taskListId
//            })
//            this.setState({taskLists: newTaskLists})
//          }
//        }
//      }
//      catch {

//      }
//    }
      

        deleteAilment = async (ailmentId) => {
            try {
              if (ailmentId > 0) {
                let result = await EmsAPI.deleteAilment(ailmentId)

                console.log(result)

                if (result.success) {
                  let newAilments = this.state.ailments.filter((ailment, index) => {
                    return ailment.id !== ailmentId
                  })

                  this.setState({ailments: newAilments})
                  console.log(this.state)
                }
              }
            }
          catch {
            console.log('delete ailment catch')
                  
          }
        }


  renderAilments() {
    let renderedAilments = this.state.ailments.map((ailment, index) => {
         return ( 
         <li key={`ailment-${index}`}>
         <Link to={`/ailments/${this.props.match.params.ailmentId}`}></Link>

          
           <AilmentSummary ailment={ailment} handleDelete={this.deleteAilment}/>
         </li>
       )


    })
    // return renderedAilments
    return (
       <div>
            <h2>Chief Complaints:</h2>
              <ul className="simple-list">
                { renderedAilments }

              </ul>
            <hr />
            <input id="new-ailment" placeholder="Chief Complaint"/>
            <button onClick={this.addAilment}>Add New Chief Complaint</button>
        </div>


    )
  }

  //  renderWelcome() {
//      if (!this.context) {
//        return <Link to="/login"><button>Login</button></Link>
//      }

//      let taskListElements = this.state.taskLists.map((taskList, index) => {
      //  return ( 
      //    <li key={`task-list-${index}`}>
      //      <TaskListSummary taskList={taskList} handleDelete={this.deleteTaskList}/>
      //    </li>
      //  )
//      })

//      return (
//        <div>
//          <h2>Welcome to your Task List Manager App {this.context.user.username}!</h2>
//          <h2>Your task lists:</h2>
//          <ul className="simple-list">
//            { taskListElements }
//          </ul>
//          <hr />
//          <input id="new-task-list-name" placeholder="new task list"/>
//          <button onClick={this.createTaskList}>Create New Task List</button>
//        </div>
//      )
//    }





  render() {
    // const ailment = this.state.ailments
    return (
      <div>
  
      
          { this.renderAilments() }
         

          <iframe src="https://covid-19.dataflowkit.com/assets/widget/covid-19.html" 
            frameborder="0" scrolling="no"
            width="250" height="250">
          </iframe>

        
      </div>
    )
  }
}



//    render() {
//      return (
//        <div>
//          <h1>Home Page</h1>
//          { this.renderWelcome() }
//        </div>
//      )
//    }
//  }




export default HomePage


// import { Component } from "react"
// import { Link } from "react-router-dom"
// // api
// import toDoAPI from "../api/toDoAPI"
// // components
// import TaskListSummary from "../components/TaskListSummary"
// // contexts
// import UserContext from "../contexts/UserContext"

//  class HomePage extends Component {
//    state = {
//      taskLists: []
//    }


//    // helper methods
//    getTaskLists = async () => {
//      try {
//        let token = this.context
//          ? this.context.token
//          : null
//        if (token) {
//          let taskListsData = await toDoAPI.getTaskLists(token)
//          this.setState({ taskLists: taskListsData })
//        }
//      }
//      catch {

//      }
//    }

//    createTaskList = async () => {
//      let input = document.getElementById("new-task-list-name")
//      let token = this.context
//          ? this.context.token
//          : null
//      if (input && token) {
//        let newTaskListParam = {
//          name: input.value,
//          user: this.context.user.id
//        }
//        let data = await toDoAPI.createTaskList(newTaskListParam, token)
//        console.log("new task list", data)
//        if (data) {
//          let newTaskLists = [...this.state.taskLists, data]
//          this.setState({taskLists: newTaskLists})
//        }
//      }
//    }

//    deleteTaskList = async (taskListId) => {
//      try {
//        let token = this.context
//          ? this.context.token
//          : null
//        if (taskListId > 0 && token) {
//          let result = await toDoAPI.deleteTaskList(taskListId, token)
//          if (result.success) {
//            let newTaskLists = this.state.taskLists.filter((taskList, index) => {
//              return taskList.id !== taskListId
//            })
//            this.setState({taskLists: newTaskLists})
//          }
//        }
//      }
//      catch {

//      }
//    }

//    // life cycles
//    componentDidMount() {
//      this.getTaskLists()
//    }

//    // render
//    renderWelcome() {
//      if (!this.context) {
//        return <Link to="/login"><button>Login</button></Link>
//      }

//      let taskListElements = this.state.taskLists.map((taskList, index) => {
//        return ( 
//          <li key={`task-list-${index}`}>
//            <TaskListSummary taskList={taskList} handleDelete={this.deleteTaskList}/>
//          </li>
//        )
//      })

//      return (
//        <div>
//          <h2>Welcome to your Task List Manager App {this.context.user.username}!</h2>
//          <h2>Your task lists:</h2>
//          <ul className="simple-list">
//            { taskListElements }
//          </ul>
//          <hr />
//          <input id="new-task-list-name" placeholder="new task list"/>
//          <button onClick={this.createTaskList}>Create New Task List</button>
//        </div>
//      )
//    }

//    render() {
//      return (
//        <div>
//          <h1>Home Page</h1>
//          { this.renderWelcome() }
//        </div>
//      )
//    }
//  }

//  HomePage.contextType = UserContext

//  export default HomePage