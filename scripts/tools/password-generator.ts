import { createResultCard } from "../components/ui/card-result.js";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export function passwordGenerator(shortcut: string, query: string) {
  if (query.toLowerCase().startsWith(shortcut)) {
    const lengthStr = query.slice(shortcut.length).trim();
    const passLength = Number(lengthStr);

    if (Number.isNaN(passLength) || passLength < 4 || passLength > 64) {
      createResultCard({
        title: "Erro ao gerar senha",
        subtitle: "Informe um número entre 4 e 64",
        icon: "ti-alert-circle-filled",
        onAction: () => {},
      });
      return;
    }

    let newPassword = "";
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * CHARS.length);
      newPassword += CHARS.charAt(randomIndex);
    }

    createResultCard({
      title: newPassword,
      subtitle: "Copiar esta senha para a área de transferência",
      icon: "ti-asterisk",
      onAction: () => {
        navigator.clipboard.writeText(newPassword);
      },
    });
  }
}
