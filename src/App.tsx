import { SignItem } from "./components/SignItem";
import text from "./assets/languages.json";
import { useState } from "react";
import { IoLanguageSharp } from "react-icons/io5";
import { signs } from "./assets/signs";

// @ts-expect-error
const tg = window.Telegram.WebApp;

function App() {
  const [language, setLanguage] = useState<"en" | "ru">(
    tg.initDataUnsafe.user.language_code
  );

  const changeLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ru" : "en"));
  };

  return (
    <main>
      <h1 className="title">{text.title[language]}</h1>
      <h2 className="subtitle">{text.subtitle[language]}</h2>
      <button onClick={changeLanguage} className="lang-btn">
        <IoLanguageSharp size={40} />
      </button>
      <div className="signs">
        {signs.map((elem, i) => (
          <SignItem
            lang={language}
            key={i}
            icon={elem.icon}
            // @ts-expect-error
            title={text.signs[elem.sign][language]}
            link={elem.sign}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
