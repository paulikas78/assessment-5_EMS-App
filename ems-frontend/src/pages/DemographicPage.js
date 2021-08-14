// import React, { Component } from 'react'

// class DemographicPage extends Component {
//   render() {
//     return (
//       <div>
//         <h1> Demographic Page </h1>
//       </div>
//     )
//   }
// }

// export default DemographicPage

import { Component } from "react";
import EmsAPI from '../api/EmsAPI'

class DemographicPage extends Component {

  state = {
    demographic: null
  }

  // getDemographicbyId
   // helper methods
   async getDemographic() {
    try {
      let demographicId = this.props.match.params.demographicId
      let demographicData = await EmsAPI.fetchDemographicByID(demographicId)
      if (demographicData) {
        this.setState({ demographic: demographicData })
      }
      // console.log('this.state.demo: ', this.state.demographic)
    }
    catch (error) {
      console.log(error)
    }
  }

    // life cycle
    componentDidMount() {
      this.getDemographic()
    }

    // render
    renderDemographic() {
      if (!this.state.demographic) {
        return <p>No demographic found!</p>
      }
  
      // console.log('age: ', this.state.demographic.age)
      return (
        <div>
        
          <h2>Age: {this.state.demographic.age}</h2>
          <h2>Gender: {this.state.demographic.gender}</h2>
          {/* <h2>Ailment: {this.state.demographic.ailment}</h2> */}
          {/* <h2>ZIP Code: {this.state.demographic.zip}</h2> */}
          <iframe 
            width="600"
            height="450" 
            style={{ "border":"0 0 0 0" }}
            loading="lazy" 
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDRWop4QSkZ_rQLqaYOtwGx9zvYlZ_EuMY&q={{ this.state.demographic.zip }}">
          </iframe>
 


        </div>
      )
    }



  render() {
    return (
      <div>
        
        <h1>Demographic Page: { this.props.match.params.demographicId }</h1>
        { this.renderDemographic() }
      </div>
    )
  }
}

export default DemographicPage;







// import { Component } from "react";
// import toDoAPI from '../api/toDoAPI'

// class TaskPage extends Component {

//   state = {
//     task: null
//   }

//    // helper methods
//    async getTask() {
//     try {
//       let taskId = this.props.match.params.taskId
//       let taskData = await toDoAPI.getTaskById(taskId)
//       if (taskData) {
//         this.setState({ task: taskData })
//       }
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }

//     // life cycle
//     componentDidMount() {
//       this.getTask()
//     }

//     // render
//     renderTask() {
//       if (!this.state.task) {
//         return <p>No task found!</p>
//       }
  
//       return (
//         <div>
//           <h1>List: {this.state.task.list}</h1>
//           <h2>Name: {this.state.task.name}</h2>
//           <h3>Completed: {this.state.task.completed ? "Yes" : "No"}</h3>
//           <h3>Due: {this.state.task.due_date}</h3>
//         </div>
//       )
//     }



//   render() {
//     return (
//       <div>
//         <h1>Task Page: { this.props.match.params.taskId }</h1>
//         { this.renderTask() }
//       </div>
//     )
//   }
// }

// export default TaskPage;