var http = require('http')
var { readEnvFile } = require('./utils/readEnvFile.cjs')
var { isProduction } = require('./constant/index')
var { logger } = require('./utils/logger.cjs')
const envObject = readEnvFile(
  process.cwd() + `/.${isProduction ? 'production' : 'development'}.env`,
)
const req = http.request(`${envObject.baseUrl}`, (res) => {
  let data = ''

  res.on('data', function (chunk) {
    data += chunk
  })

  res.on('end', function () {
    logger.info('http.request end data:', data.toString())
  })
})

req.on('error', (e) => {
  logger.error(`problem with request: ${e.message}`)
})

req.end()

// 请求今天是周几
const date = new Date()
logger.info(date.getDay())
