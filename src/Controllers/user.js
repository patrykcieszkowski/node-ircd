import models from '../Models'

export class User {
  constructor(client) {
    this.client = client
    this.server = client.server

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
}

export default User
