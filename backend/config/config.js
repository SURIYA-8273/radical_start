import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV;
dotenv.config({ path: `.env.${NODE_ENV}` });

export const config = {
  env: NODE_ENV,

  port: process.env.PORT,

  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },

  tables: {
    employees: process.env.TABLE_EMPLOYEES,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },

  cloudinary: {
    name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
};
