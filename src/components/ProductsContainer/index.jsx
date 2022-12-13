import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Product';
import { loadProducts } from '../../store/asyncActions/products';
import { add_products_action } from '../../store/reducer/productReducer';
import s from './style.module.sass'


export default function ProductsContainer() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    
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
