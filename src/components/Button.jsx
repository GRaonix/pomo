import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({addClass, name}) => {
    const hello = () => {
        console.log("hello 123456")
    }
    return (
        
        <button onClick={hello()} className={addClass}>{name}</button> 
       
    )
}

export default Button