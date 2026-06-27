/* ============================================================================
   El Rey — Landing "El lenguaje del ajedrez" (notación)
   ----------------------------------------------------------------------------
   1) Mini-tablero decorativo del hero (anticipo del lead magnet).
   2) Captura de correo → Kit (ConvertKit) → redirige al lead magnet interactivo.

   CONFIG — KIT (CONVERTKIT):
   Conectado al formulario 9615936 (action /subscriptions, campo email_address).
   Si dejas el FORM ID como placeholder ('REEMPLAZAR...'), corre en modo demo:
   no envía a Kit, solo redirige a la guía —útil para revisar el flujo.
   ========================================================================= */

var KIT_FORM_ID = '9615936';                   // FORM ID de Kit (ConvertKit)
var KIT_ENDPOINT = 'https://app.kit.com/forms/' + KIT_FORM_ID + '/subscriptions';
var REDIRECT_TO = '/notacion/guia';            // lead magnet interactivo

/* Nota: el formulario de Kit es de DOBLE OPT-IN —tras enviar, Kit manda un
   correo de confirmación ("revisa tu correo para confirmar"). Aquí abrimos la
   guía igual al instante (el valor es la web); el correo queda en Kit para el
   seguimiento una vez confirmado. */

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

/* ── Captura de correo → Kit → "Gracias" → redirige a la guía ───────────── */
(function () {
  var configured = KIT_FORM_ID && KIT_FORM_ID.indexOf('REEMPLAZAR') === -1;

  function goToGuide() { window.location.href = REDIRECT_TO; }

  /* Pop-up de agradecimiento. Se muestra al confirmar el envío y, tras una
     breve pausa, lleva a la guía. El padre también puede entrar al instante. */
  var thanksShown = false;
  function showThanks() {
    if (thanksShown) return;
    thanksShown = true;

    var overlay = document.createElement('div');
    overlay.className = 'thanks';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'thanks-title');
    overlay.innerHTML =
      '<div class="thanks__card">' +
        '<img class="thanks__mark" src="./assets/logos/isotipo-verde.svg" alt="" width="48" height="48" />' +
        '<h2 class="thanks__title er-h2" id="thanks-title">Gracias por unirte</h2>' +
        '<p class="thanks__lead er-lead">Tu guía está lista. Te llevamos a ella en un momento.</p>' +
        '<button type="button" class="btn btn--primary thanks__btn">Abrir la guía ahora</button>' +
        '<p class="thanks__micro er-micro">El ajedrez no es el fin, es el medio.</p>' +
      '</div>';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () { overlay.classList.add('is-visible'); });

    var btn = overlay.querySelector('.thanks__btn');
    btn.addEventListener('click', goToGuide);
    btn.focus();

    // Esc también lleva a la guía (no hay otra acción posible).
    document.addEventListener('keydown', function onKey(e) {
      if (e.key === 'Escape') { document.removeEventListener('keydown', onKey); goToGuide(); }
    });

    setTimeout(goToGuide, 2400);
  }

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

      // Sin FORM ID configurado: saltamos Kit y mostramos el gracias igual (demo).
      if (!configured) {
        showThanks();
        return;
      }

      var data = new FormData();
      data.append('email_address', email); // campo estándar de Kit

      // Aunque Kit tarde o falle, no bloqueamos al usuario: igual mostramos el
      // gracias (que luego abre la guía). showThanks() se protege de repetirse.
      var safety = setTimeout(showThanks, 3500);

      fetch(KIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      })
        .then(function () { clearTimeout(safety); showThanks(); })
        .catch(function () { clearTimeout(safety); showThanks(); });
    });
  }

  wire('capture', 'email', 'capture-btn', 'capture-micro');
  wire('capture-2', 'email-2', 'capture-btn-2', 'capture-micro-2');
})();
