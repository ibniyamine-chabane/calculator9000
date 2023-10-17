function EqualButton({EqualClick}) {
    const equal = "=";

    return (
        <>
            <button className="equalButton" onClick={EqualClick} >{equal}</button>
        </>
    );
} 

export default EqualButton;