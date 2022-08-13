import "dotenv/config";

const config = {
  db: {
    url: process.env.DB_URL || "",
  },
  app: {
    port: process.env.PORT || 5000,
  },
};

export default config;
