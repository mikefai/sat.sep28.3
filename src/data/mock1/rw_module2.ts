import { Question } from '../../types/exam';

export const mock1_rw_module2: Question[] = [
  {
    id: 'm1-rw2-q1',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 1,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Recognizing that the community center\'s outdated ventilation system could no longer cope with peak summer humidity, the municipal board approved a comprehensive plan to ______ the facility with modern energy-efficient HVAC units.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'retrofit' },
      { id: 'B', text: 'demolish' },
      { id: 'C', text: 'subsidize' },
      { id: 'D', text: 'reprimand' }
    ],
    answer: 'A',
    explanation: 'The sentence describes adding modern HVAC units into an existing facility whose ventilation system is outdated. "Retrofit" means to furnish with new parts or equipment not available at the time of original manufacture.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Associated with drastic building changes.', whyIncorrect: '"Demolish" means tear down completely, but they are adding new units to the existing facility.', coreTrap: 'Extreme action trap.' },
      C: { whyStudentsChoose: 'Focuses on financial approval.', whyIncorrect: 'You subsidize costs or individuals, not "subsidize the facility with units".', coreTrap: 'Collocation error.' },
      D: { whyStudentsChoose: 'Confuses administrative actions.', whyIncorrect: '"Reprimand" means to scold a person.', coreTrap: 'Category error.' }
    }
  },
  {
    id: 'm1-rw2-q2',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 2,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Rather than presenting a monolithic consensus, the panel of climatologists engaged in a ______ debate, meticulously interrogating the assumptions behind each other\'s predictive precipitation algorithms.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'perfunctory' },
      { id: 'B', text: 'rigorous' },
      { id: 'C', text: 'collusive' },
      { id: 'D', text: 'superficial' }
    ],
    answer: 'B',
    explanation: 'The sentence contrasts a "monolithic consensus" with a deep and detailed examination ("meticulously interrogating the assumptions"). "Rigorous" means extremely thorough, exhaustive, and careful, fitting the context.',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Sounds formal.', whyIncorrect: '"Perfunctory" means carried out with minimal effort or thought, opposing "meticulously".', coreTrap: 'Direct antonym trap.' },
      C: { whyStudentsChoose: 'Focuses on panels acting together.', whyIncorrect: '"Collusive" implies secret illegal cooperation, which does not fit an open scientific debate.', coreTrap: 'Negative connotation trap.' },
      D: { whyStudentsChoose: 'Confusing consensus with shallowness.', whyIncorrect: '"Superficial" means shallow, contradicting "meticulously interrogating".', coreTrap: 'Opposite meaning trap.' }
    }
  },
  {
    id: 'm1-rw2-q3',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 3,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'While early critics dismissed graphic memoirs as merely ______ amusements unworthy of serious academic inquiry, contemporary literary scholars now recognize the intricate multimodal semiotics that allow graphic narratives to convey profound psychological trauma.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'frivolous' },
      { id: 'B', text: 'somber' },
      { id: 'C', text: 'didactic' },
      { id: 'D', text: 'pioneering' }
    ],
    answer: 'A',
    explanation: 'The sentence contrasts early critics\' negative dismissal of graphic memoirs as "unworthy of serious academic inquiry" with modern scholars recognizing their profound depth. "Frivolous" means not having any serious purpose or value, directly matching "unworthy of serious academic inquiry."',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Relates to "psychological trauma".', whyIncorrect: '"Somber" means solemn or grave, which is the opposite of an early dismissive view.', coreTrap: 'Contrast clause confusion.' },
      C: { whyStudentsChoose: 'Associated with educational or moral lessons.', whyIncorrect: '"Didactic" means intended to teach or moralize, not merely casual amusement.', coreTrap: 'Irrelevant literary tone.' },
      D: { whyStudentsChoose: 'Sounds positive and academic.', whyIncorrect: '"Pioneering" means groundbreaking, contradicting "dismissed as unworthy".', coreTrap: 'Antonym of dismissal.' }
    }
  },
  {
    id: 'm1-rw2-q4',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 4,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'The ethnomusicologist observed that despite centuries of aggressive colonial assimilation policies, the indigenous vocal chanting tradition had not been eradicated; on the contrary, communities maintained a ______ preservation of ceremonial polyphony by covertly integrating microtonal harmonies into syncretic church hymns.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'tenacious' },
      { id: 'B', text: 'sporadic' },
      { id: 'C', text: 'precarious' },
      { id: 'D', text: 'superfluous' }
    ],
    answer: 'A',
    explanation: 'The context emphasizes that despite aggressive attempts at eradication, the community actively and skillfully kept their vocal traditions alive through resilient, covert preservation. "Tenacious" means persistent, holding fast, and unyielding.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks the tradition became rare.', whyIncorrect: '"Sporadic" means occurring at irregular or scattered intervals, conflicting with steadfast survival.', coreTrap: 'Weak persistence trap.' },
      C: { whyStudentsChoose: 'Thinks the situation was dangerous.', whyIncorrect: '"Precarious" means dangerously unstable or uncertain; the sentence celebrates their determined, effective preservation.', coreTrap: 'Vulnerability vs resilience confusion.' },
      D: { whyStudentsChoose: 'Fancy sounding vocabulary.', whyIncorrect: '"Superfluous" means unnecessary/redundant.', coreTrap: 'Meaning mismatch.' }
    }
  },
  {
    id: 'm1-rw2-q5',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 5,
    domain: 'Craft and Structure',
    skill: 'Text Structure and Purpose',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'In the 1930s, the "Modern Synthesis" united Mendelian genetics with Darwinian natural selection, establishing the bedrock of evolutionary biology. For decades, this framework held that evolutionary change proceeds almost exclusively through slow, continuous gradations in allele frequencies. In 1972, however, paleontologists Niles Eldredge and Stephen Jay Gould published their theory of punctuated equilibrium. Drawing upon fossil records that revealed long spans of morphological stasis interrupted by sudden bursts of speciation, they argued that evolution often proceeds through rapid episodic transitions rather than constant gradualism.',
    question: 'Which choice best describes the function of the underlined portion ("In 1972, however... punctuated equilibrium") in the overall text?',
    choices: [
      { id: 'A', text: 'It introduces a theoretical development that challenged an established paradigm in evolutionary theory.' },
      { id: 'B', text: 'It provides empirical data confirming the universal validity of Mendelian inheritance mechanics.' },
      { id: 'C', text: 'It explains why the Modern Synthesis was completely abandoned by the international scientific community.' },
      { id: 'D', text: 'It offers a historical anecdote illustrating how Darwin originally formulated his theory of natural selection.' }
    ],
    answer: 'A',
    explanation: 'The first two sentences outline the established paradigm (the Modern Synthesis\'s assumption of slow, gradual change). The underlined portion introduces Eldredge and Gould\'s punctuated equilibrium, which challenged this gradualist view with fossil evidence of sudden evolutionary shifts.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions genetics/inheritance.', whyIncorrect: 'Punctuated equilibrium offered a critique of continuous gradualism, not a proof of Mendelian mechanics.', coreTrap: 'Misdirected focus.' },
      C: { whyStudentsChoose: 'Recognizes the challenge to the Modern Synthesis.', whyIncorrect: 'The text does not claim the Modern Synthesis was completely abandoned.', coreTrap: 'Overstated outcome trap.' },
      D: { whyStudentsChoose: 'Mentions Darwin.', whyIncorrect: 'Eldredge and Gould published in 1972, long after Darwin.', coreTrap: 'Chronology confusion.' }
    }
  },
  {
    id: 'm1-rw2-q6',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 6,
    domain: 'Craft and Structure',
    skill: 'Cross-Text Connections',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Text 1\nUrban theorist Jane Jacobs argued that vibrant cities depend on "eyes on the street"—continuous, informal surveillance by active pedestrians, shopkeepers, and residents. In her view, short blocks, mixed commercial-residential zoning, and dense sidewalks cultivate spontaneous social interactions that naturally deter crime without the need for invasive policing.\n\nText 2\nCriminologist Marcus Felson proposed the Routine Activity Theory, which states that predatory crime requires the convergence in space and time of a motivated offender, a suitable target, and the absence of a capable guardian. While acknowledging that high pedestrian traffic increases potential observers, Felson cautions that high sidewalk density also amplifies the concentration of potential targets and creates anonymity that can paralyze bystander intervention.',
    question: 'Based on the texts, how would Felson (Text 2) most likely view Jacobs\'s assertion (Text 1) that dense sidewalks naturally deter crime?',
    choices: [
      { id: 'A', text: 'He would qualify it by arguing that high pedestrian density can simultaneously generate more crime opportunities and dilute individual bystander accountability.' },
      { id: 'B', text: 'He would reject it entirely on the grounds that pedestrian activity has zero correlation with neighborhood safety metrics.' },
      { id: 'C', text: 'He would endorse it without reservation as proof that physical architectural policing is completely unnecessary.' },
      { id: 'D', text: 'He would argue that mixed-use zoning is the sole cause of criminal opportunism in modern cities.' }
    ],
    answer: 'A',
    explanation: 'In Text 2, Felson acknowledges that pedestrian traffic brings observers, but explicitly cautions that high sidewalk density also increases target opportunities and creates bystander anonymity. Thus, he qualifies Jacobs\'s optimism with critical complicating factors.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sees that Felson disagrees with Jacobs.', whyIncorrect: 'Felson does not claim zero correlation; he acknowledges potential observers exist.', coreTrap: 'Extreme black-and-white trap.' },
      C: { whyStudentsChoose: 'Notes they both study urban crime.', whyIncorrect: 'Felson does not endorse it without reservation; he raises serious caveats.', coreTrap: 'Ignoring nuance trap.' },
      D: { whyStudentsChoose: 'Mentions mixed-use zoning.', whyIncorrect: 'Felson does not call mixed zoning the sole cause of crime.', coreTrap: 'Extreme cause attribution.' }
    }
  },
  {
    id: 'm1-rw2-q7',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 7,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Eusocial insect colonies, such as those of the leafcutter ant (*Atta cephalotes*), exhibit a sophisticated decentralized division of labor known as polyethism. Rather than being directed by a central command hierarchy or the queen, individual workers allocate their foraging, fungal cultivation, and nest defense tasks based on localized chemical pheromone cues and physical body size (castes). This self-organizing behavioral feedback loop allows the colony as an emergent superorganism to dynamically adjust its collective labor distribution in response to environmental disturbances.',
    question: 'Which choice best states the primary mechanism governing labor allocation in leafcutter ant colonies?',
    choices: [
      { id: 'A', text: 'Decentralized local interactions and caste morphology enable dynamic task allocation without centralized supervision.' },
      { id: 'B', text: 'The queen ant emits specific chemical directives to assign daily foraging quotas to individual workers.' },
      { id: 'C', text: 'Colonies rely on fixed lifetime roles where each ant performs a single unvarying task regardless of conditions.' },
      { id: 'D', text: 'Environmental disturbances cause workers to abandon specialized castes and adopt uniform behaviors.' }
    ],
    answer: 'A',
    explanation: 'The passage explains that labor is decentralized ("rather than being directed by a central command hierarchy or the queen") and is driven by localized chemical cues and physical size/castes through self-organizing feedback loops.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Assumes the queen directs the colony.', whyIncorrect: 'The text explicitly states tasks are allocated "rather than being directed by a central command hierarchy or the queen".', coreTrap: 'Direct contradiction of text.' },
      C: { whyStudentsChoose: 'Focuses on castes.', whyIncorrect: 'The text notes colonies dynamically adjust their labor distribution in response to disturbances.', coreTrap: 'Static role misinterpretation.' },
      D: { whyStudentsChoose: 'Mentions environmental disturbances.', whyIncorrect: 'Workers do not abandon castes for uniform behaviors; they coordinate dynamically.', coreTrap: 'Distorted reaction claim.' }
    }
  },
  {
    id: 'm1-rw2-q8',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 8,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'In Virginia Woolf\'s 1925 novel *Mrs. Dalloway*, the narrative technique of free indirect discourse blurs the boundary between external objective reality and the internal subjective consciousness of the characters, demonstrating how passing sensory impressions evoke layered memories and existential reflections.',
    question: 'Which quotation from *Mrs. Dalloway* most effectively illustrates the claim in the text?',
    choices: [
      { id: 'A', text: '"What a morning—fresh as if issued to children on a beach. What a lark! What a plunge! For so it had always seemed to her, when, with a little squeak of the hinges, which she could hear now, she had burst open the French windows and plunged at Bourton into the open air."' },
      { id: 'B', text: '"Big Ben was striking the half-hour. The leaden circles dissolved in the air."' },
      { id: 'C', text: '"She had a perpetual sense, as she watched the taxi cabs, of being out, out, far out to sea and alone; she always had the feeling that it was very, very dangerous to live even one day."' },
      { id: 'D', text: '"Clarissa had a luxury of choice; she could walk down Bond Street or turn toward the park as the morning sunlight deepened."' }
    ],
    answer: 'A',
    explanation: 'The claim asserts that Woolf uses free indirect discourse to blur external sensory impressions with internal memories. Quotation A starts with an immediate sensory impression ("What a morning—fresh..."), which instantly triggers an immersive childhood memory at Bourton ("she had burst open the French windows and plunged at Bourton into the open air"), perfectly illustrating the claim.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Iconic image from the book.', whyIncorrect: 'A simple external clock chime description without internal memory transition.', coreTrap: 'Famous line trap.' },
      C: { whyStudentsChoose: 'Shows deep internal feeling.', whyIncorrect: 'Depicts an emotional sensation of isolation, but does not weave sensory perception directly into a specific recollected memory sequence as vividly as A.', coreTrap: 'Emotional state without memory progression.' },
      D: { whyStudentsChoose: 'Describes walking in London.', whyIncorrect: 'Simple external plot exposition without subjective memory merging.', coreTrap: 'External action trap.' }
    }
  },
  {
    id: 'm1-rw2-q9',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 9,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Quantitative)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    tableData: {
      title: 'Lithium-Ion Battery Anode Degradation Rates After 1,000 Rapid Charge Cycles',
      headers: ['Anode Composition', 'Initial Specific Capacity (mAh/g)', 'Capacity Retention after 1,000 Cycles (%)', 'Electrode Volume Expansion (%)'],
      rows: [
        ['Standard Graphite', '360', '88.4', '9.2'],
        ['Pure Silicon Nanoparticles', '3,450', '34.2', '285.0'],
        ['Silicon-Graphene Composite', '1,420', '82.6', '24.5'],
        ['Silicon-Carbon Nanotube Matrix', '1,680', '89.1', '18.3']
      ]
    },
    passage: 'Materials scientist Dr. Jin-Woo Park investigated novel silicon-based composite anodes for electric vehicle batteries. While pure silicon offers vastly higher theoretical charge storage than conventional graphite, its commercial adoption has been crippled by severe mechanical fracturing caused by excessive volumetric expansion during lithiation. Dr. Park hypothesized that integrating silicon into a resilient carbon nanotube matrix would preserve high energy density while constraining volume expansion, thereby achieving cycle longevity comparable to graphite.',
    question: 'Which choice most effectively uses data from the table to support Dr. Park\'s hypothesis?',
    choices: [
      { id: 'A', text: 'The Silicon-Carbon Nanotube Matrix achieved a capacity retention of 89.1% after 1,000 cycles—surpassing Standard Graphite (88.4%)—while maintaining a specific capacity of 1,680 mAh/g and limiting volume expansion to 18.3%.' },
      { id: 'B', text: 'Pure Silicon Nanoparticles achieved the highest initial specific capacity (3,450 mAh/g) despite experiencing 285.0% volume expansion.' },
      { id: 'C', text: 'The Silicon-Graphene Composite had lower volume expansion than Standard Graphite, resulting in 82.6% capacity retention.' },
      { id: 'D', text: 'Standard Graphite exhibited the lowest volume expansion (9.2%) and therefore maintained higher specific capacity than any silicon composite.' }
    ],
    answer: 'A',
    explanation: 'Dr. Park hypothesized that the carbon nanotube matrix would retain high energy density (1,680 vs graphite\'s 360 mAh/g), constrain volume expansion (18.3% vs pure silicon\'s 285%), and match or exceed graphite\'s cycle life (89.1% vs 88.4%). Choice A provides exact data proving all three prongs of the hypothesis.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Highlights pure silicon\'s high capacity.', whyIncorrect: 'Pure silicon suffered terrible cycle degradation (34.2%), which contradicts commercial feasibility rather than supporting the composite hypothesis.', coreTrap: 'Highlighting raw baseline rather than hypothesis.' },
      C: { whyStudentsChoose: 'Mentions graphene composite.', whyIncorrect: 'Silicon-Graphene volume expansion (24.5%) was higher than Graphite (9.2%), not lower.', coreTrap: 'Factual table misstatement.' },
      D: { whyStudentsChoose: 'Mentions graphite.', whyIncorrect: 'Graphite had lower specific capacity (360 mAh/g) than the composites, not higher.', coreTrap: 'Inverted variable comparison.' }
    }
  },
  {
    id: 'm1-rw2-q10',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 10,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'Epigenetic clocks measure biological aging by tracking DNA methylation patterns at specific CpG dinucleotide sites across the human genome. In clinical trials of caloric restriction, treated participants exhibited chronological ages that significantly exceeded their biologically predicted epigenetic methylation ages. Crucially, when researchers analyzed tissue biopsies from participants who subsequently resumed a high-calorie diet, the methylation markers rapidly shifted back to match or exceed chronological norms within six months. This reversibility indicates that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'epigenetic age acceleration or deceleration is not a permanent cellular transformation but rather a dynamic physiological state responsive to metabolic intake.' },
      { id: 'B', text: 'caloric restriction causes irreversible mutations in CpG dinucleotide base pairs that compromise cellular replication.' },
      { id: 'C', text: 'DNA methylation patterns are completely unrelated to biological aging processes in mammalian organisms.' },
      { id: 'D', text: 'dietary interventions are incapable of producing any measurable changes in human epigenetic markers.' }
    ],
    answer: 'A',
    explanation: 'The passage shows that caloric restriction reduced epigenetic biological age, and resuming a high-calorie diet reversed those gains back to normal. The fact that the process reverses when diet changes directly supports the inference that epigenetic aging is a dynamic, responsive state rather than a permanent cellular change.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions genetics and mutations.', whyIncorrect: 'The text discusses reversible epigenetic methylation, not irreversible base pair mutations.', coreTrap: 'Mutations vs epigenetics confusion.' },
      C: { whyStudentsChoose: 'Sees the reversal as invalidating the metric.', whyIncorrect: 'The entire passage establishes that methylation tracks biological aging states.', coreTrap: 'Extreme rejection of premise.' },
      D: { whyStudentsChoose: 'Notes the return to baseline.', whyIncorrect: 'The text clearly demonstrates that diet DID produce substantial measurable changes.', coreTrap: 'Contradiction of evidence.' }
    }
  },
  {
    id: 'm1-rw2-q11',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 11,
    domain: 'Information and Ideas',
    skill: 'Inferences',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'In island biogeography, the equilibrium theory posited by Robert MacArthur and E.O. Wilson predicts that species richness on an island represents a dynamic balance between the immigration rate of new species and the extinction rate of established species. Immigration rates are primarily governed by island isolation (distance from the mainland), whereas extinction rates are governed by island area. If an oceanic archipelago experiences a tectonic shift that brings several small, isolated islands much closer to a species-rich continental coastline without altering their landmass area, the theory dictates that ______',
    question: 'Which choice most logically completes the text?',
    choices: [
      { id: 'A', text: 'immigration rates will increase while baseline extinction rates remain largely unaffected, leading to a new, higher equilibrium species richness.' },
      { id: 'B', text: 'extinction rates will plummet to zero as new species from the mainland eliminate all local resource competition.' },
      { id: 'C', text: 'both immigration and extinction rates will double, leaving the net number of resident species unchanged.' },
      { id: 'D', text: 'the islands will lose their entire endemic populations due to immediate overpopulation collapse.' }
    ],
    answer: 'A',
    explanation: 'According to the theory: immigration depends on distance (isolation) and extinction depends on area. Reducing distance increases immigration. Keeping area constant keeps baseline extinction dynamics steady. Higher immigration + steady extinction = higher equilibrium species richness.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks closer means zero extinction.', whyIncorrect: 'Extinction is governed by area (carrying capacity/resources), which did not change.', coreTrap: 'Unrealistic zero-extinction claim.' },
      C: { whyStudentsChoose: 'Proposes proportional doubling.', whyIncorrect: 'Extinction rate is not driven by distance, so there is no reason for it to double.', coreTrap: 'Arbitrary symmetrical assumption.' },
      D: { whyStudentsChoose: 'Imagines ecological catastrophe.', whyIncorrect: 'The theory models balanced equilibrium, not immediate total collapse.', coreTrap: 'Catastrophizing trap.' }
    }
  },
  {
    id: 'm1-rw2-q12',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 12,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'During volcanic eruptions, basaltic magma with low silica content flows smoothly over long ______ in contrast, viscous rhyolitic magma traps expanding gases and produces explosive pyroclastic eruptions.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'distances;' },
      { id: 'B', text: 'distances,' },
      { id: 'C', text: 'distances' },
      { id: 'D', text: 'distances:' }
    ],
    answer: 'A',
    explanation: 'The sentence links two independent clauses: "During volcanic eruptions... distances" and "in contrast, viscous rhyolitic magma traps... eruptions." A semicolon before the transitional phrase "in contrast" correctly separates the two independent clauses.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses a comma before "in contrast".', whyIncorrect: 'Results in a comma splice between two independent clauses.', coreTrap: 'Comma splice error.' },
      C: { whyStudentsChoose: 'Omits punctuation.', whyIncorrect: 'Creates a fused (run-on) sentence.', coreTrap: 'Fused sentence error.' },
      D: { whyStudentsChoose: 'Thinks a colon introduces contrast.', whyIncorrect: 'Colons introduce explanations, lists, or amplifications of the preceding clause, not contrasting independent clauses with transitional adverbs.', coreTrap: 'Colon misuse.' }
    }
  },
  {
    id: 'm1-rw2-q13',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 13,
    domain: 'Standard English Conventions',
    skill: 'Boundaries',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'The team of marine geophysicists deployed an autonomous underwater vehicle equipped with multibeam sonar to map the Mariana ______ the deepest known oceanic trench on Earth.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'Trench,' },
      { id: 'B', text: 'Trench;' },
      { id: 'C', text: 'Trench' },
      { id: 'D', text: 'Trench:' }
    ],
    answer: 'A',
    explanation: 'The phrase "the deepest known oceanic trench on Earth" is an appositive noun phrase modifying "the Mariana Trench". An appositive at the end of a sentence is separated from the preceding clause by a comma.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses a semicolon for emphasis.', whyIncorrect: 'A semicolon must be followed by an independent clause, but "the deepest known..." is a noun phrase fragment.', coreTrap: 'Semicolon before fragment.' },
      C: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Lacks the required boundary comma before a nonrestrictive appositive.', coreTrap: 'Missing appositive comma.' },
      D: { whyStudentsChoose: 'Thinks a colon can introduce an appositive.', whyIncorrect: 'While colons can introduce items, standard appositive descriptor convention in this context relies on a comma, which is the cleanest standard choice.', coreTrap: 'Punctuation hierarchy.' }
    }
  },
  {
    id: 'm1-rw2-q14',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 14,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Subject-Verb Agreement)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Neither the lead astrophysicist nor the junior postdocs working on the James Webb Deep Field spectrometer calibration ______ able to explain the unexpected infrared redshift anomaly during the preliminary analysis.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'was' },
      { id: 'B', text: 'were' },
      { id: 'C', text: 'is' },
      { id: 'D', text: 'has been' }
    ],
    answer: 'B',
    explanation: 'When subjects are joined by "neither... nor...", the verb agrees in number with the subject closer to the verb (rule of proximity). Here, "the junior postdocs" is plural and closer to the verb. In the past tense narrative context ("during the preliminary analysis"), the plural verb "were" is required.',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Agrees with "lead astrophysicist" (singular).', whyIncorrect: 'With "neither/nor", agreement is determined by the closest subject ("junior postdocs", plural).', coreTrap: 'First subject agreement error.' },
      C: { whyStudentsChoose: 'Looks for singular present.', whyIncorrect: 'Clashes with plural postdocs and the past context.', coreTrap: 'Tense and number mismatch.' },
      D: { whyStudentsChoose: 'Looks for singular auxiliary.', whyIncorrect: 'Has been is singular.', coreTrap: 'Number mismatch.' }
    }
  },
  {
    id: 'm1-rw2-q15',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 15,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Modifiers)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Having spent over four decades analyzing sedimentary core samples from the Greenland ice sheet, ______ provided definitive proof that atmospheric carbon dioxide concentrations and global surface temperatures have fluctuated in lockstep across millennia.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'paleoclimatologist Dr. Arthur Hansen' },
      { id: 'B', text: 'Dr. Arthur Hansen\'s latest published research paper' },
      { id: 'C', text: 'the statistical correlations computed by Dr. Arthur Hansen' },
      { id: 'D', text: 'the Greenland ice core data' }
    ],
    answer: 'A',
    explanation: 'The introductory modifier "Having spent over four decades analyzing sedimentary core samples..." logically describes a person (a scientist). Therefore, the subject immediately following the comma must be the person: "paleoclimatologist Dr. Arthur Hansen".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Focuses on Dr. Hansen\'s paper.', whyIncorrect: 'A research paper did not spend four decades analyzing samples; Dr. Hansen did.', coreTrap: 'Possessive paper dangling modifier.' },
      C: { whyStudentsChoose: 'Mentions statistical correlations.', whyIncorrect: 'Correlations did not spend decades analyzing cores.', coreTrap: 'Abstract entity modifier mismatch.' },
      D: { whyStudentsChoose: 'Mentions ice core data.', whyIncorrect: 'Data cannot spend decades analyzing itself.', coreTrap: 'Object dangling modifier.' }
    }
  },
  {
    id: 'm1-rw2-q16',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 16,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Parallel Structure)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'During the high-altitude expedition, mountaineers must monitor atmospheric barometric pressure, maintain proper hydration levels, and ______ signs of cerebral edema among team members.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'vigilantly watch for' },
      { id: 'B', text: 'to vigilantly watch for' },
      { id: 'C', text: 'vigilantly watching for' },
      { id: 'D', text: 'vigilant watching of' }
    ],
    answer: 'A',
    explanation: 'The series governed by the modal auxiliary "must" requires base verbs in parallel form: (1) "monitor...", (2) "maintain...", and (3) "vigilantly watch for...".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses infinitive form.', whyIncorrect: 'The preceding verbs are bare infinitives (monitor, maintain), not "to" infinitives.', coreTrap: 'Infinitival parallel breakdown.' },
      C: { whyStudentsChoose: 'Uses gerund/participle form.', whyIncorrect: '"Watching" breaks parallel alignment with "monitor" and "maintain".', coreTrap: 'Participle mismatch.' },
      D: { whyStudentsChoose: 'Uses a noun phrase.', whyIncorrect: 'Breaks verb series parallelism.', coreTrap: 'Part-of-speech parallel clash.' }
    }
  },
  {
    id: 'm1-rw2-q17',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 17,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Semicolons & Conjunctive Adverbs)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'Quantum dots exhibit tunable photoluminescence based purely on their nanoscale physical dimensions; ______ when their radius decreases below the exciton Bohr radius, quantum confinement widens the electronic bandgap, shifting emitted light toward higher energy blue wavelengths.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'specifically,' },
      { id: 'B', text: 'specifically' },
      { id: 'C', text: 'specifically;' },
      { id: 'D', text: 'specifically:' }
    ],
    answer: 'A',
    explanation: 'A semicolon already precedes the blank to join the two independent clauses. The conjunctive adverb "specifically" clarifies and elaborates on the first clause, and standard punctuation requires a comma immediately following it before the dependent adverb clause ("when their radius decreases...").',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Omits the comma after the introductory adverb.', whyIncorrect: 'Introductory conjunctive adverbs require a trailing comma.', coreTrap: 'Missing boundary comma.' },
      C: { whyStudentsChoose: 'Doubles the semicolon.', whyIncorrect: 'Placing a semicolon right after the adverb creates a bizarre punctuation error.', coreTrap: 'Punctuation stacking.' },
      D: { whyStudentsChoose: 'Uses a colon after the adverb.', whyIncorrect: 'A colon cannot directly follow an introductory transitional adverb.', coreTrap: 'Errant colon placement.' }
    }
  },
  {
    id: 'm1-rw2-q18',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 18,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Easy',
    type: 'multiple-choice',
    passage: 'Early commercial aviation relied on celestial navigation and ground-based radio beacons to chart flight paths across continents. ______, modern airliners navigate using satellite constellation Global Positioning Systems (GPS) coupled with automated inertial guidance units.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'Today' },
      { id: 'B', text: 'For example' },
      { id: 'C', text: 'As a result' },
      { id: 'D', text: 'Similarly' }
    ],
    answer: 'A',
    explanation: 'The first sentence describes "Early commercial aviation" in the past. The second sentence contrasts this with the modern era ("modern airliners navigate using..."). "Today" provides the correct temporal transition contrasting the past with the present.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks modern GPS is an example of radio beacons.', whyIncorrect: 'GPS replaced radio beacons; it is not an example of early navigation.', coreTrap: 'Example misconception.' },
      C: { whyStudentsChoose: 'Thinks past technology caused modern technology.', whyIncorrect: 'The relationship is a historical chronological contrast, not direct cause-and-effect.', coreTrap: 'Causation error.' },
      D: { whyStudentsChoose: 'Both discuss flight navigation.', whyIncorrect: 'The text is contrasting obsolete historical systems with modern satellite systems, not claiming they operate the same way.', coreTrap: 'False similarity.' }
    }
  },
  {
    id: 'm1-rw2-q19',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 19,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Proponents of universal basic income (UBI) argue that unconditional cash transfers provide a crucial financial cushion against technological automation. ______, opponents warn that large-scale cash disbursements could disincentivize labor force participation and trigger demand-pull inflation.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'Conversely' },
      { id: 'B', text: 'Accordingly' },
      { id: 'C', text: 'Moreover' },
      { id: 'D', text: 'Ultimately' }
    ],
    answer: 'A',
    explanation: 'The first sentence presents the arguments of proponents of UBI. The second sentence introduces the opposing viewpoint of critics ("opponents warn that..."). "Conversely" is the logical transition to introduce a contrasting or opposite perspective.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks the objections logically follow from the proposal.', whyIncorrect: '"Accordingly" signals cause-and-effect or agreement, which contradicts introducing opponents.', coreTrap: 'Agreement vs opposition error.' },
      C: { whyStudentsChoose: 'Thinks it is adding more points about basic income.', whyIncorrect: '"Moreover" introduces an additional supportive point, but this sentence presents an opposing objection.', coreTrap: 'Addition trap.' },
      D: { whyStudentsChoose: 'Sounds like a concluding statement.', whyIncorrect: '"Ultimately" implies a final resolution, whereas the text is simply laying out two opposing sides.', coreTrap: 'Premature conclusion trap.' }
    }
  },
  {
    id: 'm1-rw2-q20',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 20,
    domain: 'Expression of Ideas',
    skill: 'Transitions',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'In crystalline solids, phonon vibrations propagate lattice thermal energy via acoustic wavepackets. In amorphous glasses, however, the absence of long-range atomic order causes phonons to scatter intensely over sub-nanometer distances. ______, heat transfer in non-crystalline materials is dominated by localized diffusons rather than propagating waves.',
    question: 'Which choice completes the text with the most logical transition?',
    choices: [
      { id: 'A', text: 'As a consequence' },
      { id: 'B', text: 'By contrast' },
      { id: 'C', text: 'In retrospect' },
      { id: 'D', text: 'For instance' }
    ],
    answer: 'A',
    explanation: 'The second sentence explains the physical mechanism in amorphous glasses (scattering over sub-nanometer distances due to lack of order). The third sentence states the resulting phenomenon: heat transfer becomes dominated by localized diffusons. "As a consequence" correctly captures this causal result.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Notices contrast between crystalline and amorphous earlier in the text.', whyIncorrect: 'The contrast was already established in sentence 2 with "however". Sentence 3 is the direct effect of the amorphous scattering mechanism.', coreTrap: 'Redundant contrast trap.' },
      C: { whyStudentsChoose: 'Sounds reflective.', whyIncorrect: '"In retrospect" refers to looking back on past events, which does not apply to a physical law.', coreTrap: 'Temporal reflection mismatch.' },
      D: { whyStudentsChoose: 'Thinks diffusons are an example of waves.', whyIncorrect: 'Diffusons are the resulting mode of heat transfer caused by scattering, not a specific example of acoustic wavepackets.', coreTrap: 'Example vs cause error.' }
    }
  },
  {
    id: 'm1-rw2-q21',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 21,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• The Svalbard Global Seed Vault is built into permafrost inside a sandstone mountain in Norway.\n• It stores backup duplicate seeds from crop genebanks worldwide to preserve agricultural biodiversity.\n• The facility is situated 130 meters above sea level to protect against rising ocean levels.\n• It maintains a constant internal temperature of -18°C (-0.4°F) to ensure seed viability for centuries.\n• In 2015, the vault provided its first major withdrawal to researchers reconstructing Syria\'s ICARDA seed collection after civil conflict.',
    question: 'The student wants to explain how the Svalbard vault\'s physical design ensures long-term seed preservation. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'Built 130 meters above sea level and chilled to a constant -18°C within Norwegian permafrost, the Svalbard vault\'s design protects duplicate crop seeds from both rising sea levels and thermal degradation.' },
      { id: 'B', text: 'In 2015, the Svalbard Global Seed Vault fulfilled its mission by supplying replacement seeds to restore the war-damaged Syrian ICARDA collection.' },
      { id: 'C', text: 'The Svalbard Global Seed Vault is an international facility in Norway that houses duplicate seeds from crop genebanks around the world.' },
      { id: 'D', text: 'Agricultural biodiversity is protected by storing duplicate crop seeds in mountain vaults around the world.' }
    ],
    answer: 'A',
    explanation: 'The prompt specifies explaining how the vault\'s physical design ensures long-term preservation. Choice A details its physical features (130m elevation above sea level, -18°C permafrost environment) and connects them directly to protection against sea level rise and thermal degradation.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Describes the 2015 Syrian withdrawal.', whyIncorrect: 'Focuses on a historical usage event rather than explaining the physical design features.', coreTrap: 'Event history vs design mechanism.' },
      C: { whyStudentsChoose: 'Defines the facility.', whyIncorrect: 'States its general purpose without detailing the physical design factors.', coreTrap: 'High-level summary trap.' },
      D: { whyStudentsChoose: 'Talks about biodiversity.', whyIncorrect: 'Vague generalization that omits Svalbard-specific design specs.', coreTrap: 'Off-target generalization.' }
    }
  },
  {
    id: 'm1-rw2-q22',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 22,
    domain: 'Expression of Ideas',
    skill: 'Rhetorical Synthesis',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'While researching a topic, a student has taken the following notes:\n• Bioluminescent organisms produce light through an enzyme-catalyzed reaction involving luciferin and luciferase.\n• The crystal jellyfish (*Aequorea victoria*) produces green bioluminescence via Green Fluorescent Protein (GFP).\n• In 1962, Osamu Shimomura isolated and purified GFP from thousands of *Aequorea victoria* specimens.\n• Molecular biologists Martin Chalfie and Roger Tsien engineered GFP as a genetic marker to visualize gene expression and protein movement in living cells.\n• Shimomura, Chalfie, and Tsien were jointly awarded the 2008 Nobel Prize in Chemistry for this breakthrough.',
    question: 'The student wants to emphasize how GFP transitioned from a natural biological discovery into an essential laboratory tool. Which choice most effectively uses the relevant information from the notes to accomplish this goal?',
    choices: [
      { id: 'A', text: 'First isolated from the jellyfish *Aequorea victoria* in 1962, Green Fluorescent Protein (GFP) was subsequently engineered into a vital cellular marker that enables scientists to track gene expression in living organisms.' },
      { id: 'B', text: 'Bioluminescence occurs when luciferin and luciferase react inside organisms like the crystal jellyfish (*Aequorea victoria*).' },
      { id: 'C', text: 'In 2008, Osamu Shimomura, Martin Chalfie, and Roger Tsien won the Nobel Prize in Chemistry for their studies on *Aequorea victoria*.' },
      { id: 'D', text: 'Green Fluorescent Protein is an enzyme-linked molecule that naturally emits bright green light inside jellyfish cells.' }
    ],
    answer: 'A',
    explanation: 'The prompt requires emphasizing the transition from natural discovery to essential lab tool. Choice A clearly presents both stages: its initial isolation from nature (jellyfish in 1962) and its engineered application as a cellular marker to track gene expression.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Defines bioluminescence.', whyIncorrect: 'Focuses purely on the natural biochemical mechanism without mentioning its lab application.', coreTrap: 'Natural definition only.' },
      C: { whyStudentsChoose: 'Mentions the Nobel Prize.', whyIncorrect: 'Highlights the award rather than explaining the scientific transition from jellyfish to laboratory tool.', coreTrap: 'Award recognition focus.' },
      D: { whyStudentsChoose: 'Describes GFP properties.', whyIncorrect: 'Only describes the natural state without mentioning its development as a laboratory tool.', coreTrap: 'Static description.' }
    }
  },
  {
    id: 'm1-rw2-q23',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 23,
    domain: 'Craft and Structure',
    skill: 'Words in Context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    passage: 'Although the documentary was praised for its breathtaking cinematography, film critics argued that its narrative arc was entirely ______; every plot twist followed predictable genre formulas that offered no genuine surprises to the audience.',
    question: 'Which choice completes the text with the most logical and precise word or phrase?',
    choices: [
      { id: 'A', text: 'pedestrian' },
      { id: 'B', text: 'enigmatic' },
      { id: 'C', text: 'provocative' },
      { id: 'D', text: 'turbulent' }
    ],
    answer: 'A',
    explanation: 'The sentence states that every twist "followed predictable genre formulas that offered no genuine surprises." "Pedestrian" in this context means lacking inspiration or excitement; dull, ordinary, and commonplace.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sounds mysterious.', whyIncorrect: '"Enigmatic" means puzzling or mysterious, directly contradicting "predictable" and "no surprises".', coreTrap: 'Direct antonym.' },
      C: { whyStudentsChoose: 'Sounds like movie criticism.', whyIncorrect: '"Provocative" means causing strong reaction or thought-provoking, which contradicts formulaic predictability.', coreTrap: 'Positive appraisal trap.' },
      D: { whyStudentsChoose: 'Associates with drama/action.', whyIncorrect: '"Turbulent" means chaotic or stormy, which does not mean formulaic.', coreTrap: 'Loose film association.' }
    }
  },
  {
    id: 'm1-rw2-q24',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 24,
    domain: 'Information and Ideas',
    skill: 'Central Ideas and Details',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'In the philosophy of science, Thomas Kuhn challenged the linear accumulation model of scientific progress in his 1962 work *The Structure of Scientific Revolutions*. Kuhn argued that science undergoes periods of "normal science" conducted within an accepted paradigm, during which anomalous empirical data are routinely dismissed or accommodated through ad hoc adjustments. Only when anomalies accumulate to an unsustainable threshold does a disciplinary crisis emerge, culminating in a sudden "paradigm shift" that fundamentally reorganizes conceptual frameworks and observational methodologies.',
    question: 'According to the text, how does the scientific community typically respond to empirical anomalies during periods of "normal science"?',
    choices: [
      { id: 'A', text: 'By ignoring them or making minor adjustments to preserve the existing operational paradigm.' },
      { id: 'B', text: 'By immediately declaring a disciplinary crisis and formulating an entirely new conceptual framework.' },
      { id: 'C', text: 'By adopting strict linear accumulation models that disprove previous paradigms.' },
      { id: 'D', text: 'By permanently halting all experimental observation until the anomaly is mathematically resolved.' }
    ],
    answer: 'A',
    explanation: 'The passage explicitly states that during periods of normal science, "anomalous empirical data are routinely dismissed or accommodated through ad hoc adjustments," which means ignoring them or making minor tweaks to preserve the paradigm.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Mentions disciplinary crisis.', whyIncorrect: 'A crisis only happens after an unsustainable accumulation of anomalies, not immediately upon encountering one.', coreTrap: 'Premature crisis trigger.' },
      C: { whyStudentsChoose: 'Mentions linear accumulation.', whyIncorrect: 'Kuhn challenged linear accumulation; normal science works within the paradigm.', coreTrap: 'Opposed concept trap.' },
      D: { whyStudentsChoose: 'Sounds dramatic.', whyIncorrect: 'Scientists do not halt all experimental work.', coreTrap: 'Fabricated extreme response.' }
    }
  },
  {
    id: 'm1-rw2-q25',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 25,
    domain: 'Standard English Conventions',
    skill: 'Boundaries (Colon Usage)',
    difficulty: 'Hard',
    type: 'multiple-choice',
    passage: 'Atmospheric chemists analyzing tropospheric air samples identified three principal precursors to photochemical ______ nitrogen oxides emitted from vehicle exhaust, volatile organic compounds released by industrial solvents, and atmospheric oxygen energized by ultraviolet sunlight.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'smog:' },
      { id: 'B', text: 'smog;' },
      { id: 'C', text: 'smog,' },
      { id: 'D', text: 'smog' }
    ],
    answer: 'A',
    explanation: 'The introductory clause "Atmospheric chemists analyzing... identified three principal precursors to photochemical smog" is a complete independent clause. A colon is the standard punctuation mark used to introduce a list that specifies or elaborates on what was mentioned in the preceding independent clause.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses semicolon before a series.', whyIncorrect: 'A semicolon cannot be used to introduce a list following an independent clause.', coreTrap: 'Semicolon list confusion.' },
      C: { whyStudentsChoose: 'Uses comma.', whyIncorrect: 'A comma creates a run-on series without clear structural separation from the main clause.', coreTrap: 'Weak comma boundary.' },
      D: { whyStudentsChoose: 'Leaves no punctuation.', whyIncorrect: 'Fuses the independent clause directly into the first item of the list.', coreTrap: 'Fused list error.' }
    }
  },
  {
    id: 'm1-rw2-q26',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 26,
    domain: 'Standard English Conventions',
    skill: 'Form, Structure, and Sense (Verb Tense & Aspect)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'By the time the international archaeological team finally unearthed the subterranean tomb chamber in the Valley of the Kings, looters ______ the ornate golden burial sarcophagus centuries earlier.',
    question: 'Which choice completes the text so that it conforms to the conventions of Standard English?',
    choices: [
      { id: 'A', text: 'had plundered' },
      { id: 'B', text: 'have plundered' },
      { id: 'C', text: 'were plundering' },
      { id: 'D', text: 'plunder' }
    ],
    answer: 'A',
    explanation: 'The sentence sets up a timeline in the past: the archaeologists "unearthed" (simple past) the tomb, but the looting occurred even earlier ("centuries earlier"). An action completed prior to another past event requires the past perfect tense: "had plundered".',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Uses present perfect.', whyIncorrect: 'Present perfect ("have plundered") connects a past action to the present, but the narrative reference point is the past discovery.', coreTrap: 'Present perfect tense mismatch.' },
      C: { whyStudentsChoose: 'Uses past progressive.', whyIncorrect: '"Were plundering" implies ongoing simultaneous looting when the team arrived, contradicting "centuries earlier".', coreTrap: 'Aspect mismatch.' },
      D: { whyStudentsChoose: 'Uses present tense.', whyIncorrect: 'Present tense clashes with historical past events.', coreTrap: 'Present tense error.' }
    }
  },
  {
    id: 'm1-rw2-q27',
    examId: 'mock-1',
    section: 'reading-writing',
    module: 2,
    questionNumber: 27,
    domain: 'Information and Ideas',
    skill: 'Command of Evidence (Textual)',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    passage: 'In Charlotte Brontë\'s 1847 novel *Jane Eyre*, Jane fiercely rejects the societal expectation that women should accept passive, emotionally restrained lives confined to domestic trivialities, insisting instead that women share the exact same capacity for intellectual engagement and ambitious restlessness as men.',
    question: 'Which quotation from *Jane Eyre* most directly supports the claim in the text?',
    choices: [
      { id: 'A', text: '"Women are supposed to be very calm generally: but women feel just as men feel; they need exercise for their faculties, and a field for their efforts, as much as their brothers do; they suffer from too rigid a restraint, too absolute a stagnation, precisely as men would suffer."' },
      { id: 'B', text: '"I am no bird; and no net ensnares me; I am a free human being with an independent will, which I now exert to leave you."' },
      { id: 'C', text: '"I liked the library; I enjoyed the quiet and the books, and thought of little else during the long winter afternoons."' },
      { id: 'D', text: '"Life appears to me too short to be spent in nursing animosity or registering wrongs."' }
    ],
    answer: 'A',
    explanation: 'The claim states that Jane rejects passive, restrained expectations for women and insists women share the same intellectual and ambitious capacities as men. Quotation A explicitly states "women feel just as men feel; they need exercise for their faculties... as much as their brothers do; they suffer from too rigid a restraint... precisely as men would suffer," matching the claim verbatim in concept.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Famous declaration of independence to Rochester.', whyIncorrect: 'Focuses on her personal freedom in a romantic confrontation rather than her generalized philosophical argument about women\'s intellectual faculties and societal roles.', coreTrap: 'Personal autonomy vs general gender critique.' },
      C: { whyStudentsChoose: 'Mentions reading and intellectual books.', whyIncorrect: 'Depicts passive enjoyment of a library rather than a passionate argument for women\'s equal intellectual ambition.', coreTrap: 'Casual library detail.' },
      D: { whyStudentsChoose: 'Shows mature wisdom.', whyIncorrect: 'Focuses on forgiveness and not bearing grudges, unrelated to gender equality.', coreTrap: 'Moral philosophical quote.' }
    }
  }
];
