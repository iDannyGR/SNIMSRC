export default () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.PORT) || 3001,
  dataBase: {
    port: parseInt(process.env.POSTGRES_PORT),
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    pass: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
    url: process.env.DATABASE_URL,
  },
  secretkey: process.env.MYSECRET_KEY,
});
