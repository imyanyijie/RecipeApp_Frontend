import { Ingrediant } from "./Ingrediant";

 interface Recipe {
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

 interface RecipeShort {
    recipeID: number;
    imagePath: string;
    description: string;
    name: string;
    cookDuration: number;
    prepDuration: number;
    createTime?: Date;
    updateTimestamp?: Date;
};

export {Recipe, RecipeShort}