import { Stack } from '@mui/material'
import React from 'react'
import { category } from '../Constanta'

import './main.scss'

const Category = ({selectedCategory, selectedCategoryHandler}) => {

  return (
    <Stack className='category-block' direction={'row'} sx={{overflow: "auto"}}>
      {category.map(item => (
        <button 
            className={`category-btn ${item.name == selectedCategory ? "active" : ""}`} 
            key={item.name}
            onClick={()=> selectedCategoryHandler(item.name)}
            >
            <span>{item.icon}</span>
            <span className='category-btn-name'>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category
