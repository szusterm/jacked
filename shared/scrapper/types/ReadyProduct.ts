import {Currency} from './Currency';

export interface ReadyProduct {
    readonly name?: string;
    readonly image?: string;
    readonly price?: number;
    readonly currency?: Currency;
    readonly isValid: boolean;
}
