import react from "react";
import React, { Component } from 'react';
import {MenuItems} from "./menu"
import "./navigation.css"


class Navigation extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: this.state.clicked})

    }

  render() {
      return (
          <header className="headers">
              
                <nav className="navig">
                <h1 className="navis">ALPHA PENT<i className="likei"></i></h1>
                <div className="menu-icon">
                    <ul className="navmenu">
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <a className={item.cname} href={item.url}>
                                    {item.label}
                                    </a>
                                </li>
                            )

                        })}


                        
                    </ul>


              </div>
          </nav>
        </header>

                            


      )
  }

}

export default Navigation