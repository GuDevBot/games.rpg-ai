import { gameMaster } from './game-master/game-master'
import { user } from './users/users'
import { characters } from './characters/characters'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(gameMaster)
  app.configure(user)
  app.configure(characters)
  // All services will be registered here
}
