import net from 'net'

import config from './config'

export class Server {
  constructor() {
    this.server = net.createServer((stream) => {
      stream.on('data', buff => {
        const lines = buff.toString().split(/\r?\n/)
        lines.forEach((l, index) => {
          console.log(index, l)
        })
      })
    })
  }

  listen() {
    this.server.listen(config.PORT)
  }
}

export default Server
