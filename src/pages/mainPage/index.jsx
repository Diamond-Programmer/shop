import React, { useState } from "react";
import {
  Container,
  DFlex,
  Search,
  Select,
  Table,
  TableWrapper,
} from "./styles";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping-cart.svg";
import Cart from "../../components/cart";
import database from "./db.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/modules/cart/cartAction";
import { useSelector } from "react-redux";

function MainPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [category,setCategory] = useState();

  return (
    <>
      <Container>
        <DFlex>
          <Select onChange={(e)=>setCategory(e.target.value)}>
            <option value="">category</option>
            <option value="milk">🥛 Milk</option>
            <option value="meat">🍖 Meat</option>
            <option value="fruit & vegetable">🥗 Fruit & Vegetable</option>
            <option value="water">🥤 Water</option>
            <option value="cake & bakery">🧁 Cake & Bakery</option>
          </Select>
          <Search type="search" placeholder="Search" />
        </DFlex>
        <TableWrapper>
          <Table>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Add to cart</th>
            </tr>
            {database
              .filter((v, i) => !cart.some((val) => val.id === v.id))
              .filter(
                (v, i) =>
                  v.name.toLowerCase().startsWith("") &&
                  v.category.startsWith(category)
              )
              .map(({ id, name, price, category, amount }, index) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{price} soum</td>
                  <td>{amount}</td>
                  <td>{category}</td>
                  <td>
                    <CartIcon
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id,
                            name,
                            price,
                            category,
                            amount,
                            chosen: 1,
                          })
                        )
                      }
                    />
                  </td>
                </tr>
              ))}
          </Table>
        </TableWrapper>
      </Container>
      <Cart />
    </>
  );
}

export default MainPage;
