import models from '../Models'

export class ServerCommands {
  constructor({ server }) {
    this.server = server

    this.commands = Object.keys(models.commands)
      .reduce((acc, key) => ({
        ...acc,
        [key]: models.commands[key].bind(this)
      }), {})
  }

  handle(data) {
    const split = data.split(' ')

    if (!this.commands[split[0]]) {
      return false
    }

    return this.commands[split[0]](data)
  }
}

export default ServerCommands
