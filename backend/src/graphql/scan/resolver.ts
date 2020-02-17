import {availableSites} from './data';

export const resolver = {
    Query: {
        sites: () => availableSites
    }
};
