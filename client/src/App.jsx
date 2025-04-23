import { } from "react";
import { ImageModal } from "./components/ImageModal";

export const App = () => {

    return (
        <>
        <main>
            <section>
                <h1>Uruguay Oscuro</h1>
                <p><b>Pagina para memes de 🇺🇾</b></p>
                <p><i>Autores: Julián y Maxi</i></p>
            </section>
            <section>
                <h3>Political Compass</h3>
                <ImageModal src="imgs/compass.png" />
            </section>
            <section>
                <h3>Iceberg</h3>
                <ImageModal src="imgs/iceberg.png" />
            </section>
            <section>
                <h3>Ministra</h3>
                <ImageModal src="imgs/cairo.png" />
            </section>
            <section>
                <h3>Salle</h3>
                <ImageModal src="imgs/salle.JPG" />
            </section>
            <section>
                <h3>Ghibli</h3>
                <ImageModal src="imgs/ghibli.JPG" />
            </section>
            <section>
                <ImageModal src="imgs/amongus.gif" />
            </section>
        </main>
        </>
    )
}