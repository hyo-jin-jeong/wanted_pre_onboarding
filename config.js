import dotenv from 'dotenv';
dotenv.config();
const config = {
    port: process.env['HOST_PORT'],
    db: {
        host: process.env['DB_HOST'],
        username: process.env['DB_USERNAME'],
        password: process.env['DB_PASSWORD'],
        database: process.env['DB_NAME'],
        dialect: process.env['DB']
    }
};

export default config;