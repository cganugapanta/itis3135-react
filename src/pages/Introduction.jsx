import { useEffect } from "react";
import { Link } from "react-router-dom";

function Introduction() {
    useEffect(() => {
        document.title = "Chelsi Ganugapanta's Calm Gazelle | ITIS3135 | Introduction";
    }, []);

    return (
        <main>
            <h2>Introduction</h2>

            <h6>Chelsi (N) Ganugapanta | Calm Gazelle</h6>

            <figure>
                <img
                    src="/images/intro_html.png"
                    alt="Chelsi Ganugapanta getting photo taken at UNCC"
                    width="340"
                />
                <figcaption>Getting my photo taken at UNCC</figcaption>
            </figure>

            <p>
                Hi, my name is Chelsi and I am a junior at UNCC. I am a Computer
                Science major with a concentration in cybersecurity. I recently
                got my associate's degree and am now fully prioritizing my CS
                classes. Outside of school, I like to work out and spend time
                with my friends.
            </p>

            <ul>
                <li>
                    <strong>Personal Background:</strong> I was raised in Boston
                    and moved to NC 6 years ago.
                </li>

                <li>
                    <strong>Professional Background:</strong> Working at TJ Maxx
                    over multiple summers.
                </li>

                <li>
                    <strong>Academic Background:</strong> Associates' Degree in
                    Science, currently pursuing a Bachelor's Degree in Computer
                    Science, graduating in 2028 Spring.
                </li>

                <li>
                    <strong>Primary Work Computer:</strong> HP laptop, Windows
                    11 25H2
                </li>

                <li>
                    <strong>Primary Work Location:</strong> Atkins Library
                </li>

                <li>
                    <strong>Alternate Computer:</strong> 2026 MacBook Air
                </li>

                <li>
                    <strong>Alternate Work Location:</strong> Any place that has
                    Wi-Fi
                </li>

                <li>
                    <strong>Courses I'm Taking, and Why:</strong>

                    <ol>
                        <li>
                            <strong>
                                <Link to="/contract">
                                    ITIS 3135 - Front End Web App Development
                                </Link>:
                            </strong>
                            To get more experience with Web development
                        </li>

                        <li>
                            <strong>ITSC 2181 - Intro to Computer Systems:</strong>
                            To learn more about computer architecture and
                            hierarchies.
                        </li>

                        <li>
                            <strong>ITSC 3155 - Software Engineering:</strong>
                            To understand what is behind making and developing
                            software.
                        </li>

                        <li>
                            <strong>ITSC 3160 - Database Design and Implementation:</strong>
                            To learn more about database use.
                        </li>

                        <li>
                            <strong>STAT 2122 - Intro to Probability and Statistics:</strong>
                            Required to fulfill math requirements.
                        </li>
                    </ol>
                </li>

                <li>
                    <strong>Funny/Interesting Item to Remember me by:</strong>
                    I can wiggle my ears.
                </li>
            </ul>

            <blockquote>
                "What the wise do in the beginning, fools do in the end."
            </blockquote>

            <p>- Warren Buffett</p>
        </main>
    );
}

export default Introduction;