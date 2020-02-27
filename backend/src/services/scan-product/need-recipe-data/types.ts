export interface NeedSelectorUse {
    selector: string;
    uses: SingleScrapNeed[];
}

export interface SingleScrapNeed {
    elementId: number;
    dataType?: NeedDataType;
    attribute?: string;
}

export enum NeedDataType {
    ATTRIBUTE = 'attribute',
    TEXT = 'text'
}
