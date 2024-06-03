import React from 'react'
import { useState,useEffect } from 'react';
import { Item } from './Items';

interface props{
    item :Item,
    items: Item[],
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
}
const ItemCard: React.FC<props> = ({item,items,setItems})=>{
return(
<div className='item-card'>
    <span className='name'></span>
    <span className='description'></span>
    <span className='unitCost'></span>
    <span className='createTime'></span>
    <div>
        <button className='update'>Update</button>
        <button className='delete'>Delete</button>
    </div>
</div>
);    
}

// function ItemCard(item:Item, items:Item[], setItems:): React.FC{
// return(
// <div className='item-card'>
//     <span className='name'></span>
//     <span className='description'></span>
//     <span className='unitCost'></span>
//     <span className='createTime'></span>
//     <div>
//         <button className='update'>Update</button>
//         <button className='delete'>Delete</button>
//     </div>
// </div>
// );
// }

export {ItemCard};