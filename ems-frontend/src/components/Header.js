import React, { Fragment, Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {

  render() {

    return (
      <Fragment>
            <Navbar  bg="dark" variant="dark">
              <Navbar.Brand>EMS App</Navbar.Brand>
            </Navbar>
      </Fragment>
    )
  }
}

export default Header;