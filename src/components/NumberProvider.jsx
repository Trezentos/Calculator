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

  const showDisplay = (resultIn, expression)=>{   
    //Show the result at the display 
      clearValues();
      setResult(expression+`${resultIn}`);
      setNumber(resultIn);    
  }

  const calculate = ()=>{
    let resultIn = 0,
    expression = `${number}${operation}${storedNumber}=`

    if(number && storedNumber){

      
      switch (operation) {
        

        case "*":
            resultIn = Number.parseFloat(number) * Number.parseFloat(storedNumber)
            showDisplay(resultIn, expression)
          break;
        case "+":
            resultIn = Number.parseFloat(number) + Number.parseFloat(storedNumber)
            showDisplay(resultIn, expression)

          break;
          case "-":
            resultIn = Number.parseFloat(number) - Number.parseFloat(storedNumber)
            showDisplay(resultIn, expression)

          break;
          case "/":
            resultIn = Number.parseFloat(number) / Number.parseFloat(storedNumber)
            showDisplay(resultIn, expression)

          break;
        default:
          break;
        
          
      }
    }

  }
  
  return (
    <NumberContext.Provider
      value={{
        clearValues,
        handleSetDisplayValue,
        operationFunction,
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