import axios from 'axios';

const URL = "localhost:8080/api/v1/item"

async function getAllItem(){
    try{
        const response = await axios.get(URL);
        console.log('get all item'+response.data);
        return response.data;
    }
    catch(err){
        console.log(err);
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

async function createItem(item){
    try{
        const{data} = await axios.post(URL, item);
        console.log('response '+data); 
    }
    catch(err){
        console.log(err)
    }
}

async function updateItem(item){
    if(!item.id)
        throw new Error("id is missing!");
    try{
        const{data} = await axios.post(URL, item);
        console.log('response '+data);
    }
    catch(err){
        console.log(err)
    }
}

export {getAllItem, getItem,createItem,updateItem};