import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Chelsi Ganugapanta's Calm Gazelle | ITIS3135</h1>

            <nav className="primary">
                <Link to="/">Home</Link> ||
                <Link to="/introduction">Introduction</Link> ||
                <Link to="/contract">Contract</Link> ||
                <Link to="/about">About</Link>
            </nav>

            <nav className="secondary">
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/stuff/cRaPy%20PaGe~.htm">cRaPy PaGe</a> ||
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/chelsiganugapantadesigns.co/index.html">Chelsi Ganugapanta Designs</a> ||
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/hobby/index.html">Hobby</a> ||
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/calmgazelle/index.html">Green Gazelle Goods</a>
            </nav>
        </header>
    );
}

export default Header;