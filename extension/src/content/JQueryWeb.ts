import {JQuery, JQueryInit} from '../../../shared/scrapper';

const $: JQueryInit = selector => {
    const element = new JQueryWeb();
    element.load(selector);

    return element;
};

class JQueryWeb implements JQuery {
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
        if (this._currentElement) {
            return this._currentElement.getAttribute(name);
        }
    }

    text() {
        if (this._currentElement) {
            return this._currentElement.textContent;
        }
    }

    private get _currentElement() {
        return this._elements[this._elementId];
    }
}

export default $;
