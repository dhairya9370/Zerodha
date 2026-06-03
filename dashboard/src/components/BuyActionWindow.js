import React, { useState, useContext } from "react";
import "./BuyActionWindow.css";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const BuyActionWindow = ({ uid }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0.0);

  const marginRequired = qty && price ? (parseFloat(qty) * parseFloat(price)).toFixed(2) : "0.00";
  const { closeBuyWindow } = useContext(GeneralContext);

  function handleCancleClick() {
    closeBuyWindow();
  }

  function handleBuyClick() {
    axios.post("http://localhost:3002/placeOrder", {
      name: uid,
      qty: qty,
      price: price,
      mode: "BUY"
    }).then((res) => {
      alert(res.data.message);
      closeBuyWindow();
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
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="price">Price</label>
          </div>
        </div>

        {/* Bottom Row: Margin & Actions */}
        <div className="actions-row">
          <div className="margin-text">
            Margin required <span>₹{marginRequired}</span>
          </div>
          <div className="btn-group">
            <button className="btn btn-buy" onClick={handleBuyClick}>
              Buy
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

export default BuyActionWindow;