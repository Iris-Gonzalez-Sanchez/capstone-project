// import { useEffect, useState} from 'react'
import "./SingleStock.css"
function SingleStock (props) {

    
    return (
        <>
            <div>{props.symbol}</div>
            <div>{props.price}</div>
        </>

    );
}

export default SingleStock; 