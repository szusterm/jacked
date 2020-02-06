import {ProductScrapper} from '../../../shared/ProductScrapper/ProductScrapper';
import {shopRecipes} from '../../../shared/shopRecipes';
import $ from './JQueryWeb';

window.addEventListener('load', () => {
    const scrapper = new ProductScrapper(shopRecipes[0], $);

    if (scrapper.isValid) {
        console.log(`name: ${scrapper.name}`);
        console.log(`image: ${scrapper.image}`);
        console.log(`price: ${scrapper.price} ${scrapper.currency}`);
    }
    else {
        console.log('It\'s not a product page');
    }
}, false);
