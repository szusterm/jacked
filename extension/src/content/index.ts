import ProductScrapper, {findRecipe} from '../../../shared/scrapper';
import {shopRecipes} from '../../../shared/shopRecipes';
import $ from './JQueryWeb';

const logProduct = (scrapper: ProductScrapper) => {
    console.log(`name: ${scrapper.name}`);
    console.log(`image: ${scrapper.image}`);
    console.log(`price: ${scrapper.price} ${scrapper.currency}`);
};

const scrapProduct = () => {
    const recipe = findRecipe(location.href, shopRecipes);

    const scrapper = new ProductScrapper(recipe, $);

    logProduct(scrapper);
};

window.addEventListener('load', () => {
    const TIME_DELAY = 5000;

    setTimeout(scrapProduct, TIME_DELAY);
}, false);
