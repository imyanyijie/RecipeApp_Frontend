import axios from 'axios';
import { Recipe, RecipesShort } from '../model/Recipes';

const URL = "http://localhost:8080/api/v1/recipes"
const controller = new AbortController();

async function getAllRecipes():Promise<Recipe[]>{
    try{
        const response = await axios.get(URL, {signal:controller.signal});
        console.log('get all item'+response.data);
        return response.data;
    }
    catch(err){
        throw(err);
    }
}

async function getAllRecipesShort():Promise<RecipesShort[]>{
    try{
        const response = await axios.get(URL+`/short`, {signal:controller.signal});
        console.log('get all item'+response.data);
        return response.data;
    }
    catch(err){
        throw(err);
    }
}

async function getRecipe(id:number):Promise<Recipe> {
    try{
        const response = await axios.get(URL+`/${id}`, {signal:controller.signal});
        console.log('get all item'+response.data);
        return response.data;
    }
    catch(err){
        throw(err);
    }
}

async function createRecipe(recipe:Recipe) {
    try{
        console.log("the recipe trying to create is: "+recipe.name);
        
        //running against a testing data set
        const response = await axios.post(URL, recipe);
        return response.data;
    }
    catch(err){
        console.log(err);
        throw(err);
    }
}


async function updateRecipe(recipe:Recipe):Promise<Recipe>{
    if(!recipe.recipeID)
        throw new Error("id is missing!");
    try{
        const resposne = await axios.post(URL, recipe);
        console.log('response '+resposne.data);
        return resposne.data; 
    }
    catch(err){
        console.log(err);
        throw(err);
    }
}

async function deleteRecipe(recipe:Recipe){
    console.log("Delete Item: "+recipe.recipeID);
    try{
        const response = await axios.delete(URL+`/${recipe.recipeID}`);
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

export {getAllRecipes, getAllRecipesShort,createRecipe,updateRecipe,deleteRecipe,abortRequest}