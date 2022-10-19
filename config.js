import dotenv from 'dotenv';
dotenv.config();
const config = {
    development: {
        host: process.env['DB_HOST'],
        username: process.env['DB_USERNAME'],
        password: process.env['DB_PASSWORD'],
        database: process.env['DB_NAME'],
        dialect: process.env['DB'],
    },
    port: process.env['HOST_PORT'],
};

export default config;
