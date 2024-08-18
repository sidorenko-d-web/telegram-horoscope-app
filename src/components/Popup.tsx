import { useGetHoroscopes } from "../hooks/useGetHoroscopes";
interface PopupProps {
  link: string;
  title: string;
  lang: string;
  closeHoroscope: () => void;
}

export function Popup({ link, title, lang, closeHoroscope }: PopupProps) {
  const { data } = useGetHoroscopes(link, lang);
  return (
    <>
      <div className="wrapper" onClick={() => closeHoroscope()}></div>
      <div className="popup">
        <h1>{title}</h1>
        <div className="content">
          <p>{data?.data.horoscope}</p>
        </div>
      </div>
    </>
  );
}
