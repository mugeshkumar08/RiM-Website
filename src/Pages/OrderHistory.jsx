import React, { useState } from "react";
import "../Pages/OrderHistory.css";
import outdoorStand from "../Assets/ac-outdoor-stand.png";

const orders = [
  {
    id: 1,
    orderId: "12344",
    quantity: 2,
    date: "Nov 27, 2024",
    amount: "Rs 2500.00",
    items: [
      { id: 1, name: "Tool name", category: "AC Spares", quantity: 1, price: "Rs 1000.00", date: "Nov 27, 2024" },
      { id: 2, name: "Tool name", category: "AC Spares", quantity: 1, price: "Rs 1000.00", date: "Nov 27, 2024" },
    ],
  },
  {
    id: 2,
    orderId: "12345",
    quantity: 2,
    date: "Nov 28, 2024",
    amount: "Rs 3000.00",
    items: [
      { id: 1, name: "Tool name", category: "AC Parts", quantity: 1, price: "Rs 1500.00", date: "Nov 28, 2024" },
      { id: 2, name: "Tool name", category: "AC Parts", quantity: 1, price: "Rs 1500.00", date: "Nov 28, 2024" },
    ],
  },
];

const OrderHistory = () => {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const toggleOrderItems = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Order ID</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <React.Fragment key={order.id}>
              <tr onClick={() => toggleOrderItems(order.orderId)} className="order-row">
                <td>{order.id}</td>
                <td>{order.orderId}</td>
                <td>{order.quantity}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
              </tr>
              {expandedOrderId === order.orderId && (
                <tr className="order-items-row">
                  <td colSpan="5">
                    <div className="order-items">
                      {order.items.map((item) => (
                        <div key={item.id} className="order-item">
                          <div>
                          <img src={outdoorStand} alt={item.name} className="item-image" />
                            <p className="item-name">{item.name}</p>
                            <p className="item-category">{item.category}</p>
                          </div>
                            <td><p className="item-quantity">{item.quantity}</p></td>
                            <td><p className="item-date">{item.date}</p></td>
                            <td><p className="item-price">{item.price}</p></td>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
