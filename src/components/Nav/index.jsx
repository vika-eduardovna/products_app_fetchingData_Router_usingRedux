import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.sass'
import { useSelector } from 'react-redux';
import { increase_count_action, decrease_count_action } from '../../store/reducer/basketReducer';

export default function Nav() {
    const basket = useSelector(state => state.basket);
    console.log(basket.length);
    const count = basket.reduce((prev, { count }) => prev + count, 0);


    const active_style = ({ isActive }) => isActive ? s.active : ''
    return (
        <nav className={s.nav}>
            <NavLink className={active_style} to='/'>Home</NavLink>
            <NavLink className={active_style} to='/about'>About us</NavLink>
            <NavLink className={active_style} to='/basket'>
                <div className={s.counter}>
                    Cart
                    {count !== 0 ? <span>{count}</span> : ''}
                </div>
            </NavLink>
        </nav>
    )
}