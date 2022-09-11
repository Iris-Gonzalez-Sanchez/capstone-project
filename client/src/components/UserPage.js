import { useEffect, useState} from 'react'
import StockDetail from './StockDetail';
// import { useState } from 'react'
import protobuf from "protobufjs";
// const { Buffer } = require("buffer/");


function UserPage(username, updateUser){
    // const [stocks, setStocks] = useState([])

    useEffect(() => {
        const socket = new WebSocket('wss://ws.finnhub.io?token=ccejkl2ad3i6bee11jfg')
        // Connection opened -> Subscribe
        socket.addEventListener('open', function (event) {
            socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });

        // Unsubscribe
        var unsubscribe = function(symbol) {
            socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
        }
       
    }, []);

    return (
        <>
            <h1>{username.username}</h1>
            <h3>Stocks will display below: </h3>
            <StockDetail/>
        </>
    )
}





export default UserPage;