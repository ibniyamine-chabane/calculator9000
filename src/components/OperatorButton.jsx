function OperatorButton({OperatorClick}) {
    const operators = [..."/*-+"];

    return (
        <>
            <p>{operators.map((operator, index) => <button key={index} onClick={(e) => e.OperatorClick} value={operator}>{operator}</button>)}</p>
        </>
    );
} 

export default OperatorButton;