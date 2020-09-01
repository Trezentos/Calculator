import React, { useContext } from 'react'
import {NumberContext} from '../components/NumberProvider'

import OperationButton from '../components/operationButton/index'
import NumberButton from '../components/numberButton/index'
import EqualButton from '../components/equalButton/index'
import CEButton from '../components/clearEButton/index'
import CButton from '../components/clearButton/index'
import PluslessButton from '../components/plussAndlessButton/index'
import Display from '../components/display/index'
import Back from '../components/backspaceButton/index'

import './calculator.css'

export default e =>{
    
    const {number} = useContext(NumberContext)

    

    const operation = (e)=>{
        // e.preventDefault()
        return console.log(e)
    }

    return(
        <div className="calculator">

            <Display/>

            <div className="Buttons">
            
                <NumberButton symbol = "%"   />
                <CEButton/>
                <CButton/>
                <Back/>

                <NumberButton symbol = "1/x" />
                <NumberButton symbol = "x²" />
                <NumberButton symbol = "rq" />
                <OperationButton symbol = "/" />

                <NumberButton symbol = "7" />
                <NumberButton symbol = "8" />
                <NumberButton symbol = "9" />
                <OperationButton symbol = "*" />

                <NumberButton symbol = "4" />
                <NumberButton symbol = "5" />
                <NumberButton symbol = "6" />
                <OperationButton symbol = "-" />

                <NumberButton symbol = "1" />
                <NumberButton symbol = "2" />
                <NumberButton symbol = "3" />
                <OperationButton symbol = "+" />

                <PluslessButton />
                <NumberButton symbol = "0" />
                <NumberButton symbol = "." />
                <EqualButton symbol = "=" />
            
            </div>
        </div>
    )

}