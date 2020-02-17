import {gql} from 'apollo-server';

export const typeDef = gql`
    extend type Query {
        sites: [Site]
    }

    type Site {
        url: String
    }
`;

export interface Site {
    url: string;
}
