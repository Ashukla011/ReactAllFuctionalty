import React, { useState } from 'react'

import '../styles/Product.css'
import {ProductCompo} from'../components/ProductCompo'

let fetchproduct= async(page=1)=>{
 return  fetch(`https://fakestoreapi.com/products?`)
}
   
export const Product = () => {
  let [data,setData]=useState([])
   let [filterproduct,setfilterproduct]=useState([])
   let [search,setSearch]=useState('')
   let [Loading,setLoading]=useState(false)
  
console.log('filterbefor',filterproduct)
  React.useEffect(()=>{
    fetchproduct()
    .then((res)=>res.json())
    .then((res)=>{
      setLoading(true)
      setData(res)
      setfilterproduct(res)
      setLoading(false)
    })
  },[])

 
   let handleFilter=(val)=>{

    if(val==="All"){
        setfilterproduct(data)
    }
    else{
      let valfilter=data.filter((el)=>{
        return val===el.category
      })
      setfilterproduct(valfilter)
      console.log("filterafter",valfilter)
    }
   }


  
    if(Loading){
      <h1>Loading------</h1>
    }


  return (

    <div>
     <select  onChange={(e)=>handleFilter(e.target.value)} >
            <option value="All">All</option>
            <option value="men's clothing">men's clothing</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
        </select>
        <br/>
   
       <div>
        <input type='text' placeholder='qery' onChange={(e)=>setSearch(e.target.value)}/>
       </div>

       <br/>
         
        <div className='product-2'>
        {filterproduct.filter((val)=>{
          if(search==="All"){
            return val
          }else if(val.title.toLowerCase().includes(search.toLowerCase())){
            return val
          }
        })
        .map((el)=>( 
          <ProductCompo
          key={el.id}
          title={el.title}
          price={el.price}
          category={el.category}
          rate={el.rating.rate}
          />
        ))}
      </div>
     
    </div>
  )
}
