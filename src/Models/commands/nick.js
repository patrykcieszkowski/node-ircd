export const nick = function(user, data) {
  const nick = data[1].trim()

  if (!nick || nick.length < 1) {
    // todo: add error code
    return user.methods.send(this.server.host, '', ':No nickname given')
  } else if (nick === user.data.username === nick) {
    return
  }

  // todo: make sure the nickname isnt duplicated?

  user.methods.send(user.data.username, 'NICK', ':', nick)
  user.username = nick
}

export default nick
