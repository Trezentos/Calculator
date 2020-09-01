import React, {useContext} from 'react'
import {NumberContext} from '../NumberProvider'
import './index.css'

export default props =>{

  const {number, operation, storedNumber, expression} = useContext(NumberContext);


    return (
        <div className="container">
            <div className="display">

              <p className = 'title'>Calculator</p>
              <h2 className="calc-description">Default</h2>
             
              <div className="result">
                {/* {console.log("No display" + expression)} */}
                <h2>{ expression || "0" }</h2>  {/*Coloque a demonstração da operação aqui*/}
                <h1>{  number || "0" }</h1>
              </div>
            </div>
        </div>
    )

}