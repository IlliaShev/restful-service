import mongoose from "mongoose";
import log from ".";




function connect() {
  const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
  const connectionString = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;
  return mongoose.connect(connectionString)
  .then(() => log.info("Connected to db"))
  .catch((err) => {
    log.error(`Error while connecting to db ${connectionString}\n ${err}`)
    process.exit(1)
  })
}

export default connect