import type { Params } from '@feathersjs/feathers';
import type { GameMasterData } from './game-master.schema';

interface GameMasterResponse {
  response: string;
}

export class GameMasterService {
  async create(data: GameMasterData, params?: Params): Promise<GameMasterResponse> {
    const playerAction = data.action;

    console.log(`Player action received: ${playerAction}`);
    const aiResponse = `The Game Master ponders your action: "${playerAction}". What's your next move?`;

    return {
      response: aiResponse
    };
  }
}