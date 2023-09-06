import { defineStore, StoreDefinition } from "pinia";
import { Actions, Getters, States } from "./@types";

export const useInitalStore: StoreDefinition<string, States, Getters, Actions> = defineStore(
  "inital",
  {
    state: () => ({ count: 0 }),
    getters: {
      doubleCount: (state) => state.count * 2
    },
    actions: {
      increment() {
        this.count++;
      }
    }
  }
);
