/* ============================================================================
   El Rey — Email capture (lead magnet)
   ----------------------------------------------------------------------------
   TODO — CONECTAR PROVEEDOR DE EMAIL:
   Ahora mismo el formulario NO envía a ningún lado: solo muestra confirmación
   en pantalla. Para activarlo de verdad, elige tu proveedor y reemplaza el
   bloque marcado abajo:

   · Kit / ConvertKit  → fetch('https://app.kit.com/forms/<FORM_ID>/subscribe', {...})
   · Mailchimp         → action del form embebido (URL .../post?u=...&id=...)
   · Formspree         → fetch('https://formspree.io/f/<FORM_ID>', {method:'POST', body})

   Hasta entonces, los correos NO se guardan.
   ========================================================================= */

/* En táctil (sin hover) las animaciones de las piezas se reproducen al entrar
   en pantalla. Marcamos la sección con .is-visible; el CSS hace el resto. */
(function () {
  var section = document.querySelector('.pieces');
  if (!section) return;
  if (!('IntersectionObserver' in window)) { section.classList.add('is-visible'); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { section.classList.add('is-visible'); io.disconnect(); }
    });
  }, { threshold: 0.25 });
  io.observe(section);
})();

(function () {
  var form = document.getElementById('capture');
  var micro = document.getElementById('capture-micro');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = (document.getElementById('email') || {}).value || '';
    if (!email || email.indexOf('@') === -1) {
      micro.textContent = 'Escribe un correo válido para enviarte la guía.';
      return;
    }

    // ─── REEMPLAZAR ESTE BLOQUE con la llamada real al proveedor ─────────────
    console.log('[TODO] Capturar email en proveedor:', email);
    // ─────────────────────────────────────────────────────────────────────────

    form.innerHTML =
      '<p class="er-body" style="margin:0;color:var(--er-verde-pino);font-weight:600">' +
      'Listo. Revisa tu correo —te enviamos la guía en breve.</p>';
    micro.textContent = 'El ajedrez no es el fin, es el medio.';
    micro.classList.add('capture__micro--ok');
  });
})();

/* ============================================================================
   Formulario de contacto · reserva de clase (online / presencial)
   ----------------------------------------------------------------------------
   TODO — CONECTAR PROVEEDOR: hoy NO envía a ningún lado, solo confirma en
   pantalla. Para activarlo, reemplaza el bloque marcado con un POST a tu
   proveedor (Formspree es ideal para formularios con varios campos):
     fetch('https://formspree.io/f/<FORM_ID>', {
       method: 'POST', headers: { 'Accept': 'application/json' }, body: data
     })
   ========================================================================= */
(function () {
  var form = document.getElementById('contact-form');
  var micro = document.getElementById('contact-micro');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = (document.getElementById('c-name') || {}).value || '';
    var email = (document.getElementById('c-email') || {}).value || '';
    var modalidad = (form.querySelector('input[name="modalidad"]:checked') || {}).value || 'online';

    if (!name.trim() || email.indexOf('@') === -1) {
      micro.textContent = 'Completa tu nombre y un correo válido.';
      micro.classList.remove('contact__micro--ok');
      return;
    }

    // ─── REEMPLAZAR ESTE BLOQUE con la llamada real al proveedor ─────────────
    console.log('[TODO] Solicitud de clase:', { name: name, email: email, modalidad: modalidad });
    // ─────────────────────────────────────────────────────────────────────────

    form.innerHTML =
      '<p class="er-body" style="margin:0;color:var(--er-verde-pino);font-weight:600">' +
      'Gracias, ' + name.split(' ')[0].replace(/[<>]/g, '') + '. Recibimos tu solicitud de clase ' +
      modalidad + ' —te contactamos en 24–48 h.</p>';
  });
})();
