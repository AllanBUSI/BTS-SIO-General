const { defineConfig, env } = require("prisma/config");

// Prisma 7 ne charge plus automatiquement le fichier .env :
// on le charge nous-mêmes (process.loadEnvFile, natif depuis Node 20.6+).
try {
  process.loadEnvFile()
} catch {
  // Pas de fichier .env : on se rabat sur les variables d'environnement existantes.
}

module.exports = defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: {
    url: env("DATABASE_URL"),
  },
})
