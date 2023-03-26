import React from 'react'
import '../styles/Product.css'
export const ProductCompo = ({title,category,price,rate,id}) => {

  return (
    <div key={id} className='product-1'>
        <h1>{title}</h1>
        <p>{`price:${price}`}</p>
        <p>{category}</p>
        <p>{`rateing:${rate}`}</p>
    </div>
  )
}
