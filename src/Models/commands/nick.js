export const nick = function(client, data) {
  const nick = data[1].trim()

  if (!nick || nick.length < 1) {
    // todo: add error code
    return client._object.methods.send(this.server.host, '', ':No nickname given')
  } else if (nick === client._object.data.username === nick) {
    return
  }

  // todo: make sure the nickname isnt duplicated?

  client._object.methods.send(client._object.data.username, 'NICK', ':', nick)
  client._object.username = nick
}

export default nick
