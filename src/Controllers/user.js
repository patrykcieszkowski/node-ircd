import models from '../Models'

export class User {
  constructor(client) {
    this.stream = client.stream
    this.data = {}
    this.registered = false

    this.methods = Object.keys(models.user)
      .reduce((acc, key) => ({
        ...acc,
        [key]: models.user[key].bind(this)
      }), {})
  }

  set username(value) {
    this.data.username = value
  }

  set realname(value) {
    this.data.realname = value
  }

  set hostname(value) {
    this.data.hostname = value
  }

  register() {
    if (this.registered || !this.data.username) {
      return
    }

    this.methods.send('Welcome to EC irc')
  }
}

export default User
