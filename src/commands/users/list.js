const {Command, flags} = require('@oclif/command')
const {cli} = require('cli-ux')

class UsersListCommand extends Command {
  async run() {
  }
}

UsersListCommand.description = `Describe the command here
...
Extra documentation goes here
`

UsersListCommand.flags = {}

module.exports = UsersListCommand