import {resolver as scanResolver, typeDef as scanTypeDef} from './graphql/scan';
import {gql, makeExecutableSchema} from 'apollo-server';
import {merge} from 'lodash';

const originTypeDef = gql`
    type Query {
        _empty: String
    }
`;

export const schema = makeExecutableSchema({
    typeDefs: [
        originTypeDef,
        scanTypeDef
    ],
    resolvers: merge(
        scanResolver
    )
});
