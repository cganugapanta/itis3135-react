import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Chelsi Ganugapanta's Calm Gazelle | ITIS3135 | Home";
    }, []);

    return (
        <main>
            <h2>Home</h2>

            <p>
                Welcome to my ITIS 3135 course portal. This site will have all
                assignments and projects throughout the semester.
            </p>

            <figure>
                <img
                    src={`${import.meta.env.BASE_URL}images/intro_dubai.png`}
                    alt="Dubai Mall"
                    width="340"
                />
                <figcaption>Visiting Dubai Mall</figcaption>
            </figure>
        </main>
    );
}

export default Home;