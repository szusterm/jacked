import {shopRecipes} from '@shared/shopRecipes';
import {Site} from './typeDef';

export const availableSites: Site[] = shopRecipes.map(recipe => {
    return {
        url: recipe.site
    };
});
