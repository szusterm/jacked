export type JQueryInit<T extends JQuery<any>> = (selector: string) => T;

export interface JQuery<T extends JQuery<any>> {
    at: (index: number) => T;
    attr: (name: string) => string | undefined;
    text: () => string | undefined;
}
