import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";

function Calculator() {
    return (
        <>  <div className="screen">
                <BeautifulScreen />
            </div>
            <div className="buttonBox">
                <div className="numButton">
                    <NumberButton />
                </div>
                <div className="operatorBox">
                    <OperatorButton />
                </div>
            </div>
        </>
    );
} 

export default Calculator;