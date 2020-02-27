import {JQuery, JQueryInit} from '@shared/scrapper';
import {SelectorValue} from './evaluateData';

const jQueryInject = (selectorValues: SelectorValue[]): JQueryInit => {
    const copiedSelectorValues = [...selectorValues];

    return () => new JQueryInject(copiedSelectorValues);
};

class JQueryInject implements JQuery<JQueryInject> {
    constructor(
        private _selectorValues: SelectorValue[]
    ) {
    }

    at() {
        return new JQueryInject(this._selectorValues);
    }

    attr(name: string) {
        return this._popNextSelectorValue();
    }

    text() {
        return this._popNextSelectorValue();
    }

    private _popNextSelectorValue() {
        const selectorValue = this._selectorValues.shift();

        if (selectorValue) {
            return selectorValue;
        }
    }
}

export default jQueryInject;
