// src/stores/useSettingsStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import idbStorage from "../services/idbStorage";

const DEFAULT_SETTINGS = {
  name: "",
  color: "#00ffff",
  showGreeting: true,
} as const;

type SettingsStore = {
  name: string;
  color: string;
  showGreeting: boolean;
  setName: (text: string) => void;
  setColor: (color: string) => void;
  toggleGreeting: () => void;
  resetSettings: () => void;
};

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      setName: (text: string) => {
        set({ name: text });
      },
      setColor: (color: string) => {
        set({ color });
      },
      toggleGreeting: () => {
        set((state) => ({ showGreeting: !state.showGreeting }));
      },
      resetSettings: () => {
        set({
          ...DEFAULT_SETTINGS,
        });
      },
    }),
    {
      name: "settings-storage",
      storage: createJSONStorage(() => idbStorage),
    },
  ),
);

export default useSettingsStore;
