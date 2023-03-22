import React from 'react'

export const FilterData = ({handlefilter}) => {
  return (
    <div>
        <select name="" id="" onChange={handlefilter}>
            <option value="All">All</option>
            <option value="men's clothing">men's clothing</option>
            <option value="electronics">electronics</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
        </select>
    </div>
  )
}
