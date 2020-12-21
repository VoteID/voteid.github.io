import { IAuthState, ILobbyState } from './state';

export interface IAuthGetters {
  isAuthenticated(state: IAuthState): boolean;
}

export const AuthGetters: IAuthGetters = {
  isAuthenticated(state: IAuthState): boolean {
    return state.accessToken !== null;
  },
};

export interface ILobbyGetters {
  getMultiAddr(state: ILobbyState): string;
}

export const LobbyGetters: ILobbyGetters = {
  getMultiAddr(state: ILobbyState): string {
    return state.multiAddr;
  },
};
