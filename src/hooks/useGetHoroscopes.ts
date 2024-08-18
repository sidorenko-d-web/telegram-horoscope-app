import { useQuery } from "@tanstack/react-query";
import { getHoroscopes } from "../services/horoscope.service";

export function useGetHoroscopes(sign: string, lang: string) {
  const { data } = useQuery({
    queryKey: ["horoscopes"],
    queryFn: () => getHoroscopes(sign, lang),
  });

  return { data };
}
