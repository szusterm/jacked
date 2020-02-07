import {ProductScrapRecipe} from './types/ProductScrapRecipe';

export const findRecipe = (href: string, recipes: ProductScrapRecipe[]) => {
    return recipes.find(({site}) => href.includes(site));
};
