import React from 'react'
import s from './style.module.sass'
import { useDispatch } from 'react-redux'
import { increase_count_action, decrease_count_action } from '../../store/reducer/basketReducer';

export default function BasketItem({ id, name, price, count }) {
    const dispatch = useDispatch();

    return (
        <div className={s.item}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increase_count_action(id))}>+</button>
                <button onClick={() => dispatch(decrease_count_action(id))}>-</button>
            </div>
        </div>
    )
}
