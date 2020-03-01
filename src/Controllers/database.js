export class ServerDatabase {
  constructor({ server }) {
    this.server = server
    this.users = new UserDatabase({ db: this })
  }
}

export class UserDatabase {
  constructor({ db }) {
    this.db = db
    this.users = []
  }

  register(client, username, servername, hostname, realname) {
    client._object.username = username
    client._object.realname = realname
    client._object.hostname = hostname
    this.users.push(client)
  }
}

export default ServerDatabase
