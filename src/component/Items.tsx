import React, { useRef } from 'react'
import { useState,useEffect } from 'react';
import { getAllItem } from '../service/itemService';
import { ItemCard } from './ItemCard';

export type Item = {
    id?: number,
    name: string,
    description: string,
    unitCost: number
}

//mock data for testing
const testItems: Item[] = [
    {
        id : 1,
        name : 'Apple',
        description : 'apple description',
        unitCost: 2.00
    },
    {
        id : 2,
        name : 'Cherry',
        description : 'Cpple description',
        unitCost: 5.00
    },
    {
        id : 3,
        name : 'tomato',
        description : 'tomato description',
        unitCost: 1.40
    }
]

const Items:React.FC =()=>{
    console.log("render Items");
    const[items, setItems] = useState<Item[]>([]);
    useEffect(()=>{
        async function getItems(){
            // const items: Item[] = await getAllItem();
            const item : Item[] = testItems;
            setItems(items);
        }
    },[]);

    return(
        <div className='item-section'>
            {
                // items?.map((item)=>(
                //     <ItemCard 
                //         item = {item}
                //         items = {items}
                //         setItems={setItems}  
                //     />
                // ))
                items.map((item)=>{
                    return(
                        <ItemCard
                        item = {item}
                        items = {items}
                        setItems={setItems}                              
                        />
                    )
                })
            }
        </div>  
    );
}

export default Items;
