import { useEffect, useState } from 'react'
import SingleStock from './SingleStock';

function UserPage(username) {
    const [stocks, setStocks] = useState(["BINANCE:BTCUSDT", "BINANCE:LTCBTC"])
    const [price, setPrice] = useState(0);
    const [currStockShowing, setCurrStockShowing] = useState("")
    const [newStock, setNewStock] = useState("")

    const callStock = (givenStock) => {
        const socket = new WebSocket('wss://ws.finnhub.io?token=ccejkl2ad3i6bee11jfg');


        // Connection opened -> Subscribe
        socket.addEventListener('open', function () {
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': `${givenStock}`}))
        });
        
        // Listen for messages
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
            let parsedData = JSON.parse(event.data);
            setPrice(parsedData.data[0].p);
        });
        
        // Unsubscribe
         let unsubscribe = function(symbol) {
            socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
        }
    }

    const chooseStock = (stock) => {
        setCurrStockShowing(stock);
        callStock(stock);
    };

    const addStock = (event) => { 
        event.preventDefault();
        setStocks(() => [...stocks, newStock])
        // console.log(addStock)
    }

    const deleteStock = (id) =>
        setStocks((current) => current.filter((p) => p.id !== id));

    const updateStock = (event) => {
        setNewStock(event.target.value)
        console.log(newStock, "Inside updateStock")
    }
   




    return (
        <>
            <h1>{username.username}</h1>
            <h3 className="under-nav">Stocks will display below: </h3>
            <ul className="stock-list">
                {stocks.map(singleStock => (
                    <li>
                        <button className="stock-button"
                            onClick={() => chooseStock(singleStock)}
                        >{singleStock}</button>
                    </li>
                ))}
            </ul>
            <form onSubmit={addStock}>
                <label for="Stock Name">Enter Company Stock Symbol:</label>
                <input name="Stock Name" type="text" value={newStock} onChange={updateStock}>
                </input>
                <input type="submit" value="Click to submit"/>
            </form>
            {currStockShowing !== "" && (
                <SingleStock symbol={currStockShowing} price={price} />
            )}
        </>
    )
}
export default UserPage;