export type JQueryInit = (selector: string) => JQuery;

export interface JQuery {
    at: (index: number) => JQuery;
    attr: (name: string) => string;
    text: () => string;
}
