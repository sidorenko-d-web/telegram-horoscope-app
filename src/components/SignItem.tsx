import React, { useState } from "react";
import { Popup } from "./Popup";

interface SignItemProps {
  icon: React.JSX.Element;
  title: string;
  link: string;
  lang: string;
}

//@ts-ignore
const tg = window.Telegram.WebApp;

export function SignItem({ icon, title, link, lang }: SignItemProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleOpenHoroscope = () => {
    tg.BackButton.show();
    setIsSelected(true);
    document.body.style.overflow = "hidden";
    tg.BackButton.onClick(() => handleCloseHoroscope());
  };

  const handleCloseHoroscope = () => {
    setIsSelected(false);
    document.body.style.overflow = "unset";
    tg.BackButton.hide();
  };

  return (
    <>
      <div className="sign-item" onClick={handleOpenHoroscope}>
        <span className="icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      {isSelected && (
        <Popup
          link={link}
          title={title}
          lang={lang}
          closeHoroscope={handleCloseHoroscope}
        />
      )}
    </>
  );
}
