// Ваш файл с хранилищем useUserStore
import { defineStore } from 'pinia';

export interface UserStateInterface {
  phone: string;
  uuid: string;
  isAdmin : boolean;
}

export const useUserStore = defineStore('user', {
  persist: true,

  state: (): UserStateInterface => ({
    phone: '',
    uuid: '',
    isAdmin : false,
  }),

  getters: {
    getPhone: (state: UserStateInterface) => state.phone,
    getUuid: (state: UserStateInterface) => state.uuid,
    getIsAdmin: (state: UserStateInterface) => state.isAdmin,
    watchUuid: (state): string => {
      return state.uuid;
    },
    watchPhone: (state): string => {
      return state.phone;
    },
    watchIsAdmin: (state): boolean => {
      return state.isAdmin;
    }
  },

  actions: {
    setPhone(val: string) {
      this.phone = val;
    },
    setUuid(val: string) {
      this.uuid = val;
    },
    setIsAdmin(val: boolean) {
      this.isAdmin = val;
    },
  },
});
