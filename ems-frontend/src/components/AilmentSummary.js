import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom"

class AilmentSummary extends Component {

   render() {
     return (

    <div>
     <span>
        <Link to={`/ailments/${this.props.ailment.id}`}>{this.props.ailment.name}</Link>
          <button onClick={ () => this.props.handleDelete(this.props.ailment.id)}>delete</button>
        </span>
     
  </div>
   )
 }
}

export default AilmentSummary; 

