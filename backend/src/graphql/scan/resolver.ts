import {findShopRecipe, ProductScrapRecipe} from '@shared/scrapper';
import {scanShopProduct} from '../../services/scan-product';
import {shopRecipes} from '@shared/shopRecipes';
import {Resolvers} from '../resolverTypes';

interface ScanProductArguments {
    url: string;
}

export const resolver: Resolvers = {
    Query: {
        scanProduct: (parent, {url}: ScanProductArguments) => {
            const recipe = findShopRecipe(url, shopRecipes);

            if (recipe) {
                return scanShopProduct(url, recipe);
            }
        },

        sites: () => shopRecipes
    },

    Product: {},

    Site: {
        url: (recipe: ProductScrapRecipe) => recipe.site
    }
};
