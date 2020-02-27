export type ResolverFn = (parent: any, args: any) => any;

export interface ResolverMap {
    [field: string]: ResolverFn;
}

export interface Resolvers {
    Query: ResolverMap;
    Product: ResolverMap;
    Site: ResolverMap;
}
