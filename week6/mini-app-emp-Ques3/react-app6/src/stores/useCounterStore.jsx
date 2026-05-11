import { create } from "zustand";

export const useCounterStore = create((set) => ({
  // State
  newCounter: 0,
  newCounter3: 500,

  user: {
    name: "vidhya",
    email: "vidhya@gmail.com",
    age: 19,
  },

  // Actions
  changeEmail: () =>
    set((state) => ({
      user: {
        ...state.user,
        email: "sri@gmail.com",
      },
    })),

  incrementCounter: () =>
    set((state) => ({
      newCounter: state.newCounter + 1,
    })),

  decrementCounter: () =>
    set((state) => ({
      newCounter: state.newCounter - 1,
    })),

  reset: () =>
    set({
      newCounter: 500,
    }),
}));
