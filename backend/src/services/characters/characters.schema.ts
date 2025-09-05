import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { CharactersService } from './characters.class'

// Main data model schema
export const charactersSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    name: Type.String(),
    class: Type.String(),
    userId: ObjectIdSchema() // The user who owns this character
  },
  { $id: 'Characters', additionalProperties: false }
)
export type Characters = Static<typeof charactersSchema>
export const charactersValidator = getValidator(charactersSchema, dataValidator)
export const charactersResolver = resolve<Characters, HookContext<CharactersService>>({})

export const charactersExternalResolver = resolve<Characters, HookContext<CharactersService>>({})

// Schema for creating new entries
export const charactersDataSchema = Type.Pick(charactersSchema, ['name', 'class'], {
  $id: 'CharactersData'
})
export type CharactersData = Static<typeof charactersDataSchema>
export const charactersDataValidator = getValidator(charactersDataSchema, dataValidator)
export const charactersDataResolver = resolve<Characters, HookContext<CharactersService>>({})

// Schema for updating existing entries
export const charactersPatchSchema = Type.Partial(charactersSchema, {
  $id: 'CharactersPatch'
})
export type CharactersPatch = Static<typeof charactersPatchSchema>
export const charactersPatchValidator = getValidator(charactersPatchSchema, dataValidator)
export const charactersPatchResolver = resolve<Characters, HookContext<CharactersService>>({})

// Schema for allowed query properties
export const charactersQueryProperties = Type.Pick(charactersSchema, ['_id', 'userId'])
export const charactersQuerySchema = Type.Intersect(
  [
    querySyntax(charactersQueryProperties),
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type CharactersQuery = Static<typeof charactersQuerySchema>
export const charactersQueryValidator = getValidator(charactersQuerySchema, queryValidator)
export const charactersQueryResolver = resolve<CharactersQuery, HookContext<CharactersService>>({})