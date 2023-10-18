import EqualButton from "./EqualButton";
function NumberButton(props) {
    const numbers = [...'7894561230'];

    return (
        <>
            <p>{numbers.map((number, index) => 
                <button className="num_width" onClick={props.handleClickNumber} style={{width : number === '0' ? '160px' : '78px'}} key={index} value={number}>{number}</button>)}
                <EqualButton  operation={props.operation} handleSetResult={props.handleSetResult}/>
            </p>
        </>
    );
} 

export default NumberButton;