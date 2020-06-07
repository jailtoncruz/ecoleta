import path from 'path';

module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'tom',
        password: 'ecoleta',
        database: 'ecoleta'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    }
};