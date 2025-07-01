import { clock } from "./components/ui/clock.js";
import { createResultCard } from "./components/ui/card-result.js";

clock();

createResultCard({
  title: "Buscar no YouTube | Musicas",
  subtitle: "https://youtube.com/minha-pesquisa",
  icon: "ti-brand-youtube-filled",
  onAction: () => {
    window.open("https://youtube.com/minha-pesquisa", "_blank");
  },
});
