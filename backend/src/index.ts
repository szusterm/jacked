import 'module-alias/register';
import './app';
import {WebScanner} from './services/WebScanner';
import {findRecipe} from '@shared/scrapper';
import {shopRecipes} from '@shared/shopRecipes';

const scanner = new WebScanner();

(async () => {
    await scanner.initBrowser();

    const url = 'https://www.pornhubapparel.com/products/pornhub-classic-cotton-tee';

    const recipe = findRecipe(url, shopRecipes);

    if (recipe) {
        const product = await scanner.scanSingle(url, recipe);

        console.log(product);
    }
})();

