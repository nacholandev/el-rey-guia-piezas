/* ============================================================================
   El Rey — Landing "El lenguaje del ajedrez" (notación)
   ----------------------------------------------------------------------------
   1) Mini-tablero decorativo del hero (anticipo del lead magnet).
   2) Captura de correo → Kit (ConvertKit) → redirige al lead magnet interactivo.

   CONFIG — KIT (CONVERTKIT):
   Pega abajo el FORM ID de Kit. Mientras sea el placeholder, el formulario NO
   envía a Kit: solo redirige a la guía (modo demo, para revisar el flujo).
   Si tu cuenta de Kit usa un endpoint distinto al estándar, reemplaza también
   KIT_ENDPOINT con el "action" del snippet de embed HTML de tu formulario.
   ========================================================================= */

var KIT_FORM_ID = 'REEMPLAZAR_FORM_ID';        // ← FORM ID de Kit (ConvertKit)
var KIT_ENDPOINT = 'https://app.kit.com/forms/' + KIT_FORM_ID + '/subscribe';
var REDIRECT_TO = '/notacion/guia';            // lead magnet interactivo

/* ── Mini-tablero del hero ──────────────────────────────────────────────── */
(function () {
  var board = document.getElementById('miniboard');
  if (!board) return;
  var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var frag = document.createDocumentFragment();

  // Filas de 8 (arriba) a 1 (abajo); columnas a–h de izquierda a derecha.
  for (var rank = 8; rank >= 1; rank--) {
    for (var f = 0; f < 8; f++) {
      var sq = document.createElement('div');
      var light = (f + rank) % 2 === 1; // a1 oscura
      sq.className = 'mini-sq ' + (light ? 'mini-sq--light' : 'mini-sq--dark');

      // Resaltar e4 con su etiqueta y un peón.
      if (files[f] === 'e' && rank === 4) {
        sq.className += ' mini-sq--mark';
        var label = document.createElement('span');
        label.className = 'mini-sq__label';
        label.textContent = 'e4';
        sq.appendChild(label);
        var piece = document.createElement('img');
        piece.className = 'mini-sq__piece';
        piece.src = './assets/pieces/peon-verde.svg';
        piece.alt = '';
        sq.appendChild(piece);
      }
      frag.appendChild(sq);
    }
  }
  board.appendChild(frag);
})();

/* ── Captura de correo → Kit → redirige a la guía ───────────────────────── */
(function () {
  var configured = KIT_FORM_ID && KIT_FORM_ID.indexOf('REEMPLAZAR') === -1;

  function wire(formId, inputId, btnId, microId) {
    var form = document.getElementById(formId);
    if (!form) return;
    var input = document.getElementById(inputId);
    var btn = document.getElementById(btnId);
    var micro = document.getElementById(microId);
    var btnLabel = btn ? btn.textContent : 'Acceder a la guía';
    var sending = false;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (sending) return;
      var email = (input && input.value || '').trim();
      if (!email || email.indexOf('@') === -1) {
        micro.textContent = 'Escribe un correo válido para abrir la guía.';
        micro.classList.remove('capture__micro--ok');
        return;
      }

      sending = true;
      if (btn) { btn.disabled = true; btn.textContent = 'Abriendo…'; }
      micro.textContent = 'Un momento —preparando tu guía.';
      micro.classList.remove('capture__micro--ok');

      // Sin FORM ID configurado: saltamos Kit y vamos directo a la guía (demo).
      if (!configured) {
        window.location.href = REDIRECT_TO;
        return;
      }

      var data = new FormData();
      data.append('email_address', email); // campo estándar de Kit

      var done = false;
      function go() { if (!done) { done = true; window.location.href = REDIRECT_TO; } }

      // Aunque Kit tarde o falle, no bloqueamos al usuario: igual abrimos la guía.
      var safety = setTimeout(go, 3500);

      fetch(KIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })
        .then(function () { clearTimeout(safety); go(); })
        .catch(function () { clearTimeout(safety); go(); });
    });
  }

  wire('capture', 'email', 'capture-btn', 'capture-micro');
  wire('capture-2', 'email-2', 'capture-btn-2', 'capture-micro-2');
})();
