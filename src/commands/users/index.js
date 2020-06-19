const {Command, flags} = require('@oclif/command')
const {cli} = require('cli-ux')

class UsersCommand extends Command {
  async run() {
  }
}

UsersCommand.description = `Describe the command here
...
Extra documentation goes here
`

UsersCommand.flags = {}

module.exports = UsersCommand