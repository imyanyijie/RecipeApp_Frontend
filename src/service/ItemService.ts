import axios from 'axios';
import { Item } from '../model/Item';
const URL = "http://localhost:8080/api/v1/items"
const controller = new AbortController();


async function getAllItem():Promise<Item[]>{
    try{
        const response = await axios.get(URL, {signal:controller.signal});
        console.log('get all item'+response.data);
        return response.data;
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

async function createItem(item:Item){
    
    try{
        console.log("the item trying to create is: "+item.name);
        const response = await axios.post(URL, item);
        return response.data;
    }
    catch(err){
        console.log(err);
        throw(err);
    }
}

async function updateItem(item):Promise<Item>{
    if(!item.itemID)
        throw new Error("id is missing!");
    try{
        const resposne = await axios.post(URL, item);
        console.log('response '+resposne.data);
        return resposne.data; 
    }
    catch(err){
        console.log(err);
        throw(err);
    }
}

async function deleteItem(item){
    console.log("Delete Item: "+item.itemID);
    try{
        const response = await axios.delete(URL+`/${item.itemID}`);
        return response.data;
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