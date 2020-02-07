import {JQueryInit} from './JQuery';
import {Currency} from '../Currency';

export interface ProductScrapRecipe {
    site: string;
    name: ProductFieldReturn<string>;
    image: ProductFieldReturn<string>;
    price: ProductFieldReturn<number>;
    currency: ProductFieldReturn<Currency>;
}

export type ProductFieldReturn<T> = ($: JQueryInit) => T;
