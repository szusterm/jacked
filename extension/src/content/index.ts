import {scrapProduct, findRecipe, jQueryWeb, ReadyProduct} from '@shared/scrapper';
import {shopRecipes} from '@shared/shopRecipes';

const logProduct = (product: ReadyProduct) => {
    const {name, image, price, currency} = product;

    console.log(`name: ${name}`);
    console.log(`image: ${image}`);
    console.log(`price: ${price} ${currency}`);
};

const scrap = () => {
    const recipe = findRecipe(location.href, shopRecipes);

    if (recipe) {
        const product = scrapProduct(recipe, jQueryWeb);

        logProduct(product);
    }
};

window.addEventListener('load', () => {
    const TIME_DELAY = 5000;

    setTimeout(scrap, TIME_DELAY);
}, false);
