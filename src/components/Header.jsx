import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Chelsi Ganugapanta's Calm Gazelle | ITIS3135</h1>

            {/* These navigation class names distinguish the primary page links from the secondary site links. */}
            <nav className="primary">
                <Link to="/">Home</Link>
                {" || "}
                <Link to="/introduction">Introduction</Link>
                {" || "}
                <Link to="/contract">Contract</Link>
                {" || "}
                <Link to="/about">About</Link>
            </nav>

            <nav className="secondary">
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/stuff/cRaPy%20PaGe~.htm">cRaPy PaGe</a>
                {" || "}
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/chelsiganugapantadesigns.co/index.html">Chelsi Ganugapanta Designs</a>
                {" || "}
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/hobby/index.html">Hobby</a>
                {" || "}
                <a href="https://webpages.charlotte.edu/cganugap/itis3135/calmgazelle/index.html">Green Gazelle Goods</a>
                {" || "}
                <a href="https://cganugapanta.github.io/itis3135-react/">React3</a>
            </nav>

            <p><em>Learning, creating, and growing.</em></p>
        </header>
    );
}

export default Header;