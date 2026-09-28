import { Question } from '../types/exam';

export interface HardestQuestionItem extends Question {
  category: 'inference' | 'punctuation';
  subCategory: string;
  trapType: string;
  ruleLesson: string;
  proTip: string;
}

export const HARDEST_QUESTIONS: HardestQuestionItem[] = [
  // =========================================================================
  // HARDEST INFERENCE QUESTIONS (10 ELITE ITEMS)
  // =========================================================================
  {
    id: 'hard-inf-1',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 1,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Scientific Hypothesis & Negative Control Extrapolation',
    trapType: 'Overgeneralized Causation Trap',
    ruleLesson: 'A valid inference must never exceed the specific boundaries established by the experimental controls. Avoid choices that assert absolute biological necessity when the text only proves a conditional mechanism.',
    proTip: 'Look for the exact boundary of what the control group proved versus what the intervention altered.',
    passage: 'High-altitude Tibetan populations possess a unique variant of the *EPAS1* transcription factor gene, inherited via archaic introgression from Denisovans, that prevents the dangerous erythrocytosis (red blood cell overproduction) typical of lowland humans exposed to hypoxia. When researchers engineered mice with the human Tibetan *EPAS1* allele, the mice maintained normal hematocrit levels and unimpaired arterial oxygen delivery at simulated altitudes of 4,500 meters. However, when the engineered mice were exposed to severe normobaric hyperoxia (excessive oxygen at sea level), their metabolic capillary density decreased significantly faster than that of wild-type control mice. This divergence suggests that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'the physiological advantage conferred by the Tibetan *EPAS1* allele under hypoxic conditions entails an evolutionary trade-off that compromises vascular stability in high-oxygen environments.' },
      { id: 'B', text: 'Denisovans lived exclusively in high-altitude mountain ranges and were physiologically incapable of surviving in lowland sea-level habitats.' },
      { id: 'C', text: 'erythrocytosis is an indispensable biological adaptation required for all mammalian species to survive in high-altitude environments.' },
      { id: 'D', text: 'the Tibetan *EPAS1* variant completely suppresses all cellular transcription factor pathways associated with oxygen sensing.' }
    ],
    answer: 'A',
    explanation: 'The passage demonstrates two distinct outcomes: the allele provides a distinct benefit in low-oxygen environments (hypoxia), but leads to accelerated capillary reduction in high-oxygen environments (hyperoxia). This indicates an evolutionary trade-off where an adaptation tailored for high altitude carries a vulnerability under opposite ambient conditions.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Assumes the hyperoxia disadvantage meant Denisovans could never live in lowlands.', whyIncorrect: 'The text discusses a genetic mouse study and Tibetan alleles; it makes no historical claim that Denisovans were incapable of living at sea level.', coreTrap: 'Scope expansion and extreme historical claim.' },
      C: { whyStudentsChoose: 'Mentions erythrocytosis.', whyIncorrect: 'The passage shows that Tibetans survive WITHOUT erythrocytosis, directly disproving that it is indispensable.', coreTrap: 'Contradiction of main premise.' },
      D: { whyStudentsChoose: 'Sounds technical.', whyIncorrect: '"Completely suppresses all pathways" is an extreme overstatement unsupported by the passage.', coreTrap: 'Extreme quantifier trap.' }
    }
  },
  {
    id: 'hard-inf-2',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 2,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Competing Theoretical Cosmological Models',
    trapType: 'Premise Inversion Trap',
    ruleLesson: 'When an observation deviates from a standard model, the logical inference must pinpoint the exact variable that reconciles the mathematical contradiction rather than dismissing the observational methodology.',
    proTip: 'Differentiate between what the Cold Dark Matter model predicted versus what gravitational lensing actually revealed.',
    passage: 'Under the standard Cold Dark Matter (CDM) paradigm, collisionless dark matter should cluster into dense, cuspy halos at the centers of dwarf spheroidal galaxies. However, high-resolution stellar kinematic mapping of the Fornax and Sculptor dwarf galaxies consistently reveals flat, constant-density "cores" rather than central cusps. To resolve this "core-cusp problem" without abandoning dark matter, some astrophysicists hypothesize that dark matter particles possess a non-zero self-interaction cross-section (SIDM), enabling energy transfer between particles in dense central regions. If this SIDM hypothesis is correct, astrophysicists should expect that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'dwarf galaxies with higher central dark matter collision rates will exhibit flatter, more diffuse central density profiles than standard collisionless models predict.' },
      { id: 'B', text: 'stellar kinematics in dwarf galaxies can be explained entirely by baryonic matter without invoking any dark matter halos.' },
      { id: 'C', text: 'the core-cusp discrepancy will disappear completely if astronomical instruments increase their optical resolution by a factor of two.' },
      { id: 'D', text: 'self-interacting dark matter particles will undergo rapid gravitational collapse into central supermassive black holes in all dwarf galaxies.' }
    ],
    answer: 'A',
    explanation: 'The passage explains that self-interacting dark matter (SIDM) allows particles to transfer energy in dense central regions, which is hypothesized to flatten the dense cusps into constant-density cores. Therefore, if SIDM is correct, higher collision/interaction rates in dense centers will produce flatter, more diffuse core profiles compared to collisionless CDM models.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks the core-cusp problem eliminates dark matter.', whyIncorrect: 'The text explicitly states the hypothesis seeks to resolve the issue "without abandoning dark matter".', coreTrap: 'Direct contradiction of explicit constraint.' },
      C: { whyStudentsChoose: 'Attributes anomalies to observational instrument error.', whyIncorrect: 'The text treats the core measurements as genuine empirical reality, not an optical artifact.', coreTrap: 'Methodological dismissal trap.' },
      D: { whyStudentsChoose: 'Sensationalized black hole physics.', whyIncorrect: 'Energy transfer flattens density; it does not trigger runaway collapse into supermassive black holes.', coreTrap: 'Unsupported extreme outcome.' }
    }
  },
  {
    id: 'hard-inf-3',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 3,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Evolutionary Game Theory & Cheating Mechanisms',
    trapType: 'Frequency-Dependent Equilibrium Trap',
    ruleLesson: 'In evolutionary biology questions involving mimicry or signaling, the stability of a deceptive strategy depends strictly on the relative frequency of the honest signal in the population.',
    proTip: 'Determine what happens to the receiver\'s fitness when the ratio of deceptive signals exceeds the threshold of beneficial responses.',
    passage: 'Female predatory fireflies of the genus *Photuris* engage in aggressive mimicry: by imitating the precise bioluminescent flash response sequences of female *Photinus* fireflies, they lure male *Photinus* suitors seeking mates and consume them. Evolutionary biologists observed that in isolated woodland patches where *Photuris* predators outnumber *Photinus* females by more than four to one, male *Photinus* courtship flashing behavior drops precipitously, with males frequently ignoring even genuine female mating signals. This observation indicates that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'the evolutionary viability of aggressive mimicry is frequency-dependent, becoming self-limiting when the high probability of predation outweighs the reproductive incentive to respond to courtship signals.' },
      { id: 'B', text: 'female *Photuris* fireflies will permanently lose the biochemical ability to synthesize luciferin when *Photinus* prey densities decline.' },
      { id: 'C', text: 'male *Photinus* fireflies possess an innate cognitive ability to consciously distinguish between predatory and genuine mating flashes.' },
      { id: 'D', text: 'courtship flashing will be permanently eradicated across all firefly species within several generations.' }
    ],
    answer: 'A',
    explanation: 'When predators become too abundant relative to genuine females (4:1), the predation risk becomes so high that males stop responding to all flashes, including real ones. This means the aggressive mimicry strategy undermines itself when it becomes too frequent—a classic hallmark of frequency-dependent selection.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Focuses on chemical synthesis.', whyIncorrect: 'Luciferin is the basic light-producing molecule; predatory pressure does not delete their physiological enzymes.', coreTrap: 'Biological impossibility.' },
      C: { whyStudentsChoose: 'Assumes males learned to spot the fake.', whyIncorrect: 'The text states males ignore "even genuine female mating signals", proving they CANNOT distinguish the two and simply suppress responses globally.', coreTrap: 'Contradiction of evidence.' },
      D: { whyStudentsChoose: 'Extreme extinction prediction.', whyIncorrect: 'The text discusses a localized behavioral suppression in specific high-density patches, not the total global eradication of firefly bioluminescence.', coreTrap: 'Catastrophizing scope.' }
    }
  },
  {
    id: 'hard-inf-4',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 4,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Institutional Economic History & Secret Dispersion',
    trapType: 'Monopoly Preservation Fallacy',
    ruleLesson: 'Evaluate historical divergence: when a legal restriction is enforced with extreme penalties, inspect how external market demand creates incentives for clandestine technology transfer.',
    proTip: 'Look at the tension between Venice\'s draconian secrecy laws and the spread of Murano glass across European royal courts.',
    passage: 'In 1291, the Republic of Venice decreed that all glass furnaces be relocated to the island of Murano, ostensibly to prevent catastrophic urban fires but primarily to monopolize the trade secret of *cristallo*—the world\'s first ultra-transparent luxury glass. Venetian law imposed capital punishment on artisans who fled the lagoon to practice abroad. Yet archival records from 16th-century London, Antwerp, and Prague document dozens of thriving glass workshops producing *façon de Venise* (Venetian-style glass) operated by Venetian expatriates who had successfully escaped. Crucially, records show that Venetian authorities rarely carried out extraterritorial assassinations against these defectors, opting instead to offer lucrative tax pardons to entice them back to Murano. This policy pattern suggests that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'the Venetian state prioritized re-absorbing skilled artisan human capital over enforcing punitive legal retribution that would do nothing to restore lost trade secrets.' },
      { id: 'B', text: 'the glass manufactured in Antwerp and London was chemically indistinguishable from low-grade common sodalime glass.' },
      { id: 'C', text: 'the original 1291 relocation decree was motivated purely by fire safety concerns with zero economic intent.' },
      { id: 'D', text: 'Venetian glassmakers lacked any significant technological advantage over contemporary Bohemian and English artisans.' }
    ],
    answer: 'A',
    explanation: 'Venetian authorities realized that once an artisan fled and shared techniques abroad, killing them did not bring back the secret. Offering lucrative tax pardons to entice them to return allowed the Republic to regain elite craftsmanship and production capacity, proving they prioritized valuable human capital over rigid punitive revenge.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Downplays the foreign glass quality.', whyIncorrect: 'The text notes these foreign workshops were thriving and producing true Venetian-style cristallo glass.', coreTrap: 'Undermining factual success.' },
      C: { whyStudentsChoose: 'Refers back to the 1291 fire safety decree.', whyIncorrect: 'The passage explicitly states the relocation was "primarily to monopolize the trade secret".', coreTrap: 'Contradicting explicit premise.' },
      D: { whyStudentsChoose: 'Assumes equal technology.', whyIncorrect: 'The entire text centers on Venice\'s unique proprietary advantage in cristallo glass.', coreTrap: 'False equivalence.' }
    }
  },
  {
    id: 'hard-inf-5',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 5,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Synaptic Plasticity & Memory Engram Reactivation',
    trapType: 'Storage vs Retrieval Confusion',
    ruleLesson: 'Distinguish fundamentally between a failure of memory storage (physical loss of engram traces) versus a failure of memory retrieval (access blockage).',
    proTip: 'If artificial stimulation recovers a memory that natural cues could not, the storage mechanism was intact all along.',
    passage: 'In neurobiological models of retrograde amnesia, protein synthesis inhibitors (such as anisomycin) administered immediately after memory acquisition prevent the synaptic consolidation required for long-term memory retrieval. Animals treated with anisomycin fail to exhibit fear-conditioned freezing responses when exposed to conditioned auditory tones, leading classic neuroscientists to conclude that the physical memory trace (engram) was never formed. However, in 2015, Tonegawa and colleagues tagged conditioned engram neurons with channelrhodopsin prior to anisomycin administration. When they later optogenetically stimulated these specific tagged neurons directly with blue laser light, the amnesic mice exhibited full fear-conditioned freezing. This breakthrough demonstrates that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'anisomycin disrupts the synaptic neural pathways necessary for memory retrieval rather than preventing the initial physical encoding and storage of the memory engram.' },
      { id: 'B', text: 'protein synthesis is completely irrelevant to any aspect of long-term synaptic memory formation.' },
      { id: 'C', text: 'fear-conditioned memories in rodents are stored exclusively in the auditory cortex rather than hippocampal engram assemblies.' },
      { id: 'D', text: 'optogenetic laser stimulation creates artificial false memories that have no relation to prior learning trials.' }
    ],
    answer: 'A',
    explanation: 'Because direct optogenetic stimulation of the tagged engram neurons produced the conditioned fear response, the physical memory engram must have been successfully stored despite anisomycin. Therefore, anisomycin blocked the natural retrieval pathway (synaptic connectivity), not the underlying memory storage itself.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Dismisses protein synthesis entirely.', whyIncorrect: 'Protein synthesis is still required for natural retrieval circuitry; it was just shown not to prevent initial encoding.', coreTrap: 'Sweeping dismissal of established mechanism.' },
      C: { whyStudentsChoose: 'Mentions auditory cortex.', whyIncorrect: 'The text discusses hippocampal engram assemblies, not exclusive auditory cortex storage.', coreTrap: 'Anatomical misattribution.' },
      D: { whyStudentsChoose: 'Thinks the blue light implanted a fake memory.', whyIncorrect: 'The experiment tagged the REAL learning neurons from the training trial, proving it revived the actual original memory.', coreTrap: 'False memory misconception.' }
    }
  },
  {
    id: 'hard-inf-6',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 6,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Epistasis & Multi-Locus Compensatory Fitness',
    trapType: 'Isolated Mutation Assumption',
    ruleLesson: 'When an initial resistance mutation carries a severe physiological cost, evolutionary persistence in wild populations requires secondary compensatory mutations that restore biological fitness without disabling resistance.',
    proTip: 'Look at the interaction between the primary resistance mutation (fitness cost) and secondary background mutations (fitness recovery).',
    passage: 'When bacteria develop resistance to fluoroquinolone antibiotics via point mutations in the *gyrA* gene, the altered DNA gyrase enzyme typically exhibits diminished catalytic efficiency, causing a substantial fitness deficit (slower replication rate) in antibiotic-free environments compared to wild-type strains. In clinical surveillance, however, resistant *gyrA* mutants frequently outcompete wild-type strains in hospital wastewater systems even after antibiotic runoff has dropped to undetectable concentrations. Whole-genome sequencing reveals that these persistent clinical strains invariably harbor secondary mutations in the *parC* and *rpoB* regulatory genes that restore normal DNA supercoiling kinetics. It can reasonably be inferred that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'the secondary mutations alleviate the metabolic fitness cost of the *gyrA* resistance mutation, allowing antibiotic-resistant strains to remain competitively viable without ongoing antibiotic selection pressure.' },
      { id: 'B', text: 'fluoroquinolone antibiotics become lethal to wild-type bacteria only when secondary mutations in *parC* are absent.' },
      { id: 'C', text: 'the *gyrA* point mutation converts fluoroquinolone molecules into nutritional carbon substrates that accelerate bacterial growth.' },
      { id: 'D', text: 'bacterial resistance to fluoroquinolones will completely revert to wild-type susceptibility within a single generation in wastewater.' }
    ],
    answer: 'A',
    explanation: 'The *gyrA* mutation gives antibiotic resistance but causes a fitness deficit (slower growth). The secondary mutations in *parC* and *rpoB* restore normal enzyme kinetics, eliminating the fitness penalty. This explains why the resistant strains can persist and outcompete wild-type bacteria even when antibiotics are no longer present.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Confuses the mechanism of antibiotic action with fitness.', whyIncorrect: 'Fluoroquinolones kill wild-type bacteria regardless of *parC*.', coreTrap: 'Mechanism confusion.' },
      C: { whyStudentsChoose: 'Sensationalized biochemistry.', whyIncorrect: 'Antibiotics are not eaten as food; resistance comes from enzyme modification.', coreTrap: 'Absurd biological claim.' },
      D: { whyStudentsChoose: 'Assumes fast reversion.', whyIncorrect: 'The text explains that the strains PERSIST in wastewater rather than reverting.', coreTrap: 'Direct contradiction of surveillance data.' }
    }
  },
  {
    id: 'hard-inf-7',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 7,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Trophic Hysteresis & Alternative Stable Ecosystem States',
    trapType: 'Linear Reversibility Trap',
    ruleLesson: 'In ecological hysteresis, the path to degradation is not linearly symmetric with the path to recovery. Restoring the original perturbing variable to baseline does not automatically restore the previous ecosystem state.',
    proTip: 'Note that the sea otter population density required to collapse an urchin barren is far higher than the density that originally allowed the barren to form.',
    passage: 'In temperate coastal marine ecosystems, overgrazing by purple sea urchins (*Strongylocentrotus purpuratus*) can abruptly transform lush giant kelp forests into barren, desolate "urchin barrens." Once established, urchin barrens exhibit severe ecological hysteresis: even when sea urchin populations starve and experience severe nutrient deprivation, they do not die off; instead, they resorb their internal organs and enter a dormant, low-metabolic state ("zombie urchins") that can persist for years on trace dissolved organic matter. When apex sea otter (*Enhydra lutris*) predators were reintroduced to an established urchin barren in Monterey Bay, otters initially ignored the barren patches entirely, choosing instead to forage exclusively in remaining healthy kelp patches. This foraging behavior indicates that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'the low nutritional value of emaciated, dormant urchins in established barrens disincentivizes otter predation, preventing apex predators from immediately reversing the state shift.' },
      { id: 'B', text: 'sea otters are physiologically incapable of digesting echinoderm prey that have undergone internal organ resorption.' },
      { id: 'C', text: 'giant kelp plants secrete chemical deterrents that attract sea otters away from urchin barrens.' },
      { id: 'D', text: 'purple sea urchins in dormant states develop impenetrable physical armor that prevents otter predation.' }
    ],
    answer: 'A',
    explanation: 'The passage explains that "zombie urchins" in barrens resorb their internal organs and become nutritionally emaciated. Predators like sea otters optimize energy intake and thus ignore the nutritionally worthless urchins in barrens, foraging instead where prey is healthy. This explains why reintroducing otters fails to immediately reverse the urchin barren state.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Focuses on digestion.', whyIncorrect: 'Otters CAN digest them; they choose not to eat them because of suboptimal energetic return (caloric payoff), not an absolute inability to digest.', coreTrap: 'Absolute physiological barrier trap.' },
      C: { whyStudentsChoose: 'Invents plant defense chemicals.', whyIncorrect: 'No plant chemical deterrent is mentioned in the text.', coreTrap: 'Fabricated botanical detail.' },
      D: { whyStudentsChoose: 'Imagines armored physical shells.', whyIncorrect: 'The text attributes their dormancy to organ resorption and low metabolism, not thicker armor.', coreTrap: 'Unwarranted physical assumption.' }
    }
  },
  {
    id: 'hard-inf-8',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 8,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Pragmatic Implicature & Legal Statutory Interpretation',
    trapType: 'Literalist Redundancy Trap',
    ruleLesson: 'In statutory interpretation, the canon of *surplusage* dictates that courts must interpret legal texts so that no word, clause, or sentence is rendered superfluous, void, or insignificant.',
    proTip: 'Look at the distinction between "and" and "or" when paired with qualifiers.',
    passage: 'In statutory jurisprudence, the "rule against surplusage" dictates that courts must interpret a legislative statute such that every word, phrase, and clause is given operational effect, operating on the presumption that lawmakers do not include superfluous or redundant language. In a landmark maritime safety case, appellate judges evaluated a federal statute requiring commercial vessels to install "automated fire suppression systems in engine compartments and accessible auxiliary battery storage rooms." The maritime shipping conglomerate argued that the modifier "accessible" applied to both engine compartments and battery rooms, meaning inaccessible engine compartments were exempt from the requirement. If the court strictly applies the rule against surplusage, it would reject the shipping company\'s argument because ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'all marine engine compartments are by structural necessity accessible for maintenance, meaning applying the modifier to them would render the word "accessible" redundant surplusage.' },
      { id: 'B', text: 'commercial shipping vessels are exempt from all federal safety statutes when navigating international territorial waters.' },
      { id: 'C', text: 'the word "and" in federal legislation is always interpreted by maritime courts as an exclusive disjunctive conjunction.' },
      { id: 'D', text: 'automated fire suppression systems are ineffective at extinguishing auxiliary lithium battery fires.' }
    ],
    answer: 'A',
    explanation: 'Under the rule against surplusage, courts avoid reading modifiers in a way that creates useless repetition. If all engine compartments are inherently accessible by design, applying "accessible" to them would make the statutory word redundant. Restricting "accessible" only to the battery rooms gives the word meaningful, non-redundant operational effect.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Brings in international maritime law.', whyIncorrect: 'The case specifically evaluates the statutory interpretation of a federal rule, not global territorial exemptions.', coreTrap: 'Extraneous jurisdictional claim.' },
      C: { whyStudentsChoose: 'Touches on grammar/conjunctions.', whyIncorrect: '"And" is a conjunctive joiner, not an "exclusive disjunctive" (which is either/or).', coreTrap: 'Grammatical contradiction.' },
      D: { whyStudentsChoose: 'Focuses on battery fire physics.', whyIncorrect: 'The case is purely a statutory textual interpretation issue, not a technical dispute about chemical fire effectiveness.', coreTrap: 'Technical distraction.' }
    }
  },
  {
    id: 'hard-inf-9',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 9,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Adverse Selection in Parametric Microinsurance',
    trapType: 'Moral Hazard vs Adverse Selection Trap',
    ruleLesson: 'Parametric insurance pays automatically upon an objective environmental trigger (e.g. satellite rainfall < 50mm) rather than verified individual crop damage, eliminating moral hazard and claims adjustment costs.',
    proTip: 'Contrast individual damage verification (indemnity) with satellite index payouts (parametric).',
    passage: 'Traditional agricultural crop insurance suffers from severe information asymmetries: assessing individual farm crop damage requires expensive on-site adjusters, and insured farmers may exhibit moral hazard by neglecting weeding or irrigation. To overcome these barriers in developing economies, development economists introduced "parametric index insurance," where payouts are automatically triggered by objective satellite weather telemetry (such as rainfall falling below a specified threshold during planting) regardless of an individual farmer\'s actual crop yield. In a five-year randomized trial across 200 villages in Kenya, farmers purchasing parametric insurance invested 32% more capital in high-yielding certified seeds and synthetic fertilizers than uninsured farmers. This behavioral difference suggests that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'the certainty of receiving a payout during catastrophic weather events reduces background risk, encouraging farmers to make productive agricultural investments they would otherwise avoid.' },
      { id: 'B', text: 'parametric insurance contracts incentivize farmers to deliberately abandon their fields to collect guaranteed insurance indemnities.' },
      { id: 'C', text: 'satellite telemetry is mathematically incapable of measuring real-world drought severity across rural sub-Saharan Africa.' },
      { id: 'D', text: 'synthetic fertilizers and certified seeds provide complete immunity against prolonged severe agricultural droughts.' }
    ],
    answer: 'A',
    explanation: 'The passage shows that when provided with objective parametric insurance, farmers increased their investment in high-yielding inputs (seeds and fertilizers). By removing the catastrophic downside risk of drought, insurance encourages farmers to take productive financial risks and invest in higher crop productivity.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks insurance causes neglect (moral hazard).', whyIncorrect: 'Under parametric insurance, payouts depend on rainfall, NOT individual neglect. If a farmer neglects their crops, they still lose their yield; the data shows they invested MORE, not abandoned fields.', coreTrap: 'Moral hazard misconception.' },
      C: { whyStudentsChoose: 'Questions satellite technology.', whyIncorrect: 'The text treats satellite telemetry as an effective objective trigger.', coreTrap: 'Premise rejection.' },
      D: { whyStudentsChoose: 'Exaggerates seed/fertilizer benefits.', whyIncorrect: 'Inputs increase potential yield, but do not provide "complete immunity" to drought.', coreTrap: 'Extreme claim trap.' }
    }
  },
  {
    id: 'hard-inf-10',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 10,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'inference',
    subCategory: 'Modernist Unreliable Free Indirect Discourse',
    trapType: 'Subjective Projection vs Objective Reality Trap',
    ruleLesson: 'In free indirect discourse, the narrator\'s voice takes on the emotional bias and sensory distortions of the character, requiring the reader to separate internal rationalization from external facts.',
    proTip: 'Observe how the character\'s internal aesthetic praise conceals deep moral avoidance.',
    passage: 'The following is adapted from Ford Madox Ford\'s 1915 novel *The Good Soldier*.\n\n"You may well ask why I write. And yet my reasons are quite simple. I have always had the greatest passion for gathering details about this singular affair. I wanted to see it clearly; I wanted to set down in black and white the tranquil, exquisite rhythm of our nine seasons together at the German spa. We were four people who were extraordinarily well bred, who walked upon soap bubbles without breaking them. It was a minuet, a piece of immaculate choreography. And yet, heavens! it was all a lie, a silence, an agony of betrayal from the first day to the last."\n\nThe narrator\'s description of their relationship as "a minuet, a piece of immaculate choreography" functions primarily to ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'illustrate how aestheticized social etiquette was used to disguise and suppress deep interpersonal deceit and psychological turmoil.' },
      { id: 'B', text: 'provide literal historical documentation of 19th-century aristocratic ballroom dancing traditions at German spas.' },
      { id: 'C', text: 'demonstrate that the narrator and his companions had zero awareness of any social or moral norms.' },
      { id: 'D', text: 'prove that the narrator\'s companions were professional theatrical dancers who toured European resort towns.' }
    ],
    answer: 'A',
    explanation: 'The narrator describes their time as an "immaculate choreography" and walking on soap bubbles without breaking them, immediately contrasting this with the reality: "it was all a lie, a silence, an agony of betrayal." The dance metaphor highlights how superficial social manners masked profound betrayal and distress.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Takes "minuet" and "choreography" literally as ballroom dance history.', whyIncorrect: 'The dance terms are metaphors for hypocritical social etiquette, not a dance history lesson.', coreTrap: 'Literal interpretation of metaphor.' },
      C: { whyStudentsChoose: 'Notes the presence of betrayal.', whyIncorrect: 'They were obsessed with social norms and etiquette ("extraordinarily well bred"), which was the mask for their deceit.', coreTrap: 'Direct contradiction of text.' },
      D: { whyStudentsChoose: 'Takes "choreography" as a literal profession.', whyIncorrect: 'They were wealthy vacationers, not professional dancers.', coreTrap: 'Literal occupation trap.' }
    }
  },

  // =========================================================================
  // HARDEST PUNCTUATION & BOUNDARY QUESTIONS (10 ELITE ITEMS)
  // =========================================================================
  {
    id: 'hard-punc-1',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 11,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Colon vs Semicolon for Explanatory Clauses)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Colons Connecting Independent Clauses for Amplification',
    trapType: 'Semicolon Reflex Trap',
    ruleLesson: 'While a semicolon joins two independent clauses of equal weight, a COLON is required when the second independent clause directly explains, specifies, or illustrates what was introduced in the first independent clause.',
    proTip: 'Ask: Is the second clause defining or explaining the specific premise of the first clause? If yes, use a colon!',
    passage: 'Astrophysicists analyzing gravitational wave data from the LIGO interferometer arrived at a startling ______ the colliding stellar remnants were far too massive to be neutron stars yet too light to fit standard models of stellar-mass black holes.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'conclusion:' },
      { id: 'B', text: 'conclusion;' },
      { id: 'C', text: 'conclusion,' },
      { id: 'D', text: 'conclusion' }
    ],
    answer: 'A',
    explanation: 'The first clause ("Astrophysicists analyzing... arrived at a startling conclusion") is a complete independent clause. The second clause directly explains and specifies what that startling conclusion was. When an independent clause is followed by an explanation or amplification of what came before it, a colon is the standard, most precise punctuation mark.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Knows semicolons join independent clauses.', whyIncorrect: 'While a semicolon can connect related clauses, a colon is specifically required when the second clause directly defines or unpacks the noun ("startling conclusion") of the first clause.', coreTrap: 'Semicolon vs colon explanatory hierarchy.' },
      C: { whyStudentsChoose: 'Uses comma.', whyIncorrect: 'Creates a comma splice between two independent clauses.', coreTrap: 'Comma splice error.' },
      D: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Creates a fused run-on sentence.', coreTrap: 'Fused sentence.' }
    }
  },
  {
    id: 'hard-punc-2',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 12,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Essential vs Nonessential Appositive Names)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Appositive Name Punctuation Rules',
    trapType: 'Comma Over-Insertion Trap',
    ruleLesson: 'When a title or description precedes a proper name without an article (e.g. "renowned chemist Rosalind Franklin"), the name is ESSENTIAL and takes NO COMMAS. If it has a definite article (e.g. "the renowned chemist, Rosalind Franklin,"), it is nonessential and requires commas around the name.',
    proTip: 'Look at the word before the title: No "the" before the title = NO COMMAS around the name!',
    passage: 'Renowned evolutionary biologist ______ that cooperative eusociality in insects evolved via kin selection and haplodiploid sex-determination genetics.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'W. D. Hamilton argued' },
      { id: 'B', text: 'W. D. Hamilton, argued' },
      { id: 'C', text: ', W. D. Hamilton, argued' },
      { id: 'D', text: ', W. D. Hamilton argued' }
    ],
    answer: 'A',
    explanation: 'The phrase begins with "Renowned evolutionary biologist W. D. Hamilton argued...". Here, the descriptor "Renowned evolutionary biologist" is an attributive title directly preceding the proper name without a definite article ("the"). Therefore, the name "W. D. Hamilton" is an essential restrictive noun phrase and must have NO commas around it or between the subject and the verb "argued".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Puts a comma after the subject name.', whyIncorrect: 'Placing a single comma between a subject ("W. D. Hamilton") and its main verb ("argued") is a fatal grammatical error.', coreTrap: 'Subject-verb comma intrusion.' },
      C: { whyStudentsChoose: 'Treats the name as a nonessential appositive.', whyIncorrect: 'Because there is no "the" before "Renowned", the name is essential; also, a comma before the verb "argued" breaks subject-verb linkage.', coreTrap: 'Errant appositive commas.' },
      D: { whyStudentsChoose: 'Puts comma after descriptor only.', whyIncorrect: 'Separates attributive adjective phrase from the noun it modifies.', coreTrap: 'Modifier-noun comma separation.' }
    }
  },
  {
    id: 'hard-punc-3',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 13,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Conjunctive Adverb vs Parenthetical Transition)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Semicolon + Conjunctive Adverb Boundaries',
    trapType: 'Comma Splice with Transition Trap',
    ruleLesson: 'When "however", "therefore", or "moreover" connects two independent clauses, it must be preceded by a SEMICOLON (or period) and followed by a COMMA. Placing a comma before "however" between two clauses creates a comma splice!',
    proTip: 'Check if both sides of "however" have their own subject and conjugated verb: If yes, you need a semicolon before "however"!',
    passage: 'Early archaeologists assumed that the Great Sphinx of Giza was carved during the reign of Pharaoh Khafre around 2500 ______ recent geomorphological analyses of precipitation-induced limestone erosion patterns indicate that the monument may be centuries older.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'BCE; however,' },
      { id: 'B', text: 'BCE, however,' },
      { id: 'C', text: 'BCE; however' },
      { id: 'D', text: 'BCE, however;' }
    ],
    answer: 'A',
    explanation: 'The sentence contains two complete independent clauses: (1) "Early archaeologists assumed that... around 2500 BCE" and (2) "recent geomorphological analyses... indicate that...". Joining two independent clauses with the conjunctive adverb "however" requires a semicolon before "however" and a comma after it: `; however,`.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Puts commas on both sides of however.', whyIncorrect: 'Using a comma before "however" between two independent clauses creates a comma splice.', coreTrap: 'Classic transition comma splice.' },
      C: { whyStudentsChoose: 'Omits the trailing comma.', whyIncorrect: 'Introductory conjunctive adverbs in a second clause must be followed by a comma.', coreTrap: 'Missing transition comma.' },
      D: { whyStudentsChoose: 'Inverts comma and semicolon.', whyIncorrect: 'Puts the semicolon after the transitional adverb, creating an ungrammatical boundary.', coreTrap: 'Inverted punctuation order.' }
    }
  },
  {
    id: 'hard-punc-4',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 14,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Em-Dash Nonrestrictive Parenthetical Enclosure)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Symmetrical Em-Dash Pairs in Complex Sentences',
    trapType: 'Mismatched Delimiter Trap',
    ruleLesson: 'Parenthetical nonrestrictive interruptions must be enclosed symmetrically: two matching commas, two matching parentheses, or two matching em-dashes. Never mix an opening em-dash with a closing comma or semicolon.',
    proTip: 'If the interruption opened with an em-dash (—), it MUST close with an em-dash (—) before the sentence continues.',
    passage: 'The architectural firm\'s flagship eco-tower—an energy-positive skyscraper that generates more solar electricity than it ______ earned the prestigious Platinum LEED certification for sustainable design.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'consumes—' },
      { id: 'B', text: 'consumes,' },
      { id: 'C', text: 'consumes;' },
      { id: 'D', text: 'consumes' }
    ],
    answer: 'A',
    explanation: 'The nonrestrictive modifier starts with an em-dash after the subject ("eco-tower—an energy-positive skyscraper..."). To maintain grammatical symmetry, the parenthetical interruption must be closed with a matching em-dash (`consumes—`) before the predicate verb phrase "earned the prestigious Platinum...".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Prefers comma for pauses.', whyIncorrect: 'Mismatches an opening em-dash with a closing comma.', coreTrap: 'Mismatched delimiter trap.' },
      C: { whyStudentsChoose: 'Uses semicolon.', whyIncorrect: 'A semicolon cannot be placed before the main verb of a clause.', coreTrap: 'Semicolon before verb error.' },
      D: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Leaves the parenthetical modifier open and fuses it into the verb.', coreTrap: 'Missing closure boundary.' }
    }
  },
  {
    id: 'hard-punc-5',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 15,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Compound Predicate vs Compound Sentence)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'No Comma in Compound Predicate',
    trapType: 'Errant Compound Predicate Comma Trap',
    ruleLesson: 'Do NOT place a comma before a coordinating conjunction (FANBOYS) when it joins two verbs sharing the same subject (a compound predicate). A comma is only used when the conjunction joins two INDEPENDENT clauses with their own subjects!',
    proTip: 'Check what comes after "and": If there is NO new subject noun/pronoun, do NOT put a comma before "and"!',
    passage: 'During the high-pressure deep-sea dive, the autonomous submersible mapped hydrothermal vents along the oceanic ______ gathered pristine geochemical fluid samples for laboratory isotopic analysis.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'ridge and' },
      { id: 'B', text: 'ridge, and' },
      { id: 'C', text: 'ridge; and' },
      { id: 'D', text: 'ridge, and,' }
    ],
    answer: 'A',
    explanation: 'The sentence has a single subject ("the autonomous submersible") performing two parallel verbs in a compound predicate: (1) "mapped hydrothermal vents..." and (2) "gathered pristine geochemical fluid samples...". Because there is no new independent subject after the conjunction, standard English conventions prohibit placing a comma before "and".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks any long sentence needs a comma before "and".', whyIncorrect: 'A comma before "and" is only used when followed by an independent clause with its own subject.', coreTrap: 'Compound predicate comma intrusion.' },
      C: { whyStudentsChoose: 'Uses semicolon + and.', whyIncorrect: 'A semicolon cannot join a verb fragment to a subject.', coreTrap: 'Semicolon before fragment.' },
      D: { whyStudentsChoose: 'Over-punctuates with two commas.', whyIncorrect: 'Creates bizarre punctuation clutter.', coreTrap: 'Punctuation clutter.' }
    }
  },
  {
    id: 'hard-punc-6',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 16,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Complex Lists with Internal Commas / Semicolons)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Super-Comma Semicolon List Hierarchy',
    trapType: 'List Hierarchy Breakdown Trap',
    ruleLesson: 'When items in a series contain their own internal commas (such as City, State or Person, Title), SEMICOLONS must be used as the primary separators between the major list items to prevent ambiguity.',
    proTip: 'Look for internal commas inside the items: `City, State; City, State; and City, State`.',
    passage: 'The diplomatic summit convened delegates from three key regional centers: Geneva, ______ Tokyo, Japan; and Ottawa, Canada.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'Switzerland;' },
      { id: 'B', text: 'Switzerland,' },
      { id: 'C', text: 'Switzerland' },
      { id: 'D', text: 'Switzerland:' }
    ],
    answer: 'A',
    explanation: 'The list items contain internal commas separating city and country ("Geneva, Switzerland", "Tokyo, Japan", "Ottawa, Canada"). To maintain clear list hierarchy and match the semicolon before "and Ottawa, Canada", the first list item must be separated by a semicolon after "Switzerland": `Switzerland;`.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses comma.', whyIncorrect: 'Creates list confusion where Switzerland and Tokyo appear to be separate items rather than paired city-country entities.', coreTrap: 'List hierarchy collapse.' },
      C: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Fuses Switzerland into Tokyo without separation.', coreTrap: 'Missing list delimiter.' },
      D: { whyStudentsChoose: 'Uses colon.', whyIncorrect: 'The colon already introduced the list at the start; a colon cannot separate internal list items.', coreTrap: 'Redundant colon.' }
    }
  },
  {
    id: 'hard-punc-7',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 17,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Pronoun Comma Splices with "this" / "these")',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Demonstrative Pronoun Independent Clause Splices',
    trapType: 'Demonstrative Pronoun Splice Trap',
    ruleLesson: 'Words like "this", "these", and "it" can function as independent subjects. When a clause starts with "this process", "this discovery", or "this allows", it is an INDEPENDENT clause and CANNOT be attached to the preceding clause with just a comma!',
    proTip: 'If the word after the blank is "this [noun] [verb]", use a semicolon or period, NOT a comma.',
    passage: 'The microbial fuel cell utilizes electrogenic bacteria to oxidize organic waste into ______ generates a continuous electrical current while purifying contaminated wastewater.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'electrons; this process' },
      { id: 'B', text: 'electrons, this process' },
      { id: 'C', text: 'electrons this process' },
      { id: 'D', text: 'electrons, and this process,' }
    ],
    answer: 'A',
    explanation: 'The phrase "this process generates a continuous electrical current..." is a complete independent clause with subject "this process" and verb "generates". Joining it to the preceding independent clause requires a semicolon: `electrons; this process`.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses a comma because "this process" feels explanatory.', whyIncorrect: 'Because "this process" is the subject of a new independent clause, a comma creates a severe comma splice.', coreTrap: 'Pronoun subject comma splice.' },
      C: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Creates a fused run-on sentence.', coreTrap: 'Fused sentence error.' },
      D: { whyStudentsChoose: 'Puts a comma after "process".', whyIncorrect: 'Puts an errant comma between the subject "this process" and its verb "generates".', coreTrap: 'Subject-verb comma error.' }
    }
  },
  {
    id: 'hard-punc-8',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 18,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Restrictive "that" vs Nonrestrictive "which")',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Relative Pronoun Restrictive Punctuation',
    trapType: 'Comma Before "That" Trap',
    ruleLesson: 'In Standard English, relative clauses beginning with "that" are RESTRICTIVE (essential) and must NEVER be preceded by a comma. Relative clauses beginning with "which" are NONRESTRICTIVE (nonessential) and MUST be preceded by a comma.',
    proTip: 'Never place a comma before "that" in a relative modifying clause!',
    passage: 'Marine biologists recently discovered a bioluminescent dinoflagellate ______ emits bright cyan light only when subjected to mechanical shear stress.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'species that' },
      { id: 'B', text: 'species, that' },
      { id: 'C', text: 'species; that' },
      { id: 'D', text: 'species: that' }
    ],
    answer: 'A',
    explanation: 'The clause "that emits bright cyan light..." is a restrictive relative clause that specifies the essential biological identity of the dinoflagellate species. Restrictive clauses introduced by "that" take NO punctuation before "that".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Inserts a comma before "that" for a rhythmic pause.', whyIncorrect: 'Standard English conventions strictly forbid placing a comma before restrictive "that".', coreTrap: 'Comma before "that" violation.' },
      C: { whyStudentsChoose: 'Uses semicolon.', whyIncorrect: 'A semicolon must be followed by an independent clause, but "that emits..." is a dependent relative clause.', coreTrap: 'Semicolon before dependent clause.' },
      D: { whyStudentsChoose: 'Uses colon.', whyIncorrect: 'A colon cannot separate a noun from its restrictive relative modifier.', coreTrap: 'Colon before restrictive modifier.' }
    }
  },
  {
    id: 'hard-punc-9',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 19,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Introductory Participial Modifier + Subject Boundary)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Introductory Modifier Boundary Comma',
    trapType: 'Subject-Predicate Comma Confusion',
    ruleLesson: 'An introductory participial modifying phrase must be separated from the main subject by a single comma. Once the main subject begins, NO additional comma should separate the subject noun phrase from its auxiliary/verb.',
    proTip: 'Only one comma is allowed: right after the introductory modifier!',
    passage: 'Synthesized in the chloroplast stroma of photosynthetic ______ converts atmospheric carbon dioxide into high-energy triose phosphate sugars.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'plants, the enzyme RuBisCO' },
      { id: 'B', text: 'plants, the enzyme RuBisCO,' },
      { id: 'C', text: 'plants the enzyme RuBisCO' },
      { id: 'D', text: 'plants; the enzyme RuBisCO' }
    ],
    answer: 'A',
    explanation: 'The introductory modifier is "Synthesized in the chloroplast stroma of photosynthetic plants". A single comma is required immediately after "plants" to separate the modifier from the subject "the enzyme RuBisCO". The subject must connect directly to its verb "converts" without any intervening comma.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Puts a comma after the enzyme name.', whyIncorrect: 'Creates an ungrammatical single comma between the subject "RuBisCO" and the verb "converts".', coreTrap: 'Subject-verb comma intrusion.' },
      C: { whyStudentsChoose: 'Omits the modifier comma.', whyIncorrect: 'Fails to demarcate the introductory participial phrase from the main clause.', coreTrap: 'Missing introductory modifier comma.' },
      D: { whyStudentsChoose: 'Uses semicolon after modifier.', whyIncorrect: 'A semicolon cannot separate an introductory participial phrase from the main clause.', coreTrap: 'Semicolon after dependent modifier.' }
    }
  },
  {
    id: 'hard-punc-10',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 20,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Prepositional Subject Modifiers & Verb Linkage)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    category: 'punctuation',
    subCategory: 'Zero Punctuation in Complex Subject Noun Phrases',
    trapType: 'Long Subject Pause Trap',
    ruleLesson: 'No matter how long or complex a subject noun phrase is (even when it contains multiple prepositional phrases), NEVER place a comma between the end of the subject noun phrase and its main verb!',
    proTip: 'Find the main verb (e.g. "provides"): Make sure there is ZERO punctuation directly in front of it unless closing a nonessential parenthetical.',
    passage: 'The discovery of ancient hydrothermal mineral deposits containing fossilized filamentous microorganisms ______ decisive physical evidence supporting the deep-sea origin of terrestrial life.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'provides' },
      { id: 'B', text: 'provides,' },
      { id: 'C', text: ', provides' },
      { id: 'D', text: '—provides' }
    ],
    answer: 'A',
    explanation: 'The entire subject is "The discovery of ancient hydrothermal mineral deposits containing fossilized filamentous microorganisms". The main verb is "provides". In Standard English, no comma or punctuation should ever separate a complete subject from its predicate verb.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Puts a comma after the verb.', whyIncorrect: 'Separates the transitive verb "provides" from its direct object "decisive physical evidence".', coreTrap: 'Verb-object comma separation.' },
      C: { whyStudentsChoose: 'Puts a comma before the verb because the subject is long.', whyIncorrect: 'A long subject never justifies a rogue comma before the verb.', coreTrap: 'Subject-verb comma intrusion.' },
      D: { whyStudentsChoose: 'Uses a dash before the verb for dramatic effect.', whyIncorrect: 'An em-dash cannot separate a subject from its verb without a matching opening dash.', coreTrap: 'Unwarranted single dash.' }
    }
  }
];
