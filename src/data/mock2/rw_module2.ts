import { Question } from '../../types/exam';

export const mock2_rw_module2: Question[] = [
  {
    id: 'm2-rw2-q1',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Recognizing that the city\'s public transit fleet was aging and unreliable, urban planners proposed a ______ overhaul of the bus network, replacing diesel engines with electric motors and installing dedicated bus-rapid-transit lanes across all major arterial corridors.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'comprehensive' },
      { id: 'B', text: 'cursory' },
      { id: 'C', text: 'tentative' },
      { id: 'D', text: 'superficial' }
    ],
    answer: 'A',
    explanation: 'The text describes a major, thorough upgrade involving fleet electrification and dedicated transit lanes across all major corridors. "Comprehensive" means complete, thorough, and including all or nearly all elements.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sounds formal.', whyIncorrect: '"Cursory" means hasty and superficial, contradicting the wide-scale infrastructure changes described.', coreTrap: 'Antonym trap.' },
      C: { whyStudentsChoose: 'Associated with proposals.', whyIncorrect: '"Tentative" means hesitant or unconfirmed, but the text focuses on the wide-ranging scope of the overhaul.', coreTrap: 'Scope mismatch.' },
      D: { whyStudentsChoose: 'Confuses cosmetic fixes with systemic overhaul.', whyIncorrect: '"Superficial" means shallow, which opposes installing dedicated lanes across all corridors.', coreTrap: 'Opposite meaning.' }
    }
  },
  {
    id: 'm2-rw2-q2',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Although the initial findings of the clinical trial appeared promising, senior epidemiologists urged caution, warning that the study\'s tiny cohort size and lack of a placebo control group made any definitive therapeutic claims premature and ______.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'unsubstantiated' },
      { id: 'B', text: 'irrefutable' },
      { id: 'C', text: 'lucrative' },
      { id: 'D', text: 'axiomatic' }
    ],
    answer: 'A',
    explanation: 'The sentence emphasizes that because the sample was tiny and lacked a placebo group, claiming definitive therapeutic success was premature and lacking scientific evidence. "Unsubstantiated" means not supported or proven by evidence.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sounds scientific.', whyIncorrect: '"Irrefutable" means impossible to deny or disprove, the exact opposite of a flawed claim.', coreTrap: 'Antonym trap.' },
      C: { whyStudentsChoose: 'Relates to drug sales.', whyIncorrect: '"Lucrative" means profitable, which is irrelevant to scientific validity.', coreTrap: 'Commercial association.' },
      D: { whyStudentsChoose: 'Fancy academic word.', whyIncorrect: '"Axiomatic" means self-evident or unquestionable, opposing unproven claims.', coreTrap: 'Direct antonym.' }
    }
  },
  {
    id: 'm2-rw2-q3',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 3,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'In his treatise on judicial philosophy, legal scholar Ronald Dworkin argued that common-law adjudication is not an act of judicial caprice; rather, judges must construct a seamless narrative of legal principles that displays the legal system in its best moral light, ensuring that every verdict remains ______ with historical precedent.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'consonant' },
      { id: 'B', text: 'incompatible' },
      { id: 'C', text: 'antithetical' },
      { id: 'D', text: 'tangential' }
    ],
    answer: 'A',
    explanation: 'The passage describes judges creating a seamless narrative that harmonizes with previous legal rules and principles. "Consonant" means in agreement or harmony with, fitting the requirement that verdicts align with precedent.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks judges change past rulings.', whyIncorrect: '"Incompatible" means conflicting, which contradicts a seamless narrative of principles.', coreTrap: 'Direct antonym.' },
      C: { whyStudentsChoose: 'Sounds technical.', whyIncorrect: '"Antithetical" means directly opposed or contrary.', coreTrap: 'Opposite meaning trap.' },
      D: { whyStudentsChoose: 'Relates to side issues.', whyIncorrect: '"Tangential" means hardly touching upon or peripheral, opposing core legal alignment.', coreTrap: 'Irrelevant relationship.' }
    }
  },
  {
    id: 'm2-rw2-q4',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 4,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'The cultural anthropologist noted that while superficial observers often characterize nomadic pastoralist societies as chaotic wanderers, their seasonal migrations follow an exquisitely ______ spatial geography governed by microclimatic fluctuations, seasonal water-table depths, and ancestral grazing treaties.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'calibrated' },
      { id: 'B', text: 'haphazard' },
      { id: 'C', text: 'improvised' },
      { id: 'D', text: 'monolithic' }
    ],
    answer: 'A',
    explanation: 'The sentence contrasts the superficial misconception of "chaotic wanderers" with the reality: migrations are meticulously organized and adjusted according to microclimatic data, water levels, and treaties. "Calibrated" means carefully adjusted or fine-tuned with precision.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Associates with wandering.', whyIncorrect: '"Haphazard" means random or chaotic, which is the misconception the author explicitly rejects.', coreTrap: 'Contrasted misconception trap.' },
      C: { whyStudentsChoose: 'Thinks of making decisions on the move.', whyIncorrect: '"Improvised" means spontaneous without planning, contradicting governance by ancestral treaties.', coreTrap: 'Spontaneous vs planned confusion.' },
      D: { whyStudentsChoose: 'Sounds formal.', whyIncorrect: '"Monolithic" means rigid and uniform, which does not mean fine-tuned to dynamic environmental shifts.', coreTrap: 'Rigid vs calibrated trap.' }
    }
  },
  {
    id: 'm2-rw2-q5',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 5,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In the early 20th century, linguistics was dominated by structuralism, which analyzed language as a static system of formal signs governed by arbitrary conventions. In 1957, Noam Chomsky\'s *Syntactic Structures* fundamentally overturned this framework by introducing generative grammar. Chomsky proposed that the ability to generate infinite grammatically coherent sentences from finite linguistic input is an innate biological capacity universal to all humans, known as the Universal Grammar. This paradigm shift relocated linguistics from social anthropology to cognitive biology.',
    question: 'Which choice best describes the primary development described in the text?',
    choices: [
      { id: 'A', text: 'A shift in linguistic theory from viewing language as an external social construct to an innate cognitive capacity.' },
      { id: 'B', text: 'An empirical experiment proving that human brains contain specialized physical grammatical modules.' },
      { id: 'C', text: 'A demonstration that structuralist linguistics remains the most accurate model for non-Western languages.' },
      { id: 'D', text: 'A historical account of how early 20th-century anthropologists created modern formal syntax.' }
    ],
    answer: 'A',
    explanation: 'The text describes the transition from structuralism (viewing language as a static system of social conventions) to Chomskyan generative grammar (viewing language as an innate biological/cognitive capacity).',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions cognitive biology.', whyIncorrect: 'No specific physical anatomical experiment is detailed in the text.', coreTrap: 'Over-specified neuroscience claim.' },
      C: { whyStudentsChoose: 'Mentions structuralism.', whyIncorrect: 'Text states structuralism was overturned, not proven most accurate.', coreTrap: 'Opposite outcome.' },
      D: { whyStudentsChoose: 'Mentions anthropology.', whyIncorrect: 'Focuses on the paradigm revolution rather than early anthropologists.', coreTrap: 'Minor detail focus.' }
    }
  },
  {
    id: 'm2-rw2-q6',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 6,
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Text 1\nEvolutionary biologist Richard Dawkins popularized the "selfish gene" perspective, arguing that the fundamental unit of natural selection is the individual gene rather than the organism or group. In this reductionist view, organisms are merely transient survival vehicles constructed by immortal genes competing to maximize their own replication across generations.\n\nText 2\nBiologist Denis Noble contends that the gene-centric model oversimplifies biological complexity. Noble champions systems biology, arguing that DNA is not a privileged genetic blueprint directing the cell, but rather a passive database utilized by higher-order physiological systems. In Noble\'s view, biological causation operates bidirectionally, with cellular and environmental feedback networks exerting top-down control over gene expression.',
    question: 'Based on the texts, how does Noble (Text 2) view Dawkins\'s concept of genes (Text 1)?',
    choices: [
      { id: 'A', text: 'As an oversimplified model that ignores top-down regulatory feedback from cellular and environmental systems.' },
      { id: 'B', text: 'As an accurate description of single-cell organisms that fails only when applied to mammals.' },
      { id: 'C', text: 'As a fraudulent theory devised without any reference to Mendelian genetics.' },
      { id: 'D', text: 'As complete confirmation that biological organisms lack physiological autonomy.' }
    ],
    answer: 'A',
    explanation: 'In Text 2, Noble argues that Dawkins\'s gene-centric view "oversimplifies biological complexity" and emphasizes that causation is bidirectional with "cellular and environmental feedback networks exerting top-down control over gene expression."',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Tries to find a compromise between single-cell and complex animals.', whyIncorrect: 'Noble critiques the gene-centric paradigm universally across biology, not just for mammals.', coreTrap: 'Fabricated boundary.' },
      C: { whyStudentsChoose: 'Sees the strong disagreement.', whyIncorrect: 'Noble critiques the reductionist interpretation, but does not accuse Dawkins of fraud.', coreTrap: 'Ad hominem distortion.' },
      D: { whyStudentsChoose: 'Mentions biological autonomy.', whyIncorrect: 'Noble defends physiological systemic feedback against gene-only determinism.', coreTrap: 'Inverted attribution.' }
    }
  },
  {
    id: 'm2-rw2-q7',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 7,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In materials engineering, the phenomenon of superplasticity allows certain fine-grained metallic alloys and ceramic polycrystals to undergo tensile elongations of over 1,000% without localized necking or catastrophic rupture. This extreme ductility occurs primarily via grain boundary sliding at elevated homologous temperatures, where microscopic crystal grains rotate and slide past one another while maintaining structural cohesion through atomic diffusion. This property enables the cost-effective superplastic forming of complex, lightweight aerodynamic components for next-generation aerospace fuselages.',
    question: 'Which choice best states the primary mechanism enabling superplastic deformation in fine-grained alloys?',
    choices: [
      { id: 'A', text: 'Microscopic crystal grains slide and rotate past each other supported by diffusion at high temperatures.' },
      { id: 'B', text: 'Atomic bonds permanently break, converting the alloy into a liquid state during tensile stress.' },
      { id: 'C', text: 'Localized necking concentrates tension at the center of the component.' },
      { id: 'D', text: 'Alloy grains expand uniformly until their density reaches zero.' }
    ],
    answer: 'A',
    explanation: 'The text states that superplastic ductility "occurs primarily via grain boundary sliding at elevated homologous temperatures, where microscopic crystal grains rotate and slide past one another while maintaining structural cohesion through atomic diffusion."',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Associates extreme stretching with melting.', whyIncorrect: 'The material remains solid and cohesive; it does not turn into a liquid.', coreTrap: 'Phase change misconception.' },
      C: { whyStudentsChoose: 'Mentions necking.', whyIncorrect: 'The text states superplasticity occurs "without localized necking".', coreTrap: 'Direct contradiction.' },
      D: { whyStudentsChoose: 'Sensationalized physics.', whyIncorrect: 'Density does not reach zero.', coreTrap: 'Absurd physics claim.' }
    }
  },
  {
    id: 'm2-rw2-q8',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 8,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'In Herman Melville\'s 1853 short story "Bartleby, the Scrivener", the protagonist\'s passive resistance to commercial labor—encapsulated in his quiet refusal, "I would prefer not to"—fundamentally paralyzes the mechanistic, transactional efficiency of the Wall Street legal firm.',
    question: 'Which quotation from "Bartleby, the Scrivener" most effectively illustrates the claim in the text?',
    choices: [
      { id: 'A', text: '"Nothing so aggravates an earnest person as a passive resistance. If the individual so resisted be not of a perverse temper, and the resister be thoroughly harmless in his passivity, then, in the better moods of the former, he will reconcile himself to what had before seemed unreasonable."' },
      { id: 'B', text: '"I am a rather elderly man. The nature of my avocations, for the last thirty years, has brought me into more than ordinary contact with what would seem an interesting and somewhat singular set of men."' },
      { id: 'C', text: '"My chambers were up stairs, at No. — Wall-street. At one end they looked upon the white wall of the interior of a spacious skylight shaft."' },
      { id: 'D', text: '"I can write a neat rapid hand, and have transcribed many documents without error."' }
    ],
    answer: 'A',
    explanation: 'The claim discusses how Bartleby\'s passive resistance paralyzes and baffles the conventional, earnest employer. Quotation A explicitly analyzes how "Nothing so aggravates an earnest person as a passive resistance" and how the employer finds himself forced to "reconcile himself to what had before seemed unreasonable."',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Introductory sentence of the narrator.', whyIncorrect: 'General background on the lawyer\'s career without addressing the passive resistance dynamics.', coreTrap: 'General exposition trap.' },
      C: { whyStudentsChoose: 'Mentions Wall Street.', whyIncorrect: 'Describes the physical office architecture, not the thematic impact of Bartleby\'s refusal.', coreTrap: 'Setting description trap.' },
      D: { whyStudentsChoose: 'Relates to scriveners copying documents.', whyIncorrect: 'Describes clerical skill, not the resistance or paralysis.', coreTrap: 'Generic clerical detail.' }
    }
  },
  {
    id: 'm2-rw2-q9',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 9,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    tableData: {
      title: 'Perovskite Solar Cell Efficiency and Degradation Under Continuous UV Illumination',
      headers: ['Cell Formulation', 'Initial Power Conversion Efficiency (%)', 'PCE after 500 Hours UV (%)', 'Halide Ion Migration Activation Energy (eV)'],
      rows: [
        ['Standard Methylammonium Lead Iodide (MAPbI3)', '19.4', '8.2', '0.32'],
        ['Cesium-Formamidinium Double Cation', '21.2', '16.5', '0.58'],
        ['2D/3D Heterostructure Passivated', '22.8', '21.1', '0.84'],
        ['Graphene Oxide Layered', '20.5', '14.0', '0.45']
      ]
    },
    passage: 'Photovoltaic engineer Dr. Aris Thorne investigated passivation techniques to prevent photo-induced halide segregation in perovskite solar cells. He hypothesized that depositing a hydrophobic two-dimensional (2D) perovskite capping layer over a 3D perovskite absorber (2D/3D Heterostructure) would create an energetic barrier that significantly increases halide ion migration activation energy, thereby achieving superior initial efficiency and retaining over 90% of its initial power conversion efficiency (PCE) under 500 hours of continuous ultraviolet degradation.',
    question: 'Which choice most effectively uses data from the table to support Dr. Thorne\'s hypothesis?',
    choices: [
      { id: 'A', text: 'The 2D/3D Heterostructure Passivated cell exhibited the highest activation energy (0.84 eV), achieved the highest initial PCE (22.8%), and retained 92.5% of its initial efficiency after 500 hours (21.1%).' },
      { id: 'B', text: 'Standard MAPbI3 exhibited the lowest activation energy (0.32 eV) and maintained higher post-UV efficiency than the Cesium-Formamidinium cell.' },
      { id: 'C', text: 'The Graphene Oxide Layered cell achieved higher initial efficiency than the Cesium-Formamidinium Double Cation cell.' },
      { id: 'D', text: 'Cesium-Formamidinium Double Cation cells retained over 90% of their initial efficiency after 500 hours of UV exposure.' }
    ],
    answer: 'A',
    explanation: 'Dr. Thorne hypothesized that the 2D/3D Heterostructure would have high activation energy, superior initial efficiency, and retain >90% of PCE after 500h ($21.1 / 22.8 = 92.54\\%$). Choice A provides exact data proving all parts of the hypothesis.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions standard cell.', whyIncorrect: 'MAPbI3 post-UV was 8.2%, which is far lower than Cesium (16.5%), making this factually wrong based on the table.', coreTrap: 'Factual table misstatement.' },
      C: { whyStudentsChoose: 'Compares graphene and cesium.', whyIncorrect: 'Graphene initial was 20.5%, which is lower than Cesium\'s 21.2%.', coreTrap: 'Inverted comparison.' },
      D: { whyStudentsChoose: 'Mentions cesium retention.', whyIncorrect: 'Cesium retention was $16.5 / 21.2 = 77.8\\%$, well below 90%.', coreTrap: 'Mathematical percentage miscalculation.' }
    }
  },
  {
    id: 'm2-rw2-q10',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 10,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'Neuroscientists investigating memory consolidation discovered that during slow-wave non-REM sleep, the hippocampus generates high-frequency "sharp-wave ripples" (SWRs) that replay neural firing sequences recorded during daytime spatial navigation. When researchers optogenetically suppressed these SWRs in mice immediately following maze training, the mice exhibited severe spatial memory deficits the following day. Crucially, when artificial SWR patterns mimicking successful navigation were induced in sleep-deprived mice, their maze navigation performance matched that of fully rested control mice. This finding suggests that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'the precise coordinated temporal pattern of sharp-wave ripples, rather than the total duration of sleep itself, is the critical neural mechanism driving spatial memory consolidation.' },
      { id: 'B', text: 'sleep deprivation completely eliminates the physical ability of hippocampal neurons to generate any electrical impulses.' },
      { id: 'C', text: 'spatial navigation in rodents is governed entirely by optical light stimulation rather than neural circuitry.' },
      { id: 'D', text: 'non-REM sleep is biologically unnecessary for any physiological function other than muscle tissue repair.' }
    ],
    answer: 'A',
    explanation: 'The experiment proved two things: (1) suppressing SWRs destroyed memory consolidation even during sleep, and (2) artificially inducing SWR patterns in sleep-deprived mice restored memory consolidation to normal. Therefore, the specific temporal replay pattern of SWRs is the essential functional mechanism for memory consolidation, independent of sleep duration per se.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions sleep deprivation.', whyIncorrect: 'Sleep deprivation impairs consolidation, but does not eliminate all electrical impulse capability.', coreTrap: 'Extreme biological overstatement.' },
      C: { whyStudentsChoose: 'Mentions optogenetic light stimulation.', whyIncorrect: 'Optogenetics was an experimental tool used by researchers, not the natural biological basis of animal navigation.', coreTrap: 'Experimental tool vs biological mechanism.' },
      D: { whyStudentsChoose: 'Discounts general sleep.', whyIncorrect: 'The text focuses specifically on spatial memory replay, not making broad claims about all other sleep functions.', coreTrap: 'Sweeping generalization.' }
    }
  },
  {
    id: 'm2-rw2-q11',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 11,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'During the high-pressure welding process, inert argon gas shields the molten metal pool from atmospheric ______ this barrier prevents brittle oxidation defects from compromising the structural integrity of the joint.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'contamination;' },
      { id: 'B', text: 'contamination,' },
      { id: 'C', text: 'contamination' },
      { id: 'D', text: 'contamination: and' }
    ],
    answer: 'A',
    explanation: 'The sentence consists of two independent clauses: "During the high-pressure... atmospheric contamination" and "this barrier prevents brittle oxidation...". A semicolon correctly joins the two independent clauses.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses a comma.', whyIncorrect: 'Creates a comma splice between two independent clauses.', coreTrap: 'Comma splice.' },
      C: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Creates a fused sentence.', coreTrap: 'Run-on sentence.' },
      D: { whyStudentsChoose: 'Combines colon and conjunction.', whyIncorrect: 'A colon cannot be paired with coordinating conjunction "and" to join standard clauses.', coreTrap: 'Punctuation mismatch.' }
    }
  },
  {
    id: 'm2-rw2-q12',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 12,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Subject-Verb Agreement)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'The synthesis of bio-compatible polymers from renewable plant cellulose, alongside advancements in micro-extrusion additive manufacturing, ______ new opportunities for patient-specific orthopedic implants.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'creates' },
      { id: 'B', text: 'create' },
      { id: 'C', text: 'have created' },
      { id: 'D', text: 'are creating' }
    ],
    answer: 'A',
    explanation: 'The core subject is the singular noun "synthesis". Phrases introduced by "alongside", "as well as", or "in addition to" are parenthetical modifying phrases and do not make the subject compound. A singular subject requires the singular verb "creates".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Treats "alongside" as a coordinating conjunction like "and".', whyIncorrect: '"Alongside..." is a prepositional modifier; the subject remains singular "synthesis".', coreTrap: 'Compound subject misconception.' },
      C: { whyStudentsChoose: 'Agrees with plural "advancements" or "polymers".', whyIncorrect: 'These nouns are inside modifiers; the subject is singular "synthesis".', coreTrap: 'Proximity agreement trap.' },
      D: { whyStudentsChoose: 'Matches plural nouns.', whyIncorrect: '"Are creating" is plural.', coreTrap: 'Plural progressive error.' }
    }
  },
  {
    id: 'm2-rw2-q13',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 13,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Modifiers)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Trained to recognize subtle tonal shifts and idiosyncratic dialectal idioms, ______ accurately deciphered the encrypted battlefield communications.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'the military linguists' },
      { id: 'B', text: 'the military linguists\' decryption algorithms' },
      { id: 'C', text: 'the decryption of the enemy signals by linguists' },
      { id: 'D', text: 'the intercepted radio dispatches' }
    ],
    answer: 'A',
    explanation: 'The introductory modifier "Trained to recognize subtle tonal shifts and idiosyncratic dialectal idioms" describes people who underwent training. Therefore, "the military linguists" must immediately follow the comma.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Focuses on algorithms.', whyIncorrect: 'Algorithms were not trained to recognize dialect idioms in this human context; the linguists were.', coreTrap: 'Possessive dangling modifier.' },
      C: { whyStudentsChoose: 'Focuses on decryption.', whyIncorrect: '"The decryption" was not trained.', coreTrap: 'Abstract noun modifier clash.' },
      D: { whyStudentsChoose: 'Mentions dispatches.', whyIncorrect: 'Radio dispatches were not trained.', coreTrap: 'Object dangling modifier.' }
    }
  },
  {
    id: 'm2-rw2-q14',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 14,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Parenthetical Dashes)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'The Hubble Space Telescope\'s successor—the James Webb Space Telescope, with its 6.5-meter gold-coated beryllium ______ has captured unprecedented views of the earliest cosmic structures.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'mirror—' },
      { id: 'B', text: 'mirror,' },
      { id: 'C', text: 'mirror' },
      { id: 'D', text: 'mirror;' }
    ],
    answer: 'A',
    explanation: 'The parenthetical appositive began with an em-dash ("successor—the James Webb..."). It must be closed with a matching em-dash before the main verb phrase "has captured".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Prefers comma.', whyIncorrect: 'Mismatches an opening em-dash with a closing comma.', coreTrap: 'Mismatched punctuation marks.' },
      C: { whyStudentsChoose: 'Omits punctuation.', whyIncorrect: 'Leaves the parenthetical open without closing punctuation.', coreTrap: 'Missing closure.' },
      D: { whyStudentsChoose: 'Uses semicolon.', whyIncorrect: 'A semicolon cannot close an internal appositive phrase.', coreTrap: 'Misused semicolon.' }
    }
  },
  {
    id: 'm2-rw2-q15',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 15,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Traditional incandescent light bulbs convert less than 10% of electrical energy into visible light, dissipating the remainder as waste heat. Light-emitting diodes (LEDs), ______, convert over 85% of electrical energy into illumination with minimal thermal loss.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'by contrast' },
      { id: 'B', text: 'furthermore' },
      { id: 'C', text: 'consequently' },
      { id: 'D', text: 'for instance' }
    ],
    answer: 'A',
    explanation: 'The first sentence details the low efficiency and high heat waste of incandescent bulbs (<10%). The second sentence details the high efficiency of LEDs (>85%). "By contrast" accurately highlights this stark difference in efficiency.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks it is adding more lighting facts.', whyIncorrect: '"Furthermore" indicates continuation, not opposing efficiency metrics.', coreTrap: 'Addition vs contrast.' },
      C: { whyStudentsChoose: 'Thinks LED efficiency is caused by incandescent waste.', whyIncorrect: 'The relationship is comparative contrast, not direct physical causation.', coreTrap: 'Causation error.' },
      D: { whyStudentsChoose: 'Thinks LEDs are an example of incandescent bulbs.', whyIncorrect: 'LEDs are a distinct, competing lighting technology.', coreTrap: 'Example misconception.' }
    }
  },
  {
    id: 'm2-rw2-q16',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 16,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'In behavioral ecology, the "handicap principle" posits that extravagant biological traits—such as the peacock\'s cumbersome train—evolved because they act as honest, unfalsifiable signals of genetic fitness. An inferior or diseased individual cannot bear the immense metabolic cost of growing and surviving with such an impediment; ______, only the most robust organisms can afford to flaunt these conspicuous evolutionary handicaps.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'thus' },
      { id: 'B', text: 'conversely' },
      { id: 'C', text: 'nonetheless' },
      { id: 'D', text: 'initially' }
    ],
    answer: 'A',
    explanation: 'Because inferior individuals cannot bear the metabolic cost of the handicap (premise), it logically follows that only robust organisms can display them (conclusion). "Thus" correctly signals this logical deduction.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Contrasts inferior with robust organisms.', whyIncorrect: 'The second clause is the direct logical deduction from the impossibility of inferior individuals bearing the cost, not a separate opposing idea.', coreTrap: 'Contrast vs logical deduction.' },
      C: { whyStudentsChoose: 'Sounds academic.', whyIncorrect: '"Nonetheless" indicates concession/counter-expectation, whereas this is the expected logical conclusion.', coreTrap: 'Concession error.' },
      D: { whyStudentsChoose: 'Thinks of chronological development.', whyIncorrect: '"Initially" indicates a first stage in time, which does not apply to a biological deduction.', coreTrap: 'Temporal mismatch.' }
    }
  },
  {
    id: 'm2-rw2-q17',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 17,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• The Roman aqueduct of Segovia was constructed during the 1st century CE in Hispania.\n• It spans 818 meters across the city center and reaches a maximum height of 28.5 meters.\n• The entire bridge structure consists of unmortared granite blocks held together solely by structural equilibrium and gravity.\n• The aqueduct transported potable water from the Fuente Fría river in the nearby Guadarrama mountains.\n• It remained in continuous, functional civic operation until the early 20th century.',
    question: 'The student wants to highlight both the architectural technique and the remarkable longevity of the Segovia aqueduct. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'Constructed entirely from unmortared granite blocks held together by gravity, the Roman aqueduct of Segovia demonstrated astounding longevity by supplying fresh water continuously for nearly two millennia until the 20th century.' },
      { id: 'B', text: 'The Roman aqueduct of Segovia spans 818 meters and transported water from the Guadarrama mountains to the city center.' },
      { id: 'C', text: 'Built in the 1st century CE, the Segovia aqueduct is an 818-meter stone bridge reaching a maximum height of 28.5 meters.' },
      { id: 'D', text: 'Roman civil engineers utilized gravity-fed water channels to supply Iberian provincial cities with fresh mountain water.' }
    ],
    answer: 'A',
    explanation: 'The prompt requires highlighting BOTH architectural technique (unmortared granite blocks held by gravity) AND longevity (operated continuously for nearly two millennia until the 20th century). Choice A encompasses both required elements.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions distance and water source.', whyIncorrect: 'Omits the unmortared gravity architectural technique and the 2,000-year operational longevity.', coreTrap: 'Missing both prompt objectives.' },
      C: { whyStudentsChoose: 'Mentions dimensions.', whyIncorrect: 'Focuses on height/length without describing the mortarless masonry technique or two-millennia longevity.', coreTrap: 'Dimensions only.' },
      D: { whyStudentsChoose: 'General statement on Roman engineering.', whyIncorrect: 'Does not mention Segovia specifically.', coreTrap: 'Off-target generalization.' }
    }
  },
  {
    id: 'm2-rw2-q18',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 18,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'The documentary filmmaker made a deliberate choice to omit melodramatic musical scores and staged reenactments, opting instead for a ______ cinema verité style that let the raw, unadorned testimonies of the refugees speak for themselves.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'stark' },
      { id: 'B', text: 'flamboyant' },
      { id: 'C', text: 'sensational' },
      { id: 'D', text: 'convoluted' }
    ],
    answer: 'A',
    explanation: 'The context emphasizes that the filmmaker avoided melodrama and staged effects in favor of "raw, unadorned testimonies." "Stark" means severe, bare, or plain in appearance, matching "unadorned."',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Associated with artistic filmmaking.', whyIncorrect: '"Flamboyant" means showy and elaborate, the exact opposite of unadorned simplicity.', coreTrap: 'Direct antonym.' },
      C: { whyStudentsChoose: 'Sounds dramatic.', whyIncorrect: '"Sensational" means exaggerated for shock value, which was explicitly avoided.', coreTrap: 'Opposite meaning trap.' },
      D: { whyStudentsChoose: 'Associated with complex narratives.', whyIncorrect: '"Convoluted" means overly intricate or tangled.', coreTrap: 'Negative complexity trap.' }
    }
  },
  {
    id: 'm2-rw2-q19',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 19,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'In evolutionary developmental biology ("evo-devo"), the concept of "deep homology" describes how vastly disparate animal clades utilize identical genetic regulatory circuits to construct anatomically distinct morphological structures. For instance, the *Pax6* master regulator gene orchestrates eye development across organisms as anatomically divergent as fruit flies (*Drosophila* with compound eyes) and humans (with single-lens camera eyes). Rather than independently evolving novel visual genes from scratch, distinct evolutionary lineages co-opted an ancient, shared ancestral genetic toolkit to generate diverse ocular morphologies.',
    question: 'Which choice best summarizes the concept of "deep homology" as described in the text?',
    choices: [
      { id: 'A', text: 'Diverse animal lineages utilize a shared, ancestral set of regulatory genes to develop anatomically different structures.' },
      { id: 'B', text: 'Compound eyes and single-lens camera eyes are anatomically identical in their optical functioning.' },
      { id: 'C', text: 'Organisms in divergent lineages evolve unique genetic circuits from scratch for every new morphological trait.' },
      { id: 'D', text: 'The *Pax6* gene is found exclusively in mammalian organisms with camera eyes.' }
    ],
    answer: 'A',
    explanation: 'The passage defines deep homology as how "vastly disparate animal clades utilize identical genetic regulatory circuits to construct anatomically distinct morphological structures," such as *Pax6* driving both compound and camera eyes.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions compound and camera eyes.', whyIncorrect: 'The text states they are "anatomically divergent," not identical.', coreTrap: 'Direct contradiction of text.' },
      C: { whyStudentsChoose: 'Mentions genetic evolution.', whyIncorrect: 'The text explicitly states lineages did NOT independently evolve genes from scratch.', coreTrap: 'Opposite of thesis.' },
      D: { whyStudentsChoose: 'Mentions Pax6.', whyIncorrect: 'The text explicitly states Pax6 is present in fruit flies (*Drosophila*) as well as humans.', coreTrap: 'False limitation.' }
    }
  },
  {
    id: 'm2-rw2-q20',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 20,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Essential vs Nonessential Modifiers)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Agricultural scientist Dr. Norman Borlaug, whose development of high-yielding semi-dwarf wheat varieties sparked the Green ______ credited with saving over one billion lives from catastrophic famine.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'Revolution, is' },
      { id: 'B', text: 'Revolution is' },
      { id: 'C', text: 'Revolution; is' },
      { id: 'D', text: 'Revolution—is' }
    ],
    answer: 'A',
    explanation: 'The nonrestrictive relative clause starts with a comma after Borlaug ("Borlaug, whose development..."). It must be closed with a comma after "Revolution" before the main verb "is credited".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Omits the closing comma.', whyIncorrect: 'Leaves the relative clause unclosed, creating a punctuation imbalance.', coreTrap: 'Missing nonrestrictive closure comma.' },
      C: { whyStudentsChoose: 'Uses a semicolon.', whyIncorrect: 'A semicolon cannot be placed before the main verb of a sentence.', coreTrap: 'Semicolon before verb error.' },
      D: { whyStudentsChoose: 'Uses a dash.', whyIncorrect: 'Mismatches the opening comma with a closing dash.', coreTrap: 'Mismatched delimiters.' }
    }
  },
  {
    id: 'm2-rw2-q21',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 21,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Verb Tense)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'By the time the James Webb Space Telescope achieved orbit around the Second Sun-Earth Lagrange Point (L2) in January 2022, mission controllers ______ over two decades planning its complex sunshield deployment sequence.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'had spent' },
      { id: 'B', text: 'have spent' },
      { id: 'C', text: 'were spending' },
      { id: 'D', text: 'spend' }
    ],
    answer: 'A',
    explanation: 'The reference point in the past is when the telescope "achieved orbit" (simple past). The planning occurred during the two decades prior to that past milestone. An action completed prior to another past event requires the past perfect tense: "had spent".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses present perfect.', whyIncorrect: 'Present perfect links past to the current present, but the temporal landmark is past orbit achievement.', coreTrap: 'Present perfect mismatch.' },
      C: { whyStudentsChoose: 'Uses past progressive.', whyIncorrect: '"Were spending" implies ongoing simultaneous action rather than completed prior planning.', coreTrap: 'Aspect error.' },
      D: { whyStudentsChoose: 'Uses simple present.', whyIncorrect: 'Clashes with historical past timeline.', coreTrap: 'Present tense error.' }
    }
  },
  {
    id: 'm2-rw2-q22',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 22,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'The political theorist argued that sovereign authority in modern constitutional republics is not ______; rather, executive power is bounded by statutory constraints, judicial oversight, and decentralized institutional counterweights.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'unfettered' },
      { id: 'B', text: 'legitimate' },
      { id: 'C', text: 'ephemeral' },
      { id: 'D', text: 'provisional' }
    ],
    answer: 'A',
    explanation: 'The sentence states that executive power "is bounded by statutory constraints, judicial oversight, and decentralized institutional counterweights." This means power is NOT unrestrained. "Unfettered" means unrestrained or uninhibited, so saying authority is "not unfettered" logically fits the constraints mentioned.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Focuses on constitutional law.', whyIncorrect: 'Constitutional power IS legitimate; saying it is "not legitimate" contradicts democratic theory.', coreTrap: 'Meaning inversion.' },
      C: { whyStudentsChoose: 'Sounds formal.', whyIncorrect: '"Ephemeral" means short-lived, which does not relate to institutional constraints.', coreTrap: 'Irrelevant attribute.' },
      D: { whyStudentsChoose: 'Relates to temporary power.', whyIncorrect: '"Provisional" means temporary, which is not the antonym of bounded/constrained.', coreTrap: 'Temporal vs constraint confusion.' }
    }
  },
  {
    id: 'm2-rw2-q23',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 23,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In the manufacture of precision optical lenses, manual glass polishing frequently introduces microscopic surface aberrations. Automated robotic polishing systems equipped with laser interferometry, ______, achieve nanometer-scale surface uniformity across complex curved geometries.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'in contrast' },
      { id: 'B', text: 'furthermore' },
      { id: 'C', text: 'for example' },
      { id: 'D', text: 'subsequently' }
    ],
    answer: 'A',
    explanation: 'Sentence 1 details the drawbacks of manual polishing (microscopic aberrations). Sentence 2 highlights the superior precision of automated robotic polishing (nanometer-scale uniformity). "In contrast" correctly reflects this comparative opposition.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks it adds more manufacturing techniques.', whyIncorrect: '"Furthermore" indicates continuation of similar points, not opposing quality outcomes.', coreTrap: 'Addition vs contrast.' },
      C: { whyStudentsChoose: 'Thinks robotic polishing is an example of manual errors.', whyIncorrect: 'Robotic polishing is an alternative solution, not an example of manual error.', coreTrap: 'Example error.' },
      D: { whyStudentsChoose: 'Thinks of a chronological step in manufacturing.', whyIncorrect: 'The two sentences compare two alternative methods, not a sequential two-step process.', coreTrap: 'Chronological sequence trap.' }
    }
  },
  {
    id: 'm2-rw2-q24',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 24,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'In Henry David Thoreau\'s 1854 memoir *Walden*, the narrator contends that the pursuit of superfluous material luxuries encumbers the human spirit, advocating instead a deliberate simplification of daily existence to uncover life\'s essential spiritual truths.',
    question: 'Which quotation from *Walden* most directly supports the claim in the text?',
    choices: [
      { id: 'A', text: '"Simplicity, simplicity, simplicity! I say, let your affairs be as two or three, and not a hundred or a thousand; instead of a million count half a dozen, and keep your accounts on your thumb-nail."' },
      { id: 'B', text: '"I went to the woods because I wished to live deliberately, to front only the essential facts of life."' },
      { id: 'C', text: '"The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation."' },
      { id: 'D', text: '"I had three chairs in my house; one for solitude, two for friendship, three for society."' }
    ],
    answer: 'A',
    explanation: 'The claim asserts that Thoreau advocated a deliberate simplification of daily existence and reduction of material encumbrances. Quotation A is Thoreau\'s famous imperative command: "Simplicity, simplicity, simplicity! I say, let your affairs be as two or three, and not a hundred or a thousand... keep your accounts on your thumb-nail."',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions living deliberately.', whyIncorrect: 'While famous, it focuses on his general reason for going to the woods rather than his concrete programmatic advice to drastically simplify affairs and material accounts.', coreTrap: 'Broad motive vs specific simplification imperative.' },
      C: { whyStudentsChoose: 'Famous philosophical quote.', whyIncorrect: 'Diagnoses societal unhappiness (quiet desperation) rather than advocating the solution of daily simplification.', coreTrap: 'Problem statement vs programmatic solution.' },
      D: { whyStudentsChoose: 'Shows his sparse lifestyle.', whyIncorrect: 'A specific domestic anecdote about chairs rather than his overarching philosophy of simplifying all affairs.', coreTrap: 'Minor anecdote.' }
    }
  },
  {
    id: 'm2-rw2-q25',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 25,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Colon Usage)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Theoretical cosmologists evaluating inflation models agree that cosmic inflation resolves two fundamental cosmological ______ the horizon problem of thermal uniformity and the flatness problem of spatial geometry.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'paradoxes:' },
      { id: 'B', text: 'paradoxes;' },
      { id: 'C', text: 'paradoxes,' },
      { id: 'D', text: 'paradoxes' }
    ],
    answer: 'A',
    explanation: 'The clause preceding the blank is a complete independent clause ("Theoretical cosmologists... agree that cosmic inflation resolves two fundamental cosmological paradoxes"). A colon is the standard punctuation mark used to introduce an explanation or list specifying those two paradoxes.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses semicolon.', whyIncorrect: 'A semicolon must be followed by an independent clause, but the following phrase is a noun phrase list.', coreTrap: 'Semicolon before fragment.' },
      C: { whyStudentsChoose: 'Uses comma.', whyIncorrect: 'A comma provides insufficient structural demarcation before an elaborative specification of two items.', coreTrap: 'Weak comma boundary.' },
      D: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Creates a fused run-on into the list.', coreTrap: 'Fused list.' }
    }
  },
  {
    id: 'm2-rw2-q26',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 26,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• The Antikythera mechanism is an ancient Greek analog mechanical computer discovered in a shipwreck in 1901.\n• It dates to approximately 150–100 BCE.\n• Micro-focus X-ray computed tomography revealed a system of over 30 precision bronze gear wheels.\n• The mechanism predicted astronomical positions, lunar phases, and solar and lunar eclipses with mechanical accuracy.\n• It also tracked the four-year cycle of the ancient Olympic Games.',
    question: 'The student wants to emphasize the sophisticated technological capability of the Antikythera mechanism. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'Dating to the 2nd century BCE, the Antikythera mechanism utilized an intricate system of over 30 precision bronze gears to accurately compute complex astronomical cycles, eclipse timings, and Olympic schedules.' },
      { id: 'B', text: 'Discovered in an ancient shipwreck in 1901, the Antikythera mechanism is an ancient Greek artifact made of bronze.' },
      { id: 'C', text: 'Micro-focus X-ray computed tomography is an advanced imaging tool used by archaeologists to examine ancient shipwrecks.' },
      { id: 'D', text: 'Ancient Greek athletes competed in the Olympic Games every four years according to calendar cycles.' }
    ],
    answer: 'A',
    explanation: 'The prompt requires emphasizing the sophisticated technological capability of the device. Choice A details its sophisticated technology: 30+ precision bronze gears accurately computing astronomical positions, eclipses, and Olympic cycles.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions discovery.', whyIncorrect: 'Describes where it was found rather than emphasizing its technological capabilities.', coreTrap: 'Discovery history vs technology capability.' },
      C: { whyStudentsChoose: 'Mentions imaging tool.', whyIncorrect: 'Focuses on modern X-ray imaging rather than the mechanism itself.', coreTrap: 'Modern tool focus.' },
      D: { whyStudentsChoose: 'Mentions Olympics.', whyIncorrect: 'Focuses on athlete competition rather than the mechanical computing power of the device.', coreTrap: 'Irrelevant historical trivia.' }
    }
  },
  {
    id: 'm2-rw2-q27',
    examId: 'mock-2',
    section: 'reading-writing',
    module: 2,
    questionNumber: 27,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'In the study of international relations, realism posits that sovereign states act as self-interested, unitary actors in an anarchic global system, prioritizing national security and relative power accumulation above all else. Liberal institutionalism concedes that the international arena lacks a supreme world government, yet argues that multilateral treaties, international trade interdependence, and international organizations can successfully foster durable cooperative peace by mitigating mutual distrust and reducing transaction costs.',
    question: 'Which choice best describes the relationship between the two sentences in the passage?',
    choices: [
      { id: 'A', text: 'The first sentence presents a foundational theory of state behavior, and the second sentence introduces a competing framework that shares an underlying premise while arriving at a more optimistic conclusion.' },
      { id: 'B', text: 'The first sentence proposes a historical hypothesis, and the second sentence provides empirical evidence that completely invalidates it.' },
      { id: 'C', text: 'The first sentence defines a modern political ideology, and the second sentence traces its ancient philosophical origins.' },
      { id: 'D', text: 'The first sentence outlines an economic policy, and the second sentence details the regulatory agencies responsible for enforcing it.' }
    ],
    answer: 'A',
    explanation: 'Sentence 1 introduces realism (states act for relative power in an anarchic world). Sentence 2 introduces liberal institutionalism, which shares the premise that the international system is anarchic ("concedes that the international arena lacks a supreme world government"), but reaches the more optimistic conclusion that international institutions and trade can create durable peace.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Notices the disagreement between the schools.', whyIncorrect: 'Sentence 2 presents a competing theoretical framework, not empirical proof that invalidates realism.', coreTrap: 'Theory vs invalidation trap.' },
      C: { whyStudentsChoose: 'Thinks of historical traditions.', whyIncorrect: 'Does not trace ancient philosophical origins.', coreTrap: 'Chronological origin error.' },
      D: { whyStudentsChoose: 'Mentions trade.', whyIncorrect: 'The passage is about international relations theory and state security, not domestic economic regulation.', coreTrap: 'Subject matter category error.' }
    }
  }
];
