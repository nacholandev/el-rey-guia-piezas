/* global React */
const VALUES = [
  { id: 'cercania', icon: 'cercania.svg', name: 'Cercanía',
    body: 'Acompañamos de cerca. Cada niño tiene un nombre, un ritmo y una historia.' },
  { id: 'pensamiento', icon: 'pensamiento-estrategico.svg', name: 'Pensamiento estratégico',
    body: 'Pensar antes de mover. Entender el porqué de cada decisión.' },
  { id: 'crecimiento', icon: 'crecimiento.svg', name: 'Crecimiento',
    body: 'Cada partida es un paso. Cada error, una lección que se queda.' },
  { id: 'confianza', icon: 'confianza.svg', name: 'Confianza',
    body: 'Se construye en el logro y, sobre todo, en el error bien acompañado.' },
  { id: 'formacion', icon: 'formacion.svg', name: 'Formación',
    body: 'Estructura y método, sin rigidez. Cada clase, un avance pequeño y firme.' },
  { id: 'acompanamiento', icon: 'acompanamiento.svg', name: 'Acompañamiento',
    body: 'Caminamos al ritmo de cada niño. Nunca solos, nunca a empujones.' },
];

function ValuesGrid() {
  return (
    <section id="valores" className="er-section er-section--crema">
      <div className="er-container">
        <div className="er-eyebrow">Lo que cuidamos</div>
        <h2 className="er-section__title">
          Seis principios que sostienen<br />cada clase.
        </h2>
        <div className="er-values">
          {VALUES.map(v => (
            <article key={v.id} className="er-value">
              <img src={`../../assets/values/${v.icon}`} alt="" className="er-value__icon" />
              <h3 className="er-value__name">{v.name}</h3>
              <p className="er-value__body">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ValuesGrid = ValuesGrid;
