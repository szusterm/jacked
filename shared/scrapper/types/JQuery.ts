export type JQueryInit = (selector: string) => JQuery<any>;

export interface JQuery<T extends JQuery<any>> {
    at: (index: number) => T;
    attr: (name: string) => string | undefined;
    text: () => string | undefined;
}
