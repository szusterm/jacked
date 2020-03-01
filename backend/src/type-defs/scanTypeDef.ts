import {gql} from 'apollo-server';

const scanTypeDef = gql`
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

export default scanTypeDef;
