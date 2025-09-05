import type { ClientApplication } from '../../client'
import type { GameMasterService } from './game-master.class'

export type GameMasterClientService = Pick<
  GameMasterService,
  (typeof gameMasterMethods)[number]
>

export const gameMasterPath = 'game-master'

export const gameMasterMethods = ['create'] as const;

export const gameMasterClient = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(gameMasterPath, connection.service(gameMasterPath), {
    methods: gameMasterMethods
  })
}

declare module '../../client' {
  interface ServiceTypes {
    [gameMasterPath]: GameMasterClientService
  }
}