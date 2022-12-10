import React from 'react'
import s from './style.module.sass'
import { useDispatch } from 'react-redux'
import { add_to_basket_action } from '../../store/reducer/basketReducer'
import { Link } from 'react-router-dom'

export default function Product({ id, name, price }) {
  const link = `/product/${id}`
  const dispatch = useDispatch();

  const addToBasket = () => dispatch(add_to_basket_action(id, name, price));


  return (
    <div className={s.item}>
      <Link to={link}>
        <p>{name}</p>
        <p>{price}</p>
      </Link>
      <button onClick={addToBasket}>Add to cart</button>
    </div>

  )
}
