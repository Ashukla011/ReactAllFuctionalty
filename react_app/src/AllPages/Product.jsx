import React, { useState } from 'react'
// import { FilterData } from '../components/FilterData'
import {ProductCompo} from'../components/ProductCompo'
export const Product = () => {
  let [data,setData]=useState([])
   let [filterproduct,setfilterproduct]=useState(data)
   let [search,setSearch]=useState('')
  let fetchproduct= async()=>{
    
        fetch(`https://fakestoreapi.com/products`)
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res)
          setData(res)
        })
    
  }

  React.useEffect(()=>{
    fetchproduct()
  },[])


   let handleFilter=(e)=>{
    
    let val= e.target.value;
    if(val==="All"){
        setfilterproduct(data)
    }
    else{
      let valfilter=data.filter((el)=>{
        return val===el.category
      })
      setfilterproduct(valfilter)
      console.log("filter",valfilter)
    }
   }
console.log('filterbefor',filterproduct)

const handlesearch=()=>{

}
  return (

    <div>
     <select name="" id="" onChange={(e)=>handleFilter(e)}>
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
    <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)",justifyContent:"space-around",gap:'20px',marginTop:'50px'}}>
      {data.filter((val)=>{
        if(search===""){
          return val
        }else if(val.title.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      }) .map((el)=>(
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
