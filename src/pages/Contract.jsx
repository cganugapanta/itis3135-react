import { useEffect } from "react";
import { Link } from "react-router-dom";

function Contract() {
    useEffect(() => {
        document.title = "Chelsi Ganugapanta's Calm Gazelle | ITIS3135 | Contract";
    }, []);

    return (
        <main>
            <h2>Contract</h2>

            <figure>
                <figcaption>
                    Calm Gazelle - My ITIS 3135 mascot
                </figcaption>
            </figure>

            <p>
                I, <Link to="/introduction">Chelsi Ganugapanta</Link>, agree to
                abide by the terms of the course contract in my Fall 2026 ITIS
                3135, Web-Based Application Design and Development course with
                my instructor, Professor D.I. von Briesen.
            </p>

            <p>
                I understand that all work that I do on publicly available
                online tools will be available to the world and will not put
                information there that is inappropriate for schoolwork, or that
                I wish to keep private. I also understand that it is my work
                that counts for attendance, not logins or showing up for class.
            </p>

            <p>
                As such, failure to turn in assignments may show as absences.
                I also understand that given the structure and content of this
                class it's possible to find many examples online or even view
                my classmates' code directly. I swear that I will only use
                these resources to learn and will not cut and paste code except
                where I have properly given credit and never from my classmates.
            </p>

            <p>
                Signed: <em>Chelsi Ganugapanta, September 6, 2026</em>
            </p>
        </main>
    );
}

export default Contract;