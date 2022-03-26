module.exports = {
    reactStrictMode: true,
    env: {
        STRAPI_URL: process.env.STRAPI_URL,
    },
    images: {
        domains: ["backend", "localhost", "industed.com"],
    },
};
