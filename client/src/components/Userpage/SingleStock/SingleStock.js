// import { useEffect, useState} from 'react'

function SingleStock (props) {

    
    return (
        <>
            <div>{props.symbol}</div>
            <div>{props.price}</div>
        </>

    );
}

export default SingleStock;