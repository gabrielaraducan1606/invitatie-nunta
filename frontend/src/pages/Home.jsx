import React from "react";
import Countdown from "../components/Countdown";
import Form from "../components/Form";

function Home() {
    return (
        <div style={{ color: "white", backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
            <header style={{ textAlign: "center", marginBottom: "20px" }}>
                <h1>Invitație la Nunta Noastră</h1>
                <Countdown />
            </header>

            <section style={{ marginBottom: "20px" }}>
                <h2>Detalii despre Nuntă</h2>
                <p>
                    <strong>Data:</strong> 17 mai 2025 <br />
                    <strong>Ora:</strong> 17:00 la Catedrala Sfântul Sava <br />
                    <strong>Recepție:</strong> 19:00 la Restaurant Glamour
                </p>
            </section>

            <section style={{ marginBottom: "20px" }}>
                <h2>Formular de Confirmare</h2>
                <Form />
            </section>

            <section style={{ marginBottom: "20px" }}>
                <h2>Întrebări Frecvente</h2>
                <ul>
                    <li>
                        <strong>Există parcare?</strong> Da, parcarea este disponibilă la locația restaurantului.
                    </li>
                    <li>
                        <strong>Locații:</strong>
                        <ul>
                            <li>
                                <a href="https://goo.gl/maps/restaurant-glamour" target="_blank" rel="noreferrer">
                                    Restaurant Glamour
                                </a>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/catedrala-sfantul-sava" target="_blank" rel="noreferrer">
                                    Catedrala Sfântul Sava
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Home;
