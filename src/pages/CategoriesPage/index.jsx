import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCategories } from '../../store/asyncActions/categories';
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.sass'

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories)
  useEffect(() => {
    dispatch(loadCategories)
  }, []);

  return (
    <div className={s.container}>
      {
        categories.map(el => <CategoryItem key={el} category={el}/>)
      }
    </div>
  )
}
