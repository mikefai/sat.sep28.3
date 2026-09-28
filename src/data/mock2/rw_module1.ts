import { Question } from '../../types/exam';

export const mock2_rw_module1: Question[] = [
  {
    id: 'm2-rw1-q1',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'The antique pocket watch, though submerged in silt for over a century, remained remarkably ______; once cleaned and wound by the horologist, its balance wheel oscillated with near-perfect rhythmic precision.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'functional' },
      { id: 'B', text: 'cumbersome' },
      { id: 'C', text: 'archaic' },
      { id: 'D', text: 'ornate' }
    ],
    answer: 'A',
    explanation: 'The sentence emphasizes that once cleaned and wound, the watch\'s balance wheel "oscillated with near-perfect rhythmic precision." This demonstrates that the watch still worked and operated properly. "Functional" means capable of working or operating, making it the most logical fit.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Associated with heavy antique objects.', whyIncorrect: '"Cumbersome" means clumsy or unwieldy, which is irrelevant to its operational state.', coreTrap: 'Irrelevant attribute.' },
      C: { whyStudentsChoose: 'Connects to its antique status.', whyIncorrect: '"Archaic" means ancient or outdated, but the contrast word "remarkably" requires an adjective celebrating that it still ran.', coreTrap: 'Surface association trap.' },
      D: { whyStudentsChoose: 'Watches are often decorative.', whyIncorrect: '"Ornate" means elaborately decorated, which does not address its mechanical working condition.', coreTrap: 'Decorative vs mechanical confusion.' }
    }
  },
  {
    id: 'm2-rw1-q2',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In her pioneering architectural monograph, Lina Bo Bardi argued that public buildings should not be designed as ______ monuments meant solely for passive admiration; rather, they must serve as permeable civic conduits that dynamically invite democratic participation.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'static' },
      { id: 'B', text: 'accessible' },
      { id: 'C', text: 'utilitarian' },
      { id: 'D', text: 'ephemeral' }
    ],
    answer: 'A',
    explanation: 'The sentence sets up a sharp contrast: buildings should not be [blank] monuments for "passive admiration," but rather "permeable civic conduits that dynamically invite democratic participation." "Static" (unchanging, inactive, fixed) directly contrasts with "permeable" and "dynamically invite."',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Connects to public buildings.', whyIncorrect: '"Accessible" is what Bo Bardi supports, not what she rejects with "not... solely for passive admiration".', coreTrap: 'Contrast inversion trap.' },
      C: { whyStudentsChoose: 'Relates to architectural utility.', whyIncorrect: '"Utilitarian" means purely practical, which opposes purely passive ornamental monuments.', coreTrap: 'Meaning mismatch.' },
      D: { whyStudentsChoose: 'Sounds artistic.', whyIncorrect: '"Ephemeral" means short-lived, whereas monuments are typically long-lasting.', coreTrap: 'Temporal attribute error.' }
    }
  },
  {
    id: 'm2-rw1-q3',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 3,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Although early telemetry from the deep-space probe indicated a catastrophic power failure, systems engineers determined that the outage was merely ______; secondary solar panels automatically rebooted within twenty minutes, restoring all primary communication relays.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'transient' },
      { id: 'B', text: 'irreversible' },
      { id: 'C', text: 'spurious' },
      { id: 'D', text: 'systemic' }
    ],
    answer: 'A',
    explanation: 'The context contrasts the fear of a "catastrophic" outage with the fact that it resolved quickly ("rebooted within twenty minutes, restoring all primary communication relays"). "Transient" means lasting only for a short time or impermanent.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Associated with catastrophic failure.', whyIncorrect: '"Irreversible" means permanent, which contradicts the fact that it rebooted in 20 minutes.', coreTrap: 'Antonym trap.' },
      C: { whyStudentsChoose: 'Thinks the alarm was fake.', whyIncorrect: '"Spurious" means false or fake; the outage was real but brief.', coreTrap: 'False event vs brief event.' },
      D: { whyStudentsChoose: 'Sounds technical.', whyIncorrect: '"Systemic" means affecting the entire system permanently.', coreTrap: 'Scope exaggeration.' }
    }
  },
  {
    id: 'm2-rw1-q4',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 4,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'The diplomat was renowned for her ______ rhetoric; in tense multilateral negotiations, she deftly avoided provocative accusations, choosing instead phrases so meticulously balanced that opposing factions each found reassurance in her declarations.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'circumspect' },
      { id: 'B', text: 'bellicose' },
      { id: 'C', text: 'inflammatory' },
      { id: 'D', text: 'dogmatic' }
    ],
    answer: 'A',
    explanation: 'The diplomat "deftly avoided provocative accusations" and used "meticulously balanced" phrasing that reassured opposing factions. "Circumspect" means wary, prudent, guarded, and diplomatic in speech.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sounds formal.', whyIncorrect: '"Bellicose" means warlike or aggressive, contradicting her avoidance of provocation.', coreTrap: 'Direct antonym.' },
      C: { whyStudentsChoose: 'Associated with political speech.', whyIncorrect: '"Inflammatory" means intended to arouse anger, the opposite of soothing balanced rhetoric.', coreTrap: 'Opposite meaning trap.' },
      D: { whyStudentsChoose: 'Relates to firm political positions.', whyIncorrect: '"Dogmatic" means asserting rigid principles inflexibly.', coreTrap: 'Inflexible vs balanced trap.' }
    }
  },
  {
    id: 'm2-rw1-q5',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 5,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'Literary critic Harold Bloom maintained that strong poets do not merely replicate their predecessors; rather, they engage in a profound agon, executing an intentional misprision to ______ the anxiety of influence and carve out original aesthetic territory.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'assuage' },
      { id: 'B', text: 'amplify' },
      { id: 'C', text: 'promulgate' },
      { id: 'D', text: 'engender' }
    ],
    answer: 'A',
    explanation: 'The passage explains how poets struggle with predecessor influence and perform creative reinterpretations ("misprision") to handle or relieve ("assuage") their "anxiety of influence" so they can establish their own originality. "Assuage" means to make an unpleasant feeling less intense or soothe.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks the conflict increases anxiety.', whyIncorrect: '"Amplify" means increase, but their creative struggle aims to overcome/soothe that burden.', coreTrap: 'Inverted emotional trajectory.' },
      C: { whyStudentsChoose: 'Academic-sounding verb.', whyIncorrect: '"Promulgate" means proclaim or declare publicly.', coreTrap: 'Vocabulary distractor.' },
      D: { whyStudentsChoose: 'Relates to creation.', whyIncorrect: '"Engender" means bring into existence, which contradicts mitigating an existing anxiety.', coreTrap: 'Origin vs mitigation confusion.' }
    }
  },
  {
    id: 'm2-rw1-q6',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 6,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'For over a century, economists relied on the Phillips Curve to model an inverse relationship between inflation and unemployment: as unemployment falls, wage pressures theoretically drive inflation higher. However, during the stagflation of the 1970s and the prolonged low-inflation expansion of the 2010s, this empirical correlation broke down repeatedly. In response, modern macroeconomists developed expectations-augmented Phillips Curves that incorporate inflation expectations and supply shocks, demonstrating that the relationship is far more contingent on structural expectations than previously assumed.',
    question: 'Which choice best describes the primary purpose of the text?',
    choices: [
      { id: 'A', text: 'To trace the historical evolution and theoretical refinement of an economic model in response to empirical challenges.' },
      { id: 'B', text: 'To prove that the Phillips Curve is completely useless for predicting any macroeconomic phenomena.' },
      { id: 'C', text: 'To explain why central banks in the 1970s intentionally caused stagflation through reckless monetary policy.' },
      { id: 'D', text: 'To argue that inflation expectations are the sole driver of all labor market fluctuations.' }
    ],
    answer: 'A',
    explanation: 'The passage traces the original Phillips Curve, details empirical breakdowns in the 1970s and 2010s, and explains how economists refined the model by adding expectations, fulfilling the structure of tracing evolution and refinement.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Notices that the original model broke down.', whyIncorrect: 'The model was refined and updated, not dismissed as completely useless.', coreTrap: 'Extreme dismissal trap.' },
      C: { whyStudentsChoose: 'Mentions 1970s stagflation.', whyIncorrect: 'Does not accuse central banks of intentionally creating stagflation.', coreTrap: 'Fabricated intent.' },
      D: { whyStudentsChoose: 'Focuses on inflation expectations.', whyIncorrect: '"Sole driver of all" is an extreme overstatement.', coreTrap: 'Extreme quantifier trap.' }
    }
  },
  {
    id: 'm2-rw1-q7',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 7,
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Text 1\nHistorian Frederick Jackson Turner presented his famous "Frontier Thesis" in 1893, arguing that the continuous availability of unsettled western land was the single defining factor that forged American democracy, individualism, and egalitarian institutions by forcing settlers to continuously adapt to wilderness conditions.\n\nText 2\nNew Western Historian Patricia Nelson Limerick contends that Turner\'s thesis romanticized colonization and ignored the complex racial, economic, and environmental dynamics of the American West. Limerick views the West not as an empty, vanishing "frontier" of rugged individualists, but as an enduring crossroads of conquest, corporate resource extraction, and multiethnic interaction.',
    question: 'Based on the texts, how does Limerick (Text 2) characterize the setting of the American West in contrast to Turner\'s portrayal (Text 1)?',
    choices: [
      { id: 'A', text: 'As a contested site of multiethnic convergence and corporate enterprise rather than an empty wilderness fostering individualist democracy.' },
      { id: 'B', text: 'As an uninhabitable desert wasteland that halted democratic expansion.' },
      { id: 'C', text: 'As an isolated region completely untouched by federal or corporate institutions.' },
      { id: 'D', text: 'As a purely agricultural sanctuary that avoided industrialization.' }
    ],
    answer: 'A',
    explanation: 'In Text 1, Turner portrays the West as unsettled wilderness where rugged individuals forged democracy. In Text 2, Limerick refutes the "empty frontier" myth and describes it as a crossroads of conquest, multiethnic interaction, and corporate extraction.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Looks for negative descriptions of the West.', whyIncorrect: 'She describes it as a dynamic, populated crossroads, not an uninhabitable wasteland.', coreTrap: 'Mischaracterized critique.' },
      C: { whyStudentsChoose: 'Mentions rugged isolation.', whyIncorrect: 'She explicitly highlights corporate resource extraction and institutions.', coreTrap: 'Contradiction of text.' },
      D: { whyStudentsChoose: 'Connects to Western farming.', whyIncorrect: 'Corporate resource extraction directly contradicts an agricultural sanctuary avoiding industry.', coreTrap: 'Pastoral misconception.' }
    }
  },
  {
    id: 'm2-rw1-q8',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 8,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Mycoremediation is an innovative bioremediation technique that utilizes fungal mycelium to decontaminate polluted soil and water. Fungi secrete potent extracellular enzymes—such as laccases and peroxidases—capable of breaking down complex, stubborn aromatic hydrocarbons, heavy petroleum residues, and synthetic pesticides into non-toxic compounds like carbon dioxide and water. Because fungal mycelial networks can spread rapidly across large underground areas, mycoremediation offers a cost-effective, non-invasive alternative to traditional mechanical soil excavation.',
    question: 'Which choice best states the main idea of the text?',
    choices: [
      { id: 'A', text: 'Fungal mycelium can cost-effectively degrade environmental toxins into harmless substances through enzymatic secretion.' },
      { id: 'B', text: 'Mechanical soil excavation is the most environmentally damaging method of waste cleanup.' },
      { id: 'C', text: 'Synthetic pesticides are the primary cause of global soil hydrocarbon contamination.' },
      { id: 'D', text: 'Laccases and peroxidases are the only enzymes capable of breaking down petroleum.' }
    ],
    answer: 'A',
    explanation: 'The passage explains that mycoremediation uses fungal mycelium and extracellular enzymes to break down pollutants into non-toxic compounds as a cost-effective alternative to excavation.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions traditional excavation.', whyIncorrect: 'The text does not call excavation "the most environmentally damaging method".', coreTrap: 'Unsupported superlative.' },
      C: { whyStudentsChoose: 'Mentions pesticides and hydrocarbons.', whyIncorrect: 'Does not state pesticides are the primary cause of all contamination.', coreTrap: 'Distorted causality.' },
      D: { whyStudentsChoose: 'Mentions laccases and peroxidases.', whyIncorrect: 'Text mentions them as examples ("such as"), not the "only" enzymes.', coreTrap: 'Extreme exclusivity.' }
    }
  },
  {
    id: 'm2-rw1-q9',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 9,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In F. Scott Fitzgerald\'s 1925 novel *The Great Gatsby*, Jay Gatsby\'s extravagant parties are depicted not as genuine social celebrations, but as theatrical, ostentatious spectacles designed solely to attract the attention of Daisy Buchanan across the bay.',
    question: 'Which quotation from *The Great Gatsby* most effectively illustrates the claim in the text?',
    choices: [
      { id: 'A', text: '"\'Gatsby bought that house so that Daisy would be just across the bay.\' Then it had not been merely the stars to which he had aspired on that June night. He came alive to me, delivered suddenly from the womb of his purposeless splendour."' },
      { id: 'B', text: '"In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars."' },
      { id: 'C', text: '"There was music from my neighbour\'s house through the summer nights."' },
      { id: 'D', text: '"I believe that on the first night I went to Gatsby\'s house I was one of the few guests who had actually been invited."' }
    ],
    answer: 'A',
    explanation: 'The claim states that Gatsby\'s house and parties were spectacles designed solely to reach Daisy across the bay. Quotation A explicitly reveals that "Gatsby bought that house so that Daisy would be just across the bay," directly connecting his splendour to that single purpose.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Vivid imagery of Gatsby\'s parties.', whyIncorrect: 'Describes the guests enjoying the party, but does not state the underlying motive regarding Daisy.', coreTrap: 'Atmospheric description vs underlying motive.' },
      C: { whyStudentsChoose: 'Mentions music and parties.', whyIncorrect: 'Simple observation of sound with no connection to Daisy or motivation.', coreTrap: 'Superficial party detail.' },
      D: { whyStudentsChoose: 'Highlights the unusual nature of the party.', whyIncorrect: 'Describes the invitation status of guests, not Gatsby\'s motive to attract Daisy.', coreTrap: 'Guest perspective trap.' }
    }
  },
  {
    id: 'm2-rw1-q10',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 10,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    tableData: {
      title: 'Thermodynamic Efficiency and Particulate Emissions of Four Biofuel Blends',
      headers: ['Fuel Blend', 'Thermal Efficiency (%)', 'NOx Emissions (ppm)', 'Particulate Matter PM2.5 (mg/m³)'],
      rows: [
        ['Standard Diesel (B0)', '38.2', '420', '58.4'],
        ['Biodiesel 20% (B20)', '37.8', '445', '41.2'],
        ['Hydrotreated Vegetable Oil (HVO)', '39.1', '390', '18.6'],
        ['Ethanol-Diesel Blend (E15)', '34.5', '480', '35.0']
      ]
    },
    passage: 'Automotive engineer Dr. Marcus Sterling investigated second-generation synthetic biofuels for heavy freight transport. He hypothesized that Hydrotreated Vegetable Oil (HVO) would achieve superior thermal efficiency compared to Standard Diesel while simultaneously producing the lowest concentrations of both nitrogen oxides (NOx) and fine particulate matter (PM2.5).',
    question: 'Which choice most effectively uses data from the table to evaluate Dr. Sterling\'s hypothesis?',
    choices: [
      { id: 'A', text: 'HVO achieved the highest thermal efficiency (39.1%) while recording the lowest NOx emissions (390 ppm) and lowest PM2.5 particulate emissions (18.6 mg/m³) of all tested fuels.' },
      { id: 'B', text: 'B20 produced lower NOx emissions than Standard Diesel while matching HVO\'s thermal efficiency.' },
      { id: 'C', text: 'E15 achieved higher thermal efficiency than Standard Diesel but produced 480 ppm of NOx.' },
      { id: 'D', text: 'Standard Diesel produced less particulate matter than HVO, despite having lower thermal efficiency.' }
    ],
    answer: 'A',
    explanation: 'Dr. Sterling hypothesized that HVO would beat Standard Diesel in thermal efficiency (>38.2%) and have the lowest NOx and PM2.5 of all fuels. Looking at the table, HVO had 39.1% efficiency (highest), 390 ppm NOx (lowest), and 18.6 mg/m³ PM2.5 (lowest), fully verifying the hypothesis.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions B20.', whyIncorrect: 'B20 had HIGHER NOx (445) than Diesel (420), making this factually wrong based on the table.', coreTrap: 'Factual table misstatement.' },
      C: { whyStudentsChoose: 'Mentions E15.', whyIncorrect: 'E15 had 34.5% efficiency, which is lower than Diesel (38.2%), not higher.', coreTrap: 'Data misreading.' },
      D: { whyStudentsChoose: 'Compares Diesel and HVO.', whyIncorrect: 'Standard Diesel produced 58.4 mg/m³ PM2.5, which is much higher than HVO\'s 18.6 mg/m³.', coreTrap: 'Inverted comparison.' }
    }
  },
  {
    id: 'm2-rw1-q11',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 11,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Plant evolutionary biologists observed that wild almond seeds (*Prunus dulcis*) produce lethal quantities of amygdalin, a glycoside that breaks down into hydrogen cyanide upon mastication, deterring mammalian herbivores. Genetic sequencing reveals that domesticated sweet almonds differ from toxic wild variants by a single point mutation in the bHLH2 transcription factor gene, which disables the enzymatic biosynthesis of amygdalin. Early agriculturalists in the Levant began cultivating sweet almonds around 3000 BCE. Given that consuming wild bitter almonds causes severe cyanide toxicity, it is reasonable to conclude that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'human domestication of the almond depended upon the rare, spontaneous occurrence of this single point mutation in wild populations before deliberate cultivation could occur.' },
      { id: 'B', text: 'early Levant farmers utilized artificial selective breeding to engineer the bHLH2 point mutation inside laboratory greenhouses.' },
      { id: 'C', text: 'wild almond trees evolved amygdalin biosynthesis specifically in response to human agricultural harvesting.' },
      { id: 'D', text: 'sweet almond varieties are biologically incapable of thriving in natural Mediterranean soil environments.' }
    ],
    answer: 'A',
    explanation: 'Because eating toxic wild almonds is fatal, early humans could not have eaten or cultivated almonds until a naturally occurring, rare spontaneous point mutation produced a non-toxic tree that humans could discover, propagate, and domesticate.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions selective breeding.', whyIncorrect: '3000 BCE farmers did not have laboratory greenhouses or molecular genetic tools.', coreTrap: 'Anachronistic technology.' },
      C: { whyStudentsChoose: 'Relates to human interaction.', whyIncorrect: 'Amygdalin evolved long before humans to deter herbivores.', coreTrap: 'Inverted evolutionary chronology.' },
      D: { whyStudentsChoose: 'Speculates on survival.', whyIncorrect: 'The text does not claim sweet almonds cannot grow in Mediterranean soil.', coreTrap: 'Unsupported ecological claim.' }
    }
  },
  {
    id: 'm2-rw1-q12',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 12,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'During the Late Bronze Age collapse around 1200 BCE, widespread trade network disruptions decimated eastern Mediterranean ______ cities across the Levant and Anatolia were abandoned in rapid succession.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'economies;' },
      { id: 'B', text: 'economies,' },
      { id: 'C', text: 'economies' },
      { id: 'D', text: 'economies, and,' }
    ],
    answer: 'A',
    explanation: 'The sentence contains two independent clauses: "During the Late Bronze Age... decimated eastern Mediterranean economies" and "cities across the Levant and Anatolia were abandoned...". A semicolon properly joins two independent clauses without a coordinating conjunction.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses a comma between clauses.', whyIncorrect: 'Creates a comma splice error.', coreTrap: 'Comma splice.' },
      C: { whyStudentsChoose: 'Omits punctuation.', whyIncorrect: 'Creates a fused (run-on) sentence.', coreTrap: 'Fused sentence.' },
      D: { whyStudentsChoose: 'Punctuation soup.', whyIncorrect: 'Comma after "and" is ungrammatical.', coreTrap: 'Punctuation clutter.' }
    }
  },
  {
    id: 'm2-rw1-q13',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 13,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Subject-Verb Agreement)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'The array of seismic acoustic sensors deployed across the volcanic caldera ______ continuous real-time data regarding magma chamber pressurization to the monitoring observatory.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'transmits' },
      { id: 'B', text: 'transmit' },
      { id: 'C', text: 'are transmitting' },
      { id: 'D', text: 'have transmitted' }
    ],
    answer: 'A',
    explanation: 'The head noun of the subject is the singular noun "array" ("The array of seismic acoustic sensors..."). Prepositional phrases like "of seismic acoustic sensors" do not change subject number. Singular "array" requires the singular verb "transmits".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Agrees with plural "sensors".', whyIncorrect: '"Sensors" is inside a prepositional modifier; the subject is singular "array".', coreTrap: 'Proximity agreement trap.' },
      C: { whyStudentsChoose: 'Matches plural "sensors".', whyIncorrect: '"Are transmitting" is plural.', coreTrap: 'Plural progressive error.' },
      D: { whyStudentsChoose: 'Matches plural "sensors".', whyIncorrect: '"Have transmitted" is plural.', coreTrap: 'Plural auxiliary error.' }
    }
  },
  {
    id: 'm2-rw1-q14',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 14,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Modifiers)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Emitted from automobile exhausts and reacting with atmospheric sunlight, ______ toxic ground-level ozone that exacerbates respiratory illnesses in urban populations.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'nitrogen oxides and volatile organic compounds form' },
      { id: 'B', text: 'urban smog is formed when nitrogen oxides produce' },
      { id: 'C', text: 'the formation of ground-level smog occurs through' },
      { id: 'D', text: 'chemists have analyzed how nitrogen oxides generate' }
    ],
    answer: 'A',
    explanation: 'The introductory modifier "Emitted from automobile exhausts and reacting with atmospheric sunlight" describes chemical precursors. "Nitrogen oxides and volatile organic compounds" are the chemicals emitted and reacting, so they must immediately follow the comma.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions smog and chemicals.', whyIncorrect: '"Urban smog" is the end product, not what was emitted directly from exhausts to react.', coreTrap: 'End product modifier mismatch.' },
      C: { whyStudentsChoose: 'Focuses on the abstract process.', whyIncorrect: '"The formation" was not emitted from exhausts.', coreTrap: 'Abstract noun dangling modifier.' },
      D: { whyStudentsChoose: 'Focuses on chemists.', whyIncorrect: '"Chemists" were not emitted from automobile exhausts.', coreTrap: 'Dangling scientist modifier.' }
    }
  },
  {
    id: 'm2-rw1-q15',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 15,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Nonrestrictive Elements)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Astrophysicist Jocelyn Bell Burnell, who discovered the first radio ______ received the Special Breakthrough Prize in Fundamental Physics in 2018 for her foundational contributions.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'pulsar in 1967,' },
      { id: 'B', text: 'pulsar in 1967;' },
      { id: 'C', text: 'pulsar in 1967—' },
      { id: 'D', text: 'pulsar in 1967' }
    ],
    answer: 'A',
    explanation: 'The nonrestrictive relative clause starts with a comma after Burnell ("Burnell, who discovered..."). It must be closed with a matching comma after "1967" before the main verb "received".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses semicolon.', whyIncorrect: 'A semicolon cannot close an internal relative clause inside a main sentence.', coreTrap: 'Semicolon inside clause.' },
      C: { whyStudentsChoose: 'Uses dash.', whyIncorrect: 'Mismatches an opening comma with a closing em-dash.', coreTrap: 'Mismatched pair.' },
      D: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Leaves the relative clause open without closing punctuation.', coreTrap: 'Missing boundary comma.' }
    }
  },
  {
    id: 'm2-rw1-q16',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 16,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Pronoun Case and Clarity)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'When an endangered wolf pack re-enters a degraded riparian ecosystem, ______ predation on grazing elks allows willow saplings and riverbank vegetation to regenerate naturally.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'its' },
      { id: 'B', text: 'their' },
      { id: 'C', text: 'it\'s' },
      { id: 'D', text: 'there' }
    ],
    answer: 'A',
    explanation: 'The antecedent is the singular collective noun phrase "an endangered wolf pack". The singular possessive pronoun is "its".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks of multiple wolves in a pack.', whyIncorrect: 'The grammatical subject is the singular collective noun "pack".', coreTrap: 'Collective noun agreement.' },
      C: { whyStudentsChoose: 'Confuses "it\'s" with possessive.', whyIncorrect: '"It\'s" means "it is".', coreTrap: 'Contraction trap.' },
      D: { whyStudentsChoose: 'Homophone confusion.', whyIncorrect: '"There" is an adverb of place.', coreTrap: 'Homophone error.' }
    }
  },
  {
    id: 'm2-rw1-q17',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 17,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Hydroelectric dams provide clean, renewable electricity without burning fossil fuels. ______, the flooding of river valleys behind reservoirs often displaces indigenous communities and submerges vital terrestrial habitats.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'On the other hand' },
      { id: 'B', text: 'In addition' },
      { id: 'C', text: 'For example' },
      { id: 'D', text: 'As a consequence' }
    ],
    answer: 'A',
    explanation: 'The first sentence presents an environmental benefit (clean electricity). The second sentence introduces serious negative social and ecological costs (flooding, displacement). "On the other hand" establishes the necessary contrast.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks both describe dam attributes.', whyIncorrect: '"In addition" signifies continuation of positive attributes, not opposing negative consequences.', coreTrap: 'Addition vs contrast error.' },
      C: { whyStudentsChoose: 'Thinks flooding is an example of clean electricity.', whyIncorrect: 'Flooding is a drawback, not an example of renewable energy.', coreTrap: 'Example misconception.' },
      D: { whyStudentsChoose: 'Thinks displacment is caused by clean electricity.', whyIncorrect: 'The contrast between benefits and drawbacks requires an adversative transition.', coreTrap: 'Causation vs contrast.' }
    }
  },
  {
    id: 'm2-rw1-q18',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 18,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In the manufacture of semiconductor microprocessors, even microscopic dust particles can short-circuit nanoscale transistor gates. Fabrication facilities, ______, maintain positive-pressure cleanrooms equipped with ultra-low particulate air (ULPA) filtration systems.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'therefore' },
      { id: 'B', text: 'nevertheless' },
      { id: 'C', text: 'conversely' },
      { id: 'D', text: 'similarly' }
    ],
    answer: 'A',
    explanation: 'Because dust particles ruin microprocessors (the cause), facilities maintain ultra-clean cleanrooms (the logical effect). "Therefore" correctly expresses this cause-and-effect relationship.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sounds formal.', whyIncorrect: '"Nevertheless" signals unexpected contrast, whereas building cleanrooms is the direct, expected response.', coreTrap: 'Contrast vs cause error.' },
      C: { whyStudentsChoose: 'Contrasts dust with cleanrooms.', whyIncorrect: '"Conversely" sets up opposite scenarios, not a solution to a stated problem.', coreTrap: 'Opposition error.' },
      D: { whyStudentsChoose: 'Thinks both sentences discuss clean manufacturing.', whyIncorrect: '"Similarly" suggests an analogy with another industry.', coreTrap: 'Analogy error.' }
    }
  },
  {
    id: 'm2-rw1-q19',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 19,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Geochemists long assumed that Earth\'s mantle water was delivered exclusively by hydrated carbonaceous chondrite meteorites during early planetary accretion. Recent isotopic analyses of basaltic lavas from deep mantle plumes, ______, reveal deuterium-to-hydrogen ratios that match primordial nebular gas, suggesting that substantial water was incorporated directly during Earth\'s core formation.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'however' },
      { id: 'B', text: 'furthermore' },
      { id: 'C', text: 'likewise' },
      { id: 'D', text: 'accordingly' }
    ],
    answer: 'A',
    explanation: 'The first sentence presents the traditional hypothesis (exclusive meteorite delivery). The second sentence introduces new isotopic evidence refuting this exclusive origin and suggesting direct primordial gas incorporation. "However" provides the correct contrast.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks it is adding more geology data.', whyIncorrect: '"Furthermore" indicates continuation, but the new data contradicts the old assumption.', coreTrap: 'Continuation vs contradiction.' },
      C: { whyStudentsChoose: 'Both discuss water origin.', whyIncorrect: '"Likewise" indicates agreement/similarity.', coreTrap: 'Agreement trap.' },
      D: { whyStudentsChoose: 'Thinks the second sentence follows from the first.', whyIncorrect: '"Accordingly" implies logical result, not a challenge to a prior assumption.', coreTrap: 'Causation error.' }
    }
  },
  {
    id: 'm2-rw1-q20',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 20,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• The Voyager 1 spacecraft was launched by NASA in September 1977.\n• In August 2012, Voyager 1 crossed the heliopause at a distance of 121 AU from the Sun.\n• The heliopause marks the boundary where the solar wind is halted by the interstellar medium.\n• By crossing the heliopause, Voyager 1 became the first human-made object to enter interstellar space.\n• It continues to transmit telemetry regarding interstellar plasma density back to Earth.',
    question: 'The student wants to highlight Voyager 1\'s historic achievement. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'In August 2012, NASA\'s Voyager 1 achieved a historic milestone by crossing the heliopause to become the first human-made object to enter interstellar space.' },
      { id: 'B', text: 'Launched in September 1977, Voyager 1 is a NASA spacecraft that measures plasma density in space.' },
      { id: 'C', text: 'The heliopause is an astronomical boundary where solar wind meets the interstellar medium.' },
      { id: 'D', text: 'Voyager 1 crossed the heliopause 121 astronomical units away from the Sun.' }
    ],
    answer: 'A',
    explanation: 'The prompt requires highlighting Voyager 1\'s historic achievement. Choice A explicitly highlights the milestone: becoming the first human-made object to cross the heliopause into interstellar space.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Gives basic facts.', whyIncorrect: 'States its launch date without highlighting its historic interstellar achievement.', coreTrap: 'Missing specific prompt objective.' },
      C: { whyStudentsChoose: 'Defines the heliopause.', whyIncorrect: 'Focuses on the astronomical definition rather than the spacecraft\'s historic feat.', coreTrap: 'Scientific definition focus.' },
      D: { whyStudentsChoose: 'Gives distance data.', whyIncorrect: 'Merely gives a distance measurement without emphasizing the historic nature of being the first human craft in interstellar space.', coreTrap: 'Raw data without impact.' }
    }
  },
  {
    id: 'm2-rw1-q21',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 21,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• Coral bleaching occurs when thermal stress forces corals to expel symbiotic zooxanthellae algae.\n• Marine biologist Dr. Raquel Peixoto developed a consortium of beneficial microorganisms for corals (BMCs).\n• BMCs consist of probiotics, including nitrogen-fixing and antioxidant-producing bacteria.\n• In controlled thermal stress trials, probiotic-treated corals showed an 80% survival rate compared to only 20% in untreated control corals.\n• BMC treatments also helped corals preserve photosynthetic efficiency and soft tissue integrity.',
    question: 'The student wants to present the key findings of Dr. Peixoto\'s probiotic research. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'Dr. Peixoto\'s laboratory trials demonstrated that treating corals with beneficial probiotic microorganisms boosted survival rates to 80% under thermal stress, compared to just 20% for untreated corals.' },
      { id: 'B', text: 'Coral bleaching occurs when rising ocean temperatures cause corals to expel their essential zooxanthellae algae.' },
      { id: 'C', text: 'Beneficial microorganisms for corals (BMCs) are bacterial cocktails engineered with nitrogen-fixing properties.' },
      { id: 'D', text: 'Under severe heat stress, marine corals lose their soft tissue integrity and photosynthetic efficiency.' }
    ],
    answer: 'A',
    explanation: 'The prompt asks to present the key findings of Dr. Peixoto\'s probiotic research. Choice A presents her trial results quantitatively: boosting coral survival from 20% to 80% under thermal stress with beneficial probiotics.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Defines bleaching.', whyIncorrect: 'Explains the problem rather than summarizing Dr. Peixoto\'s experimental findings.', coreTrap: 'Problem definition only.' },
      C: { whyStudentsChoose: 'Describes BMCs.', whyIncorrect: 'Defines the microbial consortium without sharing the experimental results or survival rates.', coreTrap: 'Composition description only.' },
      D: { whyStudentsChoose: 'Mentions heat stress.', whyIncorrect: 'Describes coral degradation without mentioning the probiotic intervention findings.', coreTrap: 'Symptom focus.' }
    }
  },
  {
    id: 'm2-rw1-q22',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 22,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'The archival preservationist noted that nitrate film stock is notoriously ______; if stored even slightly above recommended humidity levels, the cellulose base spontaneously undergoes autocatalytic decomposition, emitting hazardous nitric acid fumes.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'volatile' },
      { id: 'B', text: 'durable' },
      { id: 'C', text: 'inert' },
      { id: 'D', text: 'resilient' }
    ],
    answer: 'A',
    explanation: 'The text describes film stock that spontaneously decomposes and emits hazardous acid fumes under slight humidity changes. "Volatile" means liable to change rapidly and unpredictably, especially for the worse, or easily evaporating/decomposing chemically.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks old film lasts a long time.', whyIncorrect: '"Durable" means sturdy and long-lasting, which is the direct opposite of spontaneously decomposing.', coreTrap: 'Direct antonym.' },
      C: { whyStudentsChoose: 'Sounds scientific.', whyIncorrect: '"Inert" means chemically unreactive, contradicting "autocatalytic decomposition".', coreTrap: 'Chemical opposite.' },
      D: { whyStudentsChoose: 'Sounds positive.', whyIncorrect: '"Resilient" means able to recover quickly from damage, not prone to decay.', coreTrap: 'Positive tone error.' }
    }
  },
  {
    id: 'm2-rw1-q23',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 23,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'The following is adapted from Ralph Waldo Emerson\'s 1841 essay "Self-Reliance".\n\n"Whoso would be a man must be a nonconformist. He who would gather immortal palms must not be hindered by the name of goodness, but must explore if it be goodness. Nothing is at last sacred but the integrity of your own mind. Absolve you to yourself, and you shall have the suffrage of the world."',
    question: 'Which choice best describes the main rhetorical purpose of the passage?',
    choices: [
      { id: 'A', text: 'To urge individuals to trust their own moral judgment over unexamined societal conventions.' },
      { id: 'B', text: 'To encourage citizens to participate actively in democratic voting procedures.' },
      { id: 'C', text: 'To outline the strict religious rituals necessary for spiritual salvation.' },
      { id: 'D', text: 'To argue that collective consensus is superior to individual intuition.' }
    ],
    answer: 'A',
    explanation: 'Emerson argues that one "must be a nonconformist," must personally examine what is good rather than blindly trusting the "name of goodness," and that "nothing is at last sacred but the integrity of your own mind." His purpose is urging individuals to trust their own moral conscience over societal conformity.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Takes "suffrage of the world" literally as political voting.', whyIncorrect: 'Emerson uses "suffrage" in an archaic sense of approval/support, not literal electoral ballots.', coreTrap: 'Literal meaning of archaic term.' },
      C: { whyStudentsChoose: 'Notes words like "sacred" and "absolve".', whyIncorrect: 'He uses spiritual metaphors to advocate radical individualism, not conventional church rituals.', coreTrap: 'Metaphorical misinterpretation.' },
      D: { whyStudentsChoose: 'Mentions "the world".', whyIncorrect: 'This is the exact opposite of Emerson\'s thesis, which rejects collective conformity.', coreTrap: 'Direct contradiction.' }
    }
  },
  {
    id: 'm2-rw1-q24',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 24,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In quantum cryptography, the BB84 protocol ensures tamper-proof communication between two parties by encoding encryption keys into the polarization states of single photons. According to the Heisenberg Uncertainty Principle and the No-Cloning Theorem, any third-party eavesdropper attempting to intercept and measure these photon states inevitably alters their quantum properties. This disturbance introduces detectable bit error rates into the shared transmission, immediately alerting the communicating parties to the presence of surveillance.',
    question: 'Which choice best explains why third-party eavesdropping is detectable under the BB84 protocol?',
    choices: [
      { id: 'A', text: 'The physical act of observing quantum photon states unavoidably modifies them, creating observable transmission errors.' },
      { id: 'B', text: 'Eavesdroppers are required by international cybersecurity standards to transmit digital signatures.' },
      { id: 'C', text: 'The protocol uses classical radio waves that lose signal strength when diverted.' },
      { id: 'D', text: 'Photons self-destruct upon entering any unauthorized receiving fiber optic cable.' }
    ],
    answer: 'A',
    explanation: 'The passage explains that under quantum principles, "any third-party eavesdropper attempting to intercept and measure these photon states inevitably alters their quantum properties," creating detectable errors.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions cybersecurity standards.', whyIncorrect: 'The security is governed by laws of quantum physics, not voluntary international treaties.', coreTrap: 'Extraneous regulatory concept.' },
      C: { whyStudentsChoose: 'Mentions radio waves.', whyIncorrect: 'The protocol uses single photon polarization states, not classical radio waves.', coreTrap: 'Incorrect technology.' },
      D: { whyStudentsChoose: 'Sounds like sci-fi encryption.', whyIncorrect: 'Photons do not self-destruct; their measurement simply alters their quantum state.', coreTrap: 'Sensationalized claim.' }
    }
  },
  {
    id: 'm2-rw1-q25',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 25,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Independent Clauses)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'The development of CRISPR-Cas9 gene editing revolutionized molecular biology by allowing targeted DNA sequence modifications; ______ prior genetic engineering techniques were laborious, imprecise, and frequently produced off-target mutations.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'in contrast,' },
      { id: 'B', text: 'in contrast' },
      { id: 'C', text: 'in contrast;' },
      { id: 'D', text: 'in contrast:' }
    ],
    answer: 'A',
    explanation: 'A semicolon precedes the blank to join the two independent clauses. The introductory conjunctive adverbial phrase "in contrast" must be followed by a comma before the subject of the second clause ("prior genetic engineering techniques").',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Omits the comma after the introductory transition.', whyIncorrect: 'Introductory transitional phrases require a trailing comma.', coreTrap: 'Missing boundary comma.' },
      C: { whyStudentsChoose: 'Adds another semicolon.', whyIncorrect: 'Doubles the semicolon boundary.', coreTrap: 'Punctuation duplication.' },
      D: { whyStudentsChoose: 'Uses a colon after the phrase.', whyIncorrect: 'Colons do not follow introductory conjunctive phrases.', coreTrap: 'Errant colon placement.' }
    }
  },
  {
    id: 'm2-rw1-q26',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 26,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Parallel Structure)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'The chief sustainability officer\'s comprehensive environmental roadmap focused on modernizing legacy equipment, reducing grid energy waste, and ______ zero-emission supply chain logistics.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'establishing' },
      { id: 'B', text: 'to establish' },
      { id: 'C', text: 'establishment of' },
      { id: 'D', text: 'established' }
    ],
    answer: 'A',
    explanation: 'The parallel series of prepositional objects governed by "focused on" consists of gerund phrases: (1) "modernizing legacy equipment", (2) "reducing grid energy waste", and (3) "establishing zero-emission supply chain logistics".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses infinitive form.', whyIncorrect: 'Breaks parallel structure with the gerunds "modernizing" and "reducing".', coreTrap: 'Infinitive vs gerund parallel clash.' },
      C: { whyStudentsChoose: 'Uses a noun phrase.', whyIncorrect: '"Establishment of" breaks the -ing verb form pattern.', coreTrap: 'Noun phrase vs gerund parallel clash.' },
      D: { whyStudentsChoose: 'Uses past participle.', whyIncorrect: 'Past tense breaks parallel structure with the active gerunds.', coreTrap: 'Tense mismatch.' }
    }
  },
  {
    id: 'm2-rw1-q27',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 1,
    questionNumber: 27,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• Mangrove forests sequester carbon at rates up to ten times higher per hectare than terrestrial tropical rainforests.\n• This carbon is stored in anaerobic tidal sediments as "blue carbon" for thousands of years.\n• Mangrove roots trap sediment, stabilizing coastal shorelines against hurricane storm surges.\n• In 2021, an international restoration project replanted 5,000 hectares of degraded mangrove wetlands in the Indus River Delta.\n• By 2024, the replanted delta showed significant sediment accretion and a 45% increase in local fish nursery biomass.',
    question: 'The student wants to highlight both the climate and ecological benefits of the Indus River Delta mangrove restoration project. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'The restoration of 5,000 hectares of Indus Delta mangroves demonstrates dual benefits: storing long-term blue carbon in coastal sediments while simultaneously driving a 45% increase in local fish nursery biomass.' },
      { id: 'B', text: 'Mangrove forests are vital coastal ecosystems that sequester carbon up to ten times faster than terrestrial rainforests.' },
      { id: 'C', text: 'In 2021, conservationists replanted 5,000 hectares of mangrove forests across the Indus River Delta.' },
      { id: 'D', text: 'Sediment accretion in mangrove roots protects coastal regions from severe hurricane storm surges.' }
    ],
    answer: 'A',
    explanation: 'The prompt explicitly requires highlighting BOTH climate (storing blue carbon) AND ecological (45% increase in fish nursery biomass) benefits of the Indus Delta restoration project. Choice A fulfills both specific components perfectly.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Gives impressive general carbon sequestration stats.', whyIncorrect: 'Does not mention the Indus Delta project or its ecological fish nursery benefits.', coreTrap: 'General fact vs specific project.' },
      C: { whyStudentsChoose: 'Mentions the project scope.', whyIncorrect: 'Only mentions the replanting action without detailing either the climate or ecological outcome.', coreTrap: 'Action without outcome.' },
      D: { whyStudentsChoose: 'Mentions storm surge benefits.', whyIncorrect: 'Omits the project\'s carbon sequestration and fish biomass gains.', coreTrap: 'Partial ecological scope.' }
    }
  }
];
