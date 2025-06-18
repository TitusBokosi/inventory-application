module.exports = {
  development: {
    user: process.env.DB_USER_DEV,
    host: process.env.DB_HOST_DEV,
    database: process.env.DB_DATABASE_DEV,
    password: process.env.DB_PASSWORD_DEV,
    port: process.env.DB_PORT_DEV,
  },
  production: {
    user: process.env.DB_USER_PROD,
    host: process.env.DB_HOST_PROD,
    database: process.env.DB_DATABASE_PROD,
    password: process.env.DB_PASSWORD_PROD,
    port: process.env.DB_PORT_PROD,
  },
};
