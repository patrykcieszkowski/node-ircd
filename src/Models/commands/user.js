export const user = function(client, data) {
  this.server.database.users.register(client, ...data.splice(1))
}

export default user
