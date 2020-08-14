import React,{useContext} from 'react'
import {NumberContext} from '../NumberProvider'
import numberButton from '../numberButton'
import "../styleGlobalButton.css"

export default props =>{
    const {backSpace} = useContext(NumberContext)

    return (
        <button onClick = { ()=> backSpace() }>BACK</button>
        )

}