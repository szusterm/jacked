import {JQueryInit, ProductScrapRecipe, ReadyProduct} from './types';

export function scrapProduct(recipe: ProductScrapRecipe, jQuery: JQueryInit): ReadyProduct {
    const name = recipe.name(jQuery);
    const image = recipe.image(jQuery);
    const price = recipe.price(jQuery);
    const currency = recipe.currency(jQuery);

    const isValid = !!(name && image && price !== undefined && currency);

    return {
        name,
        image,
        price,
        currency,
        isValid
    }
}
