export const send = function() {
  if (!this.stream) {
    return
  }

  const message = arguments.length > 1
    ? Array.prototype.slice.call(arguments).join('')
    : arguments[0]

  if (message.length < 1) {
    console.log('Empty message cant be sent')
    return
  }

  this.stream.write(message + '\r\n')
}

export default send
