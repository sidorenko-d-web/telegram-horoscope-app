import axios from "axios";

export function getHoroscopes(sign: string, lang: string) {
  return axios.post("https://poker247tech.ru/get_horoscope/", {
    sign: sign,
    language: lang === "en" ? "translated" : "original",
    period: "today",
  });
}
