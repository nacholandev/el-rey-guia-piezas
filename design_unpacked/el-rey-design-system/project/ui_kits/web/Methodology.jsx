/* global React */
const STEPS = [
  ['Observar', 'Conocemos al niño antes que al jugador. Su forma de pensar, su ritmo, su carácter.'],
  ['Acompañar', 'Cada paso es guiado. No empujamos: caminamos al lado.'],
  ['Entender', 'No se memorizan jugadas. Se entienden, se analizan, se eligen.'],
  ['Construir', 'Confianza, criterio y carácter. Lo que se queda fuera del tablero.'],
];

function Methodology() {
  return (
    <section id="metodologia" className="er-section er-method">
      <div className="er-method__quote">
        <div className="er-eyebrow er-eyebrow--on-dark">Metodología</div>
        <p className="er-method__pull">
          "Creemos que el verdadero aprendizaje ocurre cuando el niño se siente
          visto, escuchado y retado a la vez."
        </p>
        <div className="er-method__attr">— Guía de marca · El Rey</div>
      </div>
      <div className="er-method__steps">
        {STEPS.map(([t, b], i) => (
          <div key={t} className="er-step">
            <div className="er-step__num">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <h3 className="er-step__name">{t}</h3>
              <p className="er-step__body">{b}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Methodology = Methodology;
