import {JQuery, JQueryInit} from './index';

export const jQueryWeb: JQueryInit = selector => {
    const element = new JQueryWeb();
    element.load(selector);

    return element;
};

class JQueryWeb implements JQuery<JQueryWeb> {
    constructor(
        private _elements: Element[] = [],
        private _elementId: number = 0
    ) {
    }

    load(selector: string) {
        this._elements = Array.from(document.querySelectorAll(selector));
    }

    at(index: number) {
        return new JQueryWeb(this._elements, this._elementId);
    }

    attr(name: string) {
        const value = this._currentElement?.getAttribute(name);

        if (value) {
            return value;
        }
    }

    text() {
        const text = this._currentElement?.textContent;

        if (text) {
            return text;
        }
    }

    private get _currentElement(): Element | undefined {
        return this._elements[this._elementId];
    }
}
