import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Product';
import { loadProducts } from '../../store/asyncActions/products';
import { add_products_action } from '../../store/reducer/productReducer';
import s from './style.module.sass'


export default function ProductsContainer() {
    //const number = useSelector(state => state);
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    {/*const incrSubmit = event => {
        event.preventDefault();
        const value = event.target.amount.value;
        const action = {
            type: 'INCREMENT',
            payload: +value
        }
        dispatch(action)
    };
    const decrSubmit = event => {
        event.preventDefault();
        const value = event.target.amount.value;
        const action = {
            type: 'DECREMENT',
            payload: +value
        }
        dispatch(action)
    };*/}

    useEffect(() => {
        dispatch(loadProducts)
    }, []);

    const submit = e => {
        e.preventDefault();
        const { name, price } = e.target;
        dispatch(add_products_action(name.value, +price.value))
    }

    return (
        <div>
            {/*<p>{number}</p>
            <form onSubmit={incrSubmit}>
                <input type="text" name='amount' />
                <button>Increase</button>
            </form>

            <form onSubmit={decrSubmit}>
                <input type="text" name='amount' />
                <button>Decrease</button>
            </form> */}

            <form onSubmit={submit}>
                <input type="text" name='name' placeholder='name' />
                <input type="text" name='price' placeholder='price' />
                <button>Add</button>
            </form>

            <div className={s.container}>
                {
                    products.map(prod => <Product key={prod.id} {...prod} />)
                }
            </div>
        </div>

    )
}
