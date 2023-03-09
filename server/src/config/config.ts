export default () => ({
  port: parseInt(process.env.PORT) ?? 3001,
  dbUrl: process.env.DB_URL,
});
