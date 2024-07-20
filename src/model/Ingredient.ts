import { Item } from "./Item";

export interface Ingredient {
    item: Item;
    itemAmount: number;
    unit: string;
};