let dbConfig = {
  synchronize: true,
  migrations: ["migration/*.js"],
  cli: {
    migrationsDir: "migration",
  },
};

switch (process.env.NODE_ENV) {
  case "development":
    Object.assign(dbConfig, {
      type: "sqlite",
      database: "db.sqlite",
      entities: ["**/*.entity.js"],
    });
    break;
  case "test":
    Object.assign(dbConfig, {
      type: "sqlite",
      database: "test.sqlite",
      entities: ["**/*.entity.ts"],
      migrationsRun: true,
    });
    break;
  case "production":
    Object.assign(dbConfig, {
      type: "sqlite",
      database: "db.sqlite",
      entities: ["**/*.entity.js"],
    });

    break;
  default:
    throw new Error("Unknown environment");
}
module.exports = dbConfig;
