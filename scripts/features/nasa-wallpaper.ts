const titleElement = document.querySelector(".about-img__title");
const authorElement = document.querySelector(".about-img__author");

type ApodResponse = {
  url: string;
  hdurl?: string;
  media_type: string;
  title: string;
  copyright?: string;
  date: string;
};

function applyWallpaper(data: ApodResponse): void {
  const url = (data.hdurl || data.url).replace(/ /g, "_");

  console.log(url);
  document.body.style.background = `
    radial-gradient(
        circle at center,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.3) 70%,
        rgba(0, 0, 0, 0.6) 100%
        ), 
    url(${url})`;

  if (titleElement) titleElement.textContent = data.title;
  if (authorElement) authorElement.textContent = data.copyright ?? "NASA";
}

export function nasaWallpaper() {
  const today = new Date().toISOString().split("T")[0];
  const cache = localStorage.getItem("nasa-wallpaper");

  if (cache) {
    const data: ApodResponse = JSON.parse(cache);
    if (data.date === today) {
      applyWallpaper(data);
      return;
    }
  }

  fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((res) => res.json())
    .then((data: ApodResponse) => {
      if (data.media_type !== "image") return;
      localStorage.setItem("nasa-wallpaper", JSON.stringify(data));
      applyWallpaper(data);
    })
    .catch((err) => console.error("Erro ao buscar imagem da NASA:", err));
}
