export const register = function() {
  if (this.registered || !this.data.username) {
    return
  }

  this.server.motd(this)
}

export default register
