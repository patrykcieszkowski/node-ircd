import user from './user'
import nick from './nick'
import motd from './motd'
import quit from './quit'

export const commands = {
  USER: user,
  NICK: nick,
  MOTD: motd,
  QUIT: quit
}

export default commands
