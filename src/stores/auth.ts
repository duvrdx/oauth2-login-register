import Token from '../models/Token';
import { defineStore } from 'pinia';



export const useAuthStore = defineStore('auth', {
  state: () => (
    {
      access_token: '',
      refresh_token: '',
      expires_in: 0,
    } as Token
  ),
  getters: {
    getToken(scope): Token {
      return {
        access_token: scope.access_token,
        refresh_token: scope.refresh_token,
        expires_in: scope.expires_in,
        scope: scope.scope,
        token_type: scope.token_type
      }
    }
  },
  actions: {
    setToken(token: Token) {
      this.access_token = token.access_token;
      this.refresh_token = token.refresh_token;
      this.expires_in = token.expires_in;
      this.scope = token.scope;
      this.token_type = token.token_type;
    },
    resetToken() {
      this.access_token = '';
      this.refresh_token = '';
      this.expires_in = 0;
      this.scope = '';
      this.token_type = '';
    }
  },
});
