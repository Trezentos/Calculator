import React ,{useState} from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState("")  
  const [storedNumber, setStoredNumber ] = useState("")
  const [operation, setOperation] = useState("")
  const [expression, setExpression] = useState("")


  const operationFunction = operator =>{

    //Reset the expression if a new number is setted
    if(expression.includes('=')){
        setStoredNumber('')
        setOperation(operator)
        return setExpression(number+operator)
    }

    //Set the operator after the number is setted in
    if(operator && !number){

      setOperation(operator)   
    }   


    if(operation!="" && storedNumber!=""){
      
      setExpression(number+operator)
      setOperation(operator)
      calculate()
      setStoredNumber("")
      return;
    }

    if(number!= ""){
      setExpression(number+operator)
      setOperation(operator)
      setNumber(number)
      
    }

  }
  
  const handleSetDisplayValue = num => {

    

    if(expression.includes('=')){
      clearValues()
      setExpression('')
      return setNumber(num)

    }

    if(operation && number){
      
      setExpression(expression+num)
      return setStoredNumber(storedNumber + num)
    }

    if(number!=0){
      
       return  setNumber(number + num);
    }

    setNumber(num)
  };

  const clearValues = (ce) =>{

    setNumber("")
    setOperation("")
    setStoredNumber("")
    if(!ce) setExpression("")    
  };

  const backSpace = () =>{
    
    if(number.length == 1){
      
      return setNumber("")
    }
    
    setNumber(number.slice(0,number.length-1))
  }


  const calculate = ()=>{

    if(!storedNumber || !number) return
    
    if(operation == "/" && storedNumber == "0" ){    
      console.log(operation)
      return alert('Impossible to divide by zero ;/');
    }

   
    const result =  eval(`${number||0}${operation||'*'}${storedNumber||0 }`),
    
    toDisplay = `${number||0}${operation}${storedNumber||0}=${result}`
    
    clearValues();
    setNumber(result.toString());
    setOperation(operation)  
    setStoredNumber(storedNumber) 
    setExpression(toDisplay);
    
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
        expression
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;