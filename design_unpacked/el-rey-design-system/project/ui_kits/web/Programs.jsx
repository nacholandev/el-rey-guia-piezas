/* global React */
const { useState } = React;

const PROGRAMS = [
  { id: 'inicio', age: '6 a 8 años', name: 'Iniciación',
    piece: 'peon-verde.svg',
    body: 'Las primeras piezas, el primer movimiento, la primera decisión propia. Aprenden a observar el tablero y a sí mismos.',
    items: ['Una clase semanal · 45 min', 'Grupos de hasta 6 niños', 'Material incluido'] },
  { id: 'inter', age: '9 a 12 años', name: 'Intermedio',
    piece: 'caballo-verde.svg',
    body: 'Táctica, finales básicos y aperturas. La etapa donde el ajedrez empieza a parecerse a pensar de verdad.',
    items: ['Dos clases semanales · 60 min', 'Grupos de hasta 8 niños', 'Torneos internos'] },
  { id: 'avz', age: '13 años +', name: 'Avanzado',
    piece: 'reina-verde.svg',
    body: 'Estrategia, estudio dirigido y partidas comentadas. Para quien quiere competir o, simplemente, ir más profundo.',
    items: ['Dos clases semanales · 90 min', 'Coaching individual', 'Competición federada'] },
];

function Programs({ onNav }) {
  const [active, setActive] = useState(PROGRAMS[0].id);
  const sel = PROGRAMS.find(p => p.id === active);
  return (
    <section id="programa" className="er-section er-section--white">
      <div className="er-container">
        <div className="er-eyebrow">Programa por edad</div>
        <h2 className="er-section__title">
          Tres etapas. Un mismo<br />acompañamiento.
        </h2>

        <div className="er-tabs">
          {PROGRAMS.map(p => (
            <button
              key={p.id}
              className={`er-tab ${active === p.id ? 'is-active' : ''}`}
              onClick={() => setActive(p.id)}
            >
              <span className="er-tab__age">{p.age}</span>
              <span className="er-tab__name">{p.name}</span>
            </button>
          ))}
        </div>

        <div className="er-program">
          <div className="er-program__piece">
            <img src={`../../assets/pieces/${sel.piece}`} alt="" />
          </div>
          <div className="er-program__body">
            <p className="er-program__lead">{sel.body}</p>
            <ul className="er-program__items">
              {sel.items.map((it, i) => (
                <li key={i}><span className="er-tick">✓</span>{it}</li>
              ))}
            </ul>
            <button className="er-btn er-btn--primary" onClick={() => onNav('contacto')}>
              Reservar clase de prueba
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

window.Programs = Programs;
