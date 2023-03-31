import CategoryList from '@/components/category_list/CategoryList';
import React from 'react'
import { getAllCategories } from '../../../utils/getAllCategories'

const Categories = ({categories}) => {
  return (
    <CategoryList categories={categories} />
  )
}

export default Categories;

export async function getServerSideProps(context){
    const categories = await getAllCategories()
    
    return {
        props : {categories}
    }
}