// patch.js — Dent.list Fix v5
(function () {
'use strict';

// CSS Fix — correct hyphens
var style = document.createElement('style');
style.textContent = ':root{--bg:#07090d;--s1:#0d1018;--s2:#131720;--s3:#181e28;--b1:#1d2535;--b2:#242e42;--c1:#00f0ff;--c2:#ff3d6b;--c3:#aaff00;--c4:#ffaa00;--c5:#b06eff;--pk:#ff6b9d;--gd:#f0c94d;--tx:#eef2ff;--tx2:#a8b3cc;--mt:#5a6a85;--fh:"Syne",sans-serif;--fm:"DM Mono",monospace;}body.theme-light{--bg:#FAFBFF;--s1:#FFFFFF;--s2:#F4F6FF;--s3:#EEF2FF;--b1:#E2E8F8;--b2:#D0D8F0;--c1:#2563EB;--c2:#EF4444;--c3:#10B981;--c4:#F59E0B;--c5:#8B5CF6;--pk:#EC4899;--gd:#D97706;--tx:#1E293B;--tx2:#475569;--mt:#94A3B8;--fh:"Plus Jakarta Sans",sans-serif;}#theme-btn{position:fixed;bottom:70px;right:14px;z-index:9999;width:44px;height:44px;border-radius:50%;background:var(--s2);border:1.5px solid var(--b1);font-size:1.2rem;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.25);transition:transform .2s;}#theme-btn:hover{transform:scale(1.1);}';
document.head.appendChild(style);

// Theme toggle
window.toggleTheme = function () {
  var b = document.body, btn = document.getElementById('theme-btn');
  if (b.classList.contains('theme-light')) {
    b.classList.remove('theme-light');
    if (btn) btn.textContent = '🌓';
    localStorage.setItem('dl-theme', 'dark');
  } else {
    b.classList.add('theme-light');
    if (btn) btn.textContent = '☀️';
    localStorage.setItem('dl-theme', 'light');
  }
};
if (localStorage.getItem('dl-theme') === 'light') {
  document.body.classList.add('theme-light');
  var btn = document.getElementById('theme-btn');
  if (btn) btn.textContent = '☀️';
}

})();
