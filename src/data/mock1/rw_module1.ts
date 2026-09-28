import { Question } from '../../types/exam';

export const mock1_rw_module1: Question[] = [
  {
    id: 'm1-rw1-q1',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Although the archival documents discovered in the abbey had remained uncataloged for over three centuries, the parchment was surprisingly ______; the ink retained its deep indigo pigment and the vellum showed virtually no structural degradation.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'pristine' },
      { id: 'B', text: 'perishable' },
      { id: 'C', text: 'rudimentary' },
      { id: 'D', text: 'antiquated' }
    ],
    answer: 'A',
    explanation: 'The context contrasts the fact that the documents were uncataloged for over three centuries with their remarkable physical condition ("the ink retained its deep indigo pigment and the vellum showed virtually no structural degradation"). "Pristine" means in its original, unspoiled condition, perfectly matching the clue.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Associated with old organic materials decaying.', whyIncorrect: '"Perishable" means prone to spoiling, which contradicts "virtually no structural degradation".', coreTrap: 'Antonym trap.' },
      C: { whyStudentsChoose: 'Mistaking age for simplicity.', whyIncorrect: '"Rudimentary" means basic or undeveloped, which is unrelated to physical preservation.', coreTrap: 'Irrelevant definition trap.' },
      D: { whyStudentsChoose: 'The text notes the documents are three centuries old.', whyIncorrect: '"Antiquated" means outdated or obsolete. While they are old, the contrast word "surprisingly" demands a word reflecting their intact condition despite their age.', coreTrap: 'Surface association trap.' }
    }
  },
  {
    id: 'm1-rw1-q2',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In the early decades of quantum electrodynamics, calculations frequently yielded nonsensical infinite values. Theoretical physicist Julian Schwinger and his contemporaries devised mathematical renormalization techniques to ______ these divergences, thereby restoring predictive coherence to the equations.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'circumvent' },
      { id: 'B', text: 'exacerbate' },
      { id: 'C', text: 'conflate' },
      { id: 'D', text: 'promulgate' }
    ],
    answer: 'A',
    explanation: 'The sentence describes how physicists overcame problematically infinite values ("infinite values", "divergences") to "restore predictive coherence." "Circumvent" means to find a way around an obstacle or problem, which logically fits dealing with unwanted mathematical infinities.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sounds technical.', whyIncorrect: '"Exacerbate" means to make a problem worse, which contradicts restoring coherence.', coreTrap: 'Opposite meaning trap.' },
      C: { whyStudentsChoose: 'Vaguely related to combining mathematical terms.', whyIncorrect: '"Conflate" means to merge two distinct things into one, often erroneously.', coreTrap: 'Loose association trap.' },
      D: { whyStudentsChoose: 'Sounds formal and academic.', whyIncorrect: '"Promulgate" means to proclaim or make widely known, which makes no sense applied to mathematical divergences.', coreTrap: 'Sophisticated vocabulary distractor.' }
    }
  },
  {
    id: 'm1-rw1-q3',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 3,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'While many 19th-century botanists viewed symbiotic fungal associations as rare ecological aberrations, modern mycologist Dr. Elena Vance contends that mycorrhizal networks are ______, operating as foundational infrastructure across nearly every terrestrial ecosystem.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'ephemeral' },
      { id: 'B', text: 'ubiquitous' },
      { id: 'C', text: 'conjectural' },
      { id: 'D', text: 'superfluous' }
    ],
    answer: 'B',
    explanation: 'The sentence sets up a contrast between 19th-century views of fungal networks as "rare ecological aberrations" and Vance\'s view that they exist "across nearly every terrestrial ecosystem." "Ubiquitous" means present, appearing, or found everywhere, directly matching "nearly every terrestrial ecosystem."',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Focuses on delicate fungal growth.', whyIncorrect: '"Ephemeral" means short-lived or fleeting.', coreTrap: 'False contextual association.' },
      C: { whyStudentsChoose: 'Connects to theoretical scientific debates.', whyIncorrect: '"Conjectural" means hypothetical, but the passage states they are foundational infrastructure.', coreTrap: 'Unwarranted skepticism trap.' },
      D: { whyStudentsChoose: 'Confusing foundational with non-essential.', whyIncorrect: '"Superfluous" means unnecessary or excess.', coreTrap: 'Direct antonym to foundational.' }
    }
  },
  {
    id: 'm1-rw1-q4',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 4,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'The biographer refused to indulge in hagiography; rather than depicting the diplomat as an infallible statesman whose compromises were invariably virtuous, she provided a ______ portrait that candidly documented his political miscalculations and ethical equivocations.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'laudatory' },
      { id: 'B', text: 'nuanced' },
      { id: 'C', text: 'hyperbolic' },
      { id: 'D', text: 'simplistic' }
    ],
    answer: 'B',
    explanation: 'The biographer avoided "hagiography" (an uncritical, idealized biography) and did not portray him as "infallible." Instead, she candidly documented both sides, including his miscalculations and ethical ambiguities. A "nuanced" portrait captures subtle distinctions, complexities, and flaws accurately.',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Sounds like biographical praise.', whyIncorrect: '"Laudatory" means expressing high praise, which aligns with hagiography that she explicitly refused.', coreTrap: 'Contrasted element trap.' },
      C: { whyStudentsChoose: 'Focuses on exaggeration.', whyIncorrect: '"Hyperbolic" means exaggerated, whereas the author aimed for candid, balanced accuracy.', coreTrap: 'Negative connotation trap.' },
      D: { whyStudentsChoose: 'Mistaking candidness for brevity.', whyIncorrect: '"Simplistic" means overly simple, whereas a balanced examination of flaws is complex.', coreTrap: 'Oversimplification trap.' }
    }
  },
  {
    id: 'm1-rw1-q5',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 5,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'The economic historian argued that the guild system in medieval Flanders was far from ______; while modern textbooks often characterize medieval artisan organizations as rigid monopolies that stifled innovation, empirical production records reveal an institution constantly recalibrating apprentice wages and adapting to shifts in continental wool trade.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'ossified' },
      { id: 'B', text: 'nascent' },
      { id: 'C', text: 'mercenary' },
      { id: 'D', text: 'egalitarian' }
    ],
    answer: 'A',
    explanation: 'The passage asserts that the guilds were "far from [blank]" and refutes the idea that they were "rigid monopolies that stifled innovation" by pointing out they were "constantly recalibrating... and adapting." "Ossified" means hardened, inflexible, or resistant to change. Saying they were "far from ossified" directly matches the argument.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks of medieval times as an early era.', whyIncorrect: '"Nascent" means just coming into existence.', coreTrap: 'Historical era association.' },
      C: { whyStudentsChoose: 'Associates trade and wages with money/mercenary.', whyIncorrect: '"Mercenary" means motivated solely by greed/money, which does not oppose adaptability.', coreTrap: 'Topic association trap.' },
      D: { whyStudentsChoose: 'Focuses on wages and apprentice fairness.', whyIncorrect: '"Egalitarian" means promoting equal rights, which is not the antonym of rigid/stifling.', coreTrap: 'Value judgment trap.' }
    }
  },
  {
    id: 'm1-rw1-q6',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 6,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In standard models of stellar evolution, low-mass stars like our Sun spend billions of years on the main sequence before swelling into red giants. During this expansion, the outer envelope cools while the core undergoes gravitational contraction, eventually fusing helium into carbon. Recent observational telemetry of red giant KIC 05807616, however, revealed a pulsating core surrounded by an unexpectedly depleted helium layer. Astrophysicists propose that a previously unmodeled close-orbiting substellar companion stripped away the outer envelope during the star\'s red giant transition.',
    question: 'Which choice best describes the overall structure of the text?',
    choices: [
      { id: 'A', text: 'It outlines an established scientific model, introduces an empirical observation that deviates from it, and presents an explanatory hypothesis for that anomaly.' },
      { id: 'B', text: 'It debates two competing astronomical theories, evaluates their mathematical methodologies, and concludes that neither adequately accounts for stellar expansion.' },
      { id: 'C', text: 'It describes an astronomical instrument, reviews its observational history, and highlights its role in disproving standard stellar models.' },
      { id: 'D', text: 'It presents a historical overview of solar physics, discusses a recent technological breakthrough, and proposes a new classification system for pulsating stars.' }
    ],
    answer: 'A',
    explanation: 'The text begins by setting up the conventional model of stellar evolution for low-mass stars ("In standard models..."). It then introduces an unexpected observational anomaly ("Recent observational telemetry... however, revealed..."), and concludes with a hypothesis to explain it ("Astrophysicists propose that...").',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sees the tension between the model and the observation.', whyIncorrect: 'There is no evaluation of mathematical methodologies or total rejection of theories.', coreTrap: 'Extreme scope trap.' },
      C: { whyStudentsChoose: 'Telemetry is mentioned.', whyIncorrect: 'No specific instrument is detailed or given an observational history.', coreTrap: 'Misidentified focus.' },
      D: { whyStudentsChoose: 'Mentions solar/star context.', whyIncorrect: 'No new classification system is proposed.', coreTrap: 'Unsupported extension trap.' }
    }
  },
  {
    id: 'm1-rw1-q7',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 7,
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Text 1\nBehavioral economist Dan Ariely posits that human decision-making is systematically irrational, driven by cognitive biases, contextual anchoring, and emotional impulses. In his view, market inefficiencies and financial bubbles are natural outcomes of inherent human cognitive limitations rather than external disruptions.\n\nText 2\nEconomist Eugene Fama maintains that financial markets operate under the Efficient Market Hypothesis (EMH), where asset prices always fully reflect all available information. Fama argues that individual cognitive quirks cancel out across millions of market participants, ensuring that aggregate prices remain rational benchmarks that cannot be systematically beaten.',
    question: 'Based on the texts, how would Fama (Text 2) most likely respond to Ariely\'s claim (Text 1) regarding market inefficiencies?',
    choices: [
      { id: 'A', text: 'By asserting that individual cognitive biases do not scale to distort overall aggregate market prices.' },
      { id: 'B', text: 'By agreeing that cognitive biases cause asset bubbles but blaming government regulatory failure.' },
      { id: 'C', text: 'By demonstrating that behavioral economists rely on flawed laboratory experiments that misrepresent trading volumes.' },
      { id: 'D', text: 'By claiming that irrational decision-making is confined exclusively to non-financial retail purchases.' }
    ],
    answer: 'A',
    explanation: 'In Text 1, Ariely argues that individual cognitive biases create broad market inefficiencies and bubbles. In Text 2, Fama contends that "individual cognitive quirks cancel out across millions of market participants, ensuring that aggregate prices remain rational." Thus, Fama would argue that individual irrationality does not distort macro market prices.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Touches on macroeconomic talking points.', whyIncorrect: 'Fama denies that cognitive biases distort aggregate market prices, and neither text mentions government regulation.', coreTrap: 'External knowledge trap.' },
      C: { whyStudentsChoose: 'Sounds like a plausible academic critique.', whyIncorrect: 'Neither text discusses laboratory experiments or trading volumes.', coreTrap: 'Fabricated detail trap.' },
      D: { whyStudentsChoose: 'Focuses on the difference between retail and institutional trading.', whyIncorrect: 'Fama discusses financial markets generally, not restricting irrationality to retail goods.', coreTrap: 'False limitation trap.' }
    }
  },
  {
    id: 'm1-rw1-q8',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 8,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Deep-sea hydrothermal vent communities, discovered in 1977 along the Galápagos Rift, overturned the long-held biological assumption that sunlight is the indispensable foundation for all complex ecosystems. In the perpetual darkness of the abyssal zone, chemotrophic bacteria synthesize organic carbohydrates by oxidizing hydrogen sulfide emitted from geothermal fissures. These microbes form the base of a dense trophic web, supporting giant tube worms (*Riftia pachyptila*), vent crabs, and octopuses entirely independent of solar photosynthesis.',
    question: 'Which choice best states the main idea of the text?',
    choices: [
      { id: 'A', text: 'Hydrothermal vent ecosystems demonstrated that diverse life can thrive without energy derived from sunlight.' },
      { id: 'B', text: 'Chemotrophic bacteria are more evolutionarily ancient than photosynthetic terrestrial organisms.' },
      { id: 'C', text: 'Giant tube worms have developed special adaptations to filter hydrogen sulfide from vent fluids.' },
      { id: 'D', text: 'The Galápagos Rift remains the only oceanic region where complex benthic communities exist.' }
    ],
    answer: 'A',
    explanation: 'The text highlights how the discovery overturned the assumption that sunlight is essential for complex ecosystems by explaining that chemotrophic bacteria power an entire food web in total darkness.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Brings in evolutionary chronology.', whyIncorrect: 'The text does not compare the evolutionary age of chemotrophs and photosynthetic organisms.', coreTrap: 'Unsupported evolutionary claim.' },
      C: { whyStudentsChoose: 'Tube worms are highlighted in the text.', whyIncorrect: 'Tube worms are a supporting detail illustrating the ecosystem, not the primary main idea.', coreTrap: 'Supporting detail as main idea.' },
      D: { whyStudentsChoose: 'Galápagos Rift is mentioned as the discovery site.', whyIncorrect: 'The text does not state it is the only oceanic location with hydrothermal vents.', coreTrap: 'Extreme restriction trap.' }
    }
  },
  {
    id: 'm1-rw1-q9',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 9,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In Mary Shelley\'s 1818 novel *Frankenstein*, Victor Frankenstein\'s ambition is depicted not merely as scientific curiosity, but as a hubristic desire to transcend mortal limitations and achieve godlike renown. Victor explicitly reflects on the intoxicating allure of pioneering unmapped territory and obtaining power over biological life.',
    question: 'Which quotation from *Frankenstein* most effectively illustrates the claim in the text?',
    choices: [
      { id: 'A', text: '"A new species would bless me as its creator and source; many happy and excellent natures would owe their being to me."' },
      { id: 'B', text: '"I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body."' },
      { id: 'C', text: '"My limbs trembled and my teeth chattered, as I hurried on through the streets of the silent town."' },
      { id: 'D', text: '"The summer months passed while I was thus engaged, heart and soul, in one pursuit."' }
    ],
    answer: 'A',
    explanation: 'The claim states that Victor\'s ambition was a "hubristic desire to transcend mortal limitations and achieve godlike renown." Choice A directly quotes Victor dreaming of creating a new species that would "bless me as its creator" and owe their being to him, exemplifying godlike fame and hubris.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions infusing life into an inanimate body.', whyIncorrect: 'It describes the effort of the task, but lacks the specific element of seeking godlike renown and praise.', coreTrap: 'Partial match trap.' },
      C: { whyStudentsChoose: 'Shows his emotional state.', whyIncorrect: 'Depicts fear and exhaustion after the creation, not his intoxicating ambition.', coreTrap: 'Wrong narrative stage.' },
      D: { whyStudentsChoose: 'Shows intense dedication.', whyIncorrect: 'Describes his time spent working, but does not illustrate the desire for transcendent godlike status.', coreTrap: 'Vague dedication trap.' }
    }
  },
  {
    id: 'm1-rw1-q10',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 10,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    tableData: {
      title: 'Average Nitrogen Assimilation Rate and Biomass Yield Across Four Crop Varieties',
      headers: ['Crop Variety', 'Nitrogen Uptake Rate (mg/day)', 'Root Mass Ratio (%)', 'Total Biomass Yield (g/plant)'],
      rows: [
        ['Cultivar Alpha', '42.5', '31.2', '184.6'],
        ['Cultivar Beta', '58.1', '44.8', '246.3'],
        ['Cultivar Gamma', '36.4', '22.0', '152.1'],
        ['Cultivar Delta', '51.3', '38.5', '215.7']
      ]
    },
    passage: 'Agronomist Dr. Samuel Osei investigated how root architectural traits influence nutrient absorption and overall crop yield in drought-stressed environments. He hypothesized that crop varieties with higher proportional investment in root systems (root mass ratio) would exhibit higher daily nitrogen uptake and consequently achieve greater total biomass yield.',
    question: 'Which choice most effectively uses data from the table to support Dr. Osei\'s hypothesis?',
    choices: [
      { id: 'A', text: 'Cultivar Beta exhibited the highest root mass ratio (44.8%) and also achieved the highest nitrogen uptake rate (58.1 mg/day) and greatest biomass yield (246.3 g/plant).' },
      { id: 'B', text: 'Cultivar Gamma had a lower nitrogen uptake rate than Cultivar Alpha, despite both cultivars having similar root mass ratios.' },
      { id: 'C', text: 'Cultivar Delta produced 215.7 g/plant of biomass while maintaining a root mass ratio lower than that of Cultivar Gamma.' },
      { id: 'D', text: 'Cultivar Alpha achieved 184.6 g/plant of biomass with a nitrogen uptake rate exceeding 50 mg/day.' },
    ],
    answer: 'A',
    explanation: 'Dr. Osei hypothesized that higher root mass ratio correlates with higher nitrogen uptake and higher total biomass. Cultivar Beta represents the pinnacle of this positive relationship: with the highest root mass ratio (44.8%), it achieved the highest nitrogen uptake (58.1 mg/day) and highest biomass (246.3 g/plant), strongly confirming the hypothesis.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Compares two cultivars.', whyIncorrect: 'Alpha (31.2%) and Gamma (22.0%) do not have similar ratios, and the statement does not affirm the positive correlation trend.', coreTrap: 'Inaccurate data interpretation.' },
      C: { whyStudentsChoose: 'Cites exact numbers.', whyIncorrect: 'Delta (38.5%) has a HIGHER root mass ratio than Gamma (22.0%), making the statement factually incorrect based on the table.', coreTrap: 'Factual misstatement of data.' },
      D: { whyStudentsChoose: 'Mentions Cultivar Alpha.', whyIncorrect: 'Alpha\'s uptake was 42.5 mg/day, not exceeding 50 mg/day.', coreTrap: 'Data misreading trap.' }
    }
  },
  {
    id: 'm1-rw1-q11',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 11,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Paleoclimatologists analyzing speleothem calcite deposits from caves in the Yucatan Peninsula observed a stark drop in precipitation proxy indicators coinciding precisely with the Classic Maya societal contractions between 800 and 1000 CE. However, archaeological records indicate that while southern lowland Maya urban centers were largely abandoned during this megadrought, northern coastal Maya settlements such as Mayapán and Chichén Itzá continued to expand their civic architecture and trade networks. This divergence suggests that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'climatic fluctuations alone were not universally fatal to Maya societies and that regional adaptive strategies or geographical advantages mitigated drought impacts in the north.' },
      { id: 'B', text: 'speleothem calcite proxy records from the Yucatan caves were fundamentally flawed in their chronological dating of historical precipitation levels.' },
      { id: 'C', text: 'the northern coastal Maya centers possessed superior military capabilities that enabled them to conquer and depopulate the southern lowlands.' },
      { id: 'D', text: 'the megadrought between 800 and 1000 CE was confined exclusively to the southern lowlands without affecting the northern peninsula.' }
    ],
    answer: 'A',
    explanation: 'The passage highlights a contrast: despite an overarching regional megadrought, southern centers collapsed while northern centers flourished. This logically demonstrates that climate shocks were not universally destructive and that local factors (geography, coastal trade, adaptations) allowed northern cities to endure.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Questions the scientific methodology.', whyIncorrect: 'The text treats the speleothem data as factual evidence of a real regional drought.', coreTrap: 'Undermining premises trap.' },
      C: { whyStudentsChoose: 'Introduces a common historical trope (military conquest).', whyIncorrect: 'There is no textual support for military conquest or inter-regional warfare.', coreTrap: 'Extraneous assumption trap.' },
      D: { whyStudentsChoose: 'Explains the difference by asserting no drought in the north.', whyIncorrect: 'The cave records in Yucatan reflect broader regional climate, and the text emphasizes different cultural/urban outcomes despite the climate event.', coreTrap: 'Oversimplified geographic claim.' }
    }
  },
  {
    id: 'm1-rw1-q12',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 12,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Ornithologists studying the migratory patterns of the blackpoll warbler (*Setophaga striata*) tracked individuals flying non-stop over the Atlantic Ocean for up to 3 days, covering over 2,500 kilometers. Before departure, warblers undergo hyperphagia, nearly doubling their body mass by accumulating adipose lipids. When researchers simulated aerodynamic drag in wind-tunnel trials, warblers with lower pre-migratory lipid stores consistently terminated flights prematurely due to metabolic exhaustion. It can reasonably be inferred that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'sufficient lipid mass accumulation is an indispensable physiological requirement for blackpoll warblers to successfully complete their transoceanic flight.' },
      { id: 'B', text: 'blackpoll warblers rely primarily on insect prey caught mid-air during transoceanic flights to replenish energy.' },
      { id: 'C', text: 'aerodynamic drag over the Atlantic Ocean is substantially lower than that encountered over continental landmasses.' },
      { id: 'D', text: 'hyperphagia causes significant physiological impairment that limits warblers\' flying speed.' }
    ],
    answer: 'A',
    explanation: 'The text explains that the flight is non-stop across open ocean, birds double their mass with fat (lipids) beforehand, and birds with lower lipid stores suffer metabolic exhaustion and cannot sustain the flight. Therefore, accumulating adequate lipid reserves is essential for completing the journey.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Assumes birds eat while flying.', whyIncorrect: 'The text states the flight is a non-stop transoceanic crossing powered by stored pre-migratory lipids.', coreTrap: 'Contradicts non-stop energy source clue.' },
      C: { whyStudentsChoose: 'Focuses on the ocean environment.', whyIncorrect: 'The passage makes no comparison between ocean and continental drag levels.', coreTrap: 'Unwarranted comparison.' },
      D: { whyStudentsChoose: 'Sees doubled mass as a burden.', whyIncorrect: 'Hyperphagia provides necessary fuel, not an impairment.', coreTrap: 'Opposite effect trap.' }
    }
  },
  {
    id: 'm1-rw1-q13',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 13,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'During the Renaissance, Venetian glassmakers on the island of Murano perfected the production of *cristallo*, an exceptionally transparent ______ this revolutionary material allowed craftsmen to create intricate mirrors and fine lenses that dominated European luxury trade for centuries.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'glass; and' },
      { id: 'B', text: 'glass, and' },
      { id: 'C', text: 'glass, this' },
      { id: 'D', text: 'glass; this' }
    ],
    answer: 'D',
    explanation: 'The sentence contains two independent clauses: "During the Renaissance... perfected the production of cristallo, an exceptionally transparent glass" and "this revolutionary material allowed craftsmen...". A semicolon properly joins two independent clauses without a coordinating conjunction.',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Thinks semicolon + and is extra formal.', whyIncorrect: 'Using both a semicolon and a coordinating conjunction ("and") is ungrammatical when joining two standard independent clauses.', coreTrap: 'Punctuation redundancy.' },
      B: { whyStudentsChoose: 'Recognizes comma + and rule.', whyIncorrect: 'The original sentence fragment after the blank starts with "this revolutionary material", not "and this...". Option B would introduce two "and"s or clash.', coreTrap: 'Structural mismatch.' },
      C: { whyStudentsChoose: 'Uses a comma to connect clauses.', whyIncorrect: 'Creates a comma splice between two independent clauses.', coreTrap: 'Comma splice error.' }
    }
  },
  {
    id: 'm1-rw1-q14',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 14,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'The architectural firm unveiled its design for the eco-district, incorporating passive solar heating, green rooftop ______ permeable pavement systems that naturally filter urban stormwater runoff.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'canopies, and' },
      { id: 'B', text: 'canopies, and,' },
      { id: 'C', text: 'canopies and,' },
      { id: 'D', text: 'canopies and' }
    ],
    answer: 'A',
    explanation: 'The sentence features a three-item list in a series: (1) "passive solar heating", (2) "green rooftop canopies", and (3) "permeable pavement systems...". Standard English conventions require a comma after the second item before the coordinating conjunction "and" (Oxford comma).',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Over-punctuates for pauses.', whyIncorrect: 'Placing a comma after "and" is ungrammatical in a simple parallel list.', coreTrap: 'Errant comma after conjunction.' },
      C: { whyStudentsChoose: 'Mixes up comma placement.', whyIncorrect: 'The comma must precede "and", not follow it.', coreTrap: 'Misplaced series comma.' },
      D: { whyStudentsChoose: 'Leaves out the Oxford comma.', whyIncorrect: 'Omitting the serial comma in standard DSAT conventions reduces list clarity.', coreTrap: 'Missing list punctuation.' }
    }
  },
  {
    id: 'm1-rw1-q15',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 15,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Subject-Verb Agreement)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'The discovery of extremophile microorganisms living in hyper-saline subglacial lakes beneath Antarctic ice sheets ______ new empirical support to astrobiological models regarding potential life in the subsurface oceans of Jupiter\'s moon Europa.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'provide' },
      { id: 'B', text: 'provides' },
      { id: 'C', text: 'have provided' },
      { id: 'D', text: 'are providing' }
    ],
    answer: 'B',
    explanation: 'The grammatical subject of the sentence is the singular noun "discovery" ("The discovery of extremophile microorganisms living in hyper-saline subglacial lakes..."). Prepositional phrases and participial modifiers do not alter the number of the subject. A singular subject requires the singular verb "provides".',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Matches the plural nouns "microorganisms", "lakes", or "sheets" right before the verb.', whyIncorrect: 'These nouns are in prepositional phrases; the true subject is singular "discovery".', coreTrap: 'Proximity agreement trap.' },
      C: { whyStudentsChoose: 'Matches plural "sheets" with "have".', whyIncorrect: 'Subject is singular "discovery", which would require "has provided".', coreTrap: 'Plural auxiliary verb error.' },
      D: { whyStudentsChoose: 'Matches plural intervening nouns.', whyIncorrect: '"Are" is plural and clashes with singular "discovery".', coreTrap: 'Plural progressive verb error.' }
    }
  },
  {
    id: 'm1-rw1-q16',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 16,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Modifiers)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Synthesized by marine phytoplankton and emitted into the troposphere, ______ aerosol particles that act as cloud condensation nuclei, fundamentally altering cloud albedo and regional climate.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'the solar radiation is reflected by dimethyl sulfide as it oxidizes into' },
      { id: 'B', text: 'climate researchers have tracked dimethyl sulfide as it converts into' },
      { id: 'C', text: 'dimethyl sulfide undergoes photochemical oxidation to produce' },
      { id: 'D', text: 'oxidation of dimethyl sulfide occurs rapidly, creating' }
    ],
    answer: 'C',
    explanation: 'The introductory participial phrase is "Synthesized by marine phytoplankton and emitted into the troposphere". The modifier must logically describe the noun immediately following the comma. Dimethyl sulfide is the chemical compound synthesized by phytoplankton and emitted into the air. Therefore, "dimethyl sulfide" must immediately follow the comma.',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Mentions solar radiation and dimethyl sulfide.', whyIncorrect: '"Solar radiation" was not synthesized by phytoplankton, creating a dangling modifier.', coreTrap: 'Dangling modifier trap.' },
      B: { whyStudentsChoose: 'Focuses on the scientists.', whyIncorrect: '"Climate researchers" were not synthesized by phytoplankton.', coreTrap: 'Dangling agent modifier.' },
      D: { whyStudentsChoose: 'Sounds formal and passive.', whyIncorrect: '"Oxidation" (a chemical process) is not synthesized by phytoplankton.', coreTrap: 'Abstract process modifier mismatch.' }
    }
  },
  {
    id: 'm1-rw1-q17',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 17,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Pronoun-Antecedent Agreement)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'When an endangered coral reef experiences elevated sea surface temperatures, ______ symbiotic zooxanthellae algae are expelled, causing the coral colony to lose both its vibrant pigmentation and its primary source of photosynthetic nourishment.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'their' },
      { id: 'B', text: 'it\'s' },
      { id: 'C', text: 'its' },
      { id: 'D', text: 'they\'re' }
    ],
    answer: 'C',
    explanation: 'The antecedent is the singular noun phrase "an endangered coral reef". The possessive pronoun referring back to a singular non-human entity is "its".',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Thinks of corals as plural organisms.', whyIncorrect: 'The grammatical subject in the clause is the singular "an endangered coral reef".', coreTrap: 'Singular-plural agreement error.' },
      B: { whyStudentsChoose: 'Confuses possessive "its" with the contraction "it\'s".', whyIncorrect: '"It\'s" is a contraction for "it is" or "it has", which would read "it is symbiotic zooxanthellae...", ungrammatical here.', coreTrap: 'Apostrophe possessive confusion.' },
      D: { whyStudentsChoose: 'Confuses "they\'re" with possessive.', whyIncorrect: '"They\'re" means "they are".', coreTrap: 'Contraction confusion.' }
    }
  },
  {
    id: 'm1-rw1-q18',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 18,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Parenthetical Elements)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Chemist Rosalind Franklin—whose critical X-ray diffraction photograph of crystallized DNA, Photo 51, revealed the helical structure of the ______ received posthumous recognition after decades of relative obscurity in mainstream accounts of the discovery.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'molecule—' },
      { id: 'B', text: 'molecule,' },
      { id: 'C', text: 'molecule' },
      { id: 'D', text: 'molecule;' }
    ],
    answer: 'A',
    explanation: 'The parenthetical clause begins with an em-dash ("Franklin—whose critical..."). To maintain parallel nonrestrictive punctuation, the parenthetical phrase must be closed with a matching em-dash before the main verb "received".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Prefers comma punctuation.', whyIncorrect: 'Mismatches an opening em-dash with a closing comma.', coreTrap: 'Mismatched delimiter trap.' },
      C: { whyStudentsChoose: 'Leaves off punctuation.', whyIncorrect: 'Leaves the parenthetical open without closing punctuation.', coreTrap: 'Missing closure.' },
      D: { whyStudentsChoose: 'Thinks a semicolon marks a major pause.', whyIncorrect: 'A semicolon cannot close a parenthetical modifier inside a single main clause.', coreTrap: 'Misused semicolon.' }
    }
  },
  {
    id: 'm1-rw1-q19',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 19,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Solar photovoltaic cells convert sunlight directly into electricity with zero direct greenhouse gas emissions during operation. ______, the mining and refining of rare earth silicon and cadmium telluride for panel fabrication generate substantial toxic effluents if improperly regulated.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'However' },
      { id: 'B', text: 'Furthermore' },
      { id: 'C', text: 'Similarly' },
      { id: 'D', text: 'Therefore' }
    ],
    answer: 'A',
    explanation: 'The first sentence details a major environmental benefit of solar cells (zero operational emissions). The second sentence introduces a significant environmental drawback (manufacturing generates toxic effluents). "However" correctly establishes this contrast.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks it is adding more facts about solar energy.', whyIncorrect: '"Furthermore" indicates continuation or addition, but the sentences present conflicting environmental impacts.', coreTrap: 'Addition vs contrast error.' },
      C: { whyStudentsChoose: 'Looks at both sentences as environmental topics.', whyIncorrect: '"Similarly" implies an analogy, but here the points are opposing.', coreTrap: 'False similarity trap.' },
      D: { whyStudentsChoose: 'Thinks manufacturing is a result of operation.', whyIncorrect: '"Therefore" indicates cause-and-effect, which does not link these two opposing points.', coreTrap: 'False causation trap.' }
    }
  },
  {
    id: 'm1-rw1-q20',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 20,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In high-velocity fluid dynamics, boundary layer separation occurs when the fluid decelerates rapidly against an adverse pressure gradient, resulting in turbulent vortex shedding. Aeronautical engineers install micro-vortex generators along aircraft wings to inject high-energy fluid into the sluggish boundary layer. ______, separation is delayed, substantially reducing aerodynamic drag at cruising altitudes.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'Consequently' },
      { id: 'B', text: 'In contrast' },
      { id: 'C', text: 'Nonetheless' },
      { id: 'D', text: 'For instance' }
    ],
    answer: 'A',
    explanation: 'The engineers install micro-vortex generators to inject high-energy fluid. As a direct result of this engineering intervention, boundary separation is delayed and drag is reduced. "Consequently" correctly expresses this cause-and-effect relationship.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks reducing drag contrasts with separation.', whyIncorrect: 'The delay of separation is the intended positive effect, not a contradictory contrast.', coreTrap: 'Contrast misinterpretation.' },
      C: { whyStudentsChoose: 'Sounds formal.', whyIncorrect: '"Nonetheless" indicates concession/contrast, whereas the relationship is purely causative.', coreTrap: 'Concession trap.' },
      D: { whyStudentsChoose: 'Thinks drag reduction is an example of an aircraft wing.', whyIncorrect: 'It is the outcome/effect of the action, not an illustrative example of an object.', coreTrap: 'Example vs cause error.' }
    }
  },
  {
    id: 'm1-rw1-q21',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 21,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Sociologist Pierre Bourdieu argued that educational institutions do not merely teach objective technical skills; they reward the cultural capital—speech patterns, aesthetic tastes, and social etiquette—already possessed by students from elite backgrounds. ______, schools often legitimize and reproduce existing socioeconomic hierarchies under the guise of neutral meritocracy.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'In doing so' },
      { id: 'B', text: 'Incidentally' },
      { id: 'C', text: 'Previously' },
      { id: 'D', text: 'In spite of this' }
    ],
    answer: 'A',
    explanation: 'By rewarding the cultural capital of elite students (the action in sentence 1), schools accomplish the reproduction of socioeconomic inequality (the result in sentence 2). "In doing so" perfectly connects the specific mechanism to its broader societal effect.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks it introduces a minor secondary observation.', whyIncorrect: '"Incidentally" suggests a casual, unrelated afterthought, whereas this is the primary sociological conclusion.', coreTrap: 'Trivializing transition.' },
      C: { whyStudentsChoose: 'Thinks of historical reproduction.', whyIncorrect: '"Previously" indicates a chronological shift to the past, which does not fit.', coreTrap: 'Temporal mismatch.' },
      D: { whyStudentsChoose: 'Thinks meritocracy contrasts with inequality.', whyIncorrect: '"In spite of this" indicates unexpected concession, whereas reproducing inequality is the direct consequence of how schools reward cultural capital.', coreTrap: 'Concession error.' }
    }
  },
  {
    id: 'm1-rw1-q22',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 22,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• The James Webb Space Telescope (JWST) was launched in December 2021.\n• JWST observes primarily in the infrared spectrum.\n• The Hubble Space Telescope observes primarily in ultraviolet and optical light.\n• Infrared observation allows JWST to see through dense cosmic dust clouds.\n• This capability enables JWST to image the earliest galaxies formed after the Big Bang.',
    question: 'The student wants to highlight a key advantage of JWST\'s observation capabilities over Hubble\'s. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'Unlike Hubble, which observes primarily in optical and ultraviolet light, JWST observes in the infrared, allowing it to peer through cosmic dust to image the universe\'s earliest galaxies.' },
      { id: 'B', text: 'Launched in December 2021, the James Webb Space Telescope is designed to study cosmic dust and space phenomena.' },
      { id: 'C', text: 'The Hubble Space Telescope and the James Webb Space Telescope both capture images of galaxies formed after the Big Bang.' },
      { id: 'D', text: 'By observing in ultraviolet and optical light, space telescopes are able to provide detailed astronomical imagery.' }
    ],
    answer: 'A',
    explanation: 'The goal is to highlight a key advantage of JWST over Hubble. Choice A explicitly compares Hubble\'s optical/UV focus with JWST\'s infrared focus and emphasizes JWST\'s advantage: penetrating cosmic dust to image the earliest galaxies.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions JWST and launch date.', whyIncorrect: 'Fails to compare JWST to Hubble and does not state the comparative advantage.', coreTrap: 'Goal neglect.' },
      C: { whyStudentsChoose: 'Mentions both telescopes.', whyIncorrect: 'Focuses on similarity rather than highlighting JWST\'s advantage over Hubble.', coreTrap: 'False equivalence.' },
      D: { whyStudentsChoose: 'Discusses space telescopes generally.', whyIncorrect: 'Does not mention JWST or its infrared capabilities.', coreTrap: 'Off-target generalization.' }
    }
  },
  {
    id: 'm1-rw1-q23',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 23,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• Biochar is a carbon-rich charcoal produced via the pyrolysis of agricultural biomass.\n• Incorporating biochar into soil increases nutrient retention and aeration.\n• Biochar remains stable in soil for centuries, sequestering carbon that would otherwise enter the atmosphere as carbon dioxide.\n• In 2023, soil scientist Dr. Amina Diallo led a 12-month field trial in Senegal testing biochar on peanut crops.\n• The biochar-treated plots exhibited a 28% increase in peanut yield and improved soil moisture during dry spells.',
    question: 'The student wants to summarize Dr. Diallo\'s research findings. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'Dr. Diallo\'s 2023 field trial in Senegal demonstrated that treating peanut crop plots with biochar increased yield by 28% while improving soil moisture retention.' },
      { id: 'B', text: 'Biochar is produced through biomass pyrolysis and can sequester carbon in agricultural soils for hundreds of years.' },
      { id: 'C', text: 'Peanut crops in Senegal require enhanced aeration and moisture during recurring regional dry spells.' },
      { id: 'D', text: 'In 2023, Dr. Diallo studied how pyrolysis transforms agricultural biomass into stable, carbon-rich soil additives.' }
    ],
    answer: 'A',
    explanation: 'The specific prompt goal is to summarize Dr. Diallo\'s research findings. Choice A states her trial on peanut crops in Senegal and gives the concrete results: a 28% yield increase and improved soil moisture.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Accurate general info on biochar.', whyIncorrect: 'Does not mention Dr. Diallo or her research findings.', coreTrap: 'Ignored specific prompt goal.' },
      C: { whyStudentsChoose: 'Mentions Senegal and peanuts.', whyIncorrect: 'Speculates about crop needs rather than summarizing the trial findings.', coreTrap: 'Irrelevant claim.' },
      D: { whyStudentsChoose: 'Mentions Dr. Diallo.', whyIncorrect: 'Focuses on the definition/production of biochar rather than her field trial results.', coreTrap: 'Misstated focus of study.' }
    }
  },
  {
    id: 'm1-rw1-q24',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 24,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'The following is adapted from Herman Melville\'s 1851 novel *Moby-Dick*.\n\n"There is all the difference in the world between paying and being paid. The act of paying is perhaps the most uncomfortable infliction that the two orchard thieves entailed upon us. But *being paid*,—what will compare with it? The urbane activity with which a man receives money is really marvellous, considering that we so earnestly believe money to be the root of all earthly ills, and that on no account can a monied man enter heaven. Ah! how cheerfully we consign ourselves to perdition!"',
    question: 'Which choice best describes the main function of the underlined phrase ("how cheerfully we consign ourselves to perdition") in the passage as a whole?',
    choices: [
      { id: 'A', text: 'It uses ironic hyperbole to highlight the hypocrisy of people eagerly embracing money despite moral condemnations of wealth.' },
      { id: 'B', text: 'It expresses the narrator\'s sincere theological despair over humanity\'s inevitable spiritual damnation.' },
      { id: 'C', text: 'It warns the reader about the strict financial penalties imposed on merchant sailors who violate contracts.' },
      { id: 'D', text: 'It provides a historical explanation for the economic disparities between ship captains and common deckhands.' }
    ],
    answer: 'A',
    explanation: 'The narrator humorously and ironically remarks that while society professes to believe that money is "the root of all earthly ills" preventing entry into heaven, people still receive money with "urbane activity" and cheerful willingness to "consign ourselves to perdition" (damnation). It is an ironic hyperbolic comment on human hypocrisy regarding wealth.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Takes "perdition" literally as serious religious doom.', whyIncorrect: 'The tone is playful and satirical, not sincere despair.', coreTrap: 'Literal interpretation of satire.' },
      C: { whyStudentsChoose: 'Connects to maritime themes in Moby-Dick.', whyIncorrect: 'The passage is discussing a universal philosophical observation about money, not maritime contract penalties.', coreTrap: 'External plot association.' },
      D: { whyStudentsChoose: 'Thinks of economic disparities.', whyIncorrect: 'No comparison between captains and deckhands is made.', coreTrap: 'Unrelated sociological spin.' }
    }
  },
  {
    id: 'm1-rw1-q25',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 25,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In the study of cognitive linguistics, the "embodied cognition" paradigm posits that abstract conceptual metaphors are grounded directly in sensorimotor experience. For example, when individuals process concepts related to social warmth, neuroimaging shows activation in the insular cortex—the same neurological region that registers physical temperature sensations. Furthermore, subjects holding a warm cup of coffee judge strangers as significantly more trustworthy and interpersonally warm than do subjects holding an iced beverage.',
    question: 'Which choice best states the primary claim of the embodied cognition paradigm as presented in the text?',
    choices: [
      { id: 'A', text: 'Abstract cognitive concepts and social evaluations are physically rooted in the brain\'s sensory and motor systems.' },
      { id: 'B', text: 'Physical temperature is the single most influential determinant of all interpersonal social relationships.' },
      { id: 'C', text: 'The insular cortex is responsible for all decision-making processes in the human brain.' },
      { id: 'D', text: 'Linguistic metaphors are arbitrary cultural constructs that operate independently of biological sensation.' }
    ],
    answer: 'A',
    explanation: 'The text defines embodied cognition as the paradigm where "abstract conceptual metaphors are grounded directly in sensorimotor experience" and demonstrates this with the neural and behavioral overlap between physical warmth and social warmth.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Focuses on the coffee temperature experiment.', whyIncorrect: '"Single most influential determinant of all" is an extreme exaggeration.', coreTrap: 'Extreme quantifier trap.' },
      C: { whyStudentsChoose: 'Insular cortex is mentioned.', whyIncorrect: 'The text states it processes temperature and social warmth, not "all decision-making".', coreTrap: 'Overstated anatomical scope.' },
      D: { whyStudentsChoose: 'Discusses linguistics and metaphors.', whyIncorrect: 'This is the exact opposite of the embodied cognition claim, which asserts they are NOT independent of sensation.', coreTrap: 'Direct contradiction.' }
    }
  },
  {
    id: 'm1-rw1-q26',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 26,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Essential vs Nonessential Clauses)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'Biochemist Katalin Karikó\'s groundbreaking modifications to synthetic mRNA ______ enabled the molecule to bypass destructive cellular immune defenses and laid the foundational framework for rapid vaccine deployment during the global pandemic.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'molecules' },
      { id: 'B', text: 'molecules,' },
      { id: 'C', text: 'molecules—' },
      { id: 'D', text: 'molecules;' }
    ],
    answer: 'A',
    explanation: 'The sentence structure is: "Biochemist Katalin Karikó\'s groundbreaking modifications to synthetic mRNA molecules enabled the molecule...". The subject is "modifications" and the main verb is "enabled". No punctuation should separate the subject noun phrase from its verb.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Inserts a pause before the verb.', whyIncorrect: 'Placing a single comma between a subject and its predicate verb is a grammatical error.', coreTrap: 'Subject-verb comma intrusion.' },
      C: { whyStudentsChoose: 'Likes dramatic dash styling.', whyIncorrect: 'A dash cannot separate a subject from its verb without a corresponding closing dash for a modifier.', coreTrap: 'Errant dash insertion.' },
      D: { whyStudentsChoose: 'Attempts to join clauses.', whyIncorrect: 'A semicolon cannot be placed between a subject and its verb.', coreTrap: 'Unwarranted semicolon.' }
    }
  },
  {
    id: 'm1-rw1-q27',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 1,
    questionNumber: 27,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• Urban heat islands (UHIs) cause metropolitan areas to be up to 7°F warmer than surrounding rural areas.\n• Impervious asphalt and concrete surfaces absorb solar radiation and reradiate thermal energy.\n• High-albedo cool pavements utilize reflective aggregate coatings to reflect up to 40% of incident sunlight.\n• In 2022, Phoenix, Arizona, installed 100 miles of cool pavement in residential neighborhoods.\n• Thermal sensors recorded average surface temperature reductions of 10.5°F to 12.0°F on cool pavement streets compared to traditional asphalt.',
    question: 'The student wants to present the Phoenix project as an effective real-world solution to the urban heat island effect. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'To mitigate urban heat island effects caused by heat-absorbing asphalt, Phoenix installed 100 miles of reflective cool pavement in 2022, successfully lowering street surface temperatures by up to 12.0°F.' },
      { id: 'B', text: 'Urban heat islands occur when impervious asphalt and concrete surfaces absorb solar radiation and elevate urban temperatures by up to 7°F.' },
      { id: 'C', text: 'In 2022, Phoenix, Arizona, applied reflective coatings to residential streets, which reflect up to 40% of sunlight.' },
      { id: 'D', text: 'High-albedo cool pavements are engineered with reflective aggregates that prevent traditional asphalt from reradiating thermal energy.' }
    ],
    answer: 'A',
    explanation: 'The prompt requires presenting the Phoenix project as an effective real-world solution to urban heat islands. Choice A explicitly connects the problem (urban heat islands caused by asphalt), the real-world action (Phoenix installing 100 miles of cool pavement), and the measured effectiveness (lowering surface temperatures by up to 12.0°F).',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Defines the urban heat island problem.', whyIncorrect: 'Does not mention the Phoenix project or show a solution in action.', coreTrap: 'Problem without solution.' },
      C: { whyStudentsChoose: 'Mentions Phoenix.', whyIncorrect: 'Omits the UHI context and the measured real-world temperature reduction outcome.', coreTrap: 'Incomplete resolution.' },
      D: { whyStudentsChoose: 'Explains the technology.', whyIncorrect: 'Focuses on the generic mechanism rather than the specific Phoenix implementation and results.', coreTrap: 'Generic technology description.' }
    }
  }
];
