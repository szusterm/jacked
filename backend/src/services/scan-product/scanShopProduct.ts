import {mapSelectors, pullAttributesOut} from './need-recipe-data';
import {ProductScrapRecipe, scrapProduct} from '@shared/scrapper';
import {Browser} from '../puppeteer-browser';
import {Page} from 'puppeteer';
import evaluateData, {SelectorValue} from './evaluateData';
import jQueryInject from './jQueryInject';

async function scanShopProduct(siteUrl: string, recipe: ProductScrapRecipe) {
    const page = await Browser.newPage();

    if (page) {
        await page.goto(siteUrl);

        const needData = pullAttributesOut(recipe);
        const usedSelectors = mapSelectors(needData);

        await waitForAllSelectors(page, usedSelectors);

        // @ts-ignore
        const selectorValues: SelectorValue[] = await page.evaluate(evaluateData, needData);

        await page.close();

        return scrapProduct(recipe, jQueryInject(selectorValues));
    }
}

function waitForAllSelectors(page: Page, selectors: string[]) {
    const promises = selectors.map(selector => page.waitForSelector(selector));

    return Promise.all(promises);
}

export default scanShopProduct;
