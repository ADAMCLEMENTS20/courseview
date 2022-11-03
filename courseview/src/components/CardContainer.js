import * as React from "react"
import "../index.css"
import Card from './Card'
import {cardList, submitClicked} from "./DropdownSearchContainer"
function CardContainer() {
    return(
        <div className="container">
            {cardList}
        </div>
    )
}

export default CardContainer;