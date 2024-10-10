export type SearchEngine = {
  name: string;
  url: string;
};

export const SearchEngines = [
  { name: "Google", url: "http://www.google.com/search?q=" },
  { name: "Bing", url: "https://www.bing.com/search?q=" },
  { name: "Yahoo", url: "https://search.yahoo.com/search?p=" },
];
