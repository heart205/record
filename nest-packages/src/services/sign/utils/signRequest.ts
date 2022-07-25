import * as http from 'http'
import * as queryString from 'querystring'
import type { signInfo } from './declareType'

export function magicSign(cookie: string, form: signInfo): Promise<boolean> {
  return new Promise((resolve) => {
    const optionsAjax = {
      port: 80,
      host: 'xgmf.g8n.cn',
      path: '/student/course/53901/profiles/29',
      method: 'post',
      timeout: 2000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0',
        Cookie: cookie,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
    const req = http.request(optionsAjax, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        console.log('sign data', data)
        resolve(true)
      })
    })

    req.write(queryString.stringify(form))
    req.end()
  })
}
