import React ,{useState} from 'react';



export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState("0")
  const [storedNumber, setStoredNumber ] = useState("")
  const [operation, setOperation] = useState("")


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
  };

  const calcular = ()=>{

    if(number && storedNumber){

      
      switch (operation) {
        case "*":
          alert(number*storedNumber)
          break;  
        case "+":
            setNumber(Number.parseFloat(number) + Number.parseFloat(storedNumber))  
          break;
        case "-":
          alert(number-storedNumber)
          break;
        case "/":
          alert(number/storedNumber)
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
        calcular
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;