export const quit = function() {
  if (!this.client.stream || !this.client.stream.end) {
    return
  }

  this.client.destroy()
}

export default quit
