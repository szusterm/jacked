import {NeedSelectorUse} from './types';

const mapSelectors = (uses: NeedSelectorUse[]) => uses.map(use => use.selector);

export default mapSelectors;
