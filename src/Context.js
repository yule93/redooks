import React, {useState, useContext, createContext} from "react";

const LangContext = createContext();

// this is data provider
const Lang = ({defaultLang, children, translations}) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = (text) => {
    if(lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };
  return (
    <LangContext.Provider value = {{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

// 이하는 wrapper function 
export const useSetLang = () =>{
  const {setLang} = useContext(LangContext);
  return setLang;
}

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
}

export default Lang;