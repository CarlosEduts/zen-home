import { clock } from "../features/clock.js";
import { calculator } from "../tools/calculator.js";
import { passwordGenerator } from "../tools/password-generator.js";
import { enginesList } from "../tools/engines-list.js";
import { nasaWallpaper } from "../features/nasa-wallpaper.js";
import { setupKeyboardNavigation } from "../interactions/keyboard-navigation.js";
import { uuidGenerator } from "../tools/uuid-generator.js";
import { help } from "../tools/help.js";

// Função para alternar visibilidade
const toggleVisibility = (element: HTMLElement, condition: boolean) => {
  element.style.display = condition ? "flex" : "none";
};

// Função principal
export function initApp() {
  const input = document.querySelector<HTMLInputElement>("#input-text");
  const searchResult = document.querySelector<HTMLDivElement>(
    ".main__search-result"
  );
  if (!input || !searchResult) return;

  clock();
  nasaWallpaper();
  setupKeyboardNavigation();

  input.addEventListener("input", () => {
    const inputValue = input.value.trim();
    searchResult.textContent = "";

    toggleVisibility(searchResult, !!inputValue);

    calculator("=", inputValue);
    passwordGenerator("genpass ", inputValue);
    enginesList.forEach((engine) => {
      engine.searchFn(inputValue);
    });
    uuidGenerator("uuid ", inputValue);
    help("help", inputValue);
  });
}
