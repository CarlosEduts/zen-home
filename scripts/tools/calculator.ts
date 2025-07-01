import { createResultCard } from "../components/ui/card-result.js";

export function calculator(shortcut: string, query: string) {
  if (query.toLowerCase().startsWith(shortcut)) {
    const expression = query.slice(shortcut.length).trim();
    let result: string;

    try {
      const fn = new Function(`return (${expression})`);
      result = fn().toString();
    } catch (error) {
      result = "Erro ao calcular expressão.";
    }

    createResultCard({
      title: result,
      subtitle: "Copiar este número para a área de transferência",
      icon: "ti-calculator-filled",
      onAction: () => {
        if (result !== "Erro ao calcular expressão.") {
          navigator.clipboard.writeText(result);
        }
      },
    });
  }
}
