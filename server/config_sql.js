const config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "sam*2109",
  database: process.env.DB_DATABASE || "apartment-project",
  insecureAuth: true,
  protocol: "mysql",
};

module.exports = config;
