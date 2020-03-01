import net from 'net'

import config from './config'

import ServerCommands from './Controllers/commands'

export class Server {
  constructor() {
    this.commands = new ServerCommands({ server: this })

    this.server = net.createServer((stream) => {
      stream.on('end', () => {
        console.log('end')
      })

      stream.on('data', buff => {
        console.log('\n data:')
        const lines = buff.toString().split(/\r?\n/)
        lines.forEach((l, index) => {
          this.data(l)
        })
      })
    })
  }

  data(line) {
    if (this.commands.handle(line)) {
      return
    }

    console.log(line)
  }

  listen() {
    this.server.listen(config.PORT)
  }
}

export default Server
