import React, {UseContext} from "react";
import { changeLang, useFns, useSetLang, useT } from "./Context";
import Header from "./Header";

export default () => {
    const setLang = useSetLang();
    const t = useT();
    return (
        <>
            <h1>{t("Hello")}</h1>
            <button onClick = {() => setLang("es")}>Translate</button>
        </>
    );
}