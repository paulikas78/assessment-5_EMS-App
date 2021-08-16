import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EmsAPI from "../api/EmsAPI"
import AilmentSummary from '../components/AilmentSummary'
// import logo from './logo.png'


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

             if (data) {
                let newAilments = [...this.state.ailments, data]
                this.setState({ailments: newAilments})
                console.log(this.state)
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

 
  render() {
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


export default HomePage

