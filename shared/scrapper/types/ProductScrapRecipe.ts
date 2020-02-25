import {Currency} from './Currency';
import {JQueryInit} from './JQuery';

export interface ProductScrapRecipe {
    site: string;
    name: ProductFieldReturn<string>;
    image: ProductFieldReturn<string>;
    price: ProductFieldReturn<number>;
    currency: ProductFieldReturn<Currency>;
}

export type ProductFieldReturn<T> = ($: JQueryInit) => (T | undefined);
