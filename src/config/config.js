import dotenv from 'dotenv'

dotenv.config()

const config = {
    port: parseInt(process.env.PORT),
    mongoURL: process.env.MONGO_URL,
    bcryptSalt: parseInt(process.env.BCRYPT_SALT),
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiration: process.env.JWT_EXPIRATION,
    cookieSecret: process.env.COOKIE_SECRET,
    cookieMaxAge: parseInt(process.env.COOKIE_MAX_AGE),
    gitHubClientId: process.env.GITHUB_CLIENT_ID,
    gitHubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    adminEmail: process.env.ADMIN_EMAIL,
    adminPassword: process.env.ADMIN_PASSWORD
}

export default config;