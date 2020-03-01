import {findShopRecipe} from '@shared/scrapper';
import {scanShopProduct} from '../services/scan-product';
import {shopRecipes} from '@shared/shopRecipes';
import {Resolvers} from '../generated/graphql';

const scanResolver: Resolvers = {
    Query: {
        scanProduct: (parent, {url}) => {
            const recipe = findShopRecipe(url, shopRecipes);

            if (recipe) {
                return scanShopProduct(url, recipe);
            }
        },

        sites: () => shopRecipes.map(recipe => ({url: recipe.site}))
    }
};

export default scanResolver;
