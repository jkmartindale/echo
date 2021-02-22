import fs = require('fs')
import Handlebars = require('handlebars')
import { NowRequest, NowResponse } from '@vercel/node'

const echo = Handlebars.compile(fs.readFileSync('view/echo.handlebars.html').toString(), {
  data: false,
  knownHelpersOnly: true,
  strict: true
})

export default (request: NowRequest, response: NowResponse) => {
  response.status(200).send(echo({
    host: request.headers.host,
    path: request.url
  }))
}
