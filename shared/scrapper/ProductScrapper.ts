import {ProductScrapRecipe} from './types/ProductScrapRecipe';
import {JQueryInit} from './types/JQuery';
import {Currency} from './Currency';

export class ProductScrapper {
    private _cachedName: string | undefined;
    private _cachedImage: string | undefined;
    private _cachedPrice: number | undefined;
    private _cachedCurrency: Currency | undefined;

    constructor(
        private _recipe: ProductScrapRecipe,
        private _jQuery: JQueryInit<any>
    ) {
    }

    get name() {
        if (!this._cachedName && this._recipe) {
            this._cachedName = this._recipe.name(this._jQuery);
        }

        return this._cachedName;
    }

    get image() {
        if (!this._cachedImage && this._recipe) {
            this._cachedImage = this._recipe.image(this._jQuery);
        }

        return this._cachedImage;
    }

    get price() {
        if (!this._cachedPrice && this._recipe) {
            this._cachedPrice = this._recipe.price(this._jQuery);
        }

        return this._cachedPrice;
    }

    get currency() {
        if (!this._cachedCurrency && this._recipe) {
            this._cachedCurrency = this._recipe.currency(this._jQuery);
        }

        return this._cachedCurrency;
    }

    get isValid() {
        return (
            this.name &&
            this.image &&
            this.price !== undefined &&
            this.currency
        );
    }
}
