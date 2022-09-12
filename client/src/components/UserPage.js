import { useEffect, useState } from 'react'
import SingleStock from './SingleStock';

function UserPage(username) {
    let list = ["BINANCE:BTCUSDT", "BINANCE:LTCBTC"]
    const [price, setPrice] = useState(0);
    const [currStockShowing, setCurrStockShowing] = useState("")

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
         var unsubscribe = function(symbol) {
            socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
        }
      }

    const chooseStock = (stock) => {
        setCurrStockShowing(stock);
        callStock(stock);
      };



    return (
        <>
            <h1>{username.username}</h1>
            <h3>Stocks will display below: </h3>
            <ul>
                {list.map(singleStock => (
                    <li>
                        <button
                            onClick={() => chooseStock(singleStock)}
                        >{singleStock}</button>
                    </li>
                ))}
            </ul>
            {currStockShowing !== "" && (
                <SingleStock symbol={currStockShowing} price={price} />
            )}
        </>
    )
}
export default UserPage;