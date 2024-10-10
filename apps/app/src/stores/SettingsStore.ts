// src/stores/useSettingsStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import idbStorage from "../services/idbStorage";
import { SearchEngine, SearchEngines } from "../data/SearchEngines";
import { Video, Videos } from "../data/Videos";

const DEFAULT_SETTINGS = {
  name: "",
  color: "#00ffff",
  showGreeting: true,
  // Engine Settings
  searchEngines: SearchEngines,
  searchEngine: SearchEngines[0],
  // Video settings
  videos: Videos,
  video: Videos[0],
  videoSettings: {
    autoPlay: true,
    keyProp: 0,
  },
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

  // test
  videos: Video[];
  video: Video;
  videoSettings: {
    autoPlay: boolean;

    keyProp: number;
  };

  setVideo: (video: Video) => void;
  toggleAutoPlay: () => void;
  refreshVideo: () => void;
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
      // Video background actions
      setVideo: (video: Video) => {
        set((state) => ({
          video,
          videoSettings: {
            ...state.videoSettings,
            keyProp: state.videoSettings.keyProp + 1, // Increment key to force re-render
          },
        }));
      },
      toggleAutoPlay: () => {
        set((state) => ({
          videoSettings: {
            ...state.videoSettings,
            autoPlay: !state.videoSettings.autoPlay,
          },
        }));
      },
      refreshVideo: () => {
        set((state) => ({
          videoSettings: {
            ...state.videoSettings,
            keyProp: state.videoSettings.keyProp + 1,
          },
        }));
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
