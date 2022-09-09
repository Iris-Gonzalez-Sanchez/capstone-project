import { useEffect, useState} from 'react'
import protobuf from "protobufjs";
const { Buffer } = require("buffer/");


function UserPage(username, updateUser){
    const [stocks, setStocks] = useState([])

    useEffect(() => {
        const ws = new WebSocket("wss://streamer.finance.yahoo.com");
        console.log(ws, 'ws check')

        protobuf.load("./YPricingData.proto", (error, root) => {
            if (error) {
                    return console.log(error);
                  }
        
                  console.log(root, "ROOT")
        
                  const Yaticker = root.lookupType("yaticker");

                  console.log(Yaticker, "yaticker")
        })

        // protobuf.load("./YPricingData.proto", (error, root) => {
        //   if (error) {
        //     return console.log(error);
        //   }

        //   console.log(root, "ROOT")

        //   const Yaticker = root.lookupType("yaticker");
    
        //   ws.onopen = function open() {
        //     console.log("connected");
        //     ws.send(
        //       JSON.stringify({
        //         subscribe: ("GME")
        //           .split(",")
        //           .map((symbol) => symbol.toUpperCase()),
        //       })
        //     );
        //   };
        //   ws.onclose = function close() {
        //     console.log("disconnected");
        //   };
    
        //   ws.onmessage = function incoming(message) {
        //     const next = Yaticker.decode(new Buffer(message.data, "base64"));
        //     setStocks((current) => {
        //       let stock = current.find((stock) => stock.id === next.id);
        //       if (stock) {
        //         return current.map((stock) => {
        //           if (stock.id === next.id) {
        //             return {
        //               ...next,
        //               direction:
        //                 stock.price < next.price
        //                   ? "up"
        //                   : stock.price > next.price
        //                   ? "down"
        //                   : stock.direction,
        //             };
        //           }
        //           return stock;
        //         });
        //       } else {
        //         return [
        //           ...current,
        //           {
        //             ...next,
        //             direction: "",
        //           },
        //         ];
        //       }
        //     });
        //   };
        // });
      }, []);

    return (
        <>
            <h1>{username.username}</h1>
            <h3>Stocks will display below: </h3>
        </>
    )
}





export default UserPage;