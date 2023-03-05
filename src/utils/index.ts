import logger from 'pino'
import pretty from "pino-pretty"
import dayjs from 'dayjs'


const log = logger({
  base: {
    pid: false,
  },
  formatters: {
    level: (label) => {
      return { level: label.toUpperCase() }
    }
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
}, pretty())

export default log