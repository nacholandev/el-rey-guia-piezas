/* global React */
const { useState } = React;

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', age: '7', email: '', notes: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  if (sent) {
    return (
      <section id="contacto" className="er-section er-section--crema">
        <div className="er-container er-thanks">
          <img src="../../assets/logos/isotipo-verde.svg" alt="" className="er-thanks__mark" />
          <h2 className="er-section__title">Gracias, {form.name || 'familia'}.</h2>
          <p className="er-lead">
            Hemos recibido tu solicitud. Te escribiremos en menos de 48 horas
            para coordinar la clase de prueba.
          </p>
          <button className="er-btn er-btn--ghost" onClick={() => { setSent(false); setForm({ name: '', age: '7', email: '', notes: '' }); }}>
            Enviar otra solicitud
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="er-section er-section--crema">
      <div className="er-container er-form-wrap">
        <div className="er-form-intro">
          <div className="er-eyebrow">Inscripción</div>
          <h2 className="er-section__title">
            Empezamos con una<br />clase de prueba.
          </h2>
          <p className="er-lead">
            Cuéntanos un poco sobre tu hijo o hija. Te llamamos para
            conocernos y coordinar una primera sesión, sin compromiso.
          </p>
        </div>

        <form className="er-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <div className="er-field">
            <label>Nombre del niño o niña</label>
            <input value={form.name} onChange={set('name')} placeholder="Lucas" required />
          </div>
          <div className="er-row-2">
            <div className="er-field">
              <label>Edad</label>
              <select value={form.age} onChange={set('age')}>
                {[6,7,8,9,10,11,12,13,14,15,16].map(n => <option key={n} value={n}>{n} años</option>)}
              </select>
            </div>
            <div className="er-field">
              <label>Email de contacto</label>
              <input type="email" value={form.email} onChange={set('email')} placeholder="familia@correo.com" required />
            </div>
          </div>
          <div className="er-field">
            <label>¿Algo que nos quieras contar?</label>
            <textarea rows="3" value={form.notes} onChange={set('notes')} placeholder="Su carácter, sus intereses, lo que esperan del ajedrez…"></textarea>
          </div>
          <button className="er-btn er-btn--primary er-btn--lg" type="submit">
            Solicitar clase de prueba
          </button>
          <p className="er-micro">Te respondemos en menos de 48 horas. Sin compromiso.</p>
        </form>
      </div>
    </section>
  );
}

window.ContactForm = ContactForm;
