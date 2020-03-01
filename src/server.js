import net from 'net'

import config from './config'

import ServerCommands from './Controllers/commands'
import ServerDatabase from './Controllers/database'

import User from './Controllers/user'


export class AbstractConnection {
  constructor(stream) {
    this.stream = stream
    this._object = new User(this)
  }
}

export class Server {
  constructor() {
    this.database = new ServerDatabase({ server: this })
    this.commands = new ServerCommands({ server: this })

    this.server = net.createServer((stream) => {
      const client = new AbstractConnection(stream)
      stream.on('end', () => {
        console.log('end')
      })

      stream.on('data', buff => {
        console.log('\n data:')
        const lines = buff.toString().split(/\r?\n/)
        lines.forEach((l, index) => {
          this.data(client, l)
        })
      })
    })
  }

  data(client, line) {
    if (this.commands.isCommand(line)) {
      this.commands.handle(client._object, line)
      return
    }

    console.log(line)
  }

  listen() {
    this.server.listen(config.PORT)
  }
}

export default Server
