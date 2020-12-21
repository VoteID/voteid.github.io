export interface IAuthState {
  accessToken: string;
  refreshToken: string;
}

export interface ILobbyState {
  multiAddr: string;
}

export const AuthDefaultState = (): IAuthState => {
  return {
    accessToken: null,
    refreshToken: null,
  };
};

export const LobbyDefaultState = (): ILobbyState => {
  return {
    multiAddr: null,
  };
};
