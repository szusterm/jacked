import {scrapProduct, jQueryWeb, ProductScrapRecipe} from '@shared/scrapper';
import puppeteer, {Browser, Page, launch} from 'puppeteer';
import {pullSelectorsOut} from './pullSelectorsOut';

export class WebScanner {
    private static _browser: Browser | undefined;

    async initBrowser() {
        if (!WebScanner._browser) {
            WebScanner._browser = await launch();
        }
    }

    async closeBrowser() {
        await WebScanner._browser?.close();

        WebScanner._browser = undefined;
    }

    async scanSingle(siteUrl: string, recipe: ProductScrapRecipe) {
        if (WebScanner._browser) {
            const page = await WebScanner._browser.newPage();

            await page.goto(siteUrl);

            const selectors = pullSelectorsOut(recipe);

            await this._waitForAllSelectors(page, selectors);

            const result = await page.evaluate((selectors: string[]) => {
                return selectors.map(selector => {
                    return document.querySelector(selector)?.getAttribute('src');
                });
            }, selectors);

            await page.close();

            return result;
        }
    }

    private _waitForAllSelectors(page: Page, selectors: string[]) {
        const promises = selectors.map(selector => page.waitForSelector(selector));

        return Promise.all(promises);
    }
}
