import React, { useContext } from 'react'
import {NumberContext} from '../components/NumberProvider'

import OperationButton from '../components/operationButton/index'
import PluslessButton from '../components/plussAndlessButton/index'
import SquaredButton from '../components/squaredButton/index'
import NumberButton from '../components/numberButton/index'
import SqrtButton from '../components/sqrtButton/index'
import EqualButton from '../components/equalButton/index'
import DotButton from '../components/dotButton/index'
import DivideByX from '../components/divideByX/index'
import CEButton from '../components/clearEButton/index'
import CButton from '../components/clearButton/index'
import Display from '../components/display/index'
import Back from '../components/backspaceButton/index'

import './calculator.css'

export default e =>{
    
    return(
        <div className="calculator">

            <Display/>

            <div className="Buttons">
            
                <NumberButton symbol = "%"   />
                <CEButton/>
                <CButton/>
                <Back/>

                <DivideByX symbol = "1/x" />
                <SquaredButton symbol = "x²" />
                <SqrtButton symbol = "²√x" />
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
                <DotButton symbol = "." />
                <EqualButton symbol = "=" />
            
            </div>
        </div>
    )

}