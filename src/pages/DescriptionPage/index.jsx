import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadProductItem } from '../../store/asyncActions/product_item'
import { useSelector } from 'react-redux'
import { reset_state } from '../../store/reducer/productItemReducer'
import { Rate } from 'antd'
import { EyeOutlined } from '@ant-design/icons'
import s from './style.module.sass'

export default function DescriptionPage() {
    const product = useSelector(state => state.product_item)
    const { product_id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProductItem(product_id));
        dispatch(reset_state())
    }, []);

    return (
        Object.keys(product).length === 0
            ? 'LOADING...'
            : <div className={s.container}>
                <div className={s.image}>
                    <img src={product.image} alt='' />
                </div>

                <div className={s.descr_block}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <p>{product.price}$</p>
                    <div>
                        <p> <EyeOutlined /> {product.rating.count}</p>
                        <Rate disabled allowHalf defaultValue={product.rating.rate} />
                    </div>
                </div>
            </div>
    )
}
