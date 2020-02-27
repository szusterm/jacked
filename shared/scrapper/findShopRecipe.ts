import {ProductScrapRecipe} from './types';

export const findShopRecipe = (href: string, recipes: ProductScrapRecipe[]) => {
    return recipes.find(({site}) => href.includes(site));
};
