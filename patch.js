// patch.js — Dent.list Complete Fix v4
(function () {
‘use strict’;

// ── 0. FIX EN-DASH IN ALL STYLESHEETS ───────
// The index.html uses en-dash (–) instead of – in CSS vars
// This fixes all stylesheets at runtime
document.addEventListener(‘DOMContentLoaded’, function() {
Array.from(document.styleSheets).forEach(function(sheet) {
try {
Array.from(sheet.cssRules || []).forEach(function(rule) {
if (rule.cssText && rule.cssText.indexOf(’\u2013’) > -1) {
var fixed = rule.cssText.replace(/\u2013/g, ‘–’);
var parent = rule.parentStyleSheet;
var idx = Array.from(parent.cssRules).indexOf(rule);
try { parent.deleteRule(idx); parent.insertRule(fixed, idx); } catch(e) {}
}
});
} catch(e) {}
});
});

// ── 1. CSS FIX ──────────────────────────────
var style = document.createElement(‘style’);
style.textContent = ‘:root{–bg:#07090d;–s1:#0d1018;–s2:#131720;–s3:#181e28;–b1:#1d2535;–b2:#242e42;–c1:#00f0ff;–c2:#ff3d6b;–c3:#aaff00;–c4:#ffaa00;–c5:#b06eff;–pk:#ff6b9d;–gd:#f0c94d;–tx:#eef2ff;–tx2:#a8b3cc;–mt:#5a6a85;–fh:'Syne',sans-serif;–fm:'DM Mono',monospace;}body.theme-light{–bg:#FAFBFF;–s1:#FFFFFF;–s2:#F4F6FF;–s3:#EEF2FF;–b1:#E2E8F8;–b2:#D0D8F0;–c1:#2563EB;–c2:#EF4444;–c3:#10B981;–c4:#F59E0B;–c5:#8B5CF6;–pk:#EC4899;–gd:#D97706;–tx:#1E293B;–tx2:#475569;–mt:#94A3B8;–fh:'Plus Jakarta Sans',sans-serif;}#theme-btn{position:fixed;bottom:70px;right:14px;z-index:9999;width:44px;height:44px;border-radius:50%;background:var(–s2);border:1.5px solid var(–b1);font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.25);transition:transform .2s;}#theme-btn:hover{transform:scale(1.1);}’;
document.head.appendChild(style);

// ── 2. THEME TOGGLE ─────────────────────────
window.toggleTheme = function () {
var b = document.body;
var btn = document.getElementById(‘theme-btn’);
if (b.classList.contains(‘theme-light’)) {
b.classList.remove(‘theme-light’);
if (btn) btn.textContent = ‘\uD83C\uDF13’;
localStorage.setItem(‘dl-theme’, ‘dark’);
} else {
b.classList.add(‘theme-light’);
if (btn) btn.textContent = ‘\u2600\uFE0F’;
localStorage.setItem(‘dl-theme’, ‘light’);
}
};
(function () {
if (localStorage.getItem(‘dl-theme’) === ‘light’) {
document.body.classList.add(‘theme-light’);
var btn = document.getElementById(‘theme-btn’);
if (btn) btn.textContent = ‘\u2600\uFE0F’;
}
})();

// ── 3. FIX go() FUNCTION ────────────────────
// Override go() to ensure navigation works
window.go = function(id) {
// Hide all screens
document.querySelectorAll(’.sc’).forEach(function(s) {
s.classList.remove(‘on’);
s.style.display = ‘’;
});

var el = document.getElementById(id);
if (!el) { console.warn(‘go: not found:’, id); return; }

// Show target screen
if (id === ‘sc-local’ || id === ‘sc-gf-game’ || id === ‘sc-daily-game’) {
el.style.display = ‘flex’;
} else {
el.classList.add(‘on’);
}

// Scroll to top
window.scrollTo(0, 0);

// Run screen-specific setup
if (id === ‘sc-create’) { try { mkCatGrid(‘cn-cats’, O.sc, ‘s1’, 4, updOCI); } catch(e) {} }
if (id === ‘sc-local-setup’) { try { mkCatGrid(‘lc-cats’, L.sc, ‘s3’, 6, updLCI); } catch(e) {} }
if (id === ‘sc-gf-setup’) { try { mkCatGrid(‘gf-cats’, GF.sc, ‘s4’, 2, updGCI); } catch(e) {} }
if (id === ‘sc-daily-home’) { try { window.dcUpdateHome && window.dcUpdateHome(); } catch(e) {} }
if (id === ‘sc-daily-lb’) { try { window.dcLoadLB && window.dcLoadLB(); } catch(e) {} }
if (id === ‘sc-exam-home’) { try { exRenderHome(); } catch(e) {} }
if (id === ‘sc-land’) {
try { window.loadLandingLB && window.loadLandingLB(); } catch(e) {}
try { window.updateDCLandCard && window.updateDCLandCard(); } catch(e) {}
}
};

// ── 4. LOCAL BATTLE ─────────────────────────
document.addEventListener(‘DOMContentLoaded’, function () {

window.startLocal = function () {
var t1 = document.getElementById(‘lt1’).value.trim() || ‘Team 1’;
var t2 = document.getElementById(‘lt2’).value.trim() || ‘Team 2’;
if (L.sc.length !== 6) { toast(‘Select exactly 6!’); return; }
L.t1 = t1; L.t2 = t2;
L.s = { t1: 0, t2: 0 };
L.board = {};
L.sc.forEach(function (cat) {
var pool = rnd(QB.filter(function (q) { return q.c === cat; }));
L.board[cat] = pool.slice(0, 4).map(function (q) {
return { c: q.c, q: q.q, a: q.a, opts: mkOpts(q), used: false, usedBy: null, pts: 10 };
});
});
go(‘sc-local’);
updLBoard();
updLHdr();
};

window.openLQ = function (catEnc, idx) {
var cat = decodeURIComponent(catEnc);
var q = L.board[cat][idx];
if (q.used) return;
L.curQ = { cat: cat, idx: idx, q: q };
L.awarded = false;
L.ansRevealed = false;

```
document.getElementById('lm-cat').textContent = (CATS[cat] || '') + ' ' + cat;
document.getElementById('lm-pts').textContent = '10 pts';
document.getElementById('lm-q').textContent = q.q;
document.getElementById('lm-opts').innerHTML = q.opts.map(function (o, i) {
  return '<div class="lo"><span class="ll">' + 'ABCD'[i] + '</span>' + o + '</div>';
}).join('');
document.getElementById('lm-opts').style.display = 'none';

var sab = document.getElementById('sab');
if (sab) {
  sab.style.display = 'block';
  sab.textContent = '\uD83D\uDC41\uFE0F Show Options';
  sab.onclick = window.localShowOptions;
}
document.getElementById('aws').style.display = 'none';
document.getElementById('awbg').style.display = 'none';
document.getElementById('lm-next').style.display = 'none';

var t1btn = document.getElementById('aw-t1');
var t2btn = document.getElementById('aw-t2');
if (t1btn) t1btn.textContent = '\uD83C\uDFC6 ' + L.t1;
if (t2btn) t2btn.textContent = '\uD83C\uDFC6 ' + L.t2;

clearInterval(L.timer);
L.secs = 0;
document.getElementById('lt-num').textContent = '0:00';
document.getElementById('lt-fg').style.width = '0%';
document.getElementById('lt-fg').className = 'ltfg';
L.timer = setInterval(function () {
  L.secs++;
  var m = Math.floor(L.secs / 60), s = L.secs % 60;
  document.getElementById('lt-num').textContent = m + ':' + (s < 10 ? '0' : '') + s;
  var pct = Math.min((L.secs / 120) * 100, 100);
  document.getElementById('lt-fg').style.width = pct + '%';
  document.getElementById('lt-fg').className = 'ltfg' + (pct >= 100 ? ' full' : pct >= 60 ? ' mid' : '');
}, 1000);

document.getElementById('lmod').classList.add('on');
```

};

window.localShowOptions = function () {
document.getElementById(‘lm-opts’).style.display = ‘flex’;
var sab = document.getElementById(‘sab’);
if (sab) {
sab.textContent = ‘\u2705 Show Answer’;
sab.onclick = window.revealLocalAns;
}
};

window.revealLocalAns = function () {
var q = L.curQ.q;
document.querySelectorAll(’#lm-opts .lo’).forEach(function (el, i) {
if (q.opts[i] === q.a) el.classList.add(‘ok’);
});
L.ansRevealed = true;
var sab = document.getElementById(‘sab’);
if (sab) sab.style.display = ‘none’;
document.getElementById(‘aws’).style.display = ‘flex’;
};

window.awardPts = function (team) {
if (L.awarded) return;
L.awarded = true;
clearInterval(L.timer);
var pts = 10;
var badge = document.getElementById(‘awbg’);
if (team === ‘t1’) {
L.s.t1 += pts;
L.board[L.curQ.cat][L.curQ.idx].usedBy = ‘t1’;
badge.className = ‘awbg t1’;
badge.textContent = ‘\uD83C\uDFC6 ’ + L.t1 + ’ +’ + pts + ’ pts!’;
} else if (team === ‘t2’) {
L.s.t2 += pts;
L.board[L.curQ.cat][L.curQ.idx].usedBy = ‘t2’;
badge.className = ‘awbg t2’;
badge.textContent = ‘\uD83C\uDFC6 ’ + L.t2 + ’ +’ + pts + ’ pts!’;
} else {
L.board[L.curQ.cat][L.curQ.idx].usedBy = ‘no’;
badge.className = ‘awbg no’;
badge.textContent = ‘\u274C No answer — 0 pts’;
}
L.board[L.curQ.cat][L.curQ.idx].used = true;
if (!L.ansRevealed) {
document.querySelectorAll(’#lm-opts .lo’).forEach(function (el, i) {
if (L.curQ.q.opts[i] === L.curQ.q.a) el.classList.add(‘ok’);
});
}
document.getElementById(‘aws’).style.display = ‘none’;
badge.style.display = ‘block’;
document.getElementById(‘lm-next’).style.display = ‘block’;
updLHdr();
updLBoard();
};

window.updLBoard = function () {
var el = document.getElementById(‘l-board’);
if (!el) return;
el.innerHTML = ‘’;
L.sc.forEach(function (cat) {
var qs = L.board[cat];
var sec = document.createElement(‘div’);
sec.className = ‘catsec’;
var tiles = qs.map(function (q, i) {
var u = q.used, by = q.usedBy;
var cls = u ? (by === ‘t1’ ? ’ u1’ : by === ‘t2’ ? ’ u2’ : ’ un’) : ‘’;
var lbl = u ? (by === ‘t1’ ? ‘\u2705’ : by === ‘t2’ ? ‘\u274C’ : ‘\u2014’) : ‘Q’ + (i + 1);
var click = u ? ‘’ : ‘onclick=“openLQ('’ + encodeURIComponent(cat) + ‘',’ + i + ‘)”’;
return ‘<div class=“tile’ + (u ? ’ used’ + cls : ‘’) + ‘” ’ + click + ‘><span>’ + lbl + ‘</span><span class="tpts">10 pts</span></div>’;
}).join(’’);
sec.innerHTML = ‘<div class="cathd">’ + (CATS[cat] || ‘\uD83D\uDCCB’) + ’ ’ + cat + ‘</div><div class="tiles">’ + tiles + ‘</div>’;
el.appendChild(sec);
});
};

window.updLHdr = function () {
document.getElementById(‘lt1-n’).textContent = L.t1;
document.getElementById(‘lt2-n’).textContent = L.t2;
document.getElementById(‘lt1-s’).textContent = L.s.t1;
document.getElementById(‘lt2-s’).textContent = L.s.t2;
var t1b = document.getElementById(‘aw-t1’);
var t2b = document.getElementById(‘aw-t2’);
if (t1b) t1b.textContent = ’\uD83C\uDFC6 ’ + L.t1;
if (t2b) t2b.textContent = ’\uD83C\uDFC6 ’ + L.t2;
};

});

})();
