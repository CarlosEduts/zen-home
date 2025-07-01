const clockElement = document.querySelector("#clock");

export function clock() {
  setInterval(() => {
    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now);

    if (clockElement) {
      clockElement.textContent = formattedDate;
    }
  }, 1000);
}
