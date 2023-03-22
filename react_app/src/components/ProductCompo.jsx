import React from 'react'

export const ProductCompo = ({title,category,price,rate,id}) => {

  return (
    <div key={id} style={{border:"2px solid grey",textAlign:'center'}}>
        <h1>{title}</h1>
        <p>{`price:${price}`}</p>
        <p>{category}</p>
        <p>{`rateing:${rate}`}</p>
    </div>
  )
}
