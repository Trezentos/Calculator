import React,{useContext} from 'react'
import {NumberContext} from '../NumberProvider'


export default props =>{
    const {operationFunction} = useContext(NumberContext)

    return(
        <button onClick= { ()=> operationFunction(props.symbol) }> {props.symbol} </button>
    )
}