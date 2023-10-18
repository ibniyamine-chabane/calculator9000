import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
import { useState } from "react";

function Calculator() {

    const [result, setResult] = useState(0);
    const [operation, setOperation] = useState(0);
    
    const handleClickNumber = (e) => {
        console.log(e.target.value)
        setOperation(operation + e.target.value)
        
    }

    const handleSetResult = (newValue) => {
        setResult(eval(newValue))
    }

    const handleClickOperator = (e) => {
        setOperation(operation + e.target.value)
    }

    const equalClick = (e) => {

        if (result > 9000) {
            setResult("It's over 9000")
        }
        setResult(eval(operation))
    }

    return (
        <>  
            <div className="screen">
                <BeautifulScreen opResult={result} operation={operation} />
            </div>
            <div className="buttonBox">
                <div className="numButton">
                    <NumberButton handleClickNumber={handleClickNumber} operation={operation} handleSetResult={handleSetResult}/>
                </div>
                <div className="operatorBox">
                    <OperatorButton handleClickOperator={handleClickOperator}/>
                </div>
            </div>
        </>
    );
} 

export default Calculator;