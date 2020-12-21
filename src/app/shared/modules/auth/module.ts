import { Module } from 'vuex';
import { IState } from '@/app/state';
import { AuthDefaultState, LobbyDefaultState, IAuthState, ILobbyState } from './state';
import { AuthActions, LobbyActions } from './actions';
import { AuthGetters, LobbyGetters } from './getters';
import { AuthMutations, LobbyMutations } from './mutations';

export const AuthModule: Module<IAuthState, IState> = {
  namespaced: true,
  actions: {
    ...AuthActions,
  },
  getters: {
    ...AuthGetters,
  },
  state: {
    ...AuthDefaultState(),
  },
  mutations: {
    ...AuthMutations,
  },
};

export const LobbyModule: Module<ILobbyState, IState> = {
  namespaced: true,
  actions: {
    ...LobbyActions,
  },
  getters: {
    ...LobbyGetters,
  },
  state: {
    ...LobbyDefaultState(),
  },
  mutations: {
    ...LobbyMutations,
  },
};
