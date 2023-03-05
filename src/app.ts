import express from 'express'
import dotenv from 'dotenv'
import log from './utils'
import connect from './utils/connect'
import routes from './routes'


dotenv.config()

const app = express()
const port = +(process.env.PORT || "8080")

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(port, async () => {
  log.info(`Server is listening at port ${port}`)
  await connect()
  routes(app)
})