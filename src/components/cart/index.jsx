import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Container, Table, TableWrapper } from "./styles";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../redux/modules/cart/cartAction";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Container>
      <TableWrapper>
        <Table>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
          {cart.map(({ id, name, price, category, amount, chosen }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{name}</td>
              <td>{price} soum</td>
              <td>{amount}</td>
              <td>{category}</td>
              <td>
                <button
                  disabled={amount <= chosen}
                  onClick={() => dispatch(increment(index))}
                >
                  +
                </button>
                {chosen}
                <button
                  disabled={chosen <= 1}
                  onClick={() => dispatch(decrement(index))}
                >
                  -
                </button>
              </td>
              <td>
                <button onClick={() => dispatch(removeFromCart(index))}>
                  delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>{cart.length}</td>
            <td></td>
            <td>{cart.reduce((t, v) => t + v.chosen * v.price, 0)} soum</td>
            <td></td>
            <td></td>
            <td>{cart.reduce((t, v) => t + v.chosen, 0)}</td>
            <td></td>
          </tr>
          <button onClick={()=>dispatch({type:"CLEAN"})}>clean</button>
        </Table>
      </TableWrapper>
    </Container>
  );
}

export default Cart;
