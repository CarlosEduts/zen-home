import { clock } from "./components/ui/clock.js";
import { search } from "./components/tools/search.tool.js";

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

  search(
    "g ",
    "Google",
    "https://www.google.com/search?q=",
    inputValue,
    "ti-brand-google-filled"
  );
});
