import knex from 'knex';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from '../core/constants/environments';

const connection = knex({
    client: 'pg',
    connection: {
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE
    },
})

export default connection;