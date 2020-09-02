import React, { useContext } from 'react'
import '../styleGlobalButton.css'
import {NumberContext} from '../NumberProvider'

export default e =>{
    const {number, setNumber} = useContext(NumberContext)

    return (
        <button onClick={()=>{
            
            if(number == '0' || number == ""){
                return alert('Cannot divide by zero ;/')
            }else{
                setNumber(1/number)
            }

        }} >1/x</button>
    )

}