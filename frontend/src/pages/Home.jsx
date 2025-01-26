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

                <section><h2>Povestea noastră</h2>
                <p>
                    <strong>Ne-am întâlnit în urmă cu trei ani, într-o zi care părea să fie ca oricare alta, 
                        dar care s-a dovedit a fi începutul celei mai frumoase povești. Totul a decurs de la sine, natural și firesc, ca într-un roman de dragoste.
                        Acum, privim cu recunoștință la drumul parcurs și ne pregătim să facem următorul pas, să ne 
                        unim destinele în fața celor dragi, știind că aceasta este doar începutul unei vieți pline de iubire și fericire împreună.</strong>
                </p></section>

                <section><h2>Nașii noștri</h2>
                <p>
                    <strong>Suntem binecuvântați să îi avem alături ca nași pe Flavia și Ionuț, prietenii noștri de suflet și 
                        cei care ne-au fost alături în toate momentele importante. Prietenia dintre ei și noi este mai mult decât o
                         legătură obișnuită — este o poveste de neuitat, începută cu mulți ani în urmă.</strong>
                </p></section>

                <section><h2>Părinții noștri</h2>
                <p>
                    <strong>Am avut norocul să creștem înconjurați de dragostea unor părinți minunați, 
                        care ne-au fost alături necondiționat în fiecare etapă a vieții noastre.

Părinții mirelui, Ghoerghe și Steluța, ne-au fost mereu un exemplu de putere, iubire și răbdare. Ei ne-au învățat să fim buni și corecți,
 ne-au susținut visele și ne-au oferit mereu sfaturi pline de înțelepciune. Suntem recunoscători pentru fiecare lecție și pentru fiecare moment
  frumos pe care l-au creat pentru noi.

Pentru mireasă, sprijinul și iubirea tatălui ei, Ghoerghe, au fost o binecuvântare. Tatăl ei a fost mereu acolo pentru a o încuraja, 
a o proteja și a o ajuta să devină femeia puternică de astăzi. Din păcate, mama ei, Nicoleta-Luminița, 
nu mai este fizic alături de noi, dar știm că spiritul ei veghează cu dragoste asupra acestui moment special. În inimile noastre, 
ea va rămâne mereu o parte esențială a familiei noastre și a bucuriei acestei zile.

Le mulțumim tuturor părinților noștri pentru iubirea și sacrificiile lor, pentru că ne-au ghidat pașii și ne-au oferit cel mai frumos 
exemplu de iubire și de familie. Azi, la începutul acestei noi etape, îi avem alături în gând și suflet, știind că suntem binecuvântați 
cu sprijinul lor.</strong>
                </p></section>

            <section style={{ marginBottom: "20px" }}>
                <h2>Detalii despre Nuntă</h2>
                <p>
                    <strong>Data:</strong> 17 mai 2025 <br />
                    <strong>Ceremonia religioasă:</strong> Catedrala Sfântul Sava, ora 17:00 <br />
                    <strong>Petrecere:</strong> Restaurant Glamour, ora 19:00
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
