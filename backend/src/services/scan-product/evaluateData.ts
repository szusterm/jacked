import {NeedSelectorUse} from './need-recipe-data';

export type SelectorValue = string | undefined | null;

function evaluateData(needData: NeedSelectorUse[]): SelectorValue[] {
    const getText = (selector: string, elementId: number) => {
        return document.querySelectorAll(selector)[elementId].textContent;
    };

    const getAttribute = (selector: string, elementId: number, attribute: string) => {
        return document.querySelectorAll(selector)[elementId].getAttribute(attribute);
    };

    return needData.map(singleData => {
        const {selector, uses} = singleData;

        return uses.map(use => {
            const {dataType, attribute, elementId} = use;

            if (dataType === 'attribute' && attribute) {
                return getAttribute(selector, elementId, attribute);
            }

            if (dataType === 'text') {
                return getText(selector, elementId);
            }
        });
    }).flat();
}

export default evaluateData;
