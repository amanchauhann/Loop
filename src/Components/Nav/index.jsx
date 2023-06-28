import { useState } from "react";
import "./main.css"
import { Link } from "react-router-dom";
import { divider_border } from "../../Styles/Global";

const Nav = () => {
    const [search_value, setSearch_value] = useState("");
    const search_value_handler = (e) => {
        setSearch_value(e.target.value);
    }
    return (
        <nav className="navigation" style={{ ...divider_border, position: "sticky", top: 0, zIndex: 1 }}>
            <Link to={"/"} style={{ color: "currentcolor" }}>Loop</Link>

            <Link to={"/mockman"}>
                Mockman
            </Link>
            <div className="input_container">
                <input
                    className="search_bar"
                    type="search"
                    placeholder="search here..."
                    onChange={search_value_handler}
                    value={search_value}
                />
            </div>
        </nav>
    )
}

export default Nav