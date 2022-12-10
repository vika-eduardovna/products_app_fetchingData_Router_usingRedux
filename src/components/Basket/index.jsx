import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from '../BasketItem/index';
import { clear_basket_action } from '../../store/reducer/basketReducer'


export default function Basket() {
  const dispatch = useDispatch();

  const basket = useSelector(state => state.basket);
  const sum = basket.reduce((prev, { price, count }) => prev + price * count, 0);

  return (
    <div>
      <p>Cart:</p>
      <div>
        {
          basket.map(product => <BasketItem key={product.id} {...product} />)
        }
      </div>
      <p>Total price: {sum}$</p>
      <button onClick={() => dispatch(clear_basket_action())}>Delete all items</button>
    </div>
  )
}
