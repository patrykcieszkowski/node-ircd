export const user = function(user, data) {
  this.server.database.users.register(user, ...data.splice(1))
}

export default user
