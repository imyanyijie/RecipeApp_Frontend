import axios from 'axios';
import { Item } from '../model/Item';
const URL = "localhost:8080/api/v1/item"
let id =4;
const controller = new AbortController();

const testItems: Item[] = [
    {
      id: 1,
      name: "Apple",
      description: "apple description",
      unitCost: 2.0,
    },
    {
      id: 2,
      name: "Cherry",
      description: "Cpple description",
      unitCost: 5.0,
    },
    {
      id: 3,
      name: "tomato",
      description: "tomato description",
      unitCost: 1.4,
    },
  ];

async function getAllItem():Promise<Item[]>{
    try{
        // const response = await axios.get(URL,{signal:controller.signal});
        // console.log('get all item'+response.data);
        // return response.data;

        //use mock data
        console.log("get all item from api");
        const items: Item[] = testItems;
        return items;
    }
    catch(err){
        throw(err);
    }
}

async function getItem(id){
    try{
        const response = await axios.get(URL+`/${id}`);
        console.log('getItem '+response);
    }
    catch(err){
        console.log(err);
    }
    
}

async function createItem(item:Item):Promise<Item[]>{
    try{
        //running against a testing data set
        // const{data} = await axios.post(URL, item);
        // console.log('response '+data); 
        console.log("create item price"+item.unitCost)
        item.id = id;
        console.log("Item Id is "+item.id)
        testItems.push(item);
        id++;
        return testItems;
    }
    catch(err){
        console.log(err);
        throw(err);
    }
}

async function updateItem(item):Promise<Item>{
    if(!item.id)
        throw new Error("id is missing!");
    try{
        // const{data} = await axios.post(URL, item);
        // console.log('response '+data);
        // let index:number = testItems.indexOf(item);
        let index = testItems.findIndex(it=>it.id === item.id);
        testItems[index] = item;
        return item; 
    }
    catch(err){
        console.log(err);
        throw(err);
    }
}

async function deleteItem(item){
    console.log("Delete Item");
    try{
        // const response = await axios.delete(URL+`/${item.id}`);
        // return response.data;
        var index = testItems.indexOf(item);
        const deleteItems = testItems.splice(index,1);
        return deleteItems;
    }
    catch(err){
        console.log(err);
        throw(err);
    }

}

function abortRequest(){
    console.log("Aborting the request");
    controller.abort();
}

export {getAllItem, getItem,createItem,updateItem,deleteItem, abortRequest};