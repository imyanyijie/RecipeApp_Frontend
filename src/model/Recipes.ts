import { Ingrediant } from "./Ingrediant";

export interface Recipe {
    recipeID?: number;
    imagePath: string;
    instruction: string;
    description: string;
    name: string;
    cookDuration: number;
    prepDuration: number;
    ingrediant: Ingrediant[];
    createTime?: Date;
    updateTimestamp?: Date;
};

export interface RecipesShort {
    recipeID: number;
    imagePath: string;
    description: string;
    name: string;
    cookDuration: number;
    prepDuration: number;
    createTime?: Date;
    updateTimestamp?: Date;
};