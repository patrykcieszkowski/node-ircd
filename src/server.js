import net from 'net'

import config from './config'

import ServerCommands from './Controllers/commands'
import ServerDatabase from './Controllers/database'

import User from './Controllers/user'


export class AbstractConnection {
  constructor({ stream, server }) {
    this.stream = stream
    this.server = server
    this._object = new User(this)
  }

  destroy() {
    this.stream.end()
    this.stream.destroy()
    delete this
  }
}

export class Server {
  constructor() {
    this.database = new ServerDatabase({ server: this })
    this.commands = new ServerCommands({ server: this })

    this.server = net.createServer((stream) => {
      const client = new AbstractConnection({ stream, server: this })
      stream.on('error', (err) => {
        console.log(err)
        stream.destroy()
      })

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

  motd(user) {
    user.methods.send('Welcome to the chat room!')
  }

  listen() {
    this.server.listen(config.PORT)
  }
}

export default Server
