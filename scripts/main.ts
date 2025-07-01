import { clock } from "./components/ui/clock.js";
import { search } from "./components/tools/search.tool.js";
import { calculator } from "./components/tools/calculator.tool.js";
import { passwordGenerator } from "./components/tools/password-generator.tool.js";

const input: HTMLInputElement | null = document.querySelector("#input-text");
const searchResult: Element | null = document.querySelector(
  ".main__search-result"
);
clock();

input?.addEventListener("input", () => {
  const inputValue = input.value.trim();
  if (searchResult) {
    searchResult.textContent = " ";
  }

  calculator("=", inputValue);
  passwordGenerator("genpass ", inputValue)

  search(
    "g ",
    "Google",
    "https://www.google.com/search?q=",
    inputValue,
    "ti-brand-google-filled"
  );
  search(
    "b ",
    "Bing",
    "https://www.bing.com/search?q=",
    inputValue,
    "ti-brand-bing"
  );
  search(
    "d ",
    "DuckDuckGo",
    "https://duckduckgo.com/?q=",
    inputValue,
    "ti-search"
  );
  search(
    "yt ",
    "YouTube",
    "https://www.youtube.com/results?search_query=",
    inputValue,
    "ti-brand-youtube-filled"
  );
  search(
    "c ",
    "ChatGPT",
    "https://chat.openai.com/chat?model=gpt-4&lang=pt&query=",
    inputValue,
    "ti-brand-openai"
  );
  search(
    "gm ",
    "Gemini",
    "https://gemini.google.com/search?q=",
    inputValue,
    "ti-brand-google"
  );
});
