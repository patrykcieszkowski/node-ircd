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

  handle(user, data) {
    const split = data.split(' ')

    if (!this.commands[split[0]]) {
      return false
    }

    return this.commands[split[0]](user, split)
  }

  isCommand(data) {
    const split = data.split(' ')

    if (!this.commands[split[0]]) {
      return false
    }

    return true
  }
}

export default ServerCommands
