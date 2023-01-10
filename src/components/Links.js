import React from "react"
import App from "./App"

function Links(props) {
    return (
       <>
       <h3>Links</h3>
       <a href={props.linkedIn}>{props.linkedIn}</a>
       </>
    )
}


export default Links
