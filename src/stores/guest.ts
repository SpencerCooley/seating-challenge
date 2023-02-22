import { defineStore } from 'pinia';

export const useGuestStore = defineStore('guest', {
  state: () => ({
    guests: [],
    seating: {},
    packages: {},
  }),

  getters: {
    guestList(state) {
      return state.guests;
    },
    seatingChart(state) {
      return state.seating;
    },
  },

  actions: {
    setGuestList(data) {
      this.guests = data;
    },

    setSeating(data) {
      this.seating = data;
    },

    setPackagesList(data) {
      this.packages = data;
    },
  },
});
