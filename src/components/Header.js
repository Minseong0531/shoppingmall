import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header id="main_header">
            <div className="innerbox">
                <h1><Link to="/"><img src="/images/tlogo.png" /></Link></h1>
                <nav className="main-navbar">
                    <ul>
                        <li><Link to="/new">NEW</Link></li>
                        <li><Link to="/tops">TOPS</Link></li>
                        <li><Link to="/bottoms">BOTTOMS</Link></li>
                        <li><Link to="/accessory">ACCESSORY</Link></li>
                        <li><Link to="/collection">COLLECTION</Link></li>
                        <li><Link to="/community">COMMUNITY</Link></li>
                    </ul>
                </nav>
                <nav className="user-menu">
                    <Link to="/login">Login</Link>
                    <Link to="/search">
                        <FontAwesomeIcon icon={faSearch} />
                        search</Link>
                    <Link to="/basket">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        basket</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;