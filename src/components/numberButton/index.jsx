import React,{useContext} from 'react'
import '../styleGlobalButton.css'
import {NumberContext} from '../NumberProvider'




export default props =>{
    const {number} = useContext(NumberContext)
    const { handleSetDisplayValue } = useContext(NumberContext);


    return (
        <button onClick={ () => handleSetDisplayValue(props.symbol)} >{props.symbol }</button>
    )

}