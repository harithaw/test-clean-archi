const Keycloak = require('keycloak-connect')
const session = require('express-session')

const initKeycloak = (app) => {
  const memoryStore = new session.MemoryStore()
  const keycloak = new Keycloak({ store: memoryStore })
  // session
  app.use(session({
    secret: 'BeALongSecret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  }))

  app.use(keycloak.middleware())

  return keycloak
}

module.exports = initKeycloak
