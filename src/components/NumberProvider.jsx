import React ,{useState} from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState(0)  
  const [operator, setOperator] = useState("")
  const [storedNumber, setStoredNumber ] = useState("")
  const [expression, setExpression] = useState("")
  const [reseted, setReseted] = useState(false)
  const [equal, setEqual] = useState('')
 

  const numberFunction = num => {

    //Reset all when display has an expression done 
    if(equal){
      clearValues()
      return setNumber(Number(num))
    }

    //To reset the number when the user select the second number to operate on
    if(storedNumber === number && !reseted){
     
      setReseted(true)
      return setNumber( Number(num) )
    }

    setNumber( Number(number+num) )
  };

  const operationFunction = operatorParam =>{

    if(operator){
      setNumber(eval(`${number}`))

    }

    setEqual('')
    setReseted(false)
    setExpression(number+operatorParam)
    setStoredNumber(number)
    setOperator(operatorParam)
    
  } 


  const clearValues = (ce) =>{

    setEqual('')
    setNumber(0)
    setOperator("")
    setStoredNumber("")
    if(!ce) setExpression("")    
  };

  const backSpace = () =>{
    
    return setNumber(Number(String(number).slice(0, String(number).length-1)))
  }


  const calculate = ()=>{


    if(operator=='/' && number == 0){
      return setExpression('Impossible to divide by zero')
    }
    
    const result = eval(`${storedNumber}${operator}${number}`)

    setEqual('=')

    setNumber(result)

    setExpression(`${storedNumber}${operator}${number}` )
    
    setReseted(false)
  }
  

  return (
    <NumberContext.Provider
      value={{
        clearValues,
        handleSetDisplayValue: numberFunction,
        operationFunction,
        setNumber,
        backSpace,
        number,
        operation: operator,
        storedNumber,
        calculate,
        expression,
        equal
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;