/* global React */
const { useState, useEffect } = React;

function Header({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', on);
    return () => window.removeEventListener('scroll', on);
  }, []);

  const links = [
    ['inicio', 'Inicio'],
    ['programa', 'Programa'],
    ['metodologia', 'Metodología'],
    ['equipo', 'Equipo'],
    ['contacto', 'Contacto'],
  ];

  return (
    <header className={`er-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="er-container er-header__inner">
        <a className="er-brand" href="#inicio" aria-label="El Rey" onClick={(e) => { e.preventDefault(); onNav('inicio'); }}>
          <img src="../../assets/logos/isotipo-verde.svg" alt="El Rey" className="er-brand__mark" />
        </a>
        <nav className="er-nav">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : ''}
              onClick={(e) => { e.preventDefault(); onNav(id); }}
            >{label}</a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="er-btn er-btn--primary er-btn--sm"
          onClick={(e) => { e.preventDefault(); onNav('contacto'); }}
        >Inscríbete</a>
      </div>
    </header>
  );
}

window.Header = Header;
