import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, logOut}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to="/about">About</Link>
            </button>

            <button>
                <Link to="/home">Home</Link>
            </button>

            <button>
                <Link to="/favorites">Favorites</Link>
            </button>

            <button onClick={logOut}>
                <Link to="/">Log Out</Link>
            </button>

        </nav>
    )
}
export default Nav;