import {ProductScrapRecipe, Currency} from './scrapper';

export const shopRecipes: ProductScrapRecipe[] = [
    {
        site: 'https://www.pornhubapparel.com',

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
        site: 'https://bigstar.pl',

        name: $ => $('.sel-product-name').text(),

        image: $ => $('.image-section figure img').attr('src'),

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
    },

    {
        site: 'https://store.steampowered.com',

        name: $ => $('.apphub_AppName').text(),

        image: $ =>  $('.game_header_image_full').attr('src'),

        price: $ => {
            const textPrice = $('.game_purchase_price').text();

            if (textPrice) {
                const fixedPrice = textPrice
                    .trim()
                    .replace(',', '.')
                    .replace('zł', '');

                return parseFloat(fixedPrice);
            }
        },

        currency: () => Currency.PLN
    }
];
