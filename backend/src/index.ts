import 'module-alias/register';
import './app';
import {scanShopProduct} from './services/scan-product';
import {findRecipe} from '@shared/scrapper';
import {shopRecipes} from '@shared/shopRecipes';

(async () => {
    const url = 'https://www.pornhubapparel.com/products/pornhub-classic-cotton-tee';

    const recipe = findRecipe(url, shopRecipes);

    if (recipe) {
        const product = await scanShopProduct(url, recipe);

        console.log(product);
    }
})();

