import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false }); //lo del force es para que borremos la tabla anterior y creemos una encima de esta
    app.listen(4000);
    console.log("server is listening on port", 4000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
