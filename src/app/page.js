"use client";
import styles from "./page.module.css";
import "./globals.css";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import CarouselComponent from "./components/CarouselComponent";
export default function Home() {
  const handleClick = () => {
    window.location.href = "https://buy.stripe.com/fZe3eI0M4c8Nfuw9AM";
  };
  return (
    <MantineProvider>
      <main className={styles.main}>
        <div className={styles.wrapper_two}>
          <h2 className={styles.text}>
            Te ayudo a conseguir la{" "}
            <span className={styles.highlight}> RENTABILIDAD Y MENTALIDAD</span>{" "}
            correcta en el trading en{" "}
            <span className={styles.highlight}> 12 MESES.</span>{" "}
          </h2>
          <h2 className={styles.text}>
            Deja de perder dinero en fondeos o pagar cursos creyendo que te van
            a dar la solución y convertite en el{" "}
            <span className={styles.highlight}> trader rentable</span> que
            anhelas ser, capaz de manejar{" "}
            <span className={styles.highlight}> $100.000 USD.</span>{" "}
          </h2>
          <div className={styles.container_list}>
            <div className={styles.video}>
              <div className={styles.video_container}>
                <iframe
                  src="https://drive.google.com/file/d/1mShRw_JSKRcT8SX3zMT6MeS9mA4WIJAc/preview"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
            <div className={styles.wraper_three}>
              <ul className={styles.list}>
                <h2 className={styles.text}>
                  Con el acceso a la comunidad del{" "}
                  <span className={styles.highlight}>“CLUB 1%”</span> vas a
                  obtener:{" "}
                </h2>
                <li>
                  <span className={styles.greenCheck}>✔</span> Una llamada
                  semanal en vivo con Santiago
                </li>
                <li>
                  <span className={styles.greenCheck}>✔</span> De 1 - 3 sesiones
                  de live trading (Sesión de London)
                </li>
                <li>
                  <span className={styles.greenCheck}>✔</span> Canal de
                  Proyecciones diarias
                </li>
                <li>
                  <span className={styles.greenCheck}>✔</span> Canal con
                  desgloses de trades
                </li>
                <li>
                  <span className={styles.greenCheck}>✔</span> Acceso a la
                  comunidad del CLUB 1%
                </li>
                <li>
                  <span className={styles.greenCheck}>✔</span> Acceso al
                  contenido grabado (desgloses-llamadas semanales)
                </li>
              </ul>
              <div className={styles.acces_container}>
                <h2 className={styles.acces_text}>SALA PRIVADA 1%⚡️</h2>
                <button className={styles.button} onClick={handleClick}>
                  ACCEDE ACA
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper_two}>
          <h1 className={styles.title}>Quién soy yo para poder ayudarte?</h1>
          <h2 className={styles.text}>
            Mi nombre es Santiago Amado, tengo 33 años y en el 2018 me metí de
            lleno en el mundo del trading. Pase de todo antes de lograr la
            <span className={styles.highlight}>
              {" "}
              consistencia y rentabilidad{" "}
            </span>
            . Lógicamente quemé cuentas, perdí challenges, sobre-operé, me
            sobre-apalanqué, cambié de estrategia cada mes, creyendo que el
            problema era la estrategia… <br />
            En conclusión, pasé por todo lo malo antes de lograrlo. Por eso
            considero que
            <span className={styles.highlight}> te puedo ayudar </span> en este
            camino. Actualmente estoy fondeado con múltiples 6 dígitos en
            fondeos, próximo a los{" "}
            <span className={styles.highlight}>7 dígitos</span>. Te dejo abajo
            algunos certificados.
          </h2>
          <div className={styles.certificaciones_container}>
            <img
              className={styles.certificaciones}
              src="/certificacion1.jpg"
              alt="certificacion1"
            />
            <img
              className={styles.certificaciones}
              src="/certificacion2.jpg"
              alt="certificacion2"
            />
            <img
              className={styles.certificaciones}
              src="/certificacion3.jpg"
              alt="certificacion3"
            />
            <img
              className={styles.certificaciones}
              src="/certificacion4.jpg"
              alt="certificacion4"
            />
          </div>
        </div>

        <div className={styles.wrapper_two}>
          <div>
            <h1 className={styles.title}>COMENTARIOS</h1>
          </div>

          {/* <Carousel
            slideSize="30%"
            height={100}
            loop
            slideGap="xl"
            withIndicators
          >
            <Carousel.Slide>
              <img
                src="/feedback1.jfif"
                alt="Imagen 1"
                style={{ maxWidth: "90%", maxHeight: "90%" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src="/feedback2.jfif"
                alt="Imagen 2"
                style={{ maxWidth: "90%", maxHeight: "90%" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src="/feedback3.jfif"
                alt="Imagen 3"
                style={{ maxWidth: "90%", maxHeight: "90%" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src="/feedback4.jfif"
                alt="Imagen 4"
                style={{ maxWidth: "90%", maxHeight: "90%" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src="/feedback5.jfif"
                alt="Imagen 5"
                style={{ maxWidth: "90%", maxHeight: "90%" }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <img
                src="/feedback6.jfif"
                alt="Imagen 6"
                style={{ maxWidth: "90%", maxHeight: "90%" }}
              />
            </Carousel.Slide>
          </Carousel> */}
          <CarouselComponent />
        </div>
        <div className={styles.footer_container}>
          <footer className={styles.footer}>
            <h4>©2024 | 1%</h4>
          </footer>
        </div>
      </main>
    </MantineProvider>
  );
}
