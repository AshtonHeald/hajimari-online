// src/stores/useSettingsStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import idbStorage from "../services/idbStorage";

type SearchEngine = {
  name: string;
  url: string;
};

// Default Search Engines
const SearchEngines = [
  { name: "Google", url: "http://www.google.com/search?q=" },
  { name: "Bing", url: "https://www.bing.com/search?q=" },
  { name: "Yahoo", url: "https://search.yahoo.com/search?p=" },
];

const DEFAULT_SETTINGS = {
  name: "",
  color: "#00ffff",
  showGreeting: true,
  searchEngines: SearchEngines,
  searchEngine: SearchEngines[0],
} as const;

type SettingsStore = {
  // General Settings
  name: string;
  color: string;
  showGreeting: boolean;
  setName: (text: string) => void;
  setColor: (color: string) => void;
  toggleGreeting: () => void;
  // Search Engine Settings
  searchEngines: SearchEngine[];
  searchEngine: SearchEngine;
  setSearchEngine: (engine: SearchEngine) => void;
  setDefaultEngine: (engine: SearchEngine) => void;
  // Reset all settings
  resetSettings: () => void;
};

const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      ...DEFAULT_SETTINGS,
      // General settings actions
      setName: (text: string) => {
        set({ name: text });
      },
      setColor: (color: string) => {
        set({ color });
      },
      toggleGreeting: () => {
        set((state) => ({ showGreeting: !state.showGreeting }));
      },
      // Search engine actions
      setSearchEngine: (engine: SearchEngine) => {
        set(() => ({ searchEngine: engine })); // Set the current search engine
      },
      setDefaultEngine: (engine: SearchEngine) => {
        set(() => ({ searchEngine: engine })); // Persist the default engine
      },
      // Reset to default settings
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
