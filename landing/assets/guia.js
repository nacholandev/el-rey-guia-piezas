/* ============================================================================
   El Rey — Lead magnet "El lenguaje del ajedrez" (notación · interactivo)
   Vanilla JS, sin dependencias. Tres piezas:
     1) Tablero de coordenadas (nombrar casillas)
     2) Constructor de jugada (pieza + casilla → notación)
     3) Quiz de práctica
   ========================================================================= */

(function () {
  'use strict';

  var BASE = '../../assets/';
  var FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  var PIECE_NAME = { R: 'el rey', D: 'la dama', T: 'la torre', A: 'el alfil', C: 'el caballo', '': 'el peón' };

  function pieceImg(name) { return BASE + 'pieces/' + name + '-verde.svg'; }
  function sqName(fileIdx, rank) { return FILES[fileIdx] + rank; }
  function isLight(fileIdx, rank) { return (fileIdx + rank) % 2 === 1; } // a1 oscura

  /* Construye un tablero 8×8 de botones dentro de `container`.
     opts: { labeled, interactive, onSquare(name, fileIdx, rank, el) } */
  function buildBoard(container, opts) {
    opts = opts || {};
    container.textContent = '';
    var frag = document.createDocumentFragment();
    for (var rank = 8; rank >= 1; rank--) {
      for (var f = 0; f < 8; f++) {
        var name = sqName(f, rank);
        var sq = document.createElement(opts.interactive ? 'button' : 'div');
        if (opts.interactive) sq.type = 'button';
        sq.className = 'g-sq ' + (isLight(f, rank) ? 'g-sq--light' : 'g-sq--dark');
        sq.setAttribute('data-sq', name);
        sq.setAttribute('data-file', String(f));
        sq.setAttribute('data-rank', String(rank));
        if (opts.interactive) sq.setAttribute('aria-label', 'Casilla ' + name);

        var label = document.createElement('span');
        label.className = 'g-sq__name';
        label.textContent = name;
        sq.appendChild(label);

        if (opts.labeled) {
          if (rank === 1) {
            var fc = document.createElement('span');
            fc.className = 'g-sq__coord g-sq__coord--file';
            fc.textContent = FILES[f];
            sq.appendChild(fc);
          }
          if (f === 0) {
            var rc = document.createElement('span');
            rc.className = 'g-sq__coord g-sq__coord--rank';
            rc.textContent = String(rank);
            sq.appendChild(rc);
          }
        }
        frag.appendChild(sq);
      }
    }
    container.appendChild(frag);

    if (opts.interactive && typeof opts.onSquare === 'function') {
      container.addEventListener('click', function (e) {
        var el = e.target.closest('.g-sq');
        if (!el || !container.contains(el)) return;
        opts.onSquare(el.getAttribute('data-sq'), +el.getAttribute('data-file'), +el.getAttribute('data-rank'), el);
      });
    }
    return container;
  }

  function placePiece(container, sq, imgName) {
    var prev = container.querySelector('.g-sq__piece');
    if (prev) prev.parentNode.removeChild(prev);
    var target = container.querySelector('[data-sq="' + sq + '"]');
    if (!target) return;
    var disc = document.createElement('span');
    disc.className = 'g-sq__piece';
    var img = document.createElement('img');
    img.src = pieceImg(imgName);
    img.alt = '';
    disc.appendChild(img);
    target.appendChild(disc);
  }

  function markActive(container, sq) {
    var prev = container.querySelector('.g-sq--active');
    if (prev) prev.classList.remove('g-sq--active');
    if (sq) {
      var el = container.querySelector('[data-sq="' + sq + '"]');
      if (el) el.classList.add('g-sq--active');
    }
  }

  /* ── 1 · Tablero de coordenadas ───────────────────────────────────────── */
  (function coordBoard() {
    var board = document.getElementById('coord-board');
    var readout = document.getElementById('coord-readout');
    var toggle = document.getElementById('coord-toggle');
    if (!board) return;

    function describe(name, f, rank) {
      readout.innerHTML = 'Casilla <strong>' + name + '</strong> — columna <strong>' +
        FILES[f] + '</strong>, fila <strong>' + rank + '</strong>.';
    }

    buildBoard(board, {
      labeled: true,
      interactive: true,
      onSquare: function (name, f, rank, el) {
        var prev = board.querySelector('.g-sq--show:not(.g-all)');
        if (prev && !board.classList.contains('g-all')) prev.classList.remove('g-sq--show');
        el.classList.add('g-sq--show');
        describe(name, f, rank);
      }
    });

    // En escritorio: al pasar el cursor también se nombra.
    board.addEventListener('mouseover', function (e) {
      var el = e.target.closest('.g-sq');
      if (!el) return;
      describe(el.getAttribute('data-sq'), +el.getAttribute('data-file'), +el.getAttribute('data-rank'));
    });

    if (toggle) {
      toggle.addEventListener('click', function () {
        var on = board.classList.toggle('g-all');
        toggle.classList.toggle('is-on', on);
        toggle.setAttribute('aria-pressed', String(on));
        toggle.textContent = on ? 'Ocultar coordenadas' : 'Mostrar todas las coordenadas';
        var squares = board.querySelectorAll('.g-sq');
        for (var i = 0; i < squares.length; i++) squares[i].classList.toggle('g-sq--show', on);
        if (!on) readout.innerHTML = 'Pasa el cursor o toca una casilla para ver su nombre.';
      });
    }
  })();

  /* ── 2 · Constructor de jugada ────────────────────────────────────────── */
  (function moveBuilder() {
    var board = document.getElementById('builder-board');
    var picks = document.querySelectorAll('.g-pick');
    var out = document.getElementById('builder-notation');
    var readout = document.getElementById('builder-readout');
    if (!board) return;

    var state = { piece: 'C', img: 'caballo', sq: 'f3' };

    function render() {
      placePiece(board, state.sq, state.img);
      markActive(board, state.sq);
      out.textContent = state.piece + state.sq;
      readout.innerHTML = 'Movimos <strong>' + PIECE_NAME[state.piece] +
        '</strong> a <strong>' + state.sq + '</strong>: se escribe <strong>' +
        state.piece + state.sq + '</strong>.';
    }

    buildBoard(board, {
      interactive: true,
      onSquare: function (name) {
        state.sq = name;
        render();
      }
    });

    for (var i = 0; i < picks.length; i++) {
      picks[i].addEventListener('click', function () {
        for (var j = 0; j < picks.length; j++) picks[j].classList.remove('is-active');
        this.classList.add('is-active');
        state.piece = this.getAttribute('data-piece');
        state.img = this.getAttribute('data-img');
        render();
      });
    }

    render(); // estado inicial: caballo en f3 → Cf3
  })();

  /* ── 3 · Quiz ─────────────────────────────────────────────────────────── */
  (function quiz() {
    var root = document.getElementById('quiz');
    if (!root) return;

    var QUESTIONS = [
      {
        q: '¿Cómo se escribe esta jugada? El caballo llega a esta casilla.',
        board: { piece: { sq: 'f3', img: 'caballo' } },
        options: [
          { t: 'Cf3', ok: true },
          { t: 'f3C', ok: false },
          { t: 'Kf3', ok: false, note: '(esa es la letra en inglés)' },
          { t: 'Pf3', ok: false }
        ],
        why: 'Inicial de la pieza (C de caballo) + la casilla de destino (f3).'
      },
      {
        q: '¿Cuál es el nombre de la casilla marcada?',
        board: { hot: 'd5' },
        options: [
          { t: 'd5', ok: true },
          { t: '5d', ok: false, note: '(primero la letra, luego el número)' },
          { t: 'e5', ok: false },
          { t: 'd4', ok: false }
        ],
        why: 'Primero la columna (letra) y luego la fila (número): d5.'
      },
      {
        q: 'Una torre se come una pieza en c5. ¿Cómo se anota la captura?',
        board: { piece: { sq: 'c5', img: 'torre' }, hot: 'c5' },
        options: [
          { t: 'Txc5', ok: true },
          { t: 'Tc5', ok: false, note: '(falta la x de captura)' },
          { t: 'xTc5', ok: false },
          { t: 'c5x', ok: false }
        ],
        why: 'La x de captura va entre la pieza y la casilla: Txc5.'
      },
      {
        q: '¿Qué significa el signo + al final de una jugada, como en Dh6+?',
        options: [
          { t: 'Jaque: el rey está amenazado', ok: true },
          { t: 'Jaque mate, fin de la partida', ok: false, note: '(eso es #)' },
          { t: 'Una buena jugada', ok: false, note: '(eso es !)' },
          { t: 'Un enroque', ok: false }
        ],
        why: 'El + marca jaque. El mate se escribe con # (o ++).'
      },
      {
        q: 'El peón llega a la última fila y se convierte en dama. ¿Cómo se escribe?',
        options: [
          { t: 'e8=D', ok: true },
          { t: 'e8D', ok: false, note: '(falta el signo =)' },
          { t: 'De8', ok: false },
          { t: 'e8+D', ok: false }
        ],
        why: 'La promoción se anota con = y la pieza nueva: e8=D.'
      }
    ];

    var idx = 0, score = 0;

    function boardHTML(cfg) {
      // contenedor temporal; lo rellenamos tras insertarlo en el DOM
      return '<div class="g-quiz__board-wrap"><div class="g-board" data-quizboard></div></div>';
    }

    function fillBoard(card, cfg) {
      var holder = card.querySelector('[data-quizboard]');
      if (!holder) return;
      buildBoard(holder, { interactive: false });
      if (cfg.hot) {
        var hotEl = holder.querySelector('[data-sq="' + cfg.hot + '"]');
        if (hotEl) hotEl.classList.add('g-sq--hot', 'g-sq--show');
      }
      if (cfg.piece) placePiece(holder, cfg.piece.sq, cfg.piece.img);
    }

    function renderQuestion() {
      var item = QUESTIONS[idx];
      var pct = Math.round((idx / QUESTIONS.length) * 100);
      var html = '' +
        '<div class="g-quiz__progress er-small"><span>Pregunta ' + (idx + 1) + ' de ' +
        QUESTIONS.length + '</span><span class="g-quiz__bar"><span style="width:' + pct + '%"></span></span></div>' +
        '<div class="g-quiz__card">' +
        '<h3 class="er-h4 g-quiz__q">' + item.q + '</h3>' +
        (item.board ? boardHTML(item.board) : '') +
        '<div class="g-quiz__options"></div>' +
        '<p class="g-quiz__feedback er-small" aria-live="polite"></p>' +
        '<div class="g-quiz__next"></div>' +
        '</div>';
      root.innerHTML = html;

      var card = root.querySelector('.g-quiz__card');
      if (item.board) fillBoard(card, item.board);

      var opts = card.querySelector('.g-quiz__options');
      item.options.forEach(function (opt) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'g-quiz__opt';
        b.innerHTML = '<span class="g-quiz__optmono" style="font-family:var(--font-mono);font-weight:700">' +
          opt.t + '</span>' + (opt.note ? ' <span class="g-quiz__optnote">' + opt.note + '</span>' : '');
        b.addEventListener('click', function () { answer(opt, b, card, item); });
        opts.appendChild(b);
      });
    }

    function answer(opt, btn, card, item) {
      var buttons = card.querySelectorAll('.g-quiz__opt');
      for (var i = 0; i < buttons.length; i++) buttons[i].disabled = true;
      var fb = card.querySelector('.g-quiz__feedback');

      if (opt.ok) {
        score++;
        btn.classList.add('g-quiz__opt--right');
        fb.innerHTML = '<strong>Correcto.</strong> ' + item.why;
      } else {
        btn.classList.add('g-quiz__opt--wrong');
        for (var j = 0; j < buttons.length; j++) {
          if (item.options[j] && item.options[j].ok) buttons[j].classList.add('g-quiz__opt--right');
        }
        fb.innerHTML = '<strong>Casi.</strong> ' + item.why;
      }

      var next = document.createElement('button');
      next.type = 'button';
      next.className = 'btn btn--primary btn--sm';
      next.textContent = (idx + 1 < QUESTIONS.length) ? 'Siguiente' : 'Ver resultado';
      next.addEventListener('click', function () {
        idx++;
        if (idx < QUESTIONS.length) renderQuestion();
        else renderResult();
      });
      card.querySelector('.g-quiz__next').appendChild(next);
      next.focus();
    }

    function renderResult() {
      var msg;
      if (score === QUESTIONS.length) msg = 'Perfecto. Ya hablan el idioma del ajedrez —ahora a usarlo en una partida real.';
      else if (score >= 3) msg = 'Muy bien. Con una partida anotada juntos se les queda del todo.';
      else msg = 'Buen primer intento. Vuelvan a recorrer la guía sin prisa y prueben otra vez.';

      root.innerHTML = '' +
        '<div class="g-quiz__card g-quiz__result">' +
        '<p class="g-quiz__score">' + score + '/' + QUESTIONS.length + '</p>' +
        '<h3 class="er-h4">' + (score >= 3 ? '¡Lo tienen!' : 'Van por buen camino') + '</h3>' +
        '<p class="er-small">' + msg + '</p>' +
        '<button type="button" class="btn btn--ghost btn--sm" id="quiz-restart">Jugar otra vez</button>' +
        '</div>';
      root.querySelector('#quiz-restart').addEventListener('click', function () {
        idx = 0; score = 0; renderQuestion();
      });
    }

    renderQuestion();
  })();

})();
