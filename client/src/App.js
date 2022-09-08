import React, { useEffect, useState } from "react";
import "./App.css";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import StockDetail from "./components/StockDetail";
import StockFilter from "./components/StockFilter";
// import ProductionForm from "./components/StockFilter"
// import EditProductionForm from "./components/StockFilter";
import Navigation from "./components/Navigation";
// import { useNavigate } from "react-router-dom";
// import NotFound from "./components/NotFound"


function App() {
  const [stocks, setStocks] = useState([]);
  const [errors, setErrors] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => setCurrentUser(userData));
      } else {
        // res.json().then((json) => console.log(json));
      }
    });
  }, []);

 

  // const fetchStocks = () => {
  //   fetch('/stocks')
  //   .then(res => {
  //     if(res.ok){
  //       res.json().then(setStocks)
  //     }else{
  //       res.json().then(data => setErrors(data.error))
  //     }
  //   })
  // }
  // console.log(currentUser)

  const addStock = (stock) => setStocks((current) => [...current, stock]);

  const updateStock = (updatedStock) =>
    setStocks((current) => {
      return current.map((stock) => {
        if (stock.id === updateStock.id) {
          return updatedStock;
        } else {
          return stock;
        }
      });
    });

  const deleteStock = (id) =>
    setStocks((current) => current.filter((p) => p.id !== id));

  const updateUser = (user) => setCurrentUser(user);

  if (errors) return <h1>{errors}</h1>;

  return (
    <>
            <h1> Libertas Token </h1>
      
      <Navigation currentUser={currentUser} updateUser={updateUser} />
      <Routes>

        <Route path="/stocks/:id" element={<StockDetail deleteStock={deleteStock} stocks={stocks}/>}/>
    

        <Route path="/signup" element={<SignUp updateUser={updateUser} />}/>

        <Route path="/login" element={<Login updateUser={updateUser}/>}/>
          

        {currentUser ? (
          <Route path="/users/:id" element={<UserPage updateUser={updateUser} />}/>
        ):(<></>)
        }
      

      
          

        <Route exact path="/" element={ <Home />}/>
         

      </Routes>
    </>
  );
}

export default App;
