import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.sass'
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function Nav() {

    const basket = useSelector(state => state.basket);

    const count = basket.reduce((prev, { count }) => prev + count, 0);
    const active_style = ({ isActive }) => isActive ? s.active : ''
    return (
        <nav className={s.nav}>
            <NavLink className={active_style} to='/'>Home</NavLink>
            <NavLink className={active_style} to='/about'>About us</NavLink>
            <NavLink className={active_style} to='/categories'>Categories</NavLink>
            <NavLink className={active_style} to='/basket'>
                <div className={s.counter}>
                    <ShoppingCartOutlined />
                    {
                        !!count && <span className={s.count}>{count}</span>
                    }
                </div>
            </NavLink>
        </nav>
    )
}