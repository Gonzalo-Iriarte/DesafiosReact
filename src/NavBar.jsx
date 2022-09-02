import CartWidget from "./CartWidget";

function NavBar (props) {
    return (
        <nav className="App-navbar">
            <h1>SINNAME MERCH</h1>
            <ul>
                <li><a href="pages/news.html">NEWS</a></li>
                <li><a href="pages/tour.html">TOUR</a></li>
                <li><a href="pages/merch.html">MERCH</a></li>
                <li><a href="pages/music.html">MUSIC</a></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}


export default NavBar;