import React from "react";
import { useUser } from "./Context";

const Header = () => {
    const { name, loggedIn } = useUser(); //useContext(UserContext);  // useContext를 사용한 클린 코드
    return (
        <header>
            <a href = "#">Home</a> Hello, {name}, you sre {loggedIn ? "logged in" : "annoymous"}
        </header>
    )
};

export default Header;