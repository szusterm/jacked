import {Browser as BrowserType, launch as launchBrowser} from 'puppeteer';

class Browser {
    private static _browser?: BrowserType;

    static async initBrowser() {
        if (!this._browser) {
            this._browser = await launchBrowser();
        }
    }

    static async closeBrowser() {
        await this._browser?.close();

        this._browser = undefined;
    }

    static async newPage() {
        await this.initBrowser();

        return this._browser?.newPage();
    }
}

export default Browser;
