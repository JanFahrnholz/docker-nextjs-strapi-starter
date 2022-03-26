module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '990e983de1e9820c9775a36eab1f452f'),
  },
});
