import {gql} from 'apollo-server';

export const typeDef = gql`
    extend type Query {
        scanProduct(url: String!): Product
        sites: [Site]
    }

    type Product {
        name: String
        image: String
        price: Float
        currency: String
        isValid: Boolean
    }

    type Site {
        url: String
    }
`;

export interface Site {
    url: string;
}
