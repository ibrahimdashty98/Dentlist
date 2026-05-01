// patch.js — Dent.list Complete Fix v3
// يصلح CSS + Theme + Local Battle
// الـ QB array errors في index.html لا تؤثر على patch.js
 
(function () {
'use strict';
 
// ═══════════════════════════════════════
// 1. CSS FIX — إضافة المتغيرات الصحيحة
// ═══════════════════════════════════════
var style = document.createElement('style');
style.textContent = [
':root{',
'--bg:#07090d;--s1:#0d1018;--s2:#131720;--s3:#181e28;',
'--b1:#1d2535;--b2:#242e42;',
'--c1:#00f0ff;--c2:#ff3d6b;--c3:#aaff00;--c4:#ffaa00;--c5:#b06eff;',
'--pk:#ff6b9d;--gd:#f0c94d;',
'--tx:#eef2ff;--tx2:#a8b3cc;--mt:#5a6a85;',
"--fh:'Syne',sans-serif;--fm:'DM Mono',monospace;",
'}',
'body.theme-light{',
'--bg:#FAFBFF;--s1:#FFFFFF;--s2:#F4F6FF;--s3:#EEF2FF;',
'--b1:#E2E8F8;--b2:#D0D8F0;',
'--c1:#2563EB;--c2:#EF4444;--c3:#10B981;--c4:#F59E0B;--c5:#8B5CF6;',
'--pk:#EC4899;--gd:#D97706;',
'--tx:#1E293B;--tx2:#475569;--mt:#94A3B8;',
"--fh:'Plus Jakarta Sans',sans-serif;",
'}',
'#theme-btn{position:fixed;bottom:70px;right:14px;z-index:9999;',
'width:44px;height:44px;border-radius:50%;',
'background:var(--s2);border:1.5px solid var(--b1);',
'font-size:1.2rem;cursor:pointer;display:flex;',
'align-items:center;justify-content:center;',
'box-shadow:0 4px 16px rgba(0,0,0,.25);transition:transform .2s;}',
'#theme-btn:hover{transform:scale(1.1);}',
].join('');
document.head.appendChild(style);
 
// ═══════════════════════════════════════
// 2. THEME TOGGLE
// ═══════════════════════════════════════
window.toggleTheme = function () {
  var b = document.body;
  var btn = document.getElementById('theme-btn');
  if (b.classList.contains('theme-light')) {
    b.classList.remove('theme-light');
    if (btn) btn.textContent = '\uD83C\uDF13';
    localStorage.setItem('dl-theme', 'dark');
  } else {
    b.classList.add('theme-light');
    if (btn) btn.textContent = '\u2600\uFE0F';
    localStorage.setItem('dl-theme', 'light');
  }
};
(function () {
  if (localStorage.getItem('dl-theme') === 'light') {
    document.body.classList.add('theme-light');
    var btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = '\u2600\uFE0F';
  }
})();
 
// ═══════════════════════════════════════
// 3. QB ARRAY FIX — يصلح الـ array الكسور
// هذا الحل يأخذ الـ QB الموجود ويضيف عليه
// الأسئلة اللي كانت orphaned خارج الـ array
// ═══════════════════════════════════════
window.addEventListener('load', function () {
  // تحقق من وجود QB
  if (typeof QB === 'undefined') {
    console.error('QB not defined — JS syntax error in index.html');
    // نبني QB من الصفر بأسئلة أساسية
    window.QB = buildFallbackQB();
  } else {
    console.log('QB loaded:', QB.length, 'questions');
    // أضف الأسئلة المفقودة
    QB = QB.concat(getExtraQuestions());
    console.log('QB after patch:', QB.length, 'questions');
  }
  
  // أعد تهيئة الـ category chips
  if (typeof mkCatGrid === 'function') {
    var cats = document.getElementById('cn-cats');
    if (cats && typeof O !== 'undefined') mkCatGrid('cn-cats', O.sc, 's1', 4, updOCI);
    var lcats = document.getElementById('lc-cats');
    if (lcats && typeof L !== 'undefined') mkCatGrid('lc-cats', L.sc, 's3', 6, updLCI);
    var gcats = document.getElementById('gf-cats');
    if (gcats && typeof GF !== 'undefined') mkCatGrid('gf-cats', GF.sc, 's4', 2, updGCI);
  }
});
 
function getExtraQuestions() {
  return [
    {c:"Endodontics",q:"Most important step in root canal success?",a:"Proper cleaning and shaping",w:["Color matching","Filling speed","Crown design"]},
    {c:"Endodontics",q:"Ideal working length is usually?",a:"0.5-1 mm short of apex",w:["At anatomical apex","2-3 mm beyond apex","Coronal to CEJ"]},
    {c:"Endodontics",q:"Main function of sodium hypochlorite (NaOCl)?",a:"Tissue dissolution and disinfection",w:["Only lubrication","Hard tissue formation","Tooth whitening only"]},
    {c:"Endodontics",q:"Gold standard method for canal shaping today?",a:"Rotary NiTi instrumentation",w:["Hand stainless steel only","Amalgam filling","Glass ionomer"]},
    {c:"Endodontics",q:"Most accurate method for working length determination?",a:"Apex locator",w:["Visual inspection","Patient pain response","Percussion test"]},
    {c:"Periodontics",q:"Primary etiological factor of periodontitis?",a:"Dental plaque biofilm",w:["Trauma from occlusion","Vitamin deficiency","Mechanical brushing only"]},
    {c:"Periodontics",q:"Most specific clinical sign of periodontitis?",a:"Clinical attachment loss",w:["Gingival color change","Tooth shape change","Salivary pH increase"]},
    {c:"Periodontics",q:"Most important microbial group in periodontitis?",a:"Gram-negative anaerobes",w:["Gram-positive aerobes","Viruses only","Fungi only"]},
    {c:"Orthodontics",q:"Primary goal of orthodontic treatment?",a:"Establish functional occlusion",w:["Improve tooth color","Increase enamel thickness","Reduce pulp size"]},
    {c:"Orthodontics",q:"Most important factor in tooth movement?",a:"Bone remodeling",w:["Enamel dissolution","Pulp calcification","Cementum loss only"]},
    {c:"Prosthodontics",q:"Primary goal of prosthodontic treatment?",a:"Restore function and esthetics",w:["Increase pulp size","Cause bone resorption","Change saliva pH"]},
    {c:"Prosthodontics",q:"Most important factor for denture stability?",a:"Border seal",w:["Tooth color","Base thickness","Fluoride level"]},
    {c:"Pediatric Dentistry",q:"Primary goal of pediatric dentistry?",a:"Maintain oral health in children",w:["Tooth extraction only","Aesthetic whitening only","Increase pulp size"]},
    {c:"Pediatric Dentistry",q:"Most common chronic disease in children?",a:"Dental caries",w:["Asthma","Hypertension","Fractures"]},
    {c:"Oral Pathology",q:"Most common oral malignancy?",a:"Squamous cell carcinoma",w:["Adenoma","Sarcoma","Melanoma only"]},
    {c:"Oral Pathology",q:"Most important risk factor for oral cancer?",a:"Tobacco use",w:["Fluoride","Brushing","Calcium intake"]},
    {c:"Oral Pharmacology",q:"Most commonly used local anesthetic in dentistry?",a:"Lidocaine",w:["Aspirin","Amoxicillin","Ibuprofen"]},
    {c:"Oral Pharmacology",q:"Mechanism of local anesthetics?",a:"Block sodium channels",w:["Increase calcium influx","Stimulate dopamine","Activate GABA receptors"]},
    {c:"Anatomy",q:"Primary nerve supplying maxillary teeth?",a:"Maxillary nerve (V2)",w:["Mandibular nerve","Facial nerve","Hypoglossal nerve"]},
    {c:"Anatomy",q:"Mandibular nerve is division of?",a:"Trigeminal nerve (V3)",w:["Facial nerve","Vagus nerve","Glossopharyngeal nerve"]},
    {c:"Microbiology",q:"Most common bacteria in dental caries?",a:"Streptococcus mutans",w:["E. coli","Staphylococcus aureus","Pseudomonas"]},
    {c:"Microbiology",q:"Primary organism in periodontal disease?",a:"Porphyromonas gingivalis",w:["Lactobacillus","E. coli","Candida albicans"]},
    {c:"General Medicine",q:"Normal fasting glucose?",a:"70-100 mg/dL",w:["120-140 mg/dL","50-70 mg/dL","150-200 mg/dL"]},
    {c:"General Medicine",q:"Anaphylaxis first-line?",a:"Epinephrine 0.5mg IM",w:["Antihistamine","Steroids","Oxygen only"]},
    {c:"Family Medicine",q:"Main goal of family medicine?",a:"Comprehensive continuous care",w:["Surgery only","Emergency only","Radiology focus"]},
    {c:"Surgery",q:"Most important step before surgery?",a:"Informed consent",w:["Antibiotics","X-ray","Suturing"]},
    {c:"Dermatology",q:"Most common skin cancer?",a:"Basal cell carcinoma",w:["Melanoma","Squamous cell carcinoma","Lymphoma"]},
    {c:"Physiology",q:"SA node location and rate?",a:"Right atrium near SVC - 60-100 bpm",w:["Left atrium - 40 bpm","AV node - 20-40 bpm","Bundle of His - 15-20 bpm"]}
  ];
}
 
function buildFallbackQB() {
  return [
    {c:"General Dentistry",q:"Normal healthy sulcus depth?",a:"1-3 mm",w:["4-6 mm","7-9 mm","0 mm"]},
    {c:"General Dentistry",q:"Hardest tissue in the body?",a:"Enamel",w:["Dentin","Bone","Cementum"]},
    {c:"General Dentistry",q:"Cells that produce enamel?",a:"Ameloblasts",w:["Odontoblasts","Cementoblasts","Osteoblasts"]},
    {c:"Endodontics",q:"Most common RCT irrigant?",a:"Sodium hypochlorite",w:["Saline","H2O2","Chlorhexidine"]},
    {c:"Periodontics",q:"BOP indicates?",a:"Gingival inflammation",w:["Healthy gingiva","Bone loss","Caries"]},
    {c:"Oral Surgery",q:"Dry socket clinical term?",a:"Alveolar osteitis",w:["Pericoronitis","Cellulitis","Osteomyelitis"]},
    {c:"Orthodontics",q:"ANB normal value?",a:"1-3 degrees",w:["0 degrees","8-10 degrees","-5 degrees"]},
    {c:"Prosthodontics",q:"Kennedy Class I?",a:"Bilateral free-end saddles",w:["Unilateral free-end","Single bounded","Anterior space"]},
    {c:"Oral Pharmacology",q:"Max dose lidocaine with epi?",a:"7 mg/kg",w:["3 mg/kg","10 mg/kg","1 mg/kg"]},
    {c:"General Medicine",q:"Normal fasting glucose?",a:"70-100 mg/dL",w:["120-140 mg/dL","50-70 mg/dL","150-200 mg/dL"]},
    {c:"Anatomy",q:"Maxillary sinus drains into?",a:"Middle meatus",w:["Inferior meatus","Superior meatus","Nasopharynx"]},
    {c:"Microbiology",q:"Most cariogenic bacterium?",a:"Streptococcus mutans",w:["Lactobacillus","Actinomyces","P. gingivalis"]},
    {c:"Pediatric Dentistry",q:"First primary tooth to erupt?",a:"Mandibular central incisor",w:["Max central","First molar","Canine"]},
    {c:"Oral Pathology",q:"Most common odontogenic cyst?",a:"Radicular cyst",w:["Dentigerous","OKC","Lateral periodontal"]},
    {c:"Family Medicine",q:"First-line treatment for uncomplicated hypertension?",a:"Lifestyle modification",w:["Beta-blocker","Insulin","Antibiotics"]},
    {c:"Surgery",q:"Confirmed acute appendicitis management?",a:"Appendectomy",w:["Observation","IV antibiotics only","Discharge"]},
    {c:"Dermatology",q:"Most dangerous skin cancer?",a:"Melanoma",w:["Basal cell carcinoma","Seborrheic keratosis","Nevus"]},
    {c:"Physiology",q:"Normal cardiac output?",a:"~5 L/min",w:["1 L/min","10 L/min","20 L/min"]}
  ];
}
 
// ═══════════════════════════════════════
// 4. LOCAL BATTLE OVERRIDES
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', function () {
 
  window.startLocal = function () {
    var t1 = document.getElementById('lt1').value.trim() || 'Team 1';
    var t2 = document.getElementById('lt2').value.trim() || 'Team 2';
    if (L.sc.length !== 6) { toast('Select exactly 6!'); return; }
    L.t1 = t1; L.t2 = t2;
    L.s = { t1: 0, t2: 0 };
    L.board = {};
    L.sc.forEach(function (cat) {
      var pool = rnd(QB.filter(function (q) { return q.c === cat; }));
      L.board[cat] = pool.slice(0, 4).map(function (q) {
        return { c: q.c, q: q.q, a: q.a, opts: mkOpts(q), used: false, usedBy: null, pts: 10 };
      });
    });
    go('sc-local');
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
  };
 
  window.localShowOptions = function () {
    document.getElementById('lm-opts').style.display = 'flex';
    var sab = document.getElementById('sab');
    if (sab) {
      sab.textContent = '\u2705 Show Answer';
      sab.onclick = window.revealLocalAns;
    }
  };
 
  window.revealLocalAns = function () {
    var q = L.curQ.q;
    document.querySelectorAll('#lm-opts .lo').forEach(function (el, i) {
      if (q.opts[i] === q.a) el.classList.add('ok');
    });
    L.ansRevealed = true;
    var sab = document.getElementById('sab');
    if (sab) sab.style.display = 'none';
    document.getElementById('aws').style.display = 'flex';
  };
 
  window.awardPts = function (team) {
    if (L.awarded) return;
    L.awarded = true;
    clearInterval(L.timer);
    var pts = 10;
    var badge = document.getElementById('awbg');
    if (team === 't1') {
      L.s.t1 += pts;
      L.board[L.curQ.cat][L.curQ.idx].usedBy = 't1';
      badge.className = 'awbg t1';
      badge.textContent = '\uD83C\uDFC6 ' + L.t1 + ' +' + pts + ' pts!';
    } else if (team === 't2') {
      L.s.t2 += pts;
      L.board[L.curQ.cat][L.curQ.idx].usedBy = 't2';
      badge.className = 'awbg t2';
      badge.textContent = '\uD83C\uDFC6 ' + L.t2 + ' +' + pts + ' pts!';
    } else {
      L.board[L.curQ.cat][L.curQ.idx].usedBy = 'no';
      badge.className = 'awbg no';
      badge.textContent = '\u274C No answer — 0 pts';
    }
    L.board[L.curQ.cat][L.curQ.idx].used = true;
    if (!L.ansRevealed) {
      document.querySelectorAll('#lm-opts .lo').forEach(function (el, i) {
        if (L.curQ.q.opts[i] === L.curQ.q.a) el.classList.add('ok');
      });
    }
    document.getElementById('aws').style.display = 'none';
    badge.style.display = 'block';
    document.getElementById('lm-next').style.display = 'block';
    updLHdr();
    updLBoard();
  };
 
  window.updLBoard = function () {
    var el = document.getElementById('l-board');
    if (!el) return;
    el.innerHTML = '';
    L.sc.forEach(function (cat) {
      var qs = L.board[cat];
      var sec = document.createElement('div');
      sec.className = 'catsec';
      var tiles = qs.map(function (q, i) {
        var u = q.used, by = q.usedBy;
        var cls = u ? (by === 't1' ? ' u1' : by === 't2' ? ' u2' : ' un') : '';
        var lbl = u ? (by === 't1' ? '\u2705' : by === 't2' ? '\u274C' : '\u2014') : 'Q' + (i + 1);
        var click = u ? '' : 'onclick="openLQ(\'' + encodeURIComponent(cat) + '\',' + i + ')"';
        return '<div class="tile' + (u ? ' used' + cls : '') + '" ' + click + '><span>' + lbl + '</span><span class="tpts">10 pts</span></div>';
      }).join('');
      sec.innerHTML = '<div class="cathd">' + (CATS[cat] || '\uD83D\uDCCB') + ' ' + cat + '</div><div class="tiles">' + tiles + '</div>';
      el.appendChild(sec);
    });
  };
 
  window.updLHdr = function () {
    document.getElementById('lt1-n').textContent = L.t1;
    document.getElementById('lt2-n').textContent = L.t2;
    document.getElementById('lt1-s').textContent = L.s.t1;
    document.getElementById('lt2-s').textContent = L.s.t2;
    var t1b = document.getElementById('aw-t1');
    var t2b = document.getElementById('aw-t2');
    if (t1b) t1b.textContent = '\uD83C\uDFC6 ' + L.t1;
    if (t2b) t2b.textContent = '\uD83C\uDFC6 ' + L.t2;
  };
 
});
 
})();
