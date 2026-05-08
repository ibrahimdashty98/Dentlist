// ================================================================
// questions.js — كل بيانات الأسئلة والتخصصات
// ================================================================

var CATS = {
“General Dentistry”:“🦷”,“Oral Surgery”:“🔪”,“Endodontics”:“🦠”,
“Periodontics”:“🩸”,“Orthodontics”:“😬”,“Prosthodontics”:“🦾”,
“Pediatric Dentistry”:“👶”,“Oral Pathology”:“🔬”,“Oral Pharmacology”:“💊”,
“Anatomy”:“🧬”,“Microbiology”:“🧫”,“Dental Material”:“🔩”,
“General Medicine”:“🩺”,“Family Medicine”:“👨‍⚕️”,“Surgery”:“🏥”,
“Dermatology”:“🩹”,“Physiology”:“🫀”
};

var DENTAL_CATS = [
“General Dentistry”,“Oral Surgery”,“Endodontics”,“Periodontics”,
“Orthodontics”,“Prosthodontics”,“Pediatric Dentistry”,“Oral Pathology”,
“Oral Pharmacology”,“Anatomy”,“Microbiology”,“Dental Material”
];

var MEDICAL_CATS = [
“General Medicine”,“Family Medicine”,“Surgery”,“Dermatology”,“Physiology”
];

// ================================================================
// QB — قاعدة أسئلة وضع اللعبة
// ================================================================
var QB = [

// ─── General Dentistry ───────────────────────────────────────
{c:“General Dentistry”,q:“Normal healthy sulcus depth?”,a:“1-3 mm”,w:[“4-6 mm”,“7-9 mm”,“0 mm”]},
{c:“General Dentistry”,q:“Hardest tissue in the body?”,a:“Enamel”,w:[“Dentin”,“Bone”,“Cementum”]},
{c:“General Dentistry”,q:“Cells that produce enamel?”,a:“Ameloblasts”,w:[“Odontoblasts”,“Cementoblasts”,“Osteoblasts”]},
{c:“General Dentistry”,q:“Cells that produce dentin?”,a:“Odontoblasts”,w:[“Ameloblasts”,“Cementoblasts”,“Fibroblasts”]},
{c:“General Dentistry”,q:“Best X-ray for full root length?”,a:“Periapical”,w:[“Bitewing”,“Panoramic”,“CBCT”]},
{c:“General Dentistry”,q:“Number of permanent teeth?”,a:“32”,w:[“28”,“30”,“36”]},
{c:“General Dentistry”,q:“Number of primary teeth?”,a:“20”,w:[“24”,“16”,“28”]},
{c:“General Dentistry”,q:“Critical pH for enamel dissolution?”,a:“5.5”,w:[“6.5”,“7.0”,“4.0”]},
{c:“General Dentistry”,q:“Tooth wear from tooth-to-tooth contact?”,a:“Attrition”,w:[“Abrasion”,“Erosion”,“Abfraction”]},
{c:“General Dentistry”,q:“First permanent tooth to erupt?”,a:“Mandibular first molar”,w:[“Max central incisor”,“Mand canine”,“First premolar”]},
{c:“General Dentistry”,q:“Tooth with the longest root?”,a:“Maxillary canine”,w:[“Mandibular molar”,“Max central”,“Mand canine”]},
{c:“General Dentistry”,q:“Main buffer in saliva?”,a:“Bicarbonate”,w:[“Phosphate”,“Protein”,“Carbonate”]},
{c:“General Dentistry”,q:“DMFT measures?”,a:“Caries experience”,w:[“Periodontal status”,“Fluorosis”,“Occlusion”]},
{c:“General Dentistry”,q:“Ideal overjet value?”,a:“2-4 mm”,w:[“0 mm”,“6-8 mm”,“8-10 mm”]},
{c:“General Dentistry”,q:“What is bruxism?”,a:“Teeth grinding”,w:[“Jaw dislocation”,“TMJ click”,“Trismus”]},
{c:“General Dentistry”,q:“Most common cause of postop sensitivity in composite?”,a:“Polymerization shrinkage”,w:[“Over-etching enamel”,“Use of flowable composite”,“Improper shade selection”]},
{c:“General Dentistry”,q:“C-factor is defined as?”,a:“Ratio of bonded to unbonded surfaces”,w:[“Composite viscosity”,“Polymerization rate”,“Etch depth”]},
{c:“General Dentistry”,q:“Ideal etching time for enamel (37% phosphoric acid)?”,a:“15-20 sec”,w:[“5 sec”,“10 sec”,“60 sec”]},
{c:“General Dentistry”,q:“Over-drying dentin after etching leads to?”,a:“Collagen collapse”,w:[“Better bonding”,“Increased wetting”,“Increased hybrid layer thickness”]},
{c:“General Dentistry”,q:“GIC bonds to tooth via?”,a:“Chemical bonding”,w:[“Micromechanical retention”,“Mechanical retention only”,“Light curing”]},
{c:“General Dentistry”,q:“Main advantage of GIC?”,a:“Fluoride release”,w:[“High strength”,“Esthetics”,“Low solubility”]},
{c:“General Dentistry”,q:“Best matrix for class II composite?”,a:“Sectional matrix”,w:[“Tofflemire”,“Copper band”,“Celluloid strip”]},
{c:“General Dentistry”,q:“Ideal composite increment thickness?”,a:“2 mm”,w:[“1 mm”,“5 mm”,“10 mm”]},
{c:“General Dentistry”,q:“Which liner is best for deep cavities near pulp?”,a:“Calcium hydroxide”,w:[“Zinc oxide”,“Composite”,“Amalgam”]},
{c:“General Dentistry”,q:“White spot lesions represent?”,a:“Initial enamel demineralisation”,w:[“Fluorosis”,“Dentinogenesis imperfecta”,“Enamel hypoplasia”]},
{c:“General Dentistry”,q:“Dentin hypersensitivity best explained by?”,a:“Hydrodynamic theory”,w:[“Direct nerve stimulation”,“Bacterial invasion”,“Enamel cracking”]},
{c:“General Dentistry”,q:“A 1.8ml cartridge of 2% lidocaine contains?”,a:“36 mg”,w:[“18 mg”,“72 mg”,“9 mg”]},
{c:“General Dentistry”,q:“Cusp of Carabelli found on?”,a:“Maxillary first molar”,w:[“Mandibular first molar”,“Maxillary second premolar”,“Mandibular second molar”]},
{c:“General Dentistry”,q:“Rampant caries in infants associated with?”,a:“Prolonged bottle feeding with sugary drinks”,w:[“Fluoride deficiency alone”,“Poor brushing only”,“Genetic factors primarily”]},

// ─── Oral Surgery ─────────────────────────────────────────────
{c:“Oral Surgery”,q:“Dry socket clinical term?”,a:“Alveolar osteitis”,w:[“Pericoronitis”,“Cellulitis”,“Osteomyelitis”]},
{c:“Oral Surgery”,q:“Nerve at risk in lower 3rd molar?”,a:“Inferior alveolar nerve”,w:[“Lingual nerve”,“Buccal nerve”,“Mental nerve”]},
{c:“Oral Surgery”,q:“Primary danger of Ludwig angina?”,a:“Airway obstruction”,w:[“Facial swelling”,“Trismus”,“Pain”]},
{c:“Oral Surgery”,q:“Bisphosphonate jaw complication?”,a:“MRONJ”,w:[“Cyst”,“Abscess”,“Fracture”]},
{c:“Oral Surgery”,q:“Implant bond to bone?”,a:“Osseointegration”,w:[“Fibrous union”,“Soft tissue bond”,“Cement bond”]},
{c:“Oral Surgery”,q:“Most commonly impacted tooth?”,a:“Mandibular third molar”,w:[“Maxillary canine”,“Maxillary central incisor”,“Premolar”]},
{c:“Oral Surgery”,q:“Most common impaction angulation?”,a:“Mesioangular”,w:[“Horizontal”,“Vertical”,“Distoangular”]},
{c:“Oral Surgery”,q:“Dry socket typically occurs?”,a:“1-3 days after extraction”,w:[“Immediately after”,“After 2 weeks”,“Before extraction”]},
{c:“Oral Surgery”,q:“Maximum epinephrine dose healthy adult?”,a:“0.2 mg”,w:[“0 mg”,“2 mg”,“5 mg”]},
{c:“Oral Surgery”,q:“OAC definition?”,a:“Connection between oral cavity and maxillary sinus”,w:[“Tooth decay”,“Gum disease”,“Root fracture”]},

// ─── Endodontics ──────────────────────────────────────────────
{c:“Endodontics”,q:“Most common RCT irrigant?”,a:“Sodium hypochlorite”,w:[“Saline”,“H2O2”,“Chlorhexidine”]},
{c:“Endodontics”,q:“Working length ends at?”,a:“Apical constriction”,w:[“Radiographic apex”,“Crown tip”,“CEJ”]},
{c:“Endodontics”,q:“Irreversible pulpitis key feature?”,a:“Spontaneous lingering pain”,w:[“Pain stops quickly”,“No pain”,“Cold only”]},
{c:“Endodontics”,q:“EDTA in RCT removes?”,a:“Smear layer”,w:[“Bacteria”,“Pulp tissue”,“Calculus”]},
{c:“Endodontics”,q:“Standard RCT filling material?”,a:“Gutta-percha + sealer”,w:[“Amalgam”,“Composite”,“ZOE only”]},
{c:“Endodontics”,q:“Most reliable pulp vitality test?”,a:“Cold test”,w:[“Heat test”,“Electric pulp test”,“Percussion”]},
{c:“Endodontics”,q:“Best intracanal medicament between visits?”,a:“Calcium hydroxide”,w:[“Saline”,“Composite”,“Zinc oxide”]},
{c:“Endodontics”,q:“Most common cause of endodontic failure?”,a:“Persistent infection”,w:[“Overfilling”,“Underfilling”,“Instrument fracture”]},
{c:“Endodontics”,q:“Most commonly missed canal in maxillary first molar?”,a:“MB2”,w:[“DB”,“Palatal”,“Distal”]},
{c:“Endodontics”,q:“Best repair material for perforation?”,a:“MTA”,w:[“Composite”,“GIC”,“Amalgam”]},

// ─── Periodontics ─────────────────────────────────────────────
{c:“Periodontics”,q:“BOP indicates?”,a:“Gingival inflammation”,w:[“Healthy gingiva”,“Bone loss”,“Caries”]},
{c:“Periodontics”,q:“Furcation Grade III?”,a:“Through-and-through”,w:[“Initial”,“Partial”,“No furcation”]},
{c:“Periodontics”,q:“Subgingival calculus color?”,a:“Dark brown to black”,w:[“White”,“Yellow”,“Clear”]},
{c:“Periodontics”,q:“Drug causing gingival enlargement?”,a:“Phenytoin, cyclosporine, CCBs”,w:[“Antibiotics”,“NSAIDs”,“Antihistamines”]},
{c:“Periodontics”,q:“Primary etiological factor of periodontitis?”,a:“Bacteria in dental plaque biofilm”,w:[“Trauma”,“Malocclusion”,“Diet alone”]},
{c:“Periodontics”,q:“Gingivitis differs from periodontitis by?”,a:“No attachment loss”,w:[“Bone loss present”,“Tooth mobility”,“Pus formation”]},
{c:“Periodontics”,q:“Healthy sulcus depth?”,a:“1-3 mm”,w:[“0-1 mm”,“4-6 mm”,”>6 mm”]},
{c:“Periodontics”,q:“Main pathogenic bacteria in periodontitis?”,a:“Porphyromonas gingivalis”,w:[“Streptococcus mutans”,“E. coli”,“Candida”]},
{c:“Periodontics”,q:“NUG characteristic feature?”,a:“Punched-out papillae with pseudomembrane”,w:[“Swollen rounded papillae”,“No inflammation”,“Bone loss without bleeding”]},
{c:“Periodontics”,q:“Red complex bacteria include?”,a:“P. gingivalis, T. forsythia, T. denticola”,w:[“Blue complex”,“Green complex”,“White complex”]},

// ─── Orthodontics ─────────────────────────────────────────────
{c:“Orthodontics”,q:“ANB normal value?”,a:“1-3 degrees”,w:[“0 degrees”,“8-10 degrees”,”-5 degrees”]},
{c:“Orthodontics”,q:“Increased ANB = skeletal?”,a:“Class II”,w:[“Class III”,“Class I”,“Normal”]},
{c:“Orthodontics”,q:“Palatal expander corrects?”,a:“Posterior crossbite”,w:[“Deep bite”,“Proclination”,“Class III”]},
{c:“Orthodontics”,q:“First wire material?”,a:“NiTi round”,w:[“Stainless steel”,“TMA”,“Cobalt chrome”]},
{c:“Orthodontics”,q:“Most common orthodontic problem?”,a:“Crowding”,w:[“Crossbite”,“Open bite”,“Spacing”]},
{c:“Orthodontics”,q:“Optimal orthodontic force?”,a:“Light and continuous”,w:[“Heavy continuous”,“Random”,“No force”]},
{c:“Orthodontics”,q:“Excessive orthodontic force causes?”,a:“Root resorption”,w:[“Faster movement”,“Improved esthetics”,“Better stability”]},
{c:“Orthodontics”,q:“Class II division 1 shows?”,a:“Proclined upper incisors”,w:[“Retroclined incisors”,“Crossbite”,“Open bite”]},
{c:“Orthodontics”,q:“IOTN stands for?”,a:“Index of Orthodontic Treatment Need”,w:[“Index of Oral Treatment Needs”,“International Orthodontic Norms”,“Index of Occlusal Treatment Norms”]},
{c:“Orthodontics”,q:“Thumb sucking causes?”,a:“Anterior open bite”,w:[“Deep overbite”,“Posterior crossbite”,“Class III”]},

// ─── Prosthodontics ───────────────────────────────────────────
{c:“Prosthodontics”,q:“Kennedy Class I?”,a:“Bilateral free-end saddles”,w:[“Unilateral free-end”,“Single bounded”,“Anterior space”]},
{c:“Prosthodontics”,q:“Kennedy Class II?”,a:“Unilateral free-end saddle”,w:[“Bilateral free-end”,“Anterior space”,“Multiple spaces”]},
{c:“Prosthodontics”,q:“VDO stands for?”,a:“Vertical dimension of occlusion”,w:[“Variable dental occlusion”,“Vertical distance orbit”,“Vertical degree offset”]},
{c:“Prosthodontics”,q:“Freeway space normal?”,a:“2-4 mm”,w:[“0 mm”,“6-8 mm”,“1 mm”]},
{c:“Prosthodontics”,q:“Most important factor for complete denture retention?”,a:“Border seal”,w:[“Saliva volume”,“Occlusion”,“Tooth shade”]},
{c:“Prosthodontics”,q:“Crown preparation taper should be?”,a:“2-6°”,w:[“0°”,“20°”,“45°”]},
{c:“Prosthodontics”,q:“Biological width is?”,a:“Junctional epithelium plus connective tissue attachment”,w:[“Enamel thickness”,“Bone height”,“Crown height”]},
{c:“Prosthodontics”,q:“Best pontic design for esthetics?”,a:“Ovate pontic”,w:[“Saddle pontic”,“Hygienic pontic”,“Conical pontic”]},
{c:“Prosthodontics”,q:“Osseointegration is?”,a:“Direct structural bone-implant contact”,w:[“Fibrous attachment”,“Weak bond”,“Temporary union”]},
{c:“Prosthodontics”,q:“Immediate denture delivered?”,a:“Immediately after extraction”,w:[“After 6 months”,“Before extraction”,“After 1 year”]},

// ─── Pediatric Dentistry ──────────────────────────────────────
{c:“Pediatric Dentistry”,q:“First primary tooth to erupt?”,a:“Mandibular central incisor”,w:[“Max central”,“First molar”,“Canine”]},
{c:“Pediatric Dentistry”,q:“Primary avulsion: replant?”,a:“No”,w:[“Yes immediately”,“Yes within 2h”,“Yes with splint”]},
{c:“Pediatric Dentistry”,q:“Permanent avulsion best storage?”,a:“HBSS or milk”,w:[“Tap water”,“Dry”,“Saline only”]},
{c:“Pediatric Dentistry”,q:“Most common pulp therapy in primary teeth?”,a:“Pulpotomy”,w:[“Apicoectomy”,“Crown lengthening”,“Extraction only”]},
{c:“Pediatric Dentistry”,q:“Silver diamine fluoride used for?”,a:“Arresting caries”,w:[“Whitening only”,“Extraction only”,“Bone growth”]},

// ─── Oral Pathology ───────────────────────────────────────────
{c:“Oral Pathology”,q:“Most common odontogenic cyst?”,a:“Radicular cyst”,w:[“Dentigerous”,“OKC”,“Lateral periodontal”]},
{c:“Oral Pathology”,q:“OKC recurrence rate?”,a:“Up to 60%”,w:[“Less than 5%”,“10-15%”,“Zero”]},
{c:“Oral Pathology”,q:“Higher malignant potential?”,a:“Erythroplakia”,w:[“Leukoplakia”,“Same risk”,“Neither”]},
{c:“Oral Pathology”,q:“Most common oral malignancy?”,a:“Squamous cell carcinoma”,w:[“Adenoma”,“Sarcoma”,“Melanoma only”]},
{c:“Oral Pathology”,q:“Ameloblastoma most common site?”,a:“Mandible posterior”,w:[“Maxillary anterior”,“Tongue”,“Lip”]},

// ─── Oral Pharmacology ────────────────────────────────────────
{c:“Oral Pharmacology”,q:“Amoxicillin mechanism?”,a:“Cell wall inhibition”,w:[“Protein inhibition”,“Membrane disruption”,“DNA damage”]},
{c:“Oral Pharmacology”,q:“Max dose lidocaine with epi?”,a:“7 mg/kg”,w:[“3 mg/kg”,“10 mg/kg”,“1 mg/kg”]},
{c:“Oral Pharmacology”,q:“Penicillin allergy alternative?”,a:“Clindamycin”,w:[“Amoxicillin”,“Ampicillin”,“Cefalexin”]},
{c:“Oral Pharmacology”,q:“Drug for oral anaerobes?”,a:“Metronidazole”,w:[“Erythromycin”,“Tetracycline”,“Fluconazole”]},
{c:“Oral Pharmacology”,q:“Paracetamol overdose antidote?”,a:“N-acetylcysteine”,w:[“Flumazenil”,“Naloxone”,“Atropine”]},
{c:“Oral Pharmacology”,q:“Tetracycline side effect in children?”,a:“Tooth discoloration”,w:[“Bone growth”,“Hair growth”,“Skin whitening”]},
{c:“Oral Pharmacology”,q:“NSAIDs mechanism?”,a:“COX inhibition”,w:[“Dopamine blockade”,“Calcium activation”,“Serotonin release”]},
{c:“Oral Pharmacology”,q:“Chlorhexidine main side effect?”,a:“Tooth staining”,w:[“Bone loss”,“Caries”,“Pulp death”]},

// ─── Anatomy ──────────────────────────────────────────────────
{c:“Anatomy”,q:“Maxillary sinus drains into?”,a:“Middle meatus”,w:[“Inferior meatus”,“Superior meatus”,“Nasopharynx”]},
{c:“Anatomy”,q:“Parotid duct opens opposite?”,a:“Upper second molar”,w:[“Upper first molar”,“Lower molar”,“Canine”]},
{c:“Anatomy”,q:“Lingual nerve supplies?”,a:“Anterior 2/3 tongue sensation”,w:[“Posterior 1/3 taste”,“Motor to tongue”,“Cheek”]},
{c:“Anatomy”,q:“Masseter function?”,a:“Jaw closure”,w:[“Jaw opening”,“Lateral deviation”,“Tongue protrusion”]},
{c:“Anatomy”,q:“Motor to tongue muscles?”,a:“Hypoglossal nerve”,w:[“Facial nerve”,“Vagus nerve”,“V2”]},
{c:“Anatomy”,q:“Greater palatine nerve supplies?”,a:“Hard palate”,w:[“Tongue”,“Mandible”,“Cheek”]},
{c:“Anatomy”,q:“Taste from posterior 1/3 tongue via?”,a:“Glossopharyngeal nerve”,w:[“Facial nerve”,“Trigeminal nerve”,“Vagus only”]},

// ─── Microbiology ─────────────────────────────────────────────
{c:“Microbiology”,q:“Most cariogenic bacterium?”,a:“Streptococcus mutans”,w:[“Lactobacillus”,“Actinomyces”,“P. gingivalis”]},
{c:“Microbiology”,q:“Primary periodontitis pathogen?”,a:“Porphyromonas gingivalis”,w:[“S. mutans”,“Actinomyces”,“T. denticola”]},
{c:“Microbiology”,q:“Autoclave: 134°C for?”,a:“3 minutes”,w:[“30 minutes”,“1 hour”,“10 minutes”]},
{c:“Microbiology”,q:“Dental plaque is?”,a:“Biofilm”,w:[“Bone tissue”,“Tooth enamel”,“Saliva only”]},
{c:“Microbiology”,q:“Most common oral fungal infection?”,a:“Candida albicans”,w:[“Streptococcus mutans”,“E. coli”,“HSV”]},
{c:“Microbiology”,q:“HSV remains latent in?”,a:“Trigeminal ganglion”,w:[“Bone marrow”,“Teeth”,“Saliva glands only”]},
{c:“Microbiology”,q:“Secretory IgA found in?”,a:“Saliva”,w:[“Bone”,“Teeth”,“Muscle”]},

// ─── Dental Material ──────────────────────────────────────────
{c:“Dental Material”,q:“Main component of dental amalgam?”,a:“Mercury”,w:[“Gold”,“Silver”,“Copper”]},
{c:“Dental Material”,q:“Weakest phase in amalgam?”,a:“Gamma-2”,w:[“Gamma”,“Gamma-1”,“Beta”]},
{c:“Dental Material”,q:“Main resin matrix in composites?”,a:“Bis-GMA”,w:[“PMMA”,“Zinc oxide”,“Gold”]},
{c:“Dental Material”,q:“Light-cured composites use?”,a:“Blue light (~470 nm)”,w:[“UV light”,“Red light”,“Infrared”]},
{c:“Dental Material”,q:“Alginate dimensional stability?”,a:“Low”,w:[“High”,“Permanent”,“Perfect”]},
{c:“Dental Material”,q:“Eugenol effect on composite?”,a:“Inhibits polymerization”,w:[“Improves bond”,“No effect”,“Strengthens composite”]},
{c:“Dental Material”,q:“Dental implants made of?”,a:“Titanium”,w:[“Gold”,“Mercury”,“Silver”]},
{c:“Dental Material”,q:“Radiopacity in composite due to?”,a:“Barium glass filler”,w:[“Silica”,“Water”,“Resin”]},

// ─── General Medicine ─────────────────────────────────────────
{c:“General Medicine”,q:“Normal fasting glucose?”,a:“70-100 mg/dL”,w:[“120-140 mg/dL”,“50-70 mg/dL”,“150-200 mg/dL”]},
{c:“General Medicine”,q:“Anaphylaxis first-line?”,a:“Epinephrine 0.5mg IM”,w:[“Antihistamine”,“Steroids”,“Oxygen only”]},
{c:“General Medicine”,q:“HbA1c diabetes threshold?”,a:“6.5% or higher”,w:[“5.0%”,“8.0%”,“10%”]},
{c:“General Medicine”,q:“Normal blood pH?”,a:“7.35-7.45”,w:[“6.8-7.0”,“7.0-7.2”,“7.5-7.7”]},
{c:“General Medicine”,q:“Most common cause of hypertension?”,a:“Essential hypertension”,w:[“Renal artery stenosis”,“Endocrine disorders”,“Pheochromocytoma”]},
{c:“General Medicine”,q:“Normal resting heart rate adults?”,a:“60-100 bpm”,w:[“40-60 bpm”,“100-120 bpm”,“120-140 bpm”]},
{c:“General Medicine”,q:“Vitamin C deficiency causes?”,a:“Scurvy”,w:[“Rickets”,“Pellagra”,“Beri-beri”]},
{c:“General Medicine”,q:“Which drug causes cough as side effect?”,a:“ACE inhibitors”,w:[“Beta blockers”,“Statins”,“Diuretics”]},
{c:“General Medicine”,q:“First biomarker to rise in MI?”,a:“Troponin”,w:[“CK-MB”,“LDH”,“Myoglobin”]},

// ─── Family Medicine ──────────────────────────────────────────
{c:“Family Medicine”,q:“Colon cancer screening starting age?”,a:“45”,w:[“40”,“50”,“55”]},
{c:“Family Medicine”,q:“First-line treatment for uncomplicated HTN?”,a:“Lifestyle modification”,w:[“Beta-blocker”,“Insulin”,“Antibiotics”]},
{c:“Family Medicine”,q:“Which vaccine recommended annually?”,a:“Influenza”,w:[“Hepatitis B”,“MMR”,“Varicella”]},
{c:“Family Medicine”,q:“BMI range for overweight?”,a:“25-29.9”,w:[“18.5-24.9”,“30-34.9”,”>35”]},
{c:“Family Medicine”,q:“First-line drug for type 2 diabetes?”,a:“Metformin”,w:[“Insulin”,“Aspirin”,“Statins”]},
{c:“Family Medicine”,q:“Screening for cervical cancer?”,a:“Pap smear”,w:[“Mammogram”,“Colonoscopy”,“PSA”]},
{c:“Family Medicine”,q:“Screening for breast cancer?”,a:“Mammogram”,w:[“Pap smear”,“Colonoscopy”,“ECG”]},

// ─── Surgery ──────────────────────────────────────────────────
{c:“Surgery”,q:“Tension pneumothorax management?”,a:“Needle decompression”,w:[“Chest X-ray”,“Antibiotics”,“Observation”]},
{c:“Surgery”,q:“Burn patient first priority?”,a:“Airway management”,w:[“Antibiotics”,“Pain relief”,“Dressing”]},
{c:“Surgery”,q:“Testicular torsion management?”,a:“Immediate surgery”,w:[“Ultrasound first”,“Antibiotics”,“Observation”]},
{c:“Surgery”,q:“Compartment syndrome management?”,a:“Fasciotomy”,w:[“Elevation”,“Antibiotics”,“Cast”]},
{c:“Surgery”,q:“Appendicitis management?”,a:“Appendectomy”,w:[“Observation”,“IV antibiotics only”,“Discharge”]},
{c:“Surgery”,q:“Post-op day 1 fever most likely cause?”,a:“Atelectasis”,w:[“Infection”,“Sepsis”,“Abscess”]},
{c:“Surgery”,q:“DVT management?”,a:“Anticoagulation”,w:[“Surgery”,“Antibiotics”,“Observation”]},

// ─── Dermatology ──────────────────────────────────────────────
{c:“Dermatology”,q:“Most common skin cancer?”,a:“Basal cell carcinoma”,w:[“Melanoma”,“Squamous cell carcinoma”,“Lymphoma”]},
{c:“Dermatology”,q:“Most dangerous skin cancer?”,a:“Melanoma”,w:[“Basal cell carcinoma”,“Seborrheic keratosis”,“Nevus”]},
{c:“Dermatology”,q:“Eczema first-line treatment?”,a:“Emollients + topical corticosteroids”,w:[“Antibiotics”,“Antifungals”,“Surgery”]},
{c:“Dermatology”,q:“ABCDE A stands for?”,a:“Asymmetry”,w:[“Age”,“Area”,“Allergy”]},
{c:“Dermatology”,q:“Impetigo characteristic lesion?”,a:“Honey-colored crust”,w:[“White plaque”,“Black necrosis”,“Bone lesion”]},
{c:“Dermatology”,q:“Ringworm caused by?”,a:“Dermatophytes”,w:[“Viruses”,“Bacteria”,“Parasites only”]},
{c:“Dermatology”,q:“Scabies caused by?”,a:“Sarcoptes scabiei”,w:[“Virus”,“Fungus”,“Bacteria”]},

// ─── Physiology ───────────────────────────────────────────────
{c:“Physiology”,q:“Normal cardiac output?”,a:“~5 L/min”,w:[“~2 L/min”,“~10 L/min”,“~1 L/min”]},
{c:“Physiology”,q:“O2-Hb curve right shift means?”,a:“Decreased O2 affinity - more O2 released”,w:[“Increased O2 affinity”,“Less O2 released”,“Alkalosis”]},
{c:“Physiology”,q:“Surfactant produced by?”,a:“Type II pneumocytes”,w:[“Type I pneumocytes”,“Macrophages”,“Endothelium”]},
{c:“Physiology”,q:“Primary stimulus for ventilation?”,a:“Rising PaCO2”,w:[“Falling O2”,“Falling pH”,“Rising HCO3”]},
{c:“Physiology”,q:“Frank-Starling law?”,a:“Greater preload → greater stroke volume”,w:[“Greater afterload → greater SV”,“Less preload → more SV”,“No relation”]},
{c:“Physiology”,q:“Normal GFR?”,a:“~125 mL/min”,w:[“~50 mL/min”,“~200 mL/min”,“~10 mL/min”]},
{c:“Physiology”,q:“Muscle contraction - calcium binds?”,a:“Troponin C”,w:[“Actin”,“Myosin”,“Titin”]},
{c:“Physiology”,q:“Insulin produced by?”,a:“Beta cells of islets of Langerhans”,w:[“Alpha cells”,“Delta cells”,“Acinar cells”]},
{c:“Physiology”,q:“Baroreceptors located in?”,a:“Carotid sinus and aortic arch”,w:[“Hypothalamus”,“Renal cortex”,“Myocardium”]}

]; // END QB

// ================================================================
// KBR_CHAPTERS — مولود تلقائياً من QB مصنّف بالتخصص
// هذا يحل محل ملف exam-kbr-entry.html تماماً
// ================================================================
function buildKBRChapters() {
var colorMap = {
“General Dentistry”:”#00f0ff”,
“Oral Surgery”:”#ff6b9d”,
“Endodontics”:”#aaff00”,
“Periodontics”:”#58a6ff”,
“Orthodontics”:”#b06eff”,
“Prosthodontics”:”#ffaa00”,
“Pediatric Dentistry”:”#ffd166”,
“Oral Pathology”:”#ff6b35”,
“Oral Pharmacology”:”#c084fc”,
“Anatomy”:”#34d399”,
“Microbiology”:”#9affb3”,
“Dental Material”:”#00f0ff”,
“General Medicine”:”#ff9500”,
“Family Medicine”:”#fbbf24”,
“Surgery”:”#f87171”,
“Dermatology”:”#fb923c”,
“Physiology”:”#a78bfa”
};

var grouped = {};
QB.forEach(function(q) {
if (!grouped[q.c]) grouped[q.c] = [];
grouped[q.c].push({
q: q.q,
a: q.a + (q.w && q.w.length ? “<br><br><em>Wrong answers: “ + q.w.join(” / “) + “</em>” : “”)
});
});

var chapters = [];
// Dental categories first, then Medical
var order = DENTAL_CATS.concat(MEDICAL_CATS);
order.forEach(function(cat) {
if (grouped[cat] && grouped[cat].length > 0) {
chapters.push({
title: (CATS[cat] || “”) + “ “ + cat,
color: colorMap[cat] || “#00f0ff”,
questions: grouped[cat]
});
}
});
return chapters;
}

// ================================================================
// EXAM_SUBJECTS — هيكل شجرة التخصصات لوضع Study Smart
// ================================================================
var EXAM_SUBJECTS = [
{id:“study-smart”, name:“Study Smart”, icon:“📖”, desc:“Dentistry and Medicine All Specialties”, isFolder:true, children:[

// ── مجلد طب الأسنان ──────────────────────────────────────
{id:“dentistry-folder”, name:“Dentistry”, icon:“🦷”, desc:“KBR · All Specialties · Dental Materials”, isFolder:true, children:[

// ─── KBR — مدمج الآن بدلاً من رابط خارجي ───────────────
{id:“kbr-entry”, name:“KBR Practice Questions”, icon:“🏆”,
desc:“Kuwait Board R1 · All Specialties · Quiz Format”,
get chapters() { return buildKBRChapters(); }
},

// ── تخصصات الأسنان ────────────────────────────────────
{id:“dentistry-all-specs”, name:“All Specialties”, icon:“📚”,
desc:“General Dentistry · Endo · Perio · Ortho · Prosth · Oral Surgery”,
isFolder:true, children:[

```
{id:"mcq-gd", name:"General Dentistry MCQ", icon:"🦷",
 desc:"Composite · Bonding · GIC · Cavity Prep",
 chapters:[{title:"General Dentistry MCQs", color:"#00f0ff", questions:[
  {q:"Most common cause of postop sensitivity in composite?",a:"Polymerization shrinkage — creates tensile stress at margins."},
  {q:"C-factor is?",a:"Ratio of bonded to unbonded surfaces. High C-factor = more shrinkage stress."},
  {q:"Ideal enamel etch time (37% H3PO4)?",a:"15–20 seconds."},
  {q:"Over-drying dentin leads to?",a:"Collagen collapse — prevents resin infiltration."},
  {q:"Hybrid layer forms between?",a:"Resin monomer and demineralized dentin."},
  {q:"GIC bonds chemically via?",a:"Ionic bond between polyalkenoic acid and calcium in HAp."},
  {q:"Best matrix for Class II composite?",a:"Sectional matrix (Palodent/Composi-Tight)."},
  {q:"Ideal composite increment?",a:"2 mm maximum."},
  {q:"Bulk-fill allows?",a:"4–5 mm increments."},
  {q:"Best liner for deep cavity?",a:"Calcium hydroxide — stimulates tertiary dentin."},
  {q:"White spot lesion is?",a:"Initial enamel demineralisation."},
  {q:"Dentin hypersensitivity explained by?",a:"Hydrodynamic theory."},
  {q:"Critical pH for enamel dissolution?",a:"5.5"},
  {q:"Most cariogenic bacteria?",a:"Streptococcus mutans."},
  {q:"DMFT index measures?",a:"Caries experience."},
  {q:"First permanent tooth to erupt?",a:"Mandibular first molar."},
  {q:"Ideal rubber dam isolation because?",a:"Only truly reliable moisture control."},
  {q:"Smear layer is?",a:"Cutting debris — 0.5–7 µm. Removed or modified for bonding."},
  {q:"Self-etch adhesives?",a:"Incorporate smear layer — no separate rinse needed."},
  {q:"Oxygen inhibition layer role?",a:"Allows chemical bonding between composite increments."},
  {q:"Polymerization shrinkage creates?",a:"Tensile stress pulling restoration from margins."},
  {q:"GIC main advantage?",a:"Fluoride release + chemical bonding to tooth."},
  {q:"Cusp of Carabelli on?",a:"Maxillary first molar — mesiolingual."},
  {q:"GV Black classification based on?",a:"Location and surface of cavity."},
  {q:"Calcium hydroxide promotes?",a:"Tertiary (reparative) dentin formation."},
  {q:"Over-curing composite causes?",a:"Increased shrinkage stress."},
  {q:"Microfill vs hybrid composite?",a:"Microfill: better polish but weaker."},
  {q:"Packable composite mimics?",a:"Amalgam handling."},
  {q:"Best etch concentration?",a:"37% phosphoric acid."},
  {q:"Thermal expansion mismatch causes?",a:"Marginal gap formation."}
 ]}]
},

{id:"mcq-endo", name:"Endodontics MCQ", icon:"🦠",
 desc:"Pulp Diagnosis · RCT · Irrigation · Files",
 chapters:[{title:"Endodontics MCQs", color:"#aaff00", questions:[
  {q:"Most reliable pulp test?",a:"Cold test."},
  {q:"Irreversible pulpitis key feature?",a:"Lingering pain >30 sec after stimulus removed."},
  {q:"Necrotic pulp?",a:"No response to vitality tests."},
  {q:"Best irrigant?",a:"Sodium hypochlorite — dissolves organic tissue + kills bacteria."},
  {q:"EDTA removes?",a:"Smear layer."},
  {q:"Working length at?",a:"Apical constriction (0.5–1 mm short of radiographic apex)."},
  {q:"Obturation material?",a:"Gutta-percha + sealer."},
  {q:"Intracanal medicament?",a:"Calcium hydroxide."},
  {q:"Most common failure cause?",a:"Persistent infection (missed canals / coronal leakage)."},
  {q:"Most missed canal?",a:"MB2 in maxillary first molar."},
  {q:"Best perforation repair?",a:"MTA."},
  {q:"NiTi risk?",a:"Instrument fracture from cyclic fatigue."},
  {q:"Best obturation length?",a:"0.5–1 mm short of radiographic apex."},
  {q:"Vertical root fracture presents as?",a:"Pain on biting — narrow deep probing."},
  {q:"Best diagnostic for vertical fracture?",a:"CBCT."},
  {q:"Overfilling causes?",a:"Periapical irritation."},
  {q:"Crown-down advantage?",a:"Reduced apical debris extrusion."},
  {q:"Best restoration after RCT posterior?",a:"Full coverage crown."},
  {q:"Apexification uses?",a:"MTA (immediate) or calcium hydroxide (gradual)."},
  {q:"Phoenix abscess?",a:"Acute exacerbation of chronic periapical abscess."},
  {q:"Lateral condensation uses?",a:"Finger spreader."},
  {q:"Best canal shape?",a:"Continuous taper — wider coronally, narrower apically."},
  {q:"Rubber dam in RCT?",a:"Isolation + airway protection."},
  {q:"Best irrigant combination?",a:"NaOCl + EDTA."},
  {q:"Sinus tract indicates?",a:"Chronic apical abscess."},
  {q:"Glide path created by?",a:"Small hand files (06–15)."},
  {q:"Coronal leakage leads to?",a:"Recontamination and failure."},
  {q:"Condensing osteitis?",a:"Diffuse radiopaque area — reactive bone."},
  {q:"Most important RCT step?",a:"Cleaning and shaping."},
  {q:"Post weakens tooth by?",a:"Increasing root fracture risk."}
 ]}]
},

{id:"mcq-pros", name:"Prosthodontics MCQ", icon:"🦾",
 desc:"Complete Dentures · RPD · Crowns · Implants",
 chapters:[{title:"Prosthodontics MCQs", color:"#ffaa00", questions:[
  {q:"Most important retention factor?",a:"Border seal."},
  {q:"VDO?",a:"Vertical face height when teeth in contact."},
  {q:"Freeway space?",a:"VDR minus VDO — normally 2–4 mm."},
  {q:"Centric relation?",a:"Jaw relation independent of tooth contact."},
  {q:"Best occlusion for complete denture?",a:"Balanced occlusion."},
  {q:"Kennedy Class I?",a:"Bilateral distal extension."},
  {q:"Kennedy Class II?",a:"Unilateral distal extension."},
  {q:"Kennedy Class III?",a:"Tooth-supported bounded space."},
  {q:"Kennedy Class IV?",a:"Anterior space crossing midline."},
  {q:"Major connector must be?",a:"Rigid."},
  {q:"Rest seat provides?",a:"Support — prevents denture settling."},
  {q:"Direct retainer is?",a:"Clasp assembly."},
  {q:"Indirect retainer prevents?",a:"Rotation of distal extension away from tissue."},
  {q:"Crown preparation taper?",a:"2–6°."},
  {q:"Excessive taper causes?",a:"Decreased retention."},
  {q:"PFM finish line?",a:"Shoulder."},
  {q:"Ferrule effect?",a:"Improves fracture resistance."},
  {q:"Minimum ferrule?",a:"1–2 mm of sound tooth structure."},
  {q:"Biological width violation?",a:"Chronic inflammation and bone loss."},
  {q:"Ovate pontic advantage?",a:"Best esthetics — tissue-supported."},
  {q:"Ante's law?",a:"Abutment root area ≥ pontic root area."},
  {q:"Best impression material for C&B?",a:"Polyvinyl siloxane (addition silicone)."},
  {q:"Osseointegration?",a:"Direct structural bone-implant contact."},
  {q:"Fiber post advantage?",a:"Similar modulus to dentin — reduces fracture risk."},
  {q:"Complete denture failure cause?",a:"Alveolar ridge resorption."},
  {q:"Relining indicated when?",a:"Poor fit but acceptable teeth."},
  {q:"Shade selected in?",a:"Natural daylight with hydrated tooth."},
  {q:"VDO error leads to?",a:"TMJ dysfunction, muscle pain, speech issues."},
  {q:"Denture stomatitis caused by?",a:"Candida albicans."},
  {q:"Freeway space normal?",a:"2–4 mm."}
 ]}]
},

{id:"mcq-surgery", name:"Oral Surgery MCQ", icon:"🔪",
 desc:"Extractions · Anaesthesia · Impactions · Complications",
 chapters:[{title:"Oral Surgery MCQs", color:"#ff6b9d", questions:[
  {q:"Dry socket clinical term?",a:"Alveolar osteitis."},
  {q:"Dry socket timing?",a:"1–3 days after extraction."},
  {q:"Most common impacted tooth?",a:"Mandibular third molar."},
  {q:"Most common angulation?",a:"Mesioangular."},
  {q:"Nerve at risk in lower third molar?",a:"Inferior alveolar nerve."},
  {q:"Ludwig's angina danger?",a:"Airway obstruction."},
  {q:"IAN block failure cause?",a:"Wrong injection site."},
  {q:"Gow-Gates blocks?",a:"Entire V3."},
  {q:"Max epinephrine dose?",a:"0.2 mg."},
  {q:"MRONJ associated with?",a:"Bisphosphonates."},
  {q:"OAC large — treatment?",a:"Surgical flap closure."},
  {q:"Best dry socket dressing?",a:"Alveogyl (eugenol-based)."},
  {q:"Dry socket managed by?",a:"Gentle curettage + sedative dressing."},
  {q:"Ludwig's angina spaces?",a:"Submandibular + sublingual + submental."},
  {q:"Coronectomy indicated when?",a:"Root close to inferior alveolar nerve."},
  {q:"Healing by primary intention?",a:"Sutured wound edges."},
  {q:"Secondary haemorrhage timing?",a:"~7 days — due to infection."},
  {q:"Most important landmark lower molar surgery?",a:"Mandibular canal."},
  {q:"Pericoronitis first line?",a:"Irrigation + antibiotics if systemic."},
  {q:"Lingual cortical plate is?",a:"Thin and fragile."},
  {q:"Post-extraction instructions?",a:"Bite gauze, no spitting, no smoking, no rinsing 24h."},
  {q:"Socket healing (soft tissue)?",a:"7–10 days."},
  {q:"Best analgesic post-extraction?",a:"NSAIDs."},
  {q:"Bone resorption greatest in?",a:"First 6 months after extraction."},
  {q:"Implant bond to bone?",a:"Osseointegration."},
  {q:"INR checked before extraction in?",a:"Anticoagulated patients."},
  {q:"Torus mandibularis is?",a:"Benign bony exostosis — lingual mandible."},
  {q:"Abscess treatment?",a:"Incision and drainage."},
  {q:"Most important pre-op step?",a:"Thorough medical history."},
  {q:"Key to surgical success?",a:"Asepsis and proper technique."}
 ]}]
},

{id:"mcq-ortho", name:"Orthodontics MCQ", icon:"😬",
 desc:"Malocclusion · Appliances · Cephalometrics",
 chapters:[{title:"Orthodontics MCQs", color:"#b06eff", questions:[
  {q:"ANB normal?",a:"1–3 degrees."},
  {q:"Increased ANB?",a:"Class II skeletal."},
  {q:"Decreased ANB?",a:"Class III skeletal."},
  {q:"SNA normal?",a:"81 ± 3 degrees."},
  {q:"Most common orthodontic problem?",a:"Crowding."},
  {q:"First evaluation age?",a:"7 years."},
  {q:"NiTi wires?",a:"Flexible — shape memory — used for alignment."},
  {q:"SS wires?",a:"Rigid — used for finishing."},
  {q:"Optimal force?",a:"Light and continuous."},
  {q:"Excessive force causes?",a:"Root resorption."},
  {q:"Class II division 1?",a:"Proclined upper incisors + increased overjet."},
  {q:"Class II division 2?",a:"Retroclined upper incisors + deep overbite."},
  {q:"Rapid palatal expansion opens?",a:"Midpalatal suture."},
  {q:"Herbst corrects?",a:"Class II malocclusion."},
  {q:"TADs provide?",a:"Absolute skeletal anchorage."},
  {q:"Thumb sucking causes?",a:"Anterior open bite."},
  {q:"Relapse highest in?",a:"Rotated teeth."},
  {q:"Leeway space?",a:"Difference between primary molars and premolar width."},
  {q:"Frankfort plane?",a:"Porion to orbitale."},
  {q:"Retention phase prevents?",a:"Relapse."},
  {q:"Hawley retainer?",a:"Removable — adjustable."},
  {q:"Essix retainer?",a:"Clear vacuum-formed."},
  {q:"Fixed retainer?",a:"Bonded lingual wire — most stable."},
  {q:"IOTN grade 5?",a:"Very great treatment need."},
  {q:"Crowding cause?",a:"Tooth size–arch length discrepancy."},
  {q:"Overjet definition?",a:"Horizontal overlap of incisors."},
  {q:"Open bite definition?",a:"No vertical overlap."},
  {q:"Crossbite definition?",a:"Reverse buccolingual relationship."},
  {q:"Deep bite definition?",a:"Increased overbite."},
  {q:"Key to success?",a:"Diagnosis + planning + patient compliance."}
 ]}]
},

{id:"mcq-perio", name:"Periodontics MCQ", icon:"🩸",
 desc:"Diagnosis · Scaling · Surgery · Maintenance",
 chapters:[{title:"Periodontics MCQs", color:"#58a6ff", questions:[
  {q:"Gingivitis vs periodontitis?",a:"Gingivitis = no attachment loss; periodontitis = attachment + bone loss."},
  {q:"Most important risk factor?",a:"Smoking — risk 2–7 fold."},
  {q:"Healthy sulcus?",a:"1–3 mm."},
  {q:"BOP indicates?",a:"Active gingival inflammation."},
  {q:"Main pathogen?",a:"Porphyromonas gingivalis."},
  {q:"Red complex bacteria?",a:"P. gingivalis + T. forsythia + T. denticola."},
  {q:"Calculus is?",a:"Mineralized dental plaque."},
  {q:"Furcation class III?",a:"Through-and-through."},
  {q:"NUG feature?",a:"Punched-out papillae + pseudomembrane + pain."},
  {q:"Drug enlargement?",a:"Phenytoin, cyclosporine, CCBs."},
  {q:"First step in treatment?",a:"Oral hygiene instruction."},
  {q:"Surgery when?",a:"Deep persistent pockets after SRP."},
  {q:"GTR prevents?",a:"Epithelial migration into defect."},
  {q:"Junctional epithelium attaches by?",a:"Hemidesmosomes."},
  {q:"Sharpey's fibers?",a:"PDL collagen embedded in cementum and bone."},
  {q:"BPE code 4?",a:"Probing depth ≥5.5 mm."},
  {q:"Localised aggressive perio?",a:"First molars + incisors in adolescents. Aa bacterium."},
  {q:"Mucogingival surgery for?",a:"Increase keratinised gingiva + root coverage."},
  {q:"Periodontal staging?",a:"Stage I–IV severity + Grade A–C risk."},
  {q:"Splinting used to?",a:"Stabilise mobile teeth."},
  {q:"Recall interval?",a:"3–6 months based on risk."},
  {q:"Chlorhexidine side effect?",a:"Staining."},
  {q:"Periodontal disease is?",a:"Multifactorial inflammatory disease."},
  {q:"Connective tissue graft for?",a:"Root coverage."},
  {q:"Modified Bass technique for?",a:"Subgingival plaque removal."},
  {q:"Horizontal bone loss?",a:"Uniform reduction of alveolar crest."},
  {q:"Vertical bone loss?",a:"Angular defect beside tooth."},
  {q:"Bone resorption via?",a:"Osteoclasts activated by host cytokines."},
  {q:"Maintenance prevents?",a:"Recurrence of disease."},
  {q:"Key to success?",a:"Plaque control + compliance with maintenance."}
 ]}]
}
```

]} // end dentistry-all-specs children
}

]}, // end dentistry-folder children

// ── مجلد الطب العام ──────────────────────────────────────
{id:“medicine-folder”, name:“Medicine”, icon:“🩺”,
desc:“General Medicine · Dermatology · Surgery · Physiology · Family”,
isFolder:true, isMedical:true, children:[

{id:“medicine-all-specs”, name:“All Specialties”, icon:“📚”,
desc:“General Medicine · Dermatology · Physiology · Family · Surgery”,
isFolder:true, isMedical:true, children:[

```
{id:"med-general", name:"General Medicine", icon:"🩺",
 desc:"Diagnosis · Pharmacology · Pathology",
 isMedical:true,
 chapters:[{title:"General Medicine MCQs", color:"#ff9500", questions:[
  {q:"Normal fasting glucose?",a:"70–100 mg/dL."},
  {q:"HbA1c diabetes threshold?",a:"≥6.5%."},
  {q:"First MI biomarker?",a:"Troponin — rises within 3–4 hours."},
  {q:"ACE inhibitor side effect?",a:"Dry cough — bradykinin accumulation."},
  {q:"Anaphylaxis first line?",a:"Adrenaline 0.5mg IM lateral thigh."},
  {q:"Warfarin mechanism?",a:"Inhibits vitamin K epoxide reductase."},
  {q:"Type I DM pathology?",a:"Autoimmune destruction of beta cells."},
  {q:"Type II DM pathology?",a:"Insulin resistance."},
  {q:"First line T2DM?",a:"Metformin."},
  {q:"Vitamin C deficiency?",a:"Scurvy."},
  {q:"Vitamin D deficiency?",a:"Rickets (children) / Osteomalacia (adults)."},
  {q:"DVT triad (Virchow)?",a:"Stasis + hypercoagulability + endothelial injury."},
  {q:"COPD spirometry?",a:"Obstructive — FEV1/FVC <0.7."},
  {q:"Pulmonary embolism gold standard?",a:"CTPA."},
  {q:"SLE antibody?",a:"Anti-dsDNA and anti-Smith."},
  {q:"Normal blood pH?",a:"7.35–7.45."},
  {q:"Statins mechanism?",a:"HMG-CoA reductase inhibitors."},
  {q:"Most common pneumonia organism?",a:"Streptococcus pneumoniae."},
  {q:"MI anterior artery?",a:"Left anterior descending."},
  {q:"Gout cause?",a:"Hyperuricemia + monosodium urate crystals."},
  {q:"Beta-blockers contraindicated in?",a:"Asthma."},
  {q:"Infective endocarditis organism (subacute)?",a:"Strep viridans."},
  {q:"Hyponatremia most common cause?",a:"SIADH."},
  {q:"Parkinson pathology?",a:"Loss of dopaminergic neurons in substantia nigra."},
  {q:"H. pylori associated condition?",a:"Peptic ulcer disease."},
  {q:"Nephrotic syndrome triad?",a:"Proteinuria >3.5g/day + hypoalbuminaemia + oedema."},
  {q:"CKD most common cause?",a:"Diabetic nephropathy."},
  {q:"Meningitis triad?",a:"Fever + neck stiffness + photophobia."},
  {q:"Normal serum sodium?",a:"135–145 mmol/L."},
  {q:"Cushing syndrome cause?",a:"Excess cortisol."}
 ]}]
},

{id:"med-family", name:"Family Medicine", icon:"👨‍⚕️",
 desc:"Screening · Prevention · Primary Care",
 isMedical:true,
 chapters:[{title:"Family Medicine MCQs", color:"#fbbf24", questions:[
  {q:"Colon cancer screening age?",a:"45 years."},
  {q:"Cervical cancer screening?",a:"Pap smear."},
  {q:"Breast cancer screening?",a:"Mammogram."},
  {q:"Osteoporosis screening?",a:"DEXA scan."},
  {q:"Annual vaccine?",a:"Influenza."},
  {q:"First line T2DM?",a:"Metformin."},
  {q:"Goal BP adults?",a:"<130/80."},
  {q:"BMI overweight?",a:"25–29.9."},
  {q:"Obesity BMI?",a:">30."},
  {q:"Most common chronic disease?",a:"Hypertension."},
  {q:"Primary prevention means?",a:"Prevent disease onset."},
  {q:"Secondary prevention means?",a:"Early detection."},
  {q:"Tertiary prevention means?",a:"Reduce complications."},
  {q:"Most common community infection?",a:"Upper respiratory tract infection."},
  {q:"UTI most common organism?",a:"E. coli."},
  {q:"First line uncomplicated HTN?",a:"Lifestyle modification."},
  {q:"Most important vital sign?",a:"Blood pressure."},
  {q:"Normal HbA1c?",a:"<5.7%."},
  {q:"Most important family medicine principle?",a:"Continuity of care."},
  {q:"Holistic care model?",a:"Biopsychosocial model."}
 ]}]
},

{id:"med-surgery", name:"Surgery", icon:"🏥",
 desc:"Management · Trauma · Emergency",
 isMedical:true,
 chapters:[{title:"Surgery MCQs", color:"#f87171", questions:[
  {q:"Appendicitis management?",a:"Appendectomy."},
  {q:"Tension pneumothorax?",a:"Needle decompression immediately."},
  {q:"Burn — first priority?",a:"Airway management."},
  {q:"Testicular torsion?",a:"Immediate surgery."},
  {q:"Compartment syndrome?",a:"Fasciotomy."},
  {q:"Necrotizing fasciitis?",a:"Urgent surgical debridement + antibiotics."},
  {q:"DVT management?",a:"Anticoagulation."},
  {q:"Post-op day 1 fever?",a:"Atelectasis."},
  {q:"Ruptured AAA?",a:"Emergency surgery."},
  {q:"Acute cholecystitis definitive?",a:"Cholecystectomy."},
  {q:"Perforated peptic ulcer?",a:"Emergency surgery."},
  {q:"GI bleeding first step?",a:"IV fluids + resuscitation."},
  {q:"Abscess treatment?",a:"Incision and drainage."},
  {q:"Acute limb ischemia?",a:"Heparin + surgery."},
  {q:"Wound infection organism?",a:"Staphylococcus aureus."},
  {q:"Golden rule in trauma?",a:"Treat life-threatening first."},
  {q:"Most important pre-surgery step?",a:"Informed consent."},
  {q:"Most common post-op complication?",a:"Infection."},
  {q:"Hemorrhagic shock?",a:"Blood transfusion."},
  {q:"Esophageal varices bleeding?",a:"Endoscopic banding."}
 ]}]
},

{id:"med-derm", name:"Dermatology", icon:"🩹",
 desc:"Skin Conditions · Diagnosis · Treatment",
 isMedical:true,
 chapters:[{title:"Dermatology MCQs", color:"#fb923c", questions:[
  {q:"ABCDE — A?",a:"Asymmetry."},
  {q:"ABCDE — B?",a:"Border irregularity."},
  {q:"ABCDE — C?",a:"Color variation."},
  {q:"ABCDE — D?",a:"Diameter >6mm."},
  {q:"ABCDE — E?",a:"Evolution (change over time)."},
  {q:"Most common skin cancer?",a:"Basal cell carcinoma."},
  {q:"Most dangerous skin cancer?",a:"Melanoma."},
  {q:"Pearly nodule with rolled edge?",a:"Basal cell carcinoma."},
  {q:"Honey-colored crust in child?",a:"Impetigo."},
  {q:"Eczema first line?",a:"Emollients + topical corticosteroids."},
  {q:"Scabies caused by?",a:"Sarcoptes scabiei."},
  {q:"Scabies treatment?",a:"Permethrin 5% cream."},
  {q:"Shingles caused by?",a:"Reactivation of VZV."},
  {q:"Shingles treatment?",a:"Acyclovir within 72 hours."},
  {q:"Psoriasis features?",a:"Silver-scaled plaques on extensor surfaces."},
  {q:"Bullous pemphigoid?",a:"Tense blisters in elderly — anti-BP180."},
  {q:"Pemphigus vulgaris?",a:"Flaccid blisters + Nikolsky sign."},
  {q:"Acne organism?",a:"Cutibacterium acnes."},
  {q:"Tinea capitis treatment?",a:"Oral griseofulvin or terbinafine."},
  {q:"Stevens-Johnson management?",a:"Stop causative drug + ICU/burns unit."}
 ]}]
},

{id:"med-physio", name:"Physiology", icon:"🫀",
 desc:"Cardiovascular · Respiratory · Renal · Endocrine",
 isMedical:true,
 chapters:[{title:"Physiology MCQs", color:"#a78bfa", questions:[
  {q:"Normal cardiac output?",a:"~5 L/min."},
  {q:"Frank-Starling law?",a:"Greater preload → greater stroke volume."},
  {q:"O2-Hb right shift?",a:"Decreased O2 affinity — more O2 released to tissues."},
  {q:"Primary ventilation stimulus?",a:"Rising PaCO2."},
  {q:"Surfactant produced by?",a:"Type II pneumocytes."},
  {q:"Normal GFR?",a:"~125 mL/min."},
  {q:"ADH mechanism?",a:"Inserts aquaporin-2 in collecting duct."},
  {q:"Aldosterone effect?",a:"Na reabsorption + K excretion in collecting duct."},
  {q:"Muscle contraction — Ca binds?",a:"Troponin C → exposes actin."},
  {q:"Insulin produced by?",a:"Beta cells of islets of Langerhans."},
  {q:"PTH actions?",a:"Bone resorption + renal Ca reabsorption + vitamin D activation."},
  {q:"Baroreceptors in?",a:"Carotid sinus and aortic arch."},
  {q:"Normal blood pH?",a:"7.35–7.45."},
  {q:"CO2 main transport?",a:"Bicarbonate (~70%)."},
  {q:"P wave represents?",a:"Atrial depolarization."},
  {q:"QRS represents?",a:"Ventricular depolarization."},
  {q:"T wave represents?",a:"Ventricular repolarization."},
  {q:"Renin released when?",a:"Low renal perfusion / low Na / sympathetic activation."},
  {q:"EPO produced by?",a:"Kidneys — response to hypoxia."},
  {q:"Normal serum Na?",a:"135–145 mmol/L."}
 ]}]
}
```

]} // end medicine-all-specs children
}

]} // end medicine-folder children

]} // end study-smart children

]; // END EXAM_SUBJECTS
