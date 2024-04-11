"use client";
import styles from "./page.module.css";
import "./globals.css";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
export default function Home() {
  return (
    <MantineProvider>
      <main className={styles.main}>
        <div className={styles.wrapper_two}>
          <h1 className={styles.title}>CLUB 1%</h1>
          <h2 className={styles.text}>
            Deja de perder dinero en fondeos o pagar cursos creyendo que te van
            a dar la solución. Te ayudo a ganar la consistencia y mentalidad
            correcta para tu trading en 12 meses para que puedas manejar
            múltiples 6 cifras en fondeos.
          </h2>
          <h2 className={styles.text}>
            Convertite en el trader rentable que anhelas ser. Para eso vamos a
            trabajar en varias áreas. Desde lo técnico, hábitos/disciplina y
            psicología.
          </h2>
          <div className={styles.container_list}>
            <div className={styles.video}>
              <div className={styles.video_container}>
                <iframe
                  src="https://drive.google.com/file/d/17HOm3qs0SVGEWt7-XP_oCEFzydQPTRYG/preview"
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
                  Con el acceso a la comunidad del “CLUB 1%” vas a obtener:{" "}
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
                <button className={styles.button}>ACCES</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.wrapper_two}>
          <h1 className={styles.title}>Quién soy yo para poder ayudarte?</h1>
          <h2 className={styles.text}>
            Mi nombre es Santiago Amado, tengo 33 años y en el 2018 me metí de
            lleno en el mundo del trading. Pase de todo antes de lograr la
            consistencia y rentabilidad. Lógicamente quemé cuentas, perdí
            challenges, sobre-operé, me sobre-apalanqué, cambié de estrategia
            cada mes, creyendo que el problema era la estrategia… <br />
            En conclusión, pasé por todo lo malo antes de lograrlo. Por eso
            considero que te puedo ayudar en este camino. Actualmente estoy
            fondeado con múltiples 6 dígitos en fondeos, próximo a los 7
            dígitos. Te dejo abajo algunos certificados.
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

          <Carousel
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
          </Carousel>
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
