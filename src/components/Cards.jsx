import React from 'react'


const Cards = (props)=>{

    return(
        <div style={{border:1}}>
       
         <h1>{props.data.name}</h1>
         <a href={props.data.url} >{props.data.name} </a>
        </div>

    )
}

export default Cards