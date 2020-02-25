import {ProductScrapRecipe} from './types';

export const findRecipe = (href: string, recipes: ProductScrapRecipe[]) => {
    return recipes.find(({site}) => href.includes(site));
};
