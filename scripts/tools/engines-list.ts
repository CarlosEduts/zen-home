import { search } from "./search.js";

export const enginesList = [
  {
    searchFn: (query: string) =>
      search(
        "g ",
        "Google",
        "https://www.google.com/search?q=",
        query,
        "ti-brand-google-filled"
      ),
  },
  {
    searchFn: (query: string) =>
      search(
        "b ",
        "Bing",
        "https://www.bing.com/search?q=",
        query,
        "ti-brand-bing"
      ),
  },
  {
    searchFn: (query: string) =>
      search(
        "d ",
        "DuckDuckGo",
        "https://duckduckgo.com/?q=",
        query,
        "ti-search"
      ),
  },
  {
    searchFn: (query: string) =>
      search(
        "yt ",
        "YouTube",
        "https://www.youtube.com/results?search_query=",
        query,
        "ti-brand-youtube-filled"
      ),
  },
  {
    searchFn: (query: string) =>
      search(
        "c ",
        "ChatGPT",
        "https://chat.openai.com/chat?model=gpt-4&lang=pt&query=",
        query,
        "ti-brand-openai"
      ),
  },
  {
    searchFn: (query: string) =>
      search(
        "gm ",
        "Gemini",
        "https://gemini.google.com/search?q=",
        query,
        "ti-brand-google"
      ),
  },
];
