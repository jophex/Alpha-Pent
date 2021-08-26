import React from "react"
import "./card.css"

function Card(props) {
    return(

        <div class="container">
          
          <div class="mycard">
                <h2 className="text">{props.name}</h2>
            </div>
        </div>





    )
}

export default Card