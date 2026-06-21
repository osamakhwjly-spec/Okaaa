// ============================================================
// 1. FULL ENGLISH CONTENT (from your files)
// ============================================================
const lessonsData = [
    {
        id: 0,
        title: "Introduction to Nursing Theories",
        subtitle: "Definitions, components, paradigms, and classifications",
        content: `
            <p><strong>Theory</strong>: a set of concepts, definitions, relationships, and assumptions that project a systematic view of a phenomena.</p>
            <p><strong>Components of a theory:</strong></p>
            <ul>
                <li><strong class="translate-word" data-en="Concepts">Concepts</strong>: ideas and mental images that help to describe phenomena.</li>
                <li><strong class="translate-word" data-en="Definitions">Definitions</strong>: convey the general meaning of the concepts.</li>
                <li><strong class="translate-word" data-en="Assumptions">Assumptions</strong>: statements that describe concepts.</li>
                <li><strong class="translate-word" data-en="Phenomenon">Phenomenon</strong>: aspect of reality that can be consciously sensed or experienced.</li>
            </ul>
            <p><strong>Paradigm</strong>: a model that explains the linkages of science, philosophy, and theory accepted and applied by the discipline.</p>
            <p><strong>Concepts of nursing theory (four linkages):</strong></p>
            <ul>
                <li><span class="translate-word" data-en="Person">Person/Client</span>: recipient of care, including physical, spiritual, psychological, and socio‑cultural components; individual, family, or community.</li>
                <li><span class="translate-word" data-en="Health">Health</span>: degree of wellness or illness experienced by the person.</li>
                <li><span class="translate-word" data-en="Environment">Environment</span>: all internal and external conditions, circumstances, and influences affecting the person.</li>
                <li><span class="translate-word" data-en="Nursing">Nursing</span>: actions, characteristics and attributes of the person giving care.</li>
            </ul>
            <p><strong>Purposes of nursing theory:</strong> guides practice, generates knowledge, helps describe/explain nursing, enables nurses to know WHY they do WHAT they do.</p>
            <p><strong>Characteristics:</strong> interrelating concepts, logical, generalizable, bases for testable hypotheses, increases knowledge.</p>
            <p><strong>Types:</strong> Grand theories (broad), Middle‑range theories (specific phenomena), Descriptive, Prescriptive.</p>
            <p><strong>Classifications:</strong> Needs theories, Interaction theories, Outcome theories, Humanistic theories.</p>
            <p><strong>Historical perspectives:</strong> Nightingale (1860), Peplau (1952), Henderson (1955), Abdellah et al. (1960), Orlando (1962), Johnson (1968), Orem (1971), King (1971), Neuman (1972), Roy (1979).</p>
        `
    },
    {
        id: 1,
        title: "Margaret Newman's Model of Health",
        subtitle: "Expanding Consciousness towards life‑pattern",
        content: `
            <p><strong>Nursing</strong>: helping individuals, family or community to expand their consciousness regarding their pattern.</p>
            <p><strong>Person</strong>: clients are identified by their individual patterns of consciousness.</p>
            <p><strong>Health</strong>: includes both <span class="translate-word" data-en="disease">disease</span> and <span class="translate-word" data-en="non-disease">non‑disease</span>. Disease is a meaningful indication of the pattern of the person's whole life. Both must be recognised as process of life pattern.</p>
            <p>To maintain health, person must focus on expanding awareness regarding life pattern which includes both disease and non‑disease.</p>
            <p><strong>Life is an ongoing process of expanding consciousness towards life‑pattern.</strong></p>
            <p>Life process is a progression towards higher levels of consciousness. This is linked with three concepts:</p>
            <ul>
                <li><span class="translate-word" data-en="Movement">Movement</span>: perception, feeling or thoughts of reality; awareness/consciousness of self (pattern). Occurs through integration of time and space.</li>
                <li><span class="translate-word" data-en="Time">Time</span>: e.g., the slower one walks, the less subjective time one experiences.</li>
                <li><span class="translate-word" data-en="Space">Space</span>: when life space is decreased by physical/social immobility, perception of time decreases.</li>
            </ul>
            <p><strong>Nursing practice</strong>: not only focus on prevention, but to assist people to use their power to reach a high level of consciousness regarding new life‑pattern affected by disease. Nurses encourage clients to perceive/use time, movement and space effectively for expanding consciousness.</p>
            <p>Encourage clients to move beyond focus on self as limited by time, space and physical concern.</p>
        `
    },
    {
        id: 2,
        title: "Nola Pender's Health Promotion Model",
        subtitle: "Cognitive‑perceptual factors leading to health‑promoting behavior",
        content: `
            <p><strong>Health</strong>: not limited to disease prevention, but further expands enhancing well‑being.</p>
            <p><strong>Health promotion</strong>: behavior motivated by the desire to increase well‑being and actualize human health potential.</p>
            <p><strong>Model focus</strong>: cognitive‑perceptional factors that lead to health‑promoting behaviors.</p>
            <p><strong>Concepts:</strong></p>
            <ul>
                <li><strong>1. Individual characteristics and experiences</strong>:
                    <ul>
                        <li><span class="translate-word" data-en="Prior related behavior">Prior related behavior</span>: influences self‑efficacy perception.</li>
                        <li><span class="translate-word" data-en="Personal factors">Personal factors</span>: biological (age, gender, aerobic capacity, strength, agility, balance), psychological (self‑esteem, self‑motivation, perceived health status), socio‑cultural (race, ethnicity, education, socioeconomic status).</li>
                    </ul>
                </li>
                <li><strong>2. Behavior‑specific cognitions and affect</strong>:
                    <ul>
                        <li><span class="translate-word" data-en="Perceived benefits">Perceived benefits</span> of action.</li>
                        <li><span class="translate-word" data-en="Perceived barriers">Perceived barriers</span> to action.</li>
                        <li><span class="translate-word" data-en="Perceived self-efficacy">Perceived self‑efficacy</span>: strong belief that behavior can influence outcomes. Higher efficacy → lower barriers, higher benefits.</li>
                        <li><span class="translate-word" data-en="Activity related affect">Activity‑related affect</span>: subjective feelings before/during/after behavior. Positive feeling increases efficacy.</li>
                        <li><span class="translate-word" data-en="Interpersonal influences">Interpersonal influences</span>: norms, social support, families, peers, healthcare providers.</li>
                        <li><span class="translate-word" data-en="Situational influences">Situational influences</span>: perception of options available.</li>
                        <li><span class="translate-word" data-en="Commitment to plan">Commitment to a plan</span> of action.</li>
                    </ul>
                </li>
                <li><strong>3. Behavior outcome</strong>: <span class="translate-word" data-en="Health promoting behavior">Health promoting behavior</span>.</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Johnson's Behavioral System Theory",
        subtitle: "Seven subsystems of behavior",
        content: `
            <p><strong>Human being</strong>: a bio‑psycho‑social being who is a behavioral system with seven subsystems of behavior.</p>
            <p><strong>Nursing</strong>: regulation of external forces to stabilize client's behavioral system and restore, maintain or attain balance.</p>
            <p><strong>Client</strong>: a behavioral system (person) threatened or potentially threatened by illness (imbalance).</p>
            <p><strong>Health</strong>: an efficient and effectively functioning behavioral system (person) who maintains balance by adapting to outside forces.</p>
            <p><strong>Environment</strong>: no specific setting.</p>
            <p><strong>Seven subsystems:</strong></p>
            <ul>
                <li><span class="translate-word" data-en="Ingestive">Ingestive</span>: to take in from environment needed resources.</li>
                <li><span class="translate-word" data-en="Achievement">Achievement</span>: control self or environment through seeking excellence (physical, social, creative skills).</li>
                <li><span class="translate-word" data-en="Aggressive">Aggressive</span>: to protect self and others from threatening objects, persons or ideas.</li>
                <li><span class="translate-word" data-en="Eliminative">Eliminative</span>: to expel biological waste.</li>
                <li><span class="translate-word" data-en="Sexual">Sexual</span>: to give birth and pleasure, feeling of attraction and being cared about.</li>
                <li><span class="translate-word" data-en="Affiliative">Affiliative/attachment</span>: to relate or bond with ultimate function of survival or belonging.</li>
                <li><span class="translate-word" data-en="Dependency">Dependency</span>: helping behavior, calling for assistance; evolves from total dependence.</li>
            </ul>
            <p><strong>Structural components</strong> of each subsystem: drive/goal, set, choice, behavior.</p>
            <ul>
                <li><span class="translate-word" data-en="Goal">Goal</span>: motivation/preference for behavior (not directly observable).</li>
                <li><span class="translate-word" data-en="Set">Set</span>: ordinary/normal behavior the client prefers to meet the goal.</li>
                <li><span class="translate-word" data-en="Choice">Choice</span>: based on cultural and personal background.</li>
                <li><span class="translate-word" data-en="Behavior">Behavior</span>: brings the goal under existed circumstances.</li>
            </ul>
            <p><strong>Functional requirements of the nurse:</strong></p>
            <ul>
                <li><span class="translate-word" data-en="Protection">Protection</span>: defending from threats.</li>
                <li><span class="translate-word" data-en="Nurturance">Nurturance</span>: supporting adaptive behaviors.</li>
                <li><span class="translate-word" data-en="Stimulation">Stimulation</span>: promoting growth and development.</li>
            </ul>
            <p><strong>Nursing process:</strong> Assessment (two stages) → Planning (structural or functional) → Intervention (restrict, defend, inhibit, facilitate) → Evaluation.</p>
            <p><em>Example: Debbie with cervical cancer – diagnosis of insufficiency in achievement subsystem, interventions include protection and nurturance.</em></p>
        `
    },
    {
        id: 4,
        title: "King's Goal Attainment Theory",
        subtitle: "Interacting systems and mutual goal setting",
        content: `
            <p><strong>Basic assumption</strong>: nurse and client communicate, set goals mutually, and act to attain those goals.</p>
            <p><strong>Interacting systems:</strong></p>
            <ul>
                <li><strong>Personal system</strong>: perception, self, growth & development, body image, space, time.</li>
                <li><strong>Interpersonal system</strong>: interaction, communication, transaction, role, stress.</li>
                <li><strong>Social system</strong>: organization, authority, power, status, decision making.</li>
            </ul>
            <p><strong>Person</strong>: social being who are logical and sensitive; has ability to perceive, think, feel, choose, set goals, select means, and make decisions.</p>
            <p><strong>Health</strong>: dynamic life experiences using one's resources to achieve maximum potential for daily living.</p>
            <p><strong>Environment</strong>: background for human interactions; nurse is part of the patient's environment.</p>
            <p><strong>Nursing</strong>: process of action, reaction and interaction by which nurse and client share information about their perception in nursing situation.</p>
            <p><strong>Goal Attainment vs Nursing Process:</strong></p>
            <ul>
                <li>Assessment ↔ Orientation</li>
                <li>Nursing diagnosis ↔ Identification</li>
                <li>Planning ↔ Goal setting and means agreement</li>
                <li>Implementation ↔ Transaction continuation</li>
                <li>Evaluation ↔ Goal attainment and effectiveness.</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "Nightingale's Environmental Theory",
        subtitle: "Manipulating the environment to allow nature to act",
        content: `
            <p><strong>Philosophy</strong>: alter the environment of the patient to allow nature to act on the patient.</p>
            <p><strong>Environment</strong>: anything that can be manipulated to place the patient in the best possible condition for nature to act. Includes physical (ventilation, warmth, light, nutrition, medicine, stimulation, room temperature, activity) and psychological (avoid chattering hopes and advices, provide variety).</p>
            <p><strong>Person</strong>: recipient of care, affected by environment, has reparative powers.</p>
            <p><strong>Health</strong>: well‑being and ability to use well every power we have; maintained by control of environment.</p>
            <p><strong>Nursing</strong>: assisting nature that was healing the patient; "science of environmental management".</p>
            <p><strong>Canons (13 rules):</strong></p>
            <ul>
                <li><span class="translate-word" data-en="Ventilation and warmth">Ventilation and warmth</span></li>
                <li><span class="translate-word" data-en="Light">Light</span> (sunlight)</li>
                <li><span class="translate-word" data-en="Cleanliness of rooms and walls">Cleanliness of rooms and walls</span></li>
                <li><span class="translate-word" data-en="Health of houses">Health of houses</span> (pure air, pure water, drainage)</li>
                <li><span class="translate-word" data-en="Noise">Noise</span> (minimize)</li>
                <li><span class="translate-word" data-en="Bed and bedding">Bed and bedding</span> (dry, wrinkle‑free)</li>
                <li><span class="translate-word" data-en="Personal cleanliness">Personal cleanliness</span></li>
                <li><span class="translate-word" data-en="Variety">Variety</span> (stimulation)</li>
                <li><span class="translate-word" data-en="Chattering hopes and advices">Chattering hopes and advices</span> (avoid without facts)</li>
                <li><span class="translate-word" data-en="Taking food">Taking food</span> (amount)</li>
                <li><span class="translate-word" data-en="What food">What food</span> (likes/dislikes)</li>
                <li><span class="translate-word" data-en="Petty management">Petty management</span> (continuity of care)</li>
                <li><span class="translate-word" data-en="Observation of the sick">Observation of the sick</span> (factual records)</li>
            </ul>
        `
    },
    {
        id: 6,
        title: "Orem's Self‑Care Deficit Nursing Theory",
        subtitle: "Self‑care, deficit, and nursing systems",
        content: `
            <p><strong>Philosophy</strong>: "all patients want to care for themselves, and they are able to recover more quickly by performing their own self‑care as much as they're able".</p>
            <p><strong>Self‑care theory</strong>:</p>
            <ul>
                <li><span class="translate-word" data-en="Self-care agency">Self‑care agency</span>: provider of self‑care.</li>
                <li><span class="translate-word" data-en="Self-care requisites">Self‑care requisites</span>:
                    <ul>
                        <li><span class="translate-word" data-en="Universal">Universal</span>: common to all (air, water, food, elimination, activity, rest).</li>
                        <li><span class="translate-word" data-en="Developmental">Developmental</span>: specific to life stages (intra‑uterine, infancy, adolescence, pregnancy).</li>
                        <li><span class="translate-word" data-en="Health deviation">Health‑deviation</span>: seeking medical assistance, attending to effects of pathology, carrying out prescribed measures, modifying self‑concept, learning to live with effects.</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Self‑care deficit</strong>: demand to care for oneself is greater than the individual's capacity. Nursing is required when the client is incapable of continuous effective self‑care.</p>
            <p><strong>Nursing systems</strong>: three classifications – wholly compensatory, partly compensatory, supportive‑educative.</p>
            <p><strong>Methods of nursing assistance</strong>: acting or doing for, guiding, teaching, supporting, providing an environment to promote patient's ability.</p>
            <p><strong>Concepts:</strong> Nursing (deliberate actions to assist), Client (unable to maintain self‑care), Health (ability to meet self‑care demands), Environment (any setting where nurse is present).</p>
        `
    },
    {
        id: 7,
        title: "Peplau's Interpersonal Theory",
        subtitle: "Therapeutic interpersonal process",
        content: `
            <p><strong>Nursing</strong>: a significant therapeutic interpersonal process; functions cooperatively with other human processes that make health possible.</p>
            <p><strong>Person</strong>: a developing organism that tries to reduce anxiety caused by needs.</p>
            <p><strong>Environment</strong>: existing forces outside the organism.</p>
            <p><strong>Health</strong>: a word symbol that implies forward movement of personality in the direction of productive, personal and community living.</p>
            <p><strong>Roles of the nurse</strong>:</p>
            <ul>
                <li><span class="translate-word" data-en="Stranger">Stranger</span>: receives client, provides accepting climate.</li>
                <li><span class="translate-word" data-en="Teacher">Teacher</span>: provides knowledge according to need.</li>
                <li><span class="translate-word" data-en="Resource person">Resource person</span>: provides specific needed information.</li>
                <li><span class="translate-word" data-en="Counselor">Counselor</span>: helps understand and integrate current life circumstances.</li>
                <li><span class="translate-word" data-en="Surrogate">Surrogate</span>: clarifies dependence/interdependence/independence.</li>
                <li><span class="translate-word" data-en="Leader">Leader</span>: helps client assume responsibility for meeting treatment goals.</li>
            </ul>
            <p><strong>Four phases of nurse‑patient relationship</strong>:</p>
            <ul>
                <li><span class="translate-word" data-en="Orientation">Orientation</span>: client meets nurse as stranger; client seeks assistance, conveys needs.</li>
                <li><span class="translate-word" data-en="Identification">Identification</span>: client feels belonging and capability, decreases helplessness.</li>
                <li><span class="translate-word" data-en="Exploitation">Exploitation</span>: uses professional assistance for problem solving; patient may fluctuate on independence.</li>
                <li><span class="translate-word" data-en="Resolution">Resolution</span>: termination of therapeutic relationship after needs are met.</li>
            </ul>
            <p><strong>Limitations</strong>: less emphasis on health promotion, cannot be used with patients who don't have a felt need (e.g. withdrawn, unconscious).</p>
        `
    },
    {
        id: 8,
        title: "Roy's Adaptation Model",
        subtitle: "Adaptation in four modes",
        content: `
            <p><strong>Person</strong>: a biopsychosocial being in constant interaction with a changing environment.</p>
            <p><strong>Environment</strong>: all conditions, circumstances, and influences surrounding and affecting development and behavior.</p>
            <p><strong>Health</strong>: a state and process of being and becoming an integrated and whole human being.</p>
            <p><strong>Nursing</strong>: the science and practice that expands adaptive abilities and enhances person and environment transformation.</p>
            <p><strong>Basic assumption</strong>: the human being is an adaptive system that continuously interacts with internal/external environment and seeks to maintain balance.</p>
            <p><strong>Core concepts</strong>:</p>
            <ul>
                <li><strong>Stimuli (inputs)</strong>:
                    <ul>
                        <li><span class="translate-word" data-en="Focal stimuli">Focal</span>: most immediate (e.g. acute pain).</li>
                        <li><span class="translate-word" data-en="Contextual stimuli">Contextual</span>: contributing factors (age, family support).</li>
                        <li><span class="translate-word" data-en="Residual stimuli">Residual</span>: background factors (cultural beliefs, past experiences).</li>
                    </ul>
                </li>
                <li><strong>Coping mechanisms</strong>:
                    <ul>
                        <li><span class="translate-word" data-en="Regulator subsystem">Regulator</span>: physiological responses (neural, chemical, endocrine).</li>
                        <li><span class="translate-word" data-en="Cognator subsystem">Cognator</span>: psychological processes (perception, learning, judgment, emotions).</li>
                    </ul>
                </li>
                <li><strong>Adaptive modes (outputs)</strong>:
                    <ul>
                        <li><span class="translate-word" data-en="Physiological mode">Physiological‑Physical</span>: basic needs (oxygenation, nutrition, rest).</li>
                        <li><span class="translate-word" data-en="Self-concept mode">Self‑Concept</span>: psychological/spiritual integrity (self‑image, identity).</li>
                        <li><span class="translate-word" data-en="Role function mode">Role Function</span>: social roles and responsibilities.</li>
                        <li><span class="translate-word" data-en="Interdependence mode">Interdependence</span>: relationships and support systems.</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Goal of nursing</strong>: promote effective adaptation in all four modes, strengthen coping mechanisms, enhance health and quality of life.</p>
            <p><strong>RAM vs Nursing Process</strong>:</p>
            <ul>
                <li>Assessment: Level I (behaviours) & Level II (stimuli).</li>
                <li>Diagnosis: framed as "adaptation problem".</li>
                <li>Goal: promote adaptation, not just resolve deficit.</li>
                <li>Intervention: manage stimuli (remove, increase, decrease, alter).</li>
                <li>Evaluation: behaviour changed from ineffective to adaptive.</li>
            </ul>
            <p><strong>Limitations</strong>: complexity, time‑consuming, abstract concepts, limited empirical evidence, cultural constraints (Western context).</p>
        `
    }
];

// ============================================================
// 2. QUIZZES (3 questions each, all in English)
// ============================================================
const quizzes = [
    // Lesson 0
    [
        { q: "What are the main components of a theory?", opts: ["Concepts, definitions, assumptions, phenomenon", "Person, health, environment, nursing", "Assessment, diagnosis, planning, evaluation", "Grand, middle‑range, descriptive, prescriptive"], correct: 0 },
        { q: "Which of the following is NOT one of the four nursing paradigms?", opts: ["Person", "Environment", "Surgery", "Health"], correct: 2 },
        { q: "Who is considered the founder of modern nursing?", opts: ["Florence Nightingale", "Dorothea Orem", "Hildegard Peplau", "Callista Roy"], correct: 0 }
    ],
    // Lesson 1: Newman
    [
        { q: "According to Newman, health includes:", opts: ["Disease only", "Non‑disease only", "Both disease and non‑disease", "Complete absence of symptoms"], correct: 2 },
        { q: "What three concepts are linked to expanding consciousness?", opts: ["Movement, time, space", "Nutrition, hygiene, rest", "Interaction, communication, roles", "Stimuli, coping, adaptation"], correct: 0 },
        { q: "The nurse's role in Newman's model is to:", opts: ["Treat diseases", "Help the person expand awareness", "Administer medications", "Perform surgery"], correct: 1 }
    ],
    // Lesson 2: Pender
    [
        { q: "How does Pender define health promotion?", opts: ["Prevention of illness", "Behavior motivated by desire to increase well‑being", "Treatment of chronic diseases", "Providing care to the sick"], correct: 1 },
        { q: "Perceived self‑efficacy means:", opts: ["Ability to perform exercises", "Belief that behavior can influence outcomes", "Social support from family", "Fear of failure"], correct: 1 },
        { q: "Which of the following is NOT a personal factor in Pender's model?", opts: ["Age", "Gender", "Perceived health status", "Air quality"], correct: 3 }
    ],
    // Lesson 3: Johnson
    [
        { q: "How many subsystems are there in Johnson's model?", opts: ["5", "6", "7", "8"], correct: 2 },
        { q: "Which subsystem is responsible for protecting self from threats?", opts: ["Ingestive", "Aggressive", "Affiliative", "Achievement"], correct: 1 },
        { q: "The structural components of a subsystem are:", opts: ["Goal, set, choice, behavior", "Assessment, diagnosis, planning", "Stimuli, coping, adaptation", "Orientation, identification, resolution"], correct: 0 }
    ],
    // Lesson 4: King
    [
        { q: "The basic assumption of King's theory is:", opts: ["Patients cannot care for themselves", "Nurse and client set mutual goals", "Environment is the most important factor", "Adaptation is the goal of nursing"], correct: 1 },
        { q: "Which of the following is NOT one of King's interacting systems?", opts: ["Personal system", "Interpersonal system", "Social system", "Environmental system"], correct: 3 },
        { q: "In King's theory, 'transaction' means:", opts: ["Administering medication", "Mutual communication to achieve goals", "Surgical procedure", "Assessing the situation"], correct: 1 }
    ],
    // Lesson 5: Nightingale
    [
        { q: "According to Nightingale, nursing is:", opts: ["Science of environmental management", "Treatment of diseases", "Administration of drugs", "Performing examinations"], correct: 0 },
        { q: "Which of the following is NOT one of Nightingale's canons?", opts: ["Ventilation", "Noise", "Variety", "Chemotherapy"], correct: 3 },
        { q: "The goal of manipulating the environment is to:", opts: ["Make the patient comfortable", "Allow nature to heal the patient", "Clean the room", "Provide food"], correct: 1 }
    ],
    // Lesson 6: Orem
    [
        { q: "When is nursing needed according to Orem?", opts: ["Only when the person is ill", "When the person is unable to perform self‑care", "When the person is hospitalised", "When the person is elderly"], correct: 1 },
        { q: "Which of the following is NOT a category of self‑care requisites?", opts: ["Universal", "Developmental", "Health‑deviation", "Therapeutic"], correct: 3 },
        { q: "Examples of nursing assistance methods in Orem's theory include:", opts: ["Acting for, guiding, teaching", "Injections, surgery", "Physical therapy", "Psychological therapy"], correct: 0 }
    ],
    // Lesson 7: Peplau
    [
        { q: "What are the four phases of the nurse‑patient relationship?", opts: ["Orientation, identification, exploitation, resolution", "Assessment, diagnosis, planning, evaluation", "Awareness, expansion, integration, maturity", "Stimulation, coping, adaptation, evaluation"], correct: 0 },
        { q: "Which role of the nurse involves providing guidance and support for change?", opts: ["Teacher", "Counselor", "Stranger", "Leader"], correct: 1 },
        { q: "Peplau's theory focuses on:", opts: ["Physical environment", "Therapeutic interpersonal relationships", "Self‑care", "Adaptation to illness"], correct: 1 }
    ],
    // Lesson 8: Roy
    [
        { q: "How many adaptive modes are in Roy's model?", opts: ["2", "3", "4", "5"], correct: 2 },
        { q: "Which of the following is NOT one of Roy's adaptive modes?", opts: ["Physiological‑Physical", "Self‑Concept", "Role Function", "Environmental"], correct: 3 },
        { q: "Focal stimuli in Roy's model are:", opts: ["The most immediate stimulus", "Background factors", "Social support", "Age"], correct: 0 }
    ]
];

// ============================================================
// 3. APPLICATION STATE
// ============================================================
let state = {
    unlockedLessons: [0],
    progress: {},
    darkMode: false
};

function loadState() {
    try {
        const saved = localStorage.getItem('nursingTheoryStateV2');
        if (saved) {
            const parsed = JSON.parse(saved);
            state.unlockedLessons = parsed.unlockedLessons || [0];
            state.progress = parsed.progress || {};
            state.darkMode = parsed.darkMode || false;
            if (state.darkMode) document.body.classList.add('dark-mode');
            const btn = document.getElementById('darkModeToggle');
            if (btn) btn.innerHTML = state.darkMode ? '<i class="fas fa-sun"></i> Day Mode' : '<i class="fas fa-moon"></i> Night Mode';
        }
    } catch(e) { console.warn('Load state error', e); }
}
function saveState() {
    try {
        localStorage.setItem('nursingTheoryStateV2', JSON.stringify(state));
    } catch(e) { console.warn('Save state error', e); }
}

function isLessonCompleted(id) { return state.progress[id] === true; }
function isLessonLocked(id) { return id !== 0 && !state.unlockedLessons.includes(id); }

function unlockNextLesson(currentId) {
    const next = currentId + 1;
    if (next < lessonsData.length && !state.unlockedLessons.includes(next)) {
        state.unlockedLessons.push(next);
        saveState();
        renderLessons();
        showToast(`✅ Lesson "${lessonsData[next].title}" unlocked!`);
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        state.unlockedLessons = [0];
        state.progress = {};
        saveState();
        renderLessons();
        showToast('🔄 Progress reset successfully');
    }
}

// ============================================================
// 4. TRANSLATION (simple dictionary)
// ============================================================
const translationDict = {
    "concepts": "المفاهيم",
    "definitions": "التعاريف",
    "assumptions": "الافتراضات",
    "phenomenon": "الظاهرة",
    "person": "الشخص/المريض",
    "health": "الصحة",
    "environment": "البيئة",
    "nursing": "التمريض",
    "disease": "المرض",
    "non‑disease": "عدم المرض",
    "consciousness": "الوعي",
    "pattern": "النمط",
    "movement": "الحركة",
    "time": "الزمن",
    "space": "المكان",
    "prior related behavior": "السلوك السابق",
    "personal factors": "العوامل الشخصية",
    "perceived benefits": "الفوائد المتصورة",
    "perceived barriers": "المعوقات المتصورة",
    "perceived self‑efficacy": "الكفاءة الذاتية المتصورة",
    "activity related affect": "التأثير المرتبط بالنشاط",
    "interpersonal influences": "التأثيرات الشخصية",
    "situational influences": "التأثيرات الموقفية",
    "commitment to plan": "الالتزام بالخطة",
    "health promoting behavior": "السلوك المعزز للصحة",
    "ingestive": "الابتلاعي",
    "achievement": "الإنجاز",
    "aggressive": "العدائي",
    "eliminative": "الإطراحي",
    "sexual": "الجنسي",
    "affiliative": "الانتمائي",
    "dependency": "الاعتمادي",
    "goal": "الهدف",
    "set": "المجموعة",
    "choice": "الاختيار",
    "behavior": "السلوك",
    "protection": "الحماية",
    "nurturance": "الرعاية",
    "stimulation": "التحفيز",
    "self‑care agency": "وكالة الرعاية الذاتية",
    "self‑care requisites": "متطلبات الرعاية الذاتية",
    "universal": "عالمي",
    "developmental": "نمائي",
    "health deviation": "انحراف صحي",
    "stranger": "غريب",
    "teacher": "معلم",
    "resource person": "مصدر معلومات",
    "counselor": "مستشار",
    "surrogate": "بديل",
    "leader": "قائد",
    "orientation": "التوجيه",
    "identification": "التعريف",
    "exploitation": "الاستغلال",
    "resolution": "الحل",
    "focal stimuli": "محفزات بؤرية",
    "contextual stimuli": "محفزات سياقية",
    "residual stimuli": "محفزات متبقية",
    "regulator subsystem": "النظام المنظم",
    "cognator subsystem": "النظام المدرك",
    "physiological mode": "النمط الفسيولوجي",
    "self‑concept mode": "نمط مفهوم الذات",
    "role function mode": "نمط الوظيفة الدورية",
    "interdependence mode": "نمط الاعتماد المتبادل",
    "ventilation and warmth": "التهوية والدفء",
    "light": "الضوء",
    "cleanliness of rooms and walls": "نظافة الغرف والجدران",
    "health of houses": "صحة المنازل",
    "noise": "الضوضاء",
    "bed and bedding": "السرير والفراش",
    "personal cleanliness": "النظافة الشخصية",
    "variety": "التنوع",
    "chattering hopes and advices": "الثرثرة بالأماني والنصائح",
    "taking food": "تناول الطعام",
    "what food": "نوع الطعام",
    "petty management": "الإدارة الصغيرة",
    "observation of the sick": "ملاحظة المريض"
};

function translateText(text) {
    let translated = text;
    for (const [eng, arb] of Object.entries(translationDict)) {
        const regex = new RegExp('\\b' + eng.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
        translated = translated.replace(regex, arb);
    }
    return translated;
}

// ============================================================
// 5. RENDER LESSONS
// ============================================================
function renderLessons() {
    const container = document.getElementById('lessonsContainer');
    let html = '';

    lessonsData.forEach((lesson, idx) => {
        const locked = isLessonLocked(idx);
        const completed = isLessonCompleted(idx);
        const unlocked = state.unlockedLessons.includes(idx);

        let status = '';
        if (completed) status = ' ✅ Completed';
        else if (locked) status = ' 🔒 Locked';
        else if (unlocked) status = ' 📖 Open';

        const lockedClass = locked ? 'locked' : '';

        html += `
            <div class="lesson-card ${lockedClass}" data-lesson="${idx}">
                <div class="lesson-title">${idx+1}. ${lesson.title} ${status}</div>
                <div class="lesson-subtitle">${lesson.subtitle}</div>
                <div class="lesson-content" id="lessonContent_${idx}">
                    ${lesson.content}
                </div>

                <div class="toolbar">
                    <button class="btn btn-outline" onclick="toggleParagraphTranslation(${idx})"><i class="fas fa-paragraph"></i> Translate Paragraph</button>
                    <button class="btn btn-outline" onclick="translateFullLesson(${idx})"><i class="fas fa-file-alt"></i> Translate Full Lesson</button>
                    <button class="btn btn-outline" onclick="openTranslationPanel()"><i class="fas fa-search"></i> Open Translator</button>
                </div>
                <div id="inlineTranslation_${idx}" class="inline-translation"></div>

                ${!locked && !completed ? `
                <div class="quiz-area" id="quizArea_${idx}">
                    <h4><i class="fas fa-question-circle"></i> Quick Quiz</h4>
                    <div id="quizContainer_${idx}"></div>
                    <button class="btn btn-success" onclick="submitQuiz(${idx})"><i class="fas fa-check"></i> Submit Answers</button>
                    <div id="quizResult_${idx}" class="quiz-result"></div>
                </div>
                ` : ''}
                ${completed ? `<div style="margin-top:16px;padding:14px;background:#d1fae5;border-radius:12px;color:#065f46;">🎉 You passed this quiz! Move to the next lesson.</div>` : ''}
            </div>
        `;
    });

    container.innerHTML = html;
    updateProgress();

    lessonsData.forEach((_, idx) => {
        if (!isLessonLocked(idx) && !isLessonCompleted(idx)) {
            renderQuiz(idx);
        }
    });
}

function renderQuiz(lessonId) {
    const container = document.getElementById(`quizContainer_${lessonId}`);
    if (!container) return;
    const questions = quizzes[lessonId];
    if (!questions) return;

    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    let html = '';
    shuffled.forEach((q, idx) => {
        const shuffledOpts = q.opts.map((opt, i) => ({ opt, i })).sort(() => Math.random() - 0.5);
        const correctIndex = shuffledOpts.findIndex(item => item.i === q.correct);
        html += `
            <div class="quiz-question" data-correct="${correctIndex}">
                <p>${idx+1}. ${q.q}</p>
                <div class="quiz-options">
                    ${shuffledOpts.map((item, optIdx) => `
                        <label>
                            <input type="radio" name="q_${lessonId}_${idx}" value="${optIdx}">
                            ${item.opt}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ============================================================
// 6. SUBMIT QUIZ
// ============================================================
function submitQuiz(lessonId) {
    const container = document.getElementById(`quizContainer_${lessonId}`);
    if (!container) return;
    const questions = container.querySelectorAll('.quiz-question');
    let correct = 0, total = questions.length;

    questions.forEach(qDiv => {
        const correctAns = parseInt(qDiv.dataset.correct);
        const selected = qDiv.querySelector('input[type="radio"]:checked');
        if (selected && parseInt(selected.value) === correctAns) correct++;
    });

    const resultDiv = document.getElementById(`quizResult_${lessonId}`);
    const pct = (correct / total) * 100;
    const passed = pct >= 70;

    resultDiv.style.display = 'block';
    resultDiv.className = `quiz-result ${passed ? 'pass' : 'fail'}`;
    resultDiv.innerHTML = `
        <i class="fas ${passed ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        You answered ${correct} out of ${total} (${Math.round(pct)}%)
        ${passed ? '🎉 Congratulations! You passed.' : '⚠️ You need 70% to pass. Try again.'}
    `;

    if (passed) {
        state.progress[lessonId] = true;
        saveState();
        unlockNextLesson(lessonId);
        renderLessons();
        showToast('🎉 Quiz passed! Next lesson unlocked.');
    } else {
        showToast('❌ Not passed. Try again.');
        renderQuiz(lessonId);
    }
}

// ============================================================
// 7. TRANSLATION FUNCTIONS (global)
// ============================================================
window.toggleParagraphTranslation = function(lessonId) {
    const content = document.getElementById(`lessonContent_${lessonId}`);
    const target = document.getElementById(`inlineTranslation_${lessonId}`);
    if (!content || !target) return;
    const text = content.innerText || content.textContent;
    if (target.style.display === 'block') {
        target.style.display = 'none';
        showToast('Translation hidden');
    } else {
        target.innerHTML = `<strong>📝 Translation:</strong><br>${translateText(text)}`;
        target.style.display = 'block';
        showToast('Paragraph translation displayed');
    }
};

window.translateFullLesson = function(lessonId) {
    const content = document.getElementById(`lessonContent_${lessonId}`);
    const target = document.getElementById(`inlineTranslation_${lessonId}`);
    if (!content || !target) return;
    const text = content.innerText || content.textContent;
    target.innerHTML = `<strong>📖 Full Lesson Translation:</strong><br>${translateText(text)}`;
    target.style.display = 'block';
    showToast('✅ Full lesson translated');
};

window.openTranslationPanel = function() {
    const panel = document.getElementById('translationPanel');
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    if (panel.style.display === 'block') document.getElementById('translateInput').focus();
};

document.getElementById('translateTextBtn')?.addEventListener('click', function() {
    const input = document.getElementById('translateInput');
    const output = document.getElementById('translationOutput');
    if (input.value.trim() === '') { showToast('Please paste English text'); return; }
    output.innerHTML = `<strong>Translation:</strong> ${translateText(input.value)}`;
    showToast('✅ Translation done');
});

// ============================================================
// 8. PROGRESS & UI HELPERS
// ============================================================
function updateProgress() {
    const total = lessonsData.length;
    const completed = Object.keys(state.progress).filter(k => state.progress[k]).length;
    const pct = Math.round((completed / total) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = `${completed} / ${total}`;
    document.getElementById('statusMessage').textContent = completed === total ? '🎊 All lessons completed!' : `✅ ${completed} of ${total} done`;
}

let toastTimeout = null;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => t.classList.remove('show'), 3500);
}

// ============================================================
// 9. EVENT LISTENERS
// ============================================================
document.getElementById('darkModeToggle')?.addEventListener('click', function() {
    state.darkMode = !state.darkMode;
    document.body.classList.toggle('dark-mode', state.darkMode);
    this.innerHTML = state.darkMode ? '<i class="fas fa-sun"></i> Day Mode' : '<i class="fas fa-moon"></i> Night Mode';
    saveState();
});

document.getElementById('resetProgressBtn')?.addEventListener('click', resetProgress);

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('translate-word')) {
        const eng = e.target.dataset.en || e.target.textContent.trim();
        const translation = translationDict[eng.toLowerCase()] || 'Translation not available';
        showToast(`📖 "${eng}" → "${translation}"`);
    }
});

// ============================================================
// 10. INIT
// ============================================================
loadState();
renderLessons();
showToast('👋 Welcome! Start with lesson 1, pass quizzes to unlock next.');
console.log('✅ Nursing Theories Platform ready (English content + translation on demand).');