export const quit = function(user) {
  user.methods.send('bye')
  user.methods.quit()
}

export default quit
