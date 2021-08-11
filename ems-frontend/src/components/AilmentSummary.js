import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from "react-router-dom"

class AilmentSummary extends Component {

   render() {
     return (

    <div>

    <Table data={this.props.ailments}>
          <Table isKey dataField='id'> ID </Table>
          <Table isKey dataField='ailment_name'> Name </Table>
      
        </Table>




     {/* <span>
        <Link to={`/ailments/${this.props.ailment.id}`}>{this.props.ailment.name}</Link>
          <button onClick={() => this.props.handleDelete(this.props.ailment.id)}>delete</button>
        </span>
      */}
  </div>
   )
 }
}

export default AilmentSummary; 

