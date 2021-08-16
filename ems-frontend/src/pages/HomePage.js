import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmsAPI from "../api/EmsAPI"
import AilmentSummary from '../components/AilmentSummary'
// import logo from './logo.png'


class HomePage extends Component {

  state = {
    ailments: [],
    bodyweight: 0,
    burnPercentage: 0,
    dripCalc: 0
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

             if (data) {
                let newAilments = [...this.state.ailments, data]
                this.setState({ailments: newAilments})
            }
          }
        }


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
            console.log('unable to delete ailment')
                  
          }
        }

        calculateDrip = (bodyweight, burnPercentage) => {
   
          try {
            if (bodyweight && burnPercentage) {
              let dropsPerSec = ((4 * (bodyweight / 2.2) * burnPercentage) / 5760)
              this.setState({dripCalc: dropsPerSec})
              }
            
              }
        
          catch {
            console.log("error calculating drip")
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
            
            <input id="new-ailment" placeholder="Chief Complaint"/>
            <button onClick={this.addAilment}>Add New Chief Complaint</button>
        </div>


    )
  }

    handleSubmit = (event) => {
      event.preventDefault()
      let dripCalculation = this.calculateDrip(this.state.bodyweight, this.state.burnPercentage)
      console.log(dripCalculation)

      return
    }

    handleChange = (event) => {
      let fieldName = event.target.name
      let fieldValue = event.target.value
      
      if (fieldName === "bodyweight") {
        this.setState({bodyweight: fieldValue})
      } else if (fieldName === "burn-percentage") {
        this.setState({burnPercentage: fieldValue})
      }

      console.log(this.state)
    }



  render() {
    
    return (
      <div>
          <iframe src="https://covid-19.dataflowkit.com/assets/widget/covid-19.html" 
            frameborder="0" scrolling="no"
            width="250" height="250">
          </iframe>
          <hr />
          { this.renderAilments() }
      <hr />

      <h2>Fluid Resuscitation Calculator for Burn Patients:</h2>

      <form onChange={this.handleChange}>

        <input name="bodyweight" placeholder="Body Weight (lbs.)"/>
        <input name="burn-percentage" placeholder="% Body Area Burned"/>
        <button onClick={this.handleSubmit} type="submit" value="submit">Calculate Drip</button>
        
            
      </form>
      { this.state.dripCalc > 0 && 
        
        <h4>
          {this.state.dripCalc} Drops Per Second in 10 Drops / mL Dripset
        </h4>
        
      }

      </div>
    )
  }
}


export default HomePage

