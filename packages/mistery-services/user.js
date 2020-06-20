'use strict'

const db = require('@mistery/db')
const { comparePassword } = require('@mistery/crypto')

module.exports = {
  async createUser (username, password, fullName = '') {
    return db.User.create({
      username,
      password,
      fullName
    })
  },

  listUsers () {
    return db.User.findAndCountAll()
  },

  async authenticate (username, pass) {
    const user = await db.User.findOne({ where: { username } })
    if (!user) return false

    const hashed = user.password

    if (await comparePassword(pass, hashed)) {
      return user
    }

    return null
  }
}