import {JQuery, JQueryInit, ProductScrapRecipe, scrapProduct} from '@shared/scrapper';

export const pullSelectorsOut = (recipe: ProductScrapRecipe) => {
    const selectors: string[] = [];

    scrapProduct(recipe, fakeJQuery(selectors));

    return selectors;
};

const fakeJQuery = (selectors: string[]): JQueryInit => selector => {
    selectors.push(selector);

    return new FakeJQuery();
};

class FakeJQuery implements JQuery<FakeJQuery> {
    static readonly MOCK_TEXT = 'text';

    at(index: number) {
        return this;
    }

    attr(name: string) {
        return FakeJQuery.MOCK_TEXT;
    }

    text() {
        return FakeJQuery.MOCK_TEXT;
    }
}
