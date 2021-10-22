import { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

import { Container, Card } from './styles';

export default function Orders(){
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then((res) => res.json())
      .then(setOrders);
    
    const socket = socketIOClient('http://localhost:3001', {
      transports: ['websocket'],
    });

    socket.on('newOrder', (order) => {
      setOrders(
        (prevState) => [order, ...prevState],
      );
    });

    socket.on('statusChange', (updatedOrder) => {
      setOrders((prevState) => (
        prevState.map((order) => (
          order._id === updatedOrder._id ? updatedOrder : order
        ))
      ))
    })
  }, []);

  function handleStatusChange(order) {
    return ({ target: { value }}) => {
      fetch(`http://localhost:3001/orders/${order._id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: value }),
      });
    };
  }

  return (
    <Container>
      {orders.map((order) => (
        <Card key={order._id} status={order.status}>
          <header>
            <h3>Pedido <strong>#{order._id.substr(0, 15)}</strong></h3>
            <small>MESA #{order.table}</small>
          </header>
          <p>
            {order.description}
          </p>
          <select value={order.status} onChange={handleStatusChange(order)}>
            <option value="PENDENTE">Pendente</option>
            <option value="PREPARANDO">Preparando</option>
            <option value="FINALIZADO">Finalizado</option>
          </select>
        </Card>
      ))}
    </Container>
  );
}