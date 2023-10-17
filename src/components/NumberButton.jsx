import EqualButton from "./EqualButton";
function NumberButton() {
    const numbers = [...'7894561230'];

    return (
        <>
            <p>{numbers.map((number, index) => 
                <button className="num_width" style={{width : number === '0' ? '160px' : '78px'}} key={index} value={number}>{number}</button>)}
                <EqualButton />
            </p>
        </>
    );
} 

export default NumberButton;