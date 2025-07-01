let currentIndex = -1;

export function setupKeyboardNavigation(
  containerSelector = ".main__search-result"
) {
  document.addEventListener("keydown", (e) => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll(".result__item")
    ) as HTMLElement[];

    if (!cards.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % cards.length;
      updateSelection(cards);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSelection(cards);
    }

    if (e.key === "Enter" && currentIndex >= 0) {
      console.log("enter");
      const card = cards[currentIndex];
      console.log(card);
      const action = (card as any)._onAction;
      console.log(action);
      if (typeof action === "function") {
        action();
      }
    }
  });
}

function updateSelection(cards: HTMLElement[]) {
  cards.forEach((card, i) => {
    if (i === currentIndex) {
      card.classList.add("selected");
      card.focus();
    } else {
      card.classList.remove("selected");
    }
  });
}
