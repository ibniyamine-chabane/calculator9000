function BeautifulScreen({operation, result}) {
    return (
        <>
            <div className="operation"><p>{operation}</p></div>
            <div className="result"><p>{result}</p></div>
        </>
    );
} 

export default BeautifulScreen;