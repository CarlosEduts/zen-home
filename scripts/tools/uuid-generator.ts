import { createResultCard } from "../components/card-result.js";

/**
 * Gera UUID v4 com preferência por crypto.getRandomValues, fallback para Math.random.
 */
function uuidv4(): string {
  const rndHex = (n: number) =>
    Array.from({ length: n })
      .map(() => Math.floor(Math.random() * 256))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

  // Preferir crypto.getRandomValues quando disponível
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.getRandomValues === "function"
  ) {
    const buf = new Uint8Array(16);
    crypto.getRandomValues(buf);

    // Ajustar bits de versão (4) e variante (10)
    buf[6] = (buf[6] & 0x0f) | 0x40;
    buf[8] = (buf[8] & 0x3f) | 0x80;

    const hex = Array.from(buf)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return (
      hex.slice(0, 8) +
      "-" +
      hex.slice(8, 12) +
      "-" +
      hex.slice(12, 16) +
      "-" +
      hex.slice(16, 20) +
      "-" +
      hex.slice(20, 32)
    );
  }

  // Fallback (menos seguro)
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Uso:
 * - "uuid" -> gera 1 UUID
 * - "uuid 3" -> gera 3 UUIDs (máx 10)
 */
export function uuidGenerator(shortcut: string, query: string) {
  if (!query.toLowerCase().startsWith(shortcut)) return;

  const arg = query.slice(shortcut.length).trim();
  const count = arg === "" ? 1 : Number(arg);

  if (Number.isNaN(count) || count < 1 || count > 10) {
    createResultCard({
      title: "Erro ao gerar UUID",
      subtitle: "Informe um número entre 1 e 10 (ex.: 'uuid 3')",
      icon: "ti-alert-circle-filled",
      onAction: () => {},
    });
    return;
  }

  const uuids: string[] = [];
  for (let i = 0; i < count; i++) {
    uuids.push(uuidv4());
  }

  const resultText = uuids.join("\n");

  createResultCard({
    title: count === 1 ? uuids[0] : `${count} UUIDs gerados`,
    subtitle:
      count === 1
        ? "Copiar este UUID para a área de transferência"
        : "Copiar todos os UUIDs para a área de transferência",
    icon: "ti-key",
    onAction: () => {
      navigator.clipboard?.writeText(resultText);
    },
  });
}
