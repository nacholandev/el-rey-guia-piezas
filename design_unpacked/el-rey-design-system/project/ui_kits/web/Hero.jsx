/* global React */
function Hero({ onNav }) {
  return (
    <section id="inicio" className="er-hero">
      <img
        src="../../assets/pieces/rey-crema.svg"
        alt=""
        className="er-hero__piece"
        aria-hidden="true"
      />
      <div className="er-container er-hero__inner">
        <div className="er-eyebrow er-hero__eyebrow">Escuela de ajedrez · Madrid</div>
        <h1 className="er-hero__title">
          Formamos mentes<br />
          <em>estratégicas.</em>
        </h1>
        <p className="er-hero__lead">
          Acompañamos cada paso del aprendizaje para construir confianza,
          carácter y propósito. Aquí no se memorizan jugadas: se entiende,
          se analiza y se decide.
        </p>
        <div className="er-hero__cta">
          <button className="er-btn er-btn--primary er-btn--lg" onClick={() => onNav('contacto')}>
            Reservar una clase de prueba
          </button>
          <button className="er-btn er-btn--ghost-on-dark er-btn--lg" onClick={() => onNav('metodologia')}>
            Conocer nuestra metodología
          </button>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
