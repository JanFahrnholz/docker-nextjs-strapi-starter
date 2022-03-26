module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '24b6fd5369633bfd967ebe09ed3126e7'),
  },
});
