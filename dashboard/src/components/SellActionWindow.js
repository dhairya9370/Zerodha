import React, { useState, useContext,useEffect } from "react";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const SellActionWindow = ({ details }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0.0);

  const marginRequired = qty && price ? (parseFloat(qty) * parseFloat(price)).toFixed(2) : "0.00";
  const { closeSellWindow } = useContext(GeneralContext);

  useEffect(()=>{
    setPrice(details.price);
    setQty(details.qty);
    },[details]);
  function handleCancleClick() {
    closeSellWindow();
  }

  function handleSellClick() {
    if(qty > details.qty){
      alert("Not Enough Holdings!");
      return;
    }
    else if(qty<=0){
      alert("Please sell atleast 1 stock!");
      return;
    }
    axios.post("http://localhost:3002/placeOrder", {
      name: details.name,
      qty: qty,
      price: price,
      mode: "SELL"
    }).then((res) => {
      alert(res.data.message);
      closeSellWindow();
    });
  }

  return (
    // 1. New wrapper div added to center the order window globally
    <div className="modal-overlay" onClick={handleCancleClick}>
      
      {/* 2. stopPropagation avoids closing window when clicking inside form boxes */}
      <div className="order-window-container" onClick={(e) => e.stopPropagation()}>
        <div className="inputs-row">
          {/* Qty Input Box */}
          <div className="input-group">
            <input
              type="number"
              id="qty"
              placeholder=" "
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <label htmlFor="qty">Qty.</label>
          </div>

          {/* Price Input Box */}
          <div className="input-group">
            <input
              type="number"
              id="price"
              step="0.05"
              placeholder=" "
              value={price}
              disabled={true}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="price">Price</label>
          </div>
        </div>

        {/* Bottom Row: Margin & Actions */}
        <div className="actions-row">
          <div className="margin-text">
            Avg. <span>₹{details.avg}</span>
          </div>
          <div className="btn-group">
            <button className="btn btn-sell" onClick={handleSellClick}>
              Sell
            </button>
            <button className="btn btn-cancel" onClick={handleCancleClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;