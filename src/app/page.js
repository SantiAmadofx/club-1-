"use client";
import styles from "./page.module.css";
import "./globals.css";
import React, { useState, useEffect } from "react";
export default function Home() {
  const handleClick = () => {
    window.location.href = "https://www.skool.com/trading1percent";
  };

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(29);
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval); // Detener el contador cuando llegue a cero
      } else {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  return (
    <main className={styles.main}>
      <div className={styles.counterContainer}>
        <h1 className={styles.counterTitle}>OFERTA EXCLUSIVA SÓLO POR HOY</h1>{" "}
        <p className={styles.counter}>{`${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}</p>{" "}
      </div>
      <div className={styles.wrapper_two}>
        <h2 className={styles.text}>
          Te ayudo a conseguir la{" "}
          <span className={styles.highlight}> RENTABILIDAD Y MENTALIDAD</span>{" "}
          correcta en el trading en{" "}
          <span className={styles.highlight}> 12 MESES.</span>{" "}
        </h2>
        <h2 className={styles.text}>
          Deja de perder dinero en fondeos o pagar cursos creyendo que te van a
          dar la solución y convertite en el{" "}
          <span className={styles.highlight}> trader rentable</span> que anhelas
          ser, capaz de manejar{" "}
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
                frameBorder="0"
                title="Video"
              ></iframe>
            </div>
          </div>

          <ul className={styles.list}>
            <h2 className={styles.text}>
              Con el acceso a la comunidad del{" "}
              <span className={styles.highlight}>“CLUB 1%”</span> vas a obtener:{" "}
            </h2>
            <li>
              <span className={styles.greenCheck}>✔</span> Una llamada semanal
              en vivo con Santiago
            </li>
            <li>
              <span className={styles.greenCheck}>✔</span> De 1 - 3 sesiones de
              live trading (Sesión de London)
            </li>
            <li>
              <span className={styles.greenCheck}>✔</span> Canal de Proyecciones
              diarias
            </li>
            <li>
              <span className={styles.greenCheck}>✔</span> Canal con desgloses
              de trades
            </li>
            <li>
              <span className={styles.greenCheck}>✔</span> Acceso a la comunidad
              del CLUB 1%
            </li>
            <li>
              <span className={styles.greenCheck}>✔</span> Acceso al contenido
              grabado (desgloses-llamadas semanales)
            </li>
          </ul>
          <div className={styles.acces_container}>
            <h2 className={styles.acces_text}>SALA PRIVADA 1%⚡️</h2>
            <button className={styles.button} onClick={handleClick}>
              Si, quiero acceder a la comunidad
            </button>
            <p className={styles.p} onClick={handleClick}>
              Click Aqui para guardar tu cupo en el{" "}
              <span className={styles.highlight}>CLUB 1%</span>
            </p>
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
          camino. Actualmente estoy fondeado con múltiples 6 dígitos en fondeos,
          próximo a los <span className={styles.highlight}>7 dígitos</span>. Te
          dejo abajo algunos certificados.
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
        <h1 className={styles.comentarios_title}>
          OTRO MIEMBRO MÁS QUE CONSIGUE SU FONDEO DE 6 CIFRAS.
        </h1>
        <img
          className={styles.image_comentarios}
          src="/feedback1.jfif"
          alt="Comentario1"
        />
        <button className={styles.button} onClick={handleClick}>
          Si, quiero acceder a la comunidad
        </button>
        <h1 className={styles.comentarios_title}>
          CONSIGUIÓ FONDEARSE CON $150.000 USD GRACIAS AL APRENDIZAJE EN LA
          COMUNIDAD
        </h1>
        <img
          className={styles.image_comentarios}
          src="/feedback2.jfif"
          alt="Comentario2"
        />
        <button className={styles.button} onClick={handleClick}>
          Si, quiero acceder a la comunidad
        </button>
        <h1 className={styles.comentarios_title}>
          OTRO MIEMBRO MÁS QUE CONSIGUE SU FONDEO DE 6 CIFRAS.
        </h1>

        <img
          className={styles.image_comentarios}
          src="/feedback3.jfif"
          alt="Comentario3"
        />
        <button className={styles.button} onClick={handleClick}>
          Si, quiero acceder a la comunidad
        </button>
        <h1 className={styles.comentarios_title}>
          OTRO MIEMBRO MÁS QUE CONSIGUE SU FONDEO DE 5 CIFRAS.
        </h1>
        <img
          className={styles.image_comentarios}
          src="/feedback4.jfif"
          alt="Comentario4"
        />
        <button className={styles.button} onClick={handleClick}>
          Si, quiero acceder a la comunidad
        </button>
        <h1 className={styles.comentarios_title}>
          OTRO MIEMBRO MÁS QUE CONSIGUE SU FONDEO DE 5 CIFRAS.
        </h1>
        <img
          className={styles.image_comentarios}
          src="/feedback5.jfif"
          alt="Comentario5"
        />
        <button className={styles.button} onClick={handleClick}>
          Si, quiero acceder a la comunidad
        </button>
        <h1 className={styles.comentarios_title}>
          GENERÓ $2000 USD GRACIAS AL APRENDIZAJE EN LA COMUNIDAD
        </h1>

        <img
          className={styles.image_comentarios}
          src="/feedback6.jfif"
          alt="Comentario6"
        />
        <button className={styles.button} onClick={handleClick}>
          Si, quiero acceder a la comunidad
        </button>
      </div>
      <div className={styles.footer_container}>
        <footer className={styles.footer}>
          <h4>©2024 | 1%</h4>
        </footer>
      </div>
    </main>
  );
}
