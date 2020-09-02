import React,{useContext} from 'react'
import "../styleGlobalButton.css"
import {NumberContext} from '../NumberProvider'

export default props =>{
    const {setNumber, number} = useContext(NumberContext)
    

    return(
        <button onClick = {()=> setNumber( Math.sqrt(number) ) } >²√x</button>
    )

}