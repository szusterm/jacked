import {JQuery, JQueryInit} from '../../../shared/JQuery';

const $: JQueryInit = selector => {
    const element = new JQueryWeb();
    element.load(selector);

    return element;
};

class JQueryWeb implements JQuery {
    private _elements: NodeListOf<Element>;

    constructor(
         elements?: NodeListOf<Element>,
        private _elementId: number = 0
    ) {
        this._elements = elements;
    }

    load(selector: string) {
        this._elements = document.querySelectorAll(selector);
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
