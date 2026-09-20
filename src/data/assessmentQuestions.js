/**
 * assessmentQuestions.js
 * Domain-specific question banks, branch definitions, competency axes,
 * seeded randomization, and scoring calculation helpers for the diagnostic quiz engine.
 */

export const ASSESSMENT_BRANCHES = {
  cs_healthcare_informatics: {
    id: 'cs_healthcare_informatics',
    title: 'Computer Science & Healthcare Informatics',
    shortTitle: 'CS & Health Informatics',
    tagline: 'EHR systems, FHIR APIs, healthcare AI models, and secure clinical databases.',
    badgeColor: 'emerald',
    icon: 'Cpu',
    timeLimit: 600, // 10 minutes in seconds
    competencyAxes: [
      { id: 'ds', name: 'Data Structures', fullName: 'Data Structures & Algorithms', desc: 'Triage prioritization, graph networks, and heap algorithms.' },
      { id: 'cloud', name: 'Cloud & DevOps', fullName: 'Healthcare Cloud & Microservices', desc: 'HIPAA-compliant AWS/GCP pipelines, containers, and orchestration.' },
      { id: 'ai', name: 'Python & Health AI', fullName: 'Python, PyTorch & Clinical ML', desc: 'Predictive diagnostics, biomedical NLP, and neural classification.' },
      { id: 'apis', name: 'Healthcare APIs', fullName: 'HL7, FHIR & ABHA Ecosystem', desc: 'Interoperability schemas, consent managers, and NDHM gateways.' },
      { id: 'db', name: 'Databases & SQL', fullName: 'Clinical Databases & Data Warehousing', desc: 'Relational EHR schemas, vector stores, and ACID medical transactions.' },
      { id: 'sec', name: 'Cybersecurity', fullName: 'Cybersecurity & HIPAA Compliance', desc: 'Zero-trust architecture, TLS 1.3, PHI encryption, and audit logs.' }
    ]
  },
  biomedical_clinical: {
    id: 'biomedical_clinical',
    title: 'Biomedical & Clinical Sciences',
    shortTitle: 'Biomedical & Clinical',
    tagline: 'Diagnostic pathology, pulse waveforms, pharmacognosy, and clinical trial ethics.',
    badgeColor: 'teal',
    icon: 'Stethoscope',
    timeLimit: 600,
    competencyAxes: [
      { id: 'pulse', name: 'Pulse & Nadi', fullName: 'Nadi Pariksha & Pulse Hemodynamics', desc: 'Arterial waveform analysis, radial pressure curves, and Tridosha mapping.' },
      { id: 'path', name: 'Clinical Pathology', fullName: 'Clinical Pathology & Biomarkers', desc: 'Hematology, ELISA assays, liver enzyme panels, and metabolic markers.' },
      { id: 'phyto', name: 'Pharmacognosy', fullName: 'Phytochemistry & Pharmacognosy', desc: 'Botanical fingerprinting, active phyto-alkaloids, and herbal pharmacopeia.' },
      { id: 'gcp', name: 'GCP Trials', fullName: 'Good Clinical Practice Protocols', desc: 'Phase I-IV human trials, IRB ethics, informed consent, and adverse reports.' },
      { id: 'ipd', name: 'Inpatient Care', fullName: 'IPD Workups & Classical Protocols', desc: 'Panchakarma evacuation therapies, vitals surveillance, and recovery chart.' },
      { id: 'tox', name: 'Imaging & Toxicology', fullName: 'Diagnostic Imaging & Herbal Safety', desc: 'Ultrasonography, radiopaque markers, and heavy-metal ICP-MS screening.' }
    ]
  },
  biomechanical_medtech: {
    id: 'biomechanical_medtech',
    title: 'Bio-Mechanical & MedTech Engineering',
    shortTitle: 'Bio-Mechanical & MedTech',
    tagline: 'Prosthetics, medical robotics, biosignal acquisition, and embedded devices.',
    badgeColor: 'blue',
    icon: 'Cog',
    timeLimit: 600,
    competencyAxes: [
      { id: 'mech', name: 'Biomechanics', fullName: 'Biomechanics & Kinematic Gait', desc: 'Joint stress modeling, finite element analysis, and ergonomic design.' },
      { id: 'sensors', name: 'MedTech Sensors', fullName: 'Biomedical Sensors & IoT Telemetry', desc: 'Optical PPG sensors, piezoelectric transducers, and wearable telemetry.' },
      { id: 'embedded', name: 'Microcontrollers', fullName: 'Embedded Systems & ARM Firmware', desc: 'Real-time OS, STM32 controllers, SPI/I2C medical sensor bus.' },
      { id: 'cad', name: 'Bio-CAD & 3D', fullName: 'Bio-CAD & Additive Manufacturing', desc: 'Parametric prosthesis modeling, stereolithography, and biocompatible polymers.' },
      { id: 'iso', name: 'ISO 13485 QA', fullName: 'Medical Device ISO 13485 Standards', desc: 'CE/CDSCO device classification, risk mitigation, and design master files.' },
      { id: 'signal', name: 'Biosignals', fullName: 'Biosignal DSP (EMG, ECG & EEG)', desc: 'Bandpass filtering, wavelet transforms, and baseline wander correction.' }
    ]
  },
  pharmaceutical_ops: {
    id: 'pharmaceutical_ops',
    title: 'Pharmaceutical Operations & Management',
    shortTitle: 'Pharma Ops & QC',
    tagline: 'Schedule T cleanrooms, HPLC quality testing, cold-chain supply, and CDSCO filings.',
    badgeColor: 'indigo',
    icon: 'Pill',
    timeLimit: 600,
    competencyAxes: [
      { id: 'gmp', name: 'Schedule T GMP', fullName: 'Schedule T Cleanroom Manufacturing', desc: 'HEPA air handling, cross-contamination prevention, and batch records.' },
      { id: 'rasa', name: 'Formulation QC', fullName: 'Rasa Shastra & Formulation Quality', desc: 'Herbomineral Bhasma particle analysis, stability chambers, and assaying.' },
      { id: 'hplc', name: 'HPLC Standardization', fullName: 'HPTLC & Chromatography Assays', desc: 'Retention factors, active marker quantitation, and photodiode arrays.' },
      { id: 'pv', name: 'Pharmacovigilance', fullName: 'PV & WHO Causality Assessment', desc: 'Adverse drug reaction triage, Suspected ADR forms, and safety alerts.' },
      { id: 'supply', name: 'Cold Chain Supply', fullName: 'Supply Chain & Cold Logistics', desc: '2-8°C biological storage, RFID traceability, and GDP distribution.' },
      { id: 'qa', name: 'Regulatory Filings', fullName: 'Ayush CDSCO Filings & Audits', desc: 'Form 25/26 licensing, Master Formula records, and statutory inspections.' }
    ]
  }
};

export const BRANCH_QUESTION_BANKS = {
  cs_healthcare_informatics: [
    // Axis 0: Data Structures
    {
      id: 'cs-ds-1',
      axisIndex: 0,
      axisName: 'Data Structures',
      question: 'Which data structure provides O(log n) insertion and extraction optimal for priority-based emergency room triage?',
      options: ['Binary Min/Max Heap', 'Singly Linked List', 'Unsorted Array', 'Hash Map with separate chaining'],
      correct: 0,
      explanation: 'Binary Heaps guarantee logarithmic priority-queue operations, allowing immediate lookup and dequeue of the highest-acuity patients.'
    },
    {
      id: 'cs-ds-2',
      axisIndex: 0,
      axisName: 'Data Structures',
      question: 'When tracing infectious disease contact networks across hospital wards, which data structure is most appropriate?',
      options: ['Directed Acyclic Graph (DAG) with Adjacency List', 'LIFO Stack', 'Static Array', 'Linear Doubly-Linked List'],
      correct: 0,
      explanation: 'Graphs accurately model patient-to-patient and ward-to-ward transmission paths for BFS/DFS epidemiological tracing.'
    },
    // Axis 1: Cloud & DevOps
    {
      id: 'cs-cloud-1',
      axisIndex: 1,
      axisName: 'Cloud & DevOps',
      question: 'Under HIPAA and DISHA guidelines, which encryption standard is mandatory for Protected Health Information (PHI) at rest on cloud volumes?',
      options: ['AES-256 with managed KMS keys', 'Base64 encoding', 'MD5 hashing', 'DES 56-bit encryption'],
      correct: 0,
      explanation: 'AES-256 with hardware security module (KMS/HSM) key rotation is the recognized gold standard for medical data at rest.'
    },
    {
      id: 'cs-cloud-2',
      axisIndex: 1,
      axisName: 'Cloud & DevOps',
      question: 'In Kubernetes-orchestrated hospital telemetry microservices, which ingress pattern ensures zero-downtime rolling upgrades?',
      options: ['RollingUpdate deployment with readiness probes', 'Manual container termination', 'Single replica node recreation', 'Recreate strategy without health checks'],
      correct: 0,
      explanation: 'Kubernetes RollingUpdate paired with HTTP readiness probes prevents incoming telemetry traffic from reaching unready pods.'
    },
    // Axis 2: Python & Health AI
    {
      id: 'cs-ai-1',
      axisIndex: 2,
      axisName: 'Python & Health AI',
      question: 'When fine-tuning a clinical BERT model on radiology EHR discharge summaries, which metric best accounts for severe class imbalance in rare diagnoses?',
      options: ['Macro-averaged F1-Score & PR-AUC', 'Raw Accuracy', 'Mean Squared Error', 'Adjusted R-squared'],
      correct: 0,
      explanation: 'Accuracy is misleading for rare conditions (e.g. 99% negative cases); Precision-Recall AUC and Macro F1 penalize false negatives effectively.'
    },
    {
      id: 'cs-ai-2',
      axisIndex: 2,
      axisName: 'Python & Health AI',
      question: 'In PyTorch, which layer prevents internal covariate shift and stabilizes training when training deep convolutional networks on chest X-rays?',
      options: ['BatchNorm2d / LayerNorm', 'Dropout(p=0.9)', 'Linear without bias', 'Flatten'],
      correct: 0,
      explanation: 'Batch Normalization standardizes mini-batch activations, expediting gradient descent and regularizing deep clinical image networks.'
    },
    // Axis 3: Healthcare APIs
    {
      id: 'cs-apis-1',
      axisIndex: 3,
      axisName: 'Healthcare APIs',
      question: 'In HL7 FHIR Release 4, which resource represents an encounter diagnosis, problem, or health concern?',
      options: ['Condition', 'Observation', 'Procedure', 'DiagnosticReport'],
      correct: 0,
      explanation: 'The FHIR "Condition" resource records clinical diagnoses, symptoms, and health issues asserted by practitioners.'
    },
    {
      id: 'cs-apis-2',
      axisIndex: 3,
      axisName: 'Healthcare APIs',
      question: 'In India’s Ayushman Bharat Digital Mission (ABDM), what protocol secures communication between Health Information Users (HIU) and Providers (HIP)?',
      options: ['OAuth 2.0 with ECDH public key encryption & ABHA consent artifact', 'Basic HTTP Authentication', 'Static API Keys in URL query string', 'FTP file drop with cleartext XML'],
      correct: 0,
      explanation: 'ABDM mandates signed Consent Artifacts and Elliptic Curve Diffie-Hellman (ECDH) payload encryption for secure PHI exchange.'
    },
    // Axis 4: Databases & SQL
    {
      id: 'cs-db-1',
      axisIndex: 4,
      axisName: 'Databases & SQL',
      question: 'Which SQL constraint guarantees that every prescribed medication record strictly references a valid active patient ID?',
      options: ['FOREIGN KEY with ON DELETE RESTRICT', 'CHECK (patient_id != 0)', 'UNIQUE (patient_id)', 'DEFAULT NULL'],
      correct: 0,
      explanation: 'Foreign Key relational constraints enforce referential integrity between prescriptions and master patient identity indexes.'
    },
    {
      id: 'cs-db-2',
      axisIndex: 4,
      axisName: 'Databases & SQL',
      question: 'To efficiently search through millions of unstructured clinical doctor notes for semantic terms, which database extension is optimal?',
      options: ['PostgreSQL pgvector / HNSW vector indexing', 'Standard B-Tree index on VARCHAR(MAX)', 'Unindexed TEXT column with LIKE queries', 'CSV table export'],
      correct: 0,
      explanation: 'Vector embeddings paired with HNSW indexes enable fast Approximate Nearest Neighbor (ANN) clinical semantic retrieval.'
    },
    // Axis 5: Cybersecurity
    {
      id: 'cs-sec-1',
      axisIndex: 5,
      axisName: 'Cybersecurity',
      question: 'What is the primary objective of a Zero Trust Architecture (ZTA) within a hospital network?',
      options: ['"Never trust, always verify" with continuous identity & least-privilege token checks', 'Trusting all devices connected to the internal LAN Wi-Fi', 'Eliminating passwords in favor of open network shares', 'Relying exclusively on perimeter firewalls'],
      correct: 0,
      explanation: 'Zero Trust assumes threats exist both inside and outside the perimeter, demanding granular per-request token authorization.'
    },
    {
      id: 'cs-sec-2',
      axisIndex: 5,
      axisName: 'Cybersecurity',
      question: 'Which method is standard for securely masking patient personal identifiers in exported medical research datasets?',
      options: ['k-Anonymity and Differential Privacy with salted cryptographic hashing', 'Simple font resizing in PDF exports', 'Base64 obfuscation of phone numbers', 'Leaving MRN intact with password-protected ZIP'],
      correct: 0,
      explanation: 'k-Anonymity and Differential Privacy mathematically ensure no individual patient can be re-identified by combining auxiliary datasets.'
    }
  ],

  biomedical_clinical: [
    // Axis 0: Pulse & Nadi Diagnostics
    {
      id: 'bio-pulse-1',
      axisIndex: 0,
      axisName: 'Pulse & Nadi Diagnostics',
      question: 'In classical and digital Nadi Pariksha, which arterial site is universally utilized for diagnostic radial wave palpation?',
      options: ['Radial artery adjacent to the styloid process of the radius', 'Femoral artery in the groin', 'Brachial artery at the antecubital fossa', 'Dorsalis pedis on the foot dorsum'],
      correct: 0,
      explanation: 'The radial artery at the styloid process is the canonical anatomic landmark for proximal, middle, and distal pulse characterization.'
    },
    {
      id: 'bio-pulse-2',
      axisIndex: 0,
      axisName: 'Pulse & Nadi Diagnostics',
      question: 'In piezoelectric digital pulse wave analysis, an accentuated percussion wave with sharp systolic peak signifies which physiologic condition?',
      options: ['Elevated arterial peripheral resistance / Pitta hyper-dynamic circulation', 'Severe hypovolemia and bradycardia', 'Venous valvular insufficiency', 'Normal slow resting baseline'],
      correct: 0,
      explanation: 'Rapid pulse velocity and sharp systolic rise reflect hyperdynamic arterial compliance and elevated vascular tone.'
    },
    // Axis 1: Clinical Pathology
    {
      id: 'bio-path-1',
      axisIndex: 1,
      axisName: 'Clinical Pathology',
      question: 'Which serum biomarker is the primary clinical diagnostic indicator of acute myocardial cellular necrosis?',
      options: ['Cardiac Troponin I (cTnI) / High-Sensitivity Troponin', 'Serum Amylase', 'Alkaline Phosphatase (ALP)', 'Uric Acid'],
      correct: 0,
      explanation: 'Cardiac Troponins have nearly 100% myocardial specificity and rise within 3-4 hours of ischemic myocardial injury.'
    },
    {
      id: 'bio-path-2',
      axisIndex: 1,
      axisName: 'Clinical Pathology',
      question: 'In an automated 5-part hematology analyzer, what optical principle is used to distinguish eosinophils from neutrophils?',
      options: ['Side scatter (granularity) and forward scatter (cell size) flow cytometry', 'Centrifugal sedimentation rate only', 'Electrical resistance pulse height alone', 'Manual dye immersion'],
      correct: 0,
      explanation: 'Side scatter (90-degree laser diffraction) measures cytoplasmic granularity, allowing precise differentiation of dense eosinophilic granules.'
    },
    // Axis 2: Pharmacognosy
    {
      id: 'bio-phyto-1',
      axisIndex: 2,
      axisName: 'Pharmacognosy',
      question: 'Withanolide A and Withaferin A are the principal bioactive steroidal lactones isolated from which botanical species?',
      options: ['Withania somnifera (Ashwagandha)', 'Tinospora cordifolia (Giloy)', 'Ocimum sanctum (Tulsi)', 'Curcuma longa (Haridra)'],
      correct: 0,
      explanation: 'Withanolides are signature C-28 steroidal lactones characteristic of Withania somnifera roots used in standard herbal assays.'
    },
    {
      id: 'bio-phyto-2',
      axisIndex: 2,
      axisName: 'Pharmacognosy',
      question: 'In qualitative phytochemical screening, which reagent forms a distinct reddish-brown precipitate with plant alkaloids?',
      options: ["Wagner's Reagent (Iodine in Potassium Iodide)", "Benedict's Quantitative Reagent", 'Biuret Reagent', 'Ferric Chloride 5% Solution'],
      correct: 0,
      explanation: "Wagner's reagent reacts specifically with tertiary and quaternary amine alkaloids to produce flocculent reddish-brown polyiodide complexes."
    },
    // Axis 3: GCP Trials
    {
      id: 'bio-gcp-1',
      axisIndex: 3,
      axisName: 'GCP Trials',
      question: 'Under ICH-GCP E6(R2), within what timeframe must a Serious Adverse Event (SAE) in an active clinical trial be reported to the ethics committee and regulator?',
      options: ['Within 24 hours of investigator knowledge', 'Within 30 calendar days', 'At the end of the fiscal year audit', 'Only upon study completion'],
      correct: 0,
      explanation: 'Regulatory guidelines (including CDSCO and ICH-GCP) mandate initial SAE notification within 24 hours to safeguard subject safety.'
    },
    {
      id: 'bio-gcp-2',
      axisIndex: 3,
      axisName: 'GCP Trials',
      question: 'What is the primary role of the Data Safety Monitoring Board (DSMB) during an ongoing double-blind clinical trial?',
      options: ['Conducting unblinded interim efficacy and safety reviews to protect trial subjects', 'Marketing the investigational pharmaceutical drug', 'Auditing the sponsor’s annual corporate taxes', 'Administering daily patient medications'],
      correct: 0,
      explanation: 'The DSMB is an independent group of experts that assesses interim unblinded safety and efficacy to advise early termination if harm is detected.'
    },
    // Axis 4: Inpatient Care
    {
      id: 'bio-ipd-1',
      axisIndex: 4,
      axisName: 'Inpatient Care',
      question: 'Prior to administering classical Vamana or Virechana evacuation procedures, what preparatory phase is mandatory?',
      options: ['Snehana (internal/external oleation) and Swedana (sudation)', 'Immediate vigorous aerobic exercise', 'Absolute dry fasting for 7 days', 'High-dose oral anticoagulants'],
      correct: 0,
      explanation: 'Purva Karma requires deep cellular Snehana and Swedana to liquefy and mobilize metabolic toxins from Shakha (periphery) to Kostha (gut).'
    },
    {
      id: 'bio-ipd-2',
      axisIndex: 4,
      axisName: 'Inpatient Care',
      question: 'What clinical sign is an absolute red-flag contraindication for administering systemic enema therapy (Basti)?',
      options: ['Acute intestinal perforation or peritonitis', 'Mild constipation', 'Chronic musculoskeletal stiffness', 'Subacute osteoarthritis'],
      correct: 0,
      explanation: 'Intestinal perforation or peritonitis poses catastrophic sepsis risk if any hydrostatic fluid or enema formulation is introduced.'
    },
    // Axis 5: Imaging & Toxicology
    {
      id: 'bio-tox-1',
      axisIndex: 5,
      axisName: 'Imaging & Toxicology',
      question: 'Which analytical spectrometry method is the regulatory standard for quantifying trace heavy metals (Lead, Mercury, Cadmium, Arsenic) in formulations?',
      options: ['Inductively Coupled Plasma Mass Spectrometry (ICP-MS)', 'UV-Visible Spectrophotometry', 'Thin Layer Chromatography with iodine', 'Litmus paper titration'],
      correct: 0,
      explanation: 'ICP-MS provides parts-per-billion (ppb) sensitivity to verify compliance with national and WHO heavy metal threshold limits.'
    },
    {
      id: 'bio-tox-2',
      axisIndex: 5,
      axisName: 'Imaging & Toxicology',
      question: 'On a standard B-mode abdominal diagnostic ultrasound, what acoustic phenomenon appears posterior to a calcified gallbladder gallstone?',
      options: ['Posterior acoustic shadowing', 'Acoustic enhancement', 'Comet tail artifact', 'Mirror image duplicate'],
      correct: 0,
      explanation: 'Dense calcified structures reflect virtually all ultrasound beam energy, casting a distinctive anechoic acoustic shadow behind them.'
    }
  ],

  biomechanical_medtech: [
    // Axis 0: Biomechanics
    {
      id: 'med-mech-1',
      axisIndex: 0,
      axisName: 'Biomechanics',
      question: 'During human gait, at which phase does the highest ground reaction force (GRF) vertical peak typically occur?',
      options: ['Loading response / Initial foot-flat and late stance terminal push-off', 'Mid-swing in mid-air', 'Early swing non-weight-bearing', 'Toe-off non-contact transition'],
      correct: 0,
      explanation: 'Vertical GRF exhibits a characteristic bimodal curve with peaks reaching ~1.2x body weight during loading response and terminal push-off.'
    },
    {
      id: 'med-mech-2',
      axisIndex: 0,
      axisName: 'Biomechanics',
      question: 'In orthopedic implant engineering, what biomechanical issue arises when an implant is substantially stiffer than the surrounding bone?',
      options: ['Stress shielding leading to localized periprosthetic bone resorption', 'Spontaneous implant expansion', 'Excessive bone thickening', 'Immediate bacterial biofilm formation'],
      correct: 0,
      explanation: 'Stress shielding occurs when high-modulus metal takes all the mechanical load, depriving natural bone of physiologic stimulation.'
    },
    // Axis 1: MedTech Sensors
    {
      id: 'med-sens-1',
      axisIndex: 1,
      axisName: 'MedTech Sensors',
      question: 'A pulse oximeter sensor calculates peripheral arterial oxygen saturation (SpO2) by measuring differential light absorption at which wavelengths?',
      options: ['660 nm (Red) and 940 nm (Infrared)', '400 nm (Violet) and 500 nm (Cyan)', '10,600 nm (CO2 Laser) and 800 nm', 'Green 530 nm only'],
      correct: 0,
      explanation: 'Deoxygenated hemoglobin absorbs higher red light (660 nm), while oxygenated hemoglobin absorbs higher infrared light (940 nm).'
    },
    {
      id: 'med-sens-2',
      axisIndex: 1,
      axisName: 'MedTech Sensors',
      question: 'Which sensor technology is standard in wearable continuous glucose monitors (CGM) for interstitial fluid tracking?',
      options: ['Enzymatic electrochemical glucose oxidase amperometric sensors', 'Mechanical micro-spring strain gauges', 'Infrared thermal imaging cameras', 'Optical refraction prisms'],
      correct: 0,
      explanation: 'Enzymatic oxidation of glucose generates an electric current proportional to the glucose concentration in subcutaneous tissue.'
    },
    // Axis 2: Microcontrollers
    {
      id: 'med-emb-1',
      axisIndex: 2,
      axisName: 'Microcontrollers',
      question: 'Why are Real-Time Operating Systems (RTOS) like FreeRTOS or Zephyr required in life-critical medical infusion pumps?',
      options: ['Guaranteed deterministic task preemption and hard real-time latency bounds', 'Support for 3D graphic video games', 'Automatic web browsing capability', 'Removal of all hardware interrupts'],
      correct: 0,
      explanation: 'RTOS guarantees bounded interrupt latency and deterministic scheduling so critical motor delivery never misses a millisecond deadline.'
    },
    {
      id: 'med-emb-2',
      axisIndex: 2,
      axisName: 'Microcontrollers',
      question: 'Which digital hardware bus protocol is preferred for connecting multiple SPI medical bio-potential sensors to a central MCU?',
      options: ['4-wire synchronous SPI (MOSI, MISO, SCK, CS) with dedicated Chip Selects', 'Single-wire asynchronous RS-232 at 9600 baud', 'Parallel 8-bit IDE cable', 'Analog headphone jack'],
      correct: 0,
      explanation: 'SPI supports high-speed full-duplex transfers in megabits per second, ideal for multi-channel ADC bio-signal data.'
    },
    // Axis 3: Bio-CAD & 3D Prototyping
    {
      id: 'med-cad-1',
      axisIndex: 3,
      axisName: 'Bio-CAD & 3D',
      question: 'Which medical image file format is standardly segmented in Bio-CAD software to generate patient-specific 3D cranial or pelvic meshes?',
      options: ['DICOM (Digital Imaging and Communications in Medicine)', 'JPEG 2000 lossy', 'Adobe Illustrator AI', 'MPEG-4 video'],
      correct: 0,
      explanation: 'DICOM contains volumetric CT/MRI voxels calibrated in Hounsfield Units, which bio-engineers threshold to extract bone surfaces into STL files.'
    },
    {
      id: 'med-cad-2',
      axisIndex: 3,
      axisName: 'Bio-CAD & 3D',
      question: 'Which additive manufacturing polymer is ISO 10993 certified for long-term biocompatibility in spinal cages and cranial implants?',
      options: ['PEEK (Polyetheretherketone)', 'Standard low-density Polyethylene (LDPE)', 'Uncured cyanoacrylate', 'Recycled PVC packaging plastic'],
      correct: 0,
      explanation: 'Medical-grade PEEK features an elastic modulus close to cortical bone, outstanding fatigue resistance, and non-toxic biocompatibility.'
    },
    // Axis 4: ISO 13485 QA
    {
      id: 'med-iso-1',
      axisIndex: 4,
      axisName: 'ISO 13485 QA',
      question: 'Under ISO 14971 (Risk Management for Medical Devices), what must be conducted before any medical device is released for clinical use?',
      options: ['Failure Mode and Effects Analysis (FMEA) and ALARP risk mitigation', 'Public social media poll', 'Immediate unregulated market distribution', 'Patenting the trademark logo only'],
      correct: 0,
      explanation: 'ISO 14971 mandates comprehensive risk assessment (FMEA/FTA), demonstrating that residual risks are as low as reasonably practicable (ALARP).'
    },
    {
      id: 'med-iso-2',
      axisIndex: 4,
      axisName: 'ISO 13485 QA',
      question: 'What is the purpose of the Device Master Record (DMR) in medical device manufacturing compliance?',
      options: ['The complete compilation of specifications, BOMs, schematics, and procedures to manufacture a device', 'A list of corporate investor stock percentages', 'The patient hospital invoice ledger', 'The annual employee vacation roster'],
      correct: 0,
      explanation: 'The DMR contains all verified technical blueprints, formulation recipes, software binaries, and packaging protocols necessary to replicate the device.'
    },
    // Axis 5: Biosignals
    {
      id: 'med-sig-1',
      axisIndex: 5,
      axisName: 'Biosignals',
      question: 'In ECG signal processing, which digital filter configuration is essential to remove 50Hz/60Hz AC powerline interference?',
      options: ['IIR or FIR Notch (band-stop) filter at 50/60 Hz', 'High-pass filter with 200 Hz cutoff', 'Low-pass filter at 1 kHz', 'Differentiator without smoothing'],
      correct: 0,
      explanation: 'A narrow notch filter attenuates the discrete 50 Hz (or 60 Hz) AC electromagnetic hum without distorting adjacent QRS cardiac waves.'
    },
    {
      id: 'med-sig-2',
      axisIndex: 5,
      axisName: 'Biosignals',
      question: 'What mathematical algorithm is the foundation for detecting R-peak complexes in raw Lead II ECG recordings?',
      options: ['Pan-Tompkins Algorithm (Bandpass, Derivative, Squaring, Moving Average)', 'Dijkstra Shortest Path', 'Bubble Sort', 'Linear Regression gradient descent'],
      correct: 0,
      explanation: 'The Pan-Tompkins algorithm uses filtered derivative squaring and integration thresholds to robustly identify QRS complexes amid noise.'
    }
  ],

  pharmaceutical_ops: [
    // Axis 0: Schedule T GMP
    {
      id: 'pharma-gmp-1',
      axisIndex: 0,
      axisName: 'Schedule T GMP',
      question: 'Under Schedule T of the Drugs and Cosmetics Act (India), what is the mandatory requirement for the air handling system in sterile ophthalmic/ayurvedic processing areas?',
      options: ['HEPA filtration providing Class 100 / Grade A laminar airflow with positive room pressure', 'Open ceiling windows with exhaust fans', 'Standard household air conditioner without filters', 'Recirculated untreated ambient air'],
      correct: 0,
      explanation: 'Schedule T specifies terminal HEPA filtration (99.97% at 0.3 micron) and differential positive pressure to avert particulate ingress.'
    },
    {
      id: 'pharma-gmp-2',
      axisIndex: 0,
      axisName: 'Schedule T GMP',
      question: 'What is the regulatory purpose of a signed Batch Manufacturing Record (BMR)?',
      options: ['To provide an immutable, step-by-step audit trail of raw materials, yields, operator signatures, and in-process checks', 'To advertise retail pricing to consumers', 'To serve as a tax deduction voucher', 'To list employee attendance times'],
      correct: 0,
      explanation: 'BMRs provide end-to-end traceability proving that the specific batch was produced according to the approved Master Formula.'
    },
    // Axis 1: Formulation QC
    {
      id: 'pharma-rasa-1',
      axisIndex: 1,
      axisName: 'Formulation QC',
      question: 'In classical Rasa Shastra QC, the "Varitaratwa" test for prepared incinerated Bhasma evaluates which physical property?',
      options: ['Micro-fineness and low density causing the powder to float uniformly on water surface', 'Sweetness of taste on the tongue', 'Magnetic attraction to iron bars', 'Solubility in strong hydrochloric acid'],
      correct: 0,
      explanation: 'Varitaratwa verifies sub-micron particle reduction; properly prepared Bhasma particles float on water due to surface tension and fineness.'
    },
    {
      id: 'pharma-rasa-2',
      axisIndex: 1,
      axisName: 'Formulation QC',
      question: 'In accelerated stability testing of finished herbal tablets (ICH Q1A), what are the standard climatic chamber conditions?',
      options: ['40°C ± 2°C at 75% RH ± 5% for 6 months', '20°C at 20% RH for 2 weeks', '100°C boiling immersion for 1 hour', 'Minus 40°C freezer storage for 1 day'],
      correct: 0,
      explanation: 'ICH Q1A mandates 40°C/75% RH accelerated testing to simulate thermal and moisture stress over product shelf-life.'
    },
    // Axis 2: HPLC Standardization
    {
      id: 'pharma-hplc-1',
      axisIndex: 2,
      axisName: 'HPLC Standardization',
      question: 'In reverse-phase High Performance Liquid Chromatography (RP-HPLC), what are the stationary and mobile phase characteristics?',
      options: ['Non-polar stationary phase (e.g. C18 silica) and polar aqueous-organic mobile phase', 'Polar silica stationary phase with hexane solvent', 'Gaseous stationary phase with helium gas', 'Paper filter with saltwater'],
      correct: 0,
      explanation: 'RP-HPLC employs hydrophobic hydrocarbon chains (C18/C8) as stationary phase with polar mobile phases (Water, Acetonitrile, Methanol).'
    },
    {
      id: 'pharma-hplc-2',
      axisIndex: 2,
      axisName: 'HPLC Standardization',
      question: 'In High-Performance Thin Layer Chromatography (HPTLC), what parameter characterizes the relative migration distance of an active botanical phytochemical spot?',
      options: ['Retention Factor (Rf value = solute distance / solvent front distance)', 'Peak Area Ratio in millivolts', 'Column Void Volume (V0)', 'Theoretical Plate Height (HETP)'],
      correct: 0,
      explanation: 'The Rf value is the migration ratio specific to the analyte under standardized temperature, stationary silica plate, and chamber saturation.'
    },
    // Axis 3: Pharmacovigilance
    {
      id: 'pharma-pv-1',
      axisIndex: 3,
      axisName: 'Pharmacovigilance',
      question: 'Under the WHO-UMC causality assessment scale, an adverse event is classified as "Certain" when:',
      options: ['Plausible time sequence, known pharmacological mechanism, positive de-challenge, and positive re-challenge without confounders', 'The patient heard about it on social media', 'The event happened 5 years after taking one dose', 'The drug was taken with 10 other unrecorded medications'],
      correct: 0,
      explanation: '"Certain" causality demands consistent temporal onset, improvement on cessation (de-challenge), and recurrence upon re-exposure (re-challenge).'
    },
    {
      id: 'pharma-pv-2',
      axisIndex: 3,
      axisName: 'Pharmacovigilance',
      question: 'What is a "Signal" in pharmacovigilance and drug safety surveillance?',
      options: ['Reported information on a possible causal relationship between an adverse event and a drug, previously unknown or incompletely documented', 'A flashing warning light on the cleanroom conveyor belt', 'A drop in corporate quarterly sales', 'A positive test for tablet hardness'],
      correct: 0,
      explanation: 'Signals are statistical or clinical alerts indicating novel adverse associations that warrant deeper epidemiological investigation.'
    },
    // Axis 4: Cold Chain Supply
    {
      id: 'pharma-supply-1',
      axisIndex: 4,
      axisName: 'Cold Chain Supply',
      question: 'What temperature range defines standard pharmaceutical refrigerated cold-chain storage for vaccines, enzymes, and temperature-sensitive biologicals?',
      options: ['+2°C to +8°C', '-50°C to -80°C', '+15°C to +25°C', '+35°C to +40°C'],
      correct: 0,
      explanation: 'Good Distribution Practice (GDP) defines refrigerated pharmaceutical cold chain strictly as +2°C to +8°C.'
    },
    {
      id: 'pharma-supply-2',
      axisIndex: 4,
      axisName: 'Cold Chain Supply',
      question: 'Which device is mandatory inside shipping shippers to audit whether temperature excursions occurred during inter-facility transit?',
      options: ['Calibrated electronic temperature data logger with cryptographic tamper-evident PDF generation', 'Mercury glass thermometer placed in the truck cabin', 'Adhesive paper tape', 'Visual inspection of melted ice packs after 48 hours'],
      correct: 0,
      explanation: 'NIST-traceable continuous USB/BLE data loggers record timestamps and temperature curves to validate Cold Chain integrity on arrival.'
    },
    // Axis 5: Regulatory Filings
    {
      id: 'pharma-qa-1',
      axisIndex: 4,
      axisName: 'Regulatory Filings',
      question: 'In pharmaceutical manufacturing, what is the core purpose of a Corrective and Preventive Action (CAPA) procedure?',
      options: ['To investigate root causes of deviations/OOS and implement systemic fixes to prevent recurrence', 'To assign disciplinary blame to individual factory technicians', 'To expedite the shipment of borderline failed batches', 'To bypass annual internal quality audits'],
      correct: 0,
      explanation: 'CAPA is the cornerstone of Quality Management Systems (QMS), identifying root causes and putting permanent preventive controls in place.'
    },
    {
      id: 'pharma-qa-2',
      axisIndex: 5,
      axisName: 'Regulatory Filings',
      question: 'When an Out of Specification (OOS) lab result occurs in finished batch release testing, what is the mandatory immediate action?',
      options: ['Initiate a formal Phase I laboratory investigation before any re-testing or batch rejection', 'Immediately re-test until a passing number is obtained and discard the failed result', 'Release the batch if the average is close enough', 'Dilute the sample twice and re-run quietly'],
      correct: 0,
      explanation: 'FDA and CDSCO OOS guidance strictly forbids "testing into compliance"; an immediate structured lab investigation of instrument/method error is mandatory.'
    }
  ]
};

/**
 * Seeded pseudo-random number generator (Mulberry32)
 * Ensures reproducible shuffling for audits/debugging while providing
 * true randomization per attempt seed.
 */
function createPrng(seed) {
  let s = Math.abs(seed | 0) || 123456789;
  return function () {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Shuffles array in-place using Fisher-Yates with provided PRNG
 */
function shuffleWithRng(array, rng) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generates a randomized question set for a given branch and seed.
 * Shuffles questions AND shuffles option choices while correctly remapping the `correct` answer index.
 */
export function getShuffledQuestionSet(branchId, seed = Date.now()) {
  const branchConfig = ASSESSMENT_BRANCHES[branchId] || ASSESSMENT_BRANCHES.cs_healthcare_informatics;
  const rawBank = BRANCH_QUESTION_BANKS[branchId] || BRANCH_QUESTION_BANKS.cs_healthcare_informatics;
  const rng = createPrng(seed);

  // Group by axisIndex (0..5) to ensure balanced representation from every single axis
  const axisGroups = {};
  for (let i = 0; i < 6; i++) {
    axisGroups[i] = [];
  }

  rawBank.forEach(q => {
    const axis = q.axisIndex ?? 0;
    if (axisGroups[axis]) {
      axisGroups[axis].push(q);
    }
  });

  // Pick questions from each axis and shuffle options
  const selectedQuestions = [];
  for (let axis = 0; axis < 6; axis++) {
    const pool = axisGroups[axis];
    if (pool.length === 0) continue;
    
    // Shuffle pool for this axis
    const shuffledPool = shuffleWithRng(pool, rng);
    // Take up to 2 questions per axis for a standard 12-question diagnostic
    const chosen = shuffledPool.slice(0, 2);

    chosen.forEach(item => {
      // Shuffle options while preserving correct answer
      const originalCorrectOption = item.options[item.correct];
      const optionIndices = item.options.map((_, idx) => idx);
      const shuffledIndices = shuffleWithRng(optionIndices, rng);
      const newOptions = shuffledIndices.map(i => item.options[i]);
      const newCorrectIndex = newOptions.indexOf(originalCorrectOption);

      selectedQuestions.push({
        ...item,
        options: newOptions,
        correct: newCorrectIndex,
        originalQuestionId: item.id
      });
    });
  }

  // Shuffle final question presentation order
  const finalOrderedQuestions = shuffleWithRng(selectedQuestions, rng);

  return {
    branchId,
    branchTitle: branchConfig.title,
    seed,
    timeLimit: branchConfig.timeLimit,
    questions: finalOrderedQuestions
  };
}

/**
 * Calculates 6-axis radar metrics from submitted answers.
 * Returns exactly 6 items with name, fullName, score, percentile, status, desc.
 */
export function calculateBranchRadar(branchId, answers = {}, questionSet = []) {
  const branchConfig = ASSESSMENT_BRANCHES[branchId] || ASSESSMENT_BRANCHES.cs_healthcare_informatics;
  const axes = branchConfig.competencyAxes;

  // Track correct and total questions per axis (0..5)
  const stats = [0, 1, 2, 3, 4, 5].map(axisIdx => ({
    axisIdx,
    correct: 0,
    total: 0
  }));

  questionSet.forEach((q, qIndex) => {
    const axis = q.axisIndex ?? 0;
    if (stats[axis]) {
      stats[axis].total += 1;
      const studentAnswer = answers[qIndex];
      if (studentAnswer !== undefined && studentAnswer === q.correct) {
        stats[axis].correct += 1;
      }
    }
  });

  // Generate 6 radar entries
  const radarMatrix = axes.map((axisMeta, idx) => {
    const s = stats[idx];
    const score = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 80; // Baseline fallback if unrepresented
    
    let status = 'Proficient';
    let percentile = '85th';

    if (score >= 90) {
      status = 'Mastered';
      percentile = `${Math.min(99, 90 + Math.floor(score / 10))}th`;
    } else if (score >= 70) {
      status = 'Verified';
      percentile = `${75 + Math.floor(score / 5)}th`;
    } else if (score >= 50) {
      status = 'Developing';
      percentile = '60th';
    } else {
      status = 'Deficit';
      percentile = '42nd';
    }

    return {
      name: axisMeta.name,
      fullName: axisMeta.fullName,
      score,
      percentile,
      status,
      desc: axisMeta.desc,
      correctCount: s.correct,
      totalCount: s.total
    };
  });

  const overallScore = Math.round(
    radarMatrix.reduce((acc, curr) => acc + curr.score, 0) / radarMatrix.length
  );

  return {
    branchId,
    branchTitle: branchConfig.title,
    shortTitle: branchConfig.shortTitle,
    overallScore,
    radarMatrix,
    completedAt: new Date().toISOString()
  };
}

/**
 * Dev-time sanity validation for Question Banks (Gap #8)
 */
export function validateQuestionBank() {
  const errors = [];
  const branchIds = Object.keys(ASSESSMENT_BRANCHES);

  branchIds.forEach(branchId => {
    const meta = ASSESSMENT_BRANCHES[branchId];
    if (!meta) {
      errors.push(`Branch config missing for ${branchId}`);
      return;
    }
    if (!Array.isArray(meta.competencyAxes) || meta.competencyAxes.length !== 6) {
      errors.push(`Branch ${branchId} does not have exactly 6 competencyAxes! Found: ${meta.competencyAxes?.length}`);
    }

    const bank = BRANCH_QUESTION_BANKS[branchId];
    if (!bank || !Array.isArray(bank)) {
      errors.push(`Question bank missing or not an array for ${branchId}`);
      return;
    }

    bank.forEach((q, idx) => {
      if (typeof q.axisIndex !== 'number' || q.axisIndex < 0 || q.axisIndex > 5) {
        errors.push(`Question ${q.id || idx} in ${branchId} has invalid axisIndex: ${q.axisIndex} (must be 0..5)`);
      }
      if (!Array.isArray(q.options) || q.options.length < 2) {
        errors.push(`Question ${q.id || idx} in ${branchId} must have at least 2 options`);
      }
      if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.options.length) {
        errors.push(`Question ${q.id || idx} in ${branchId} has invalid correct index ${q.correct}`);
      }
    });
  });

  if (errors.length > 0) {
    console.error('[validateQuestionBank] Integrity Errors Found:', errors);
    return { valid: false, errors };
  }

  if (typeof process !== 'undefined' && process.env?.NODE_ENV !== 'production') {
    console.log('[validateQuestionBank] All 4 branch question banks validated: 6 axes per branch & valid indices.');
  }

  return { valid: true, errors: [] };
}

// Automatically invoke validation in dev environments
if (typeof window !== 'undefined') {
  validateQuestionBank();
}
