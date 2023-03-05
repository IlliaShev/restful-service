import express from 'express'
import dotenv from 'dotenv'
import log from './utils'
import connect from './utils/connect'
import routes from './routes'


dotenv.config()

const app = express()
const port = +(process.env.PORT || "8080")
const host = process.env.HOST || "localhost"

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(port, host, async () => {
  log.info(`Server is listening at http://${host}:${port}`)
  await connect()
  routes(app)
})