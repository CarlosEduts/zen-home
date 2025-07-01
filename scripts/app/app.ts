import { clock } from "../components/ui/clock.js";
import { calculator } from "../tools/calculator.js";
import { passwordGenerator } from "../tools/password-generator.js";
import { enginesList } from "../tools/engines-list.js";

export function initApp() {
  const input = document.querySelector<HTMLInputElement>("#input-text");
  const searchResult = document.querySelector(".main__search-result");

  if (!input || !searchResult) return;

  clock();

  input.addEventListener("input", () => {
    const inputValue = input.value.trim();
    searchResult.textContent = "";

    calculator("=", inputValue);
    passwordGenerator("genpass ", inputValue);

    enginesList.forEach((engine) => {
      engine.searchFn(inputValue);
    });
  });
}
