import React, {UseContext} from "react";
import { useFns } from "./Context";
import Header from "./Header";

const Screen = () => {
    const { logUserIn, user: {loggedIn} } = useFns();
    return (
        <div>
            <Header />
            <h1>First screen</h1>
            <button onClick = {logUserIn}>{loggedIn ? "Log out" : "Log In"}</button>
        </div>
    );
}

export default Screen;