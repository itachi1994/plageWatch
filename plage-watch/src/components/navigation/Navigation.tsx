import React from "react";
import './Navigation.css'
import detect from './../../images/plagewatch.jpg'
import { Navbar } from 'react-bootstrap';


export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header-margin navbar-style"
        variant="light"
      >
        <div className="col-sm-6 row center">
          <img className="ml-4 plagewatch-image-style" src={detect} alt="detect" />
          <a href={'Upload'}> <h1 className="mt-3 nav-text-style"> PlageWatch </h1></a>
        </div>

        <div className="col-sm-6 row center">
          <span className="mt-3 nav-text-style">
                      <i className="fas fa-book-reader"><a className="mt-3 nav-text-style" href={'About'}> About</a></i>
          </span>
        </div>

       </Navbar>
    );
  }
}
