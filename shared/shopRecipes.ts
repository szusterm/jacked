import {ProductScrapRecipe} from './ProductScrapper/ProductScrapRecipe';
import {Currency} from './ProductScrapper/Currency';

export const shopRecipes: ProductScrapRecipe[] = [
    {
        site: 'pornhubapparel.com',

        name: $ => $('.product-single__title').text(),

        image: $ => {
            const src = $('.zoomImg').attr('src');

            if (src) {
                return src.replace('//', '');
            }
        },

        price: $ => {
            const textPrice = $('.product-price').text();

            if (textPrice) {
                const fixedPrice = textPrice.replace('$', '');

                return parseFloat(fixedPrice);
            }
        },

        currency: () => Currency.USD
    },

    {
        site: 'bigstar.pl',

        name: $ => $('.product-name .sel-product-name').text(),

        image: $ => {
            const src = $('.ng-star-inserted').attr('src');

            if (src) {
                return src.replace('//', '');
            }
        },

        price: $ => {
            const textPrice = $('.price span').at(0).text();

            if (textPrice) {
                const fixedPrice = textPrice
                    .trim()
                    .replace(',', '.')
                    .replace(' pln', '');

                return parseFloat(fixedPrice);
            }
        },

        currency: () => Currency.PLN
    }
];
