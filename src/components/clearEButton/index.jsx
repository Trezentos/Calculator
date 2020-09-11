import React, {useContext} from 'react'
import {NumberContext} from '../NumberProvider'
import '../styleGlobalButton.css'

export default props =>{
    const {clearValues} = useContext(NumberContext)

    return (
        <button className="bigButton" onClick={()=> clearValues(true)} >CE</button>
    )

}