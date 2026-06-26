/* global React */
function Footer() {
  return (
    <footer className="er-footer">
      <div className="er-container er-footer__inner">
        <div className="er-footer__brand">
          <img src="../../assets/logos/logo-verde.svg" alt="El Rey" />
          <p className="er-micro">
            Escuela de ajedrez · Madrid<br />
            Formando mentes estratégicas desde 2020.
          </p>
        </div>
        <div className="er-footer__col">
          <div className="er-eyebrow">Programa</div>
          <a href="#programa">Iniciación · 6–8</a>
          <a href="#programa">Intermedio · 9–12</a>
          <a href="#programa">Avanzado · 13+</a>
        </div>
        <div className="er-footer__col">
          <div className="er-eyebrow">Escuela</div>
          <a href="#metodologia">Metodología</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto">Inscripción</a>
        </div>
        <div className="er-footer__col">
          <div className="er-eyebrow">Visítanos</div>
          <p className="er-small">Calle del Caballo 12<br />28010 Madrid</p>
          <p className="er-small">+34 910 000 000<br />hola@escuelaelrey.es</p>
        </div>
      </div>
      <div className="er-container er-footer__bottom">
        <span className="er-micro">© 2026 El Rey</span>
        <span className="er-micro">Aviso legal · Privacidad · Cookies</span>
      </div>
    </footer>
  );
}

window.Footer = Footer;
