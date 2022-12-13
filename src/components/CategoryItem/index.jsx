import React from 'react'
import s from './style.module.sass'

export default function CategoryItem({category}) {
  return (
    <div className={s.item}>
        <p>{category}</p>
        <img src="https://fakestoreapi.com/icons/intro.svg" alt="" />
    </div>
  )
}
