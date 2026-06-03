import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
      });
  }, []);

  return (
    <div className="orders-container">
      {orders.length === 0 ? (
        // Conditional Render: Show this if there are NO orders
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        // Conditional Render: Show the order list table if data exists
        <>
          <h3 className="title">Orders ({orders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Instrument</th>
                  <th>Type</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => {
                  // Standard trading UI colors: Buy = blue/green, Sell = orange/red
                  const modeClass = order.mode === "BUY" ? "buy-mode" : "sell-mode";
                  
                  return (
                    <tr key={index}>
                      <td>{order.time || "N/A"}</td>
                      <td>{order.name}</td>
                      <td className={modeClass}>{order.mode}</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                      <td>
                        <span className={`status-badge ${order.status?.toLowerCase()}`}>
                          {order.status || "Completed"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;