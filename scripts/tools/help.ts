import { createResultCard } from "../components/card-result.js";

export function help(shortcut: string, query: string) {
  if (query.toLowerCase().startsWith(shortcut)) {
    const url = "https://github.com/CarlosEduts/zen-home";
    createResultCard({
      title: "Acesse o guia completo no GitHub",
      subtitle: "Você será redirecionado para o repositório no GitHub",
      icon: "ti-help",
      onAction: () => {
        window.open(url, "_blank");
      },
    });
  }
}
