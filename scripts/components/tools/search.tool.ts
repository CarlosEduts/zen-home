import { createResultCard } from "../ui/card-result.js";

export function search(
  shortcut: string,
  engineName: string,
  engineUrl: string,
  query: string,
  icon: string
) {
  if (query.toLowerCase().startsWith(shortcut)) {
    const searchTerm = query.slice(shortcut.length);
    const url = `${engineUrl}${searchTerm}`;

    createResultCard({
      title: `Buscar no ${engineName} | ${searchTerm}`,
      subtitle: url,
      icon,
      onAction: () => {
        window.open(url, "_blank");
      },
    });
  }
}
