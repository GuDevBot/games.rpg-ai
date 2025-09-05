// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { GameMasterService } from './game-master.class'

// Main data model schema
export const gameMasterSchema = Type.Object(
  {
    action: Type.String()
  },
  { $id: 'GameMaster', additionalProperties: false }
)
export type GameMaster = Static<typeof gameMasterSchema>
export const gameMasterValidator = getValidator(gameMasterSchema, dataValidator)
export const gameMasterResolver = resolve<GameMaster, HookContext<GameMasterService>>({})

export const gameMasterExternalResolver = resolve<GameMaster, HookContext<GameMasterService>>({})

// Schema for creating new entries
export const gameMasterDataSchema = Type.Pick(gameMasterSchema, ['action'], {
  $id: 'GameMasterData'
})
export type GameMasterData = Static<typeof gameMasterDataSchema>
export const gameMasterDataValidator = getValidator(gameMasterDataSchema, dataValidator)
export const gameMasterDataResolver = resolve<GameMaster, HookContext<GameMasterService>>({})

// Schema for updating existing entries
export const gameMasterPatchSchema = Type.Partial(gameMasterSchema, {
  $id: 'GameMasterPatch'
})
export type GameMasterPatch = Static<typeof gameMasterPatchSchema>
export const gameMasterPatchValidator = getValidator(gameMasterPatchSchema, dataValidator)
export const gameMasterPatchResolver = resolve<GameMaster, HookContext<GameMasterService>>({})

// Schema for allowed query properties
export const gameMasterQueryProperties = Type.Pick(gameMasterSchema, ['action'])
export const gameMasterQuerySchema = Type.Intersect(
  [
    querySyntax(gameMasterQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type GameMasterQuery = Static<typeof gameMasterQuerySchema>
export const gameMasterQueryValidator = getValidator(gameMasterQuerySchema, queryValidator)
export const gameMasterQueryResolver = resolve<GameMasterQuery, HookContext<GameMasterService>>({})
