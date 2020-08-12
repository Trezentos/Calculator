import React, {useContext} from 'react'
import {NumberContext} from '../NumberProvider'
import './index.css'

export default props =>{

  const {number, operation, storedNumber} = useContext(NumberContext)


    return (
        <div className="container">
            <div className="display">

              <p className = 'title'>Calculator</p>
              <h2 className="calc-description">Default</h2>
             
              <div className="result">
                <h2>0</h2>
                <h1>{` ${number}${operation}${storedNumber} `}</h1>
              </div>
            </div>
        </div>
    )

}