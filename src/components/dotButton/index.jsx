import React,{useContext} from 'react'
import {NumberContext} from '../NumberProvider'
import '../styleGlobalButton.css'

export default e =>{
    const {number, setNumber} = useContext(NumberContext)

    return(
        <button onClick = {()=>{
            
            if(String(number).includes('.')) return

            setNumber(String(number)+'.')
        }} >.</button>
    )

}
