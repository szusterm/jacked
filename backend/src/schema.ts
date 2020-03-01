import {gql, makeExecutableSchema} from 'apollo-server';
import {scanResolver} from './resolvers';
import {scanTypeDef} from './type-defs';
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
