import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'tom',
        password: 'ecoleta',
        database: 'ecoleta'
    }
})

export default connection;