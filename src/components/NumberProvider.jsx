import React ,{useState} from 'react';



export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState("0")
  const [storedNumber, setStoredNumber ] = useState("")
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("0")


  const operationFunction = operation =>{

    if(number!= 0){
  
      setOperation(operation)
      setNumber(number)
      
    }
  }
  
  const handleSetDisplayValue = num => {

    if(operation && number){
      return setStoredNumber(storedNumber + num)
    }
    if(number!=0){
      return setNumber(number + num)        
    }

    setNumber(num)
  };

  const clearValues = () =>{
    setNumber("0")
    setOperation("")
    setStoredNumber("")
    setResult("0")
    
  };

  const backSpace = () =>{
    
    if(number.length == 1){
      return setNumber("0")
    }
    
    setNumber(number.slice(0,number.length-1))
  }


  const calculate = ()=>{
    const toDisplay = `${number}${operation}${storedNumber}=`,
          result = eval(`${number}${operation}${storedNumber}`)

    clearValues();
    setNumber(result);   
    setResult(toDisplay);

  }
  
  return (
    <NumberContext.Provider
      value={{
        clearValues,
        handleSetDisplayValue,
        operationFunction,
        setNumber,
        backSpace,
        number,
        operation,
        storedNumber,
        calculate,
        result
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;