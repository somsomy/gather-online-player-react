import { useQuery } from 'react-query';
import Api from './index';

const URLS = {
  NUMBER_OF_PLAYERS: '/count'
};

interface NumberOfPlayerResponse {
  count: number;
}

async function getNumberOfPlayers(): Promise<NumberOfPlayerResponse> {
  const { data } = await Api.get(URLS.NUMBER_OF_PLAYERS);
  return data;
}

export function useNumberOfPlayers<TData = NumberOfPlayerResponse>() {
  return useQuery('count', getNumberOfPlayers);
}
