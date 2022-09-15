import { useQuery } from 'react-query';
import Api from './index';
import { HOST } from '../config';

const URLS = {
  NUMBER_OF_PLAYERS: `${HOST}/count`,
  PLAYERS_DETAIL: `${HOST}/players`
};

interface NumberOfPlayerResponse {
  count: number;
}

interface PlayersDetailResponse {
  name: string;
  active: string;
}

async function getNumberOfPlayers(): Promise<NumberOfPlayerResponse> {
  const { data } = await Api.get(URLS.NUMBER_OF_PLAYERS);
  return data;
}

async function getPlayersDetail(): Promise<string[]> {
  let { data } = await Api.get(URLS.PLAYERS_DETAIL);
  return data;
}

export function useNumberOfPlayers<TData = NumberOfPlayerResponse>() {
  return useQuery('count', getNumberOfPlayers);
}

export function usePlayersDetail<TData = string[]>() {
  return useQuery('players', getPlayersDetail);
}
