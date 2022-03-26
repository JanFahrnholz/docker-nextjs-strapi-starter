module.exports = ({ env }) => ({
    connection: {
        client: env("DATABASE_CLIENT", "mysql"),
        connection: {
            host: env("DATABASE_HOST", "db"),
            port: env.int("DATABASE_PORT", 3306),
            database: env("DATABASE_NAME", "strapi"),
            user: env("DATABASE_USERNAME", "root"),
            password: env("DATABASE_PASSWORD", "root"),
            ssl: env.bool("DATABASE_SSL", "false"),
        },
        debug: false,
    },
});
