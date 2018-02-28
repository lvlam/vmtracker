module.exports = {
  port: process.env.PORT || 9090,
  db: {
    name: process.env.DB_NAME || 'vmtracker',
    user: process.env.DB_USER || 'vmtracker',
    password: process.env.DB_PASS || 'vmtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DB_HOST || 'localhost',
      storage: './vmtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
