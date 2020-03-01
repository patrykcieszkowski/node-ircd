export class User {
  constructor() {
    this.data = {}
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
