import {JQueryInit, ProductScrapRecipe, scrapProduct} from '@shared/scrapper';
import {JQuery} from '@shared/scrapper/types/JQuery';
import {SingleScrapNeed, NeedDataType, NeedSelectorUse} from './types';

const pullAttributesOut = (recipe: ProductScrapRecipe) => {
    const uses: NeedSelectorUse[] = [];

    scrapProduct(recipe, fakeJQuery(uses));

    return uses;
};

const fakeJQuery = (uses: NeedSelectorUse[]): JQueryInit => selector => {
    const selectorUse: NeedSelectorUse = {
        selector,
        uses: []
    };

    uses.push(selectorUse);

    return new FakeJQuery(selectorUse.uses);
};

class FakeJQuery implements JQuery<any> {
    static readonly MOCK_TEXT = 'text';

    constructor(
        private _elementUses: SingleScrapNeed[],
        private _elementId = 0
    ) {
    }

    at(index: number) {
        return new FakeJQuery(this._elementUses, index);
    }

    attr(name: string) {
        this._elementUses.push({
            elementId: this._elementId,
            dataType: NeedDataType.ATTRIBUTE,
            attribute: name
        });

        return FakeJQuery.MOCK_TEXT;
    }

    text() {
        this._elementUses.push({
            elementId: this._elementId,
            dataType: NeedDataType.TEXT
        });

        return FakeJQuery.MOCK_TEXT;
    }
}

export default pullAttributesOut;
