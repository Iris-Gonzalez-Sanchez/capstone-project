import { useEffect, useState, useRef } from 'react'
import "./UserPage.css"
import { FormControl, InputLabel, Input, FormHelperText, Button, ListItemButton, ListItemText, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function UserPage(username) {
    const [stocks, setStocks] = useState(["AAPL", "MSFT"])
    const [price, setPrice] = useState(0);
    const [currStockShowing, setCurrStockShowing] = useState("")
    const [newStock, setNewStock] = useState("")
    const prevPrice = usePrevious(price)

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
            ref.current = value; //assign the value of ref to the argument
        }, [value]); //this code will run when the value of 'value' changes
        return ref.current; //in the end, return the current ref value.
    }


    let priceIncrease = null;
    if (price !== 0 && prevPrice > price) {
        priceIncrease = false;
    } else if (price !== 0 && prevPrice < price) {
        priceIncrease = true;
    }

    const callStock = (givenStock) => {
        const socket = new WebSocket('wss://ws.finnhub.io?token=ccejkl2ad3i6bee11jfg');


        // Connection opened -> Subscribe
        socket.addEventListener('open', function () {
            socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': `${givenStock}` }))
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            let parsedData = JSON.parse(event.data);
            setPrice(parsedData.data[0].p);
        });

        // Unsubscribe
        let unsubscribe = function (symbol) {
            socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
        }
    }

    const chooseStock = (stock) => {
        setCurrStockShowing(stock);
        callStock(stock);
        console.log(chooseStock, "chooseStock here: ")
    };

    const addStock = (event) => {
        event.preventDefault();
        console.log("add stock")

        setStocks(() => [...stocks, newStock])
        console.log(addStock, "addStock here: ")
        let finalForm = {
            price: price,
        }
        let stockPrice = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(finalForm)
        }
        fetch("/user_stocks", stockPrice).then(res => {
            if (res.ok) {
                res.json().then(data => console.log(data, "DATA"))
            }
        })
    }

    const deleteStock = (stock) =>
        setStocks((current) => current.filter((p) => p !== stock));

    const updateStock = (event) => {
        setNewStock(event.target.value)
        console.log(newStock, "Inside updateStock")
    }

    return (
        <>
            <h1>{username.username}</h1>
            {currStockShowing !== "" && (
                <Box sx={{
                    width: 400,
                    height: 50,
                }} className="box">
                    <Typography id="stockPickedName" sx={{ fontSize: 26 }} variant="h1" color="text.secondary" gutterBottom>
                        {currStockShowing}
                    </Typography>
                    <Typography sx={{ fontSize: 24 }} variant="h2" color="text.primary" gutterBottom>
                        {price}
                        {priceIncrease === true && (
                            <div id="champagne">🥂</div>
                        )}
                        {priceIncrease === false && (
                            <div id="shrugEmoji">🤷‍♀️</div>
                        )}
                    </Typography>
                </Box>
            )}

            <Typography variant="h5" >Your personalized stock list:</Typography>

            <div className="listAndSubmitForm">
                <div className="listedStocks">
                    {stocks.map(singleStock => (
                        <div className="buttonContainer">
                            <ListItemButton key={singleStock.index} component="a" href="#simple-list" onClick={() => chooseStock(singleStock)}>
                                <ListItemText key={singleStock.index} primary={singleStock} />
                            </ListItemButton>
                            <IconButton id="deleteButton" aria-label="delete" onClick={() => deleteStock(singleStock)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>

                    ))}
                </div>

                <FormControl id="form">
                    <InputLabel htmlFor="my-input">Add a stock</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" value={newStock} onChange={updateStock} />
                    <FormHelperText id="my-helper-text">Must be their listed symbol!</FormHelperText>
                    <Button id="add-stock-button" variant="contained" type="submit" onClick={addStock}>Enter 🚀</Button>
                </FormControl>
            </div>
        </>
    )
}
export default UserPage;