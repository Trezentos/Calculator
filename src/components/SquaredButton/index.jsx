import React, {useContext} from 'react'
import '../styleGlobalButton.css'
import {numberContext, NumberContext} from '../NumberProvider'


export default e =>{
    const {number, setNumber } = useContext(NumberContext)

    return ( 
        <button onClick={()=>{ 
            if(number*number == Infinity) return alert('The calculator has exploded ;/'); 
            
            return setNumber(number*number) 
        
        } }> x² </button>
    )

}