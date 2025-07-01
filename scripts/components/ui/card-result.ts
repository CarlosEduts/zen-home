type NewCardResultProps = {
  title: string;
  subtitle: string;
  icon: string;
  onAction: () => void;
  container?: HTMLElement;
};

function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className?: string,
  textContent?: string
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
}

export function createResultCard({
  title,
  subtitle,
  icon,
  onAction,
  container,
}: NewCardResultProps) {
  const targetContainer =
    container ?? document.querySelector(".main__search-result");

  if (!targetContainer) {
    throw new Error("Result output element not found");
  }

  const card = createElement("div", "result__item");
  const iconDiv = createElement("div", "result-icon");
  const iconElement = createElement("i", `ti ${icon}`);
  const contentDiv = createElement("div", "result-content");
  const titleEl = createElement("p", "", title);
  const subtitleEl = createElement("small", "", subtitle);

  iconDiv.appendChild(iconElement);
  contentDiv.appendChild(titleEl);
  contentDiv.appendChild(subtitleEl);

  card.appendChild(iconDiv);
  card.appendChild(contentDiv);
  card.addEventListener("click", onAction);

  targetContainer.appendChild(card);
}
