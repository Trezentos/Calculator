import React,{useContext} from 'react'
import "../styleGlobalButton.css"
import {NumberContext} from '../NumberProvider'

export default props =>{
    const {setNumber, number} = useContext(NumberContext)
    let textNumber = -number
    textNumber = textNumber.toString()

    return(
        <button onClick = {()=> setNumber(textNumber) } >+/-</button>
    )

}