// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  gameMasterDataValidator,
  gameMasterQueryValidator,
  gameMasterResolver,
  gameMasterExternalResolver,
  gameMasterDataResolver,
  gameMasterQueryResolver
} from './game-master.schema'

import type { Application } from '../../declarations'
import { GameMasterService } from './game-master.class'
import { gameMasterPath, gameMasterMethods } from './game-master.shared'

export * from './game-master.class'
export * from './game-master.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const gameMaster = (app: Application) => {
  // Register our service on the Feathers application
  app.use(gameMasterPath, new GameMasterService(), {
    // A list of all methods this service exposes externally
    methods: gameMasterMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(gameMasterPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(gameMasterExternalResolver),
        schemaHooks.resolveResult(gameMasterResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(gameMasterQueryValidator),
        schemaHooks.resolveQuery(gameMasterQueryResolver)
      ],
      create: [
        schemaHooks.validateData(gameMasterDataValidator),
        schemaHooks.resolveData(gameMasterDataResolver)
      ],
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [gameMasterPath]: GameMasterService
  }
}
