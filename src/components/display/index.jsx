import React, {useContext} from 'react'
import {NumberContext} from '../NumberProvider'
import './index.css'

export default props =>{

  const {number, operation, storedNumber, expression,equal} = useContext(NumberContext);
  


    return (
        <div className="container">
            <div className="display">

              <div className= "top-description">
              <p className = 'title'>Calculator</p>
              <h2 className="calc-description">Default</h2>
              </div>
              
              <div className="result">
                {/* {console.log("No display" + expression)} */}
                <h2 className = 'expression'>{ expression || "0"  }{equal}</h2>  
                <h1>{  number  }</h1>
              </div>
            </div>
        </div>
    )

}