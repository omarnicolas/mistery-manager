'use strict'

const { Command } = require('@oclif/command')
const { CLIError } = require('@oclif/errors')
const { cli } = require('cli-ux')
const { Sequelize } = require('@mistery/db')
const { secretServices } = require('@mistery/services')

class SecretsCreateCommand extends Command {
  async run () {
    try {
      const { args } = this.parse(SecretsCreateCommand)
      const { username, name } = args
      await this.config.runHook('authenticate', { username })

      const value = await cli.prompt('Enter your secret', { type: 'mask' })
      const secret = await secretServices.createSecret(username, name, value)

      this.log(`secret: ${secret.name} created for user '${username}'`)
    } catch (err) {
      if (err instanceof Sequelize.UniqueConstraintError) {
        throw new CLIError('Secret name already exists')
      } else if (err instanceof CLIError) {
        throw err
      } else {
        this.log(err)
        throw new CLIError('Cannot create secret')
      }
    } finally {
      this.exit(0)
    }
  }
}

SecretsCreateCommand.description = 'Creates a secret by name'
SecretsCreateCommand.flags = {}
SecretsCreateCommand.args = [
  { name: 'username', required: true },
  { name: 'name', required: true }
]
module.exports = SecretsCreateCommand
