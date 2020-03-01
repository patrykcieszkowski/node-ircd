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

  register(user, username, servername, hostname, realname) {
    user.username = username
    user.realname = realname
    user.hostname = hostname
    this.users.push(user)
  }
}

export default ServerDatabase
