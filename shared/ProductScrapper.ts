import {JQueryInit} from './JQuery';

export type ProductFieldReturn<T> = ($: JQueryInit) => T;

export interface ProductScrapRecipe {
    site: string;
    name: ProductFieldReturn<string>;
    image: ProductFieldReturn<string>;
    price: ProductFieldReturn<number>;
    currency: ProductFieldReturn<Currency>;
}

export enum Currency {
    USD = 'usd',
    PLN = 'pln'
}

export class ProductScrapper {
    private _cachedName: string;
    private _cachedImage: string;
    private _cachedPrice: number;
    private _cachedCurrency: Currency;

    constructor(
        private _recipe: ProductScrapRecipe,
        private _jQuery: JQueryInit
    ) {
    }

    get name() {
        if (!this._cachedName) {
            this._cachedName = this._recipe.name(this._jQuery);
        }

        return this._cachedName;
    }

    get image() {
        if (!this._cachedImage) {
            this._cachedImage = this._recipe.image(this._jQuery);
        }

        return this._cachedImage;
    }

    get price() {
        if (!this._cachedPrice) {
            this._cachedPrice = this._recipe.price(this._jQuery);
        }

        return this._cachedPrice;
    }

    get currency() {
        if (!this._cachedCurrency) {
            this._cachedCurrency = this._recipe.currency(this._jQuery);
        }

        return this._cachedCurrency;
    }

}
