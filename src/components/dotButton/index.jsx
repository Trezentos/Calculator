import React,{useContext} from 'react'
import {NumberContext} from '../NumberProvider'
import '../styleGlobalButton.css'

export default e =>{
    const {number, setNumber} = useContext(NumberContext)

    return(
        <button onClick = {()=>{
            if(number.includes('.') )return

            setNumber(number+'.')
        }} >.</button>
    )

}
