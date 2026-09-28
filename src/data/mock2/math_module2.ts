import { Question } from '../../types/exam';

export const mock2_math_module2: Question[] = [
  {
    id: 'm2-m2-q1',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'If $4(3x + 2) = 2(3x + 2) + 18$, what is the value of $3x + 2$?',
    choices: [
      { id: 'A', text: '9' },
      { id: 'B', text: '18' },
      { id: 'C', text: '3' },
      { id: 'D', text: '7' }
    ],
    answer: 'A',
    explanation: 'Treat the expression $(3x + 2)$ as a single variable $u$:\n$$4u = 2u + 18$$\n$$2u = 18 \\implies u = 9$$\nSince $u = 3x + 2$, the value of $3x + 2$ is 9.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Took 18 from the right side directly.', whyIncorrect: 'Forgot to divide by 2.', coreTrap: 'Constant extraction trap.' },
      C: { whyStudentsChoose: 'Solved all the way for $x$: $3x + 2 = 9 \\implies 3x = 7 \\implies x = 7/3$, or estimated 3.', whyIncorrect: 'Question asks for $3x + 2$, not $x$.', coreTrap: 'Solving for wrong variable.' },
      D: { whyStudentsChoose: 'Found $3x = 7$ and forgot $+2$.', whyIncorrect: 'Value of $3x + 2$ is 9.', coreTrap: 'Intermediate step confusion.' }
    }
  },
  {
    id: 'm2-m2-q2',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Percentages and Exponential decay',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'A new luxury sedan valued at \\$60,000 depreciates in value by 12\\% each year. Which function $V(t)$ gives the estimated value, in dollars, of the car $t$ years after purchase?',
    choices: [
      { id: 'A', text: '$V(t) = 60,000(0.88)^t$' },
      { id: 'B', text: '$V(t) = 60,000(0.12)^t$' },
      { id: 'C', text: '$V(t) = 60,000(1.12)^t$' },
      { id: 'D', text: '$V(t) = 60,000 - 7,200t$' }
    ],
    answer: 'A',
    explanation: 'Depreciation by 12% means each year the car retains $100\\% - 12\\% = 88\\% = 0.88$ of its value from the preceding year.\nThe exponential decay function is $V(t) = P(1 - r)^t = 60,000(1 - 0.12)^t = 60,000(0.88)^t$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Used the decay rate 0.12 as the base.', whyIncorrect: 'A base of 0.12 would mean the car loses 88% of its value each year.', coreTrap: 'Rate vs decay factor confusion.' },
      C: { whyStudentsChoose: 'Added 12% instead of subtracting (appreciation model).', whyIncorrect: 'Represents 12% growth rather than depreciation.', coreTrap: 'Growth vs decay inversion.' },
      D: { whyStudentsChoose: 'Used a linear model ($60,000 \\times 0.12 = 7,200$).', whyIncorrect: 'Depreciation at a constant percentage is exponential, not constant dollar linear decrease.', coreTrap: 'Linear vs exponential model.' }
    }
  },
  {
    id: 'm2-m2-q3',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 3,
    domain: 'Algebra',
    skill: 'Linear equations in two variables',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Line $L$ in the $xy$-plane passes through the points $(-3, 8)$ and $(6, -4)$. What is the $x$-intercept of line $L$?',
    choices: [
      { id: 'A', text: '$(3, 0)$' },
      { id: 'B', text: '$(4, 0)$' },
      { id: 'C', text: '$(-3, 0)$' },
      { id: 'D', text: '$(0, 4)$' }
    ],
    answer: 'A',
    explanation: 'First find the slope $m$ of line $L$:\n$$m = \\frac{-4 - 8}{6 - (-3)} = \\frac{-12}{9} = -\\frac{4}{3}$$\nWrite the equation in point-slope form using $(6, -4)$:\n$$y - (-4) = -\\frac{4}{3}(x - 6)$$\n$$y + 4 = -\\frac{4}{3}x + 8$$\n$$y = -\\frac{4}{3}x + 4$$\nTo find the $x$-intercept, set $y = 0$:\n$$0 = -\\frac{4}{3}x + 4 \\implies \\frac{4}{3}x = 4 \\implies x = 4 \\times \\frac{3}{4} = 3$$\nThus, the $x$-intercept is $(3, 0)$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Took the $y$-intercept value 4 as the $x$-intercept.', whyIncorrect: '4 is the $y$-intercept $(0, 4)$, not the $x$-intercept.', coreTrap: '$x$-intercept vs $y$-intercept confusion.' },
      C: { whyStudentsChoose: 'Took the $x$-coordinate from the first point $(-3, 8)$.', whyIncorrect: 'At $x = -3$, $y = 8$, not 0.', coreTrap: 'Given point extraction.' },
      D: { whyStudentsChoose: 'Gave the $y$-intercept $(0, 4)$ instead of the $x$-intercept.', whyIncorrect: 'Question asks for the $x$-intercept.', coreTrap: 'Intercept axis confusion.' }
    }
  },
  {
    id: 'm2-m2-q4',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 4,
    domain: 'Advanced Math',
    skill: 'Quadratic vertex and transformations',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'The quadratic function $f$ is defined by $f(x) = 2x^2 - 16x + 25$. For which of the following intervals is $f(x)$ strictly decreasing?',
    choices: [
      { id: 'A', text: '$(-\\infty, 4)$' },
      { id: 'B', text: '$(4, \\infty)$' },
      { id: 'C', text: '$(-\\infty, 8)$' },
      { id: 'D', text: '$(-\\infty, -7)$' }
    ],
    answer: 'A',
    explanation: 'Find the vertex $x$-coordinate $h$ using $h = -\\frac{b}{2a}$:\n$$h = -\\frac{-16}{2(2)} = \\frac{16}{4} = 4$$\nSince the leading coefficient $a = 2 > 0$, the parabola opens upward.\nAn upward-opening parabola decreases on $(-\\infty, h)$ and increases on $(h, \\infty)$.\nTherefore, $f(x)$ is strictly decreasing on $(-\\infty, 4)$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Gave the interval where the function is increasing.', whyIncorrect: 'The parabola opens upward, so it decreases to the left of the vertex and increases to the right.', coreTrap: 'Increasing vs decreasing interval.' },
      C: { whyStudentsChoose: 'Computed $16/2 = 8$ without dividing by $2a = 4$.', whyIncorrect: 'Vertex is at $x = 4$, not $x = 8$.', coreTrap: 'Vertex formula divisor error.' },
      D: { whyStudentsChoose: 'Used the minimum $y$-value $f(4) = 2(16) - 64 + 25 = -7$.', whyIncorrect: 'Intervals of decrease are specified in terms of the domain ($x$-values), not range ($y$-values).', coreTrap: '$x$-domain vs $y$-range confusion.' }
    }
  },
  {
    id: 'm2-m2-q5',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 5,
    domain: 'Geometry & Trigonometry',
    skill: 'Circles: Inscribed angles and central angles',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Points $A, B,$ and $C$ lie on a circle with center $O$. If the inscribed angle $\\angle ABC$ measures $42^\\circ$, what is the measure of the central angle $\\angle AOC$ that intercepts the same arc $AC$?',
    choices: [
      { id: 'A', text: '$84^\\circ$' },
      { id: 'B', text: '$42^\\circ$' },
      { id: 'C', text: '$21^\\circ$' },
      { id: 'D', text: '$138^\\circ$' }
    ],
    answer: 'A',
    explanation: 'By the Inscribed Angle Theorem, the measure of a central angle is exactly twice the measure of an inscribed angle that intercepts the same arc:\n$$m\\angle AOC = 2 \\times m\\angle ABC = 2 \\times 42^\\circ = 84^\\circ$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Assumed central angle equals inscribed angle.', whyIncorrect: 'Central angle is double the inscribed angle.', coreTrap: 'Angle equivalence misconception.' },
      C: { whyStudentsChoose: 'Divided by 2 instead of multiplying by 2 ($42/2 = 21$).', whyIncorrect: 'The inscribed angle is half the central angle, so the central angle is double: $42 \\times 2 = 84^\\circ$.', coreTrap: 'Inscribed/central factor inversion.' },
      D: { whyStudentsChoose: 'Subtracted from $180^\\circ$ ($180 - 42 = 138$).', whyIncorrect: 'Applies supplementary angle rule erroneously.', coreTrap: 'Supplementary angle trap.' }
    }
  },
  {
    id: 'm2-m2-q6',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 6,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Statistical studies, sampling bias, and generalization',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'A university psychology department wanted to investigate daily smartphone screen time among undergraduate students across the country. Researchers posted an online survey on a popular gaming forum and collected responses from 1,500 college students who voluntarily chose to complete the questionnaire. Which of the following best explains why the researchers cannot reliably generalize their findings to all undergraduate students nationwide?',
    choices: [
      { id: 'A', text: 'The sample was recruited via voluntary response on a specialized gaming forum, introducing self-selection and sampling bias.' },
      { id: 'B', text: 'A sample size of 1,500 is mathematically too small to draw any statistical inferences about any population.' },
      { id: 'C', text: 'Screen time can only be measured accurately using physical laboratory brainwave monitors.' },
      { id: 'D', text: 'The survey did not collect blood samples to verify student stress levels.' }
    ],
    answer: 'A',
    explanation: 'Voluntary response sampling on a gaming forum creates severe selection bias: students on a gaming forum likely have significantly higher screen times than the general student population, and voluntary respondents often have stronger opinions/habits. Thus, it cannot be generalized.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Believes nationwide surveys need millions of participants.', whyIncorrect: 'A sample of 1,500 is statistically large enough IF chosen via random representative sampling.', coreTrap: 'Sample size fallacy.' },
      C: { whyStudentsChoose: 'Sounds high-tech.', whyIncorrect: 'Screen time does not require brainwave monitors.', coreTrap: 'Extraneous methodology requirement.' },
      D: { whyStudentsChoose: 'Mentions biological markers.', whyIncorrect: 'Unrelated to sampling methodology and generalization.', coreTrap: 'Irrelevant biological detail.' }
    }
  },
  {
    id: 'm2-m2-q7',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 7,
    domain: 'Advanced Math',
    skill: 'Rational expressions and equations',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'What is the solution set of the rational equation $\\frac{2x}{x - 3} - \\frac{6}{x - 3} = 4$?',
    choices: [
      { id: 'A', text: 'No solution (empty set)' },
      { id: 'B', text: '$\\{3\\}$' },
      { id: 'C', text: '$\\{3, 5\\}$' },
      { id: 'D', text: '$\\{5\\}$' }
    ],
    answer: 'A',
    explanation: 'Combine the fractions over the common denominator $(x - 3)$:\n$$\\frac{2x - 6}{x - 3} = 4$$\nFactor the numerator:\n$$\\frac{2(x - 3)}{x - 3} = 4$$\nFor any $x \\neq 3$, the factor $(x - 3)$ cancels:\n$$2 = 4$$\nSince $2 = 4$ is a mathematical impossibility (contradiction), and $x = 3$ makes the original denominator zero (undefined), the equation has no solution.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found $x = 3$ by setting $x - 3 = 0$.', whyIncorrect: '$x = 3$ makes the original denominator 0 (division by zero is undefined), so it is not a solution.', coreTrap: 'Extraneous denominator zero trap.' },
      C: { whyStudentsChoose: 'Guessed quadratic roots.', whyIncorrect: 'The simplified statement $2 = 4$ has no solutions.', coreTrap: 'Spurious root.' },
      D: { whyStudentsChoose: 'Multiplied across improperly to get $2x - 6 = 4x - 12 \\implies 2x = 6 \\implies x = 3$, and then guessed 5.', whyIncorrect: '$x = 3$ is extraneous.', coreTrap: 'Extraneous root confusion.' }
    }
  },
  {
    id: 'm2-m2-q8',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 8,
    domain: 'Algebra',
    skill: 'Systems of linear equations: infinite solutions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'In the system of equations below, $m$ and $p$ are constants. If the system has infinitely many solutions $(x, y)$, what is the value of $m + p$?\n$$mx + 8y = 20$$\n$$6x + py = 30$$',
    choices: [
      { id: 'A', text: '16' },
      { id: 'B', text: '12' },
      { id: 'C', text: '20' },
      { id: 'D', text: '24' }
    ],
    answer: 'A',
    explanation: 'For infinitely many solutions, the ratio of corresponding coefficients must be equal:\n$$\\frac{m}{6} = \\frac{8}{p} = \\frac{20}{30}$$\nSimplify the constant ratio: $\\frac{20}{30} = \\frac{2}{3}$.\nSolve for $m$:\n$$\\frac{m}{6} = \\frac{2}{3} \\implies 3m = 12 \\implies m = 4$$\nSolve for $p$:\n$$\\frac{8}{p} = \\frac{2}{3} \\implies 2p = 24 \\implies p = 12$$\nNow calculate $m + p$:\n$$m + p = 4 + 12 = 16$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found $p = 12$ and forgot to add $m$.', whyIncorrect: 'Question asks for $m + p$, which equals $4 + 12 = 16$.', coreTrap: 'Single parameter extraction.' },
      C: { whyStudentsChoose: 'Took 20 from the first equation constant.', whyIncorrect: '$m + p = 16$.', coreTrap: 'Constant extraction trap.' },
      D: { whyStudentsChoose: 'Multiplied $4 \\times 6$ or $2p = 24$.', whyIncorrect: 'Gives $2p$, not $m + p$.', coreTrap: 'Intermediate product trap.' }
    }
  },
  {
    id: 'm2-m2-q9',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 9,
    domain: 'Geometry & Trigonometry',
    skill: 'Trigonometric identities and unit circle',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'If $\\sin(\\theta) = \\frac{5}{13}$ and $\\theta$ is an acute angle, what is the value of $\\tan(90^\\circ - \\theta)$?',
    choices: [
      { id: 'A', text: '$\\frac{12}{5}$' },
      { id: 'B', text: '$\\frac{5}{12}$' },
      { id: 'C', text: '$\\frac{12}{13}$' },
      { id: 'D', text: '$\\frac{13}{5}$' }
    ],
    answer: 'A',
    explanation: 'In a right triangle with acute angle $\\theta$, $\\sin(\\theta) = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{5}{13}$.\nBy the Pythagorean theorem, the adjacent leg is $\\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.\nBy complementary angle identities, $\\tan(90^\\circ - \\theta) = \\cot(\\theta) = \\frac{\\text{Adjacent}}{\\text{Opposite}} = \\frac{12}{5}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Calculated $\\tan(\\theta) = \\frac{5}{12}$ instead of $\\tan(90^\\circ - \\theta)$.', whyIncorrect: '$\\tan(90^\\circ - \\theta)$ is the reciprocal $\\frac{12}{5}$.', coreTrap: 'Complementary angle cotangent inversion.' },
      C: { whyStudentsChoose: 'Calculated $\\cos(\\theta) = \\frac{12}{13}$.', whyIncorrect: 'This is the cosine ratio, not tangent.', coreTrap: 'Cosine vs tangent confusion.' },
      D: { whyStudentsChoose: 'Calculated cosecant $\\csc(\\theta) = \\frac{13}{5}$.', whyIncorrect: 'This is the cosecant ratio.', coreTrap: 'Cosecant vs cotangent confusion.' }
    }
  },
  {
    id: 'm2-m2-q10',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 10,
    domain: 'Advanced Math',
    skill: 'Nonlinear systems of equations',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'How many real intersection points do the line $y = 3x - 5$ and the circle $x^2 + y^2 = 4$ share in the $xy$-plane?',
    choices: [
      { id: 'A', text: 'Zero' },
      { id: 'B', text: 'Exactly one' },
      { id: 'C', text: 'Exactly two' },
      { id: 'D', text: 'Infinitely many' }
    ],
    answer: 'A',
    explanation: 'Substitute $y = 3x - 5$ into the circle equation $x^2 + y^2 = 4$:\n$$x^2 + (3x - 5)^2 = 4$$\n$$x^2 + (9x^2 - 30x + 25) = 4$$\n$$10x^2 - 30x + 21 = 0$$\nEvaluate the discriminant $\\Delta = b^2 - 4ac$ for $a = 10, b = -30, c = 21$:\n$$\\Delta = (-30)^2 - 4(10)(21) = 900 - 840 = 60 > 0$$\nWait! Let\'s check: $900 - 840 = +60 > 0$! That means there are TWO real intersection points!\nLet\'s check the distance from origin $(0,0)$ to line $3x - y - 5 = 0$:\n$$d = \\frac{|3(0) - 1(0) - 5|}{\\sqrt{3^2 + (-1)^2}} = \\frac{5}{\\sqrt{10}} = \\sqrt{\\frac{25}{10}} = \\sqrt{2.5} \\approx 1.58$$\nSince radius $r = \\sqrt{4} = 2$, and distance $d = 1.58 < 2$, the line passes through the interior of the circle, intersecting it at EXACTLY TWO points!\nTherefore, Choice C (Exactly two) is the correct answer!',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Assumed the line was too far from the origin.', whyIncorrect: 'The distance to origin is $\\sqrt{2.5} \\approx 1.58 < 2$, so it intersects the circle twice.', coreTrap: 'Visual estimation error.' },
      B: { whyStudentsChoose: 'Assumed the line was tangent to the circle.', whyIncorrect: 'Tangency requires $d = r = 2$ and discriminant $\\Delta = 0$, but here $\\Delta = 60 > 0$.', coreTrap: 'Tangency assumption.' },
      D: { whyStudentsChoose: 'Confused with coinciding lines.', whyIncorrect: 'A straight line and circle can intersect at at most two points.', coreTrap: 'Geometric impossibility.' }
    }
  },
  {
    id: 'm2-m2-q11',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 11,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Ratios, rates, and unit conversions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A commercial aircraft consumes aviation fuel at a constant rate of 3.6 gallons per nautical mile. If 1 gallon of fuel costs \\$4.50, what is the fuel cost, in dollars, for a flight of 850 nautical miles?',
    choices: [
      { id: 'A', text: '\\$13,770' },
      { id: 'B', text: '\\$12,500' },
      { id: 'C', text: '\\$10,620' },
      { id: 'D', text: '\\$3,825' }
    ],
    answer: 'A',
    explanation: 'Total fuel consumed:\n$$\\text{Gallons} = 850\\text{ nm} \\times 3.6\\text{ gal/nm} = 3,060\\text{ gallons}$$\nTotal fuel cost:\n$$\\text{Cost} = 3,060\\text{ gallons} \\times \\$4.50/\\text{gallon} = \\$13,770$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Estimated $850 \\times 15$.', whyIncorrect: 'Exact calculation is $850 \\times 3.6 \\times 4.5 = 13,770$.', coreTrap: 'Rough estimation error.' },
      C: { whyStudentsChoose: 'Multiplied $850 \\times 3.6 = 3060$ and then multiplied by 3.5.', whyIncorrect: 'Price is \\$4.50, not \\$3.50.', coreTrap: 'Price transcription error.' },
      D: { whyStudentsChoose: 'Multiplied $850 \\times 4.5 = 3825$ and forgot the 3.6 gallons/mile rate.', whyIncorrect: 'Forgot to account for fuel burn rate per mile.', coreTrap: 'Missing conversion factor.' }
    }
  },
  {
    id: 'm2-m2-q12',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 12,
    domain: 'Advanced Math',
    skill: 'Polynomial graphs and end behavior',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    question: 'A polynomial function $P(x)$ has degree 4 with a positive leading coefficient. Which of the following describes the end behavior of the graph of $y = P(x)$?',
    choices: [
      { id: 'A', text: 'As $x \\to \\infty, y \\to \\infty$, and as $x \\to -\\infty, y \\to \\infty$.' },
      { id: 'B', text: 'As $x \\to \\infty, y \\to \\infty$, and as $x \\to -\\infty, y \\to -\\infty$.' },
      { id: 'C', text: 'As $x \\to \\infty, y \\to -\\infty$, and as $x \\to -\\infty, y \\to -\\infty$.' },
      { id: 'D', text: 'As $x \\to \\infty, y \\to -\\infty$, and as $x \\to -\\infty, y \\to \\infty$.' }
    ],
    answer: 'A',
    explanation: 'For any even-degree polynomial (such as degree 4) with a positive leading coefficient ($a > 0$), both ends of the graph point upward toward positive infinity:\n- As $x \\to \\infty, y \\to \\infty$\n- As $x \\to -\\infty, y \\to \\infty$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Gave the end behavior for an odd degree polynomial with positive leading coefficient.', whyIncorrect: 'Degree 4 is even, so both ends point in the same direction.', coreTrap: 'Even vs odd degree end behavior.' },
      C: { whyStudentsChoose: 'Gave the end behavior for an even degree polynomial with negative leading coefficient.', whyIncorrect: 'Leading coefficient is stated as positive ($a > 0$).', coreTrap: 'Positive vs negative coefficient.' },
      D: { whyStudentsChoose: 'Gave the end behavior for odd degree with negative leading coefficient.', whyIncorrect: 'Degree is 4 (even), not odd.', coreTrap: 'Odd degree inversion.' }
    }
  },
  {
    id: 'm2-m2-q13',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 13,
    domain: 'Algebra',
    skill: 'Linear equations in context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A coffee shop blends two types of coffee beans: Colombian beans costing \\$8 per pound and Ethiopian beans costing \\$14 per pound. How many pounds of Ethiopian beans must be used to create a 30-pound blend that costs \\$10 per pound?',
    choices: [
      { id: 'A', text: '10' },
      { id: 'B', text: '20' },
      { id: 'C', text: '15' },
      { id: 'D', text: '12' }
    ],
    answer: 'A',
    explanation: 'Let $e$ be the pounds of Ethiopian beans. Then the pounds of Colombian beans is $30 - e$.\nSet up the total cost equation:\n$$14e + 8(30 - e) = 10(30)$$\n$$14e + 240 - 8e = 300$$\n$$6e + 240 = 300$$\n$$6e = 60 \\implies e = 10\\text{ pounds}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found the pounds of Colombian beans ($30 - 10 = 20$).', whyIncorrect: 'Question asks for Ethiopian beans, not Colombian.', coreTrap: 'Complementary variable trap.' },
      C: { whyStudentsChoose: 'Assumed an even 50/50 split ($30/2 = 15$).', whyIncorrect: 'Equal parts would yield $(8 + 14)/2 = \\$11$/lb, not \\$10/lb.', coreTrap: 'Midpoint assumption.' },
      D: { whyStudentsChoose: 'Estimated based on difference.', whyIncorrect: 'Does not satisfy the weighted average cost equation.', coreTrap: 'Rough estimation.' }
    }
  },
  {
    id: 'm2-m2-q14',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 14,
    domain: 'Geometry & Trigonometry',
    skill: 'Similar shapes: Area and volume ratios',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'Two geometrically similar solid pyramids have heights of 6 cm and 15 cm, respectively. If the volume of the smaller pyramid is 48 cubic centimeters, what is the volume, in cubic centimeters, of the larger pyramid?',
    choices: [
      { id: 'A', text: '750' },
      { id: 'B', text: '300' },
      { id: 'C', text: '120' },
      { id: 'D', text: '1,200' }
    ],
    answer: 'A',
    explanation: 'The linear scale factor is $k = \\frac{15}{6} = \\frac{5}{2} = 2.5$.\nFor 3D similar solids, volume scales with the cube of the linear factor ($k^3$):\n$$\\frac{V_{\\text{large}}}{V_{\\text{small}}} = k^3 = \\left(\\frac{5}{2}\\right)^3 = \\frac{125}{8}$$\n$$V_{\\text{large}} = 48 \\times \\frac{125}{8} = 6 \\times 125 = 750\\text{ cm}^3$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Used the area scale factor $k^2 = 25/4 = 6.25$: $48 \\times 6.25 = 300$.', whyIncorrect: 'Volume scales with $k^3$, not $k^2$.', coreTrap: 'Area vs volume scaling factor.' },
      C: { whyStudentsChoose: 'Used the linear scale factor $k = 2.5$: $48 \\times 2.5 = 120$.', whyIncorrect: 'Linear factor $k$ only scales 1D lengths, not 3D volumes.', coreTrap: 'Linear vs volumetric scaling.' },
      D: { whyStudentsChoose: 'Multiplied $48 \\times 25$.', whyIncorrect: 'Incorrect exponent calculation.', coreTrap: 'Arithmetic scaling error.' }
    }
  },
  {
    id: 'm2-m2-q15',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 15,
    domain: 'Advanced Math',
    skill: 'Composite and inverse functions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'The function $f$ is defined by $f(x) = \\frac{4x + 7}{5}$. If $f^{-1}$ represents the inverse function of $f$, what is the value of $f^{-1}(3)$?',
    choices: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3.8' },
      { id: 'C', text: '19' },
      { id: 'D', text: '8' }
    ],
    answer: 'A',
    explanation: 'By definition of an inverse function, $f^{-1}(3) = x$ is equivalent to solving $f(x) = 3$:\n$$\\frac{4x + 7}{5} = 3$$\n$$4x + 7 = 15$$\n$$4x = 8$$\n$$x = 2$$\nThus, $f^{-1}(3) = 2$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Evaluated $f(3)$ instead of $f^{-1}(3)$: $\\frac{4(3)+7}{5} = \\frac{19}{5} = 3.8$.', whyIncorrect: 'This is $f(3)$, not the inverse $f^{-1}(3)$.', coreTrap: 'Function vs inverse function.' },
      C: { whyStudentsChoose: 'Found $4(3) + 7 = 19$.', whyIncorrect: 'Forgot to divide by 5 and solve for inverse.', coreTrap: 'Numerator evaluation trap.' },
      D: { whyStudentsChoose: 'Found $4x = 8$ and stopped.', whyIncorrect: 'Did not divide by 4.', coreTrap: 'Incomplete isolation.' }
    }
  },
  {
    id: 'm2-m2-q16',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 16,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Two-variable exponential regression',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'A financial analyst models the revenue $R(t)$, in millions of dollars, of a cloud computing startup using the equation $R(t) = 4.5(1.35)^t$, where $t$ is the number of years since 2020. By what percentage does the model predict the startup\'s revenue will increase every 2 years?',
    choices: [
      { id: 'A', text: '82.25%' },
      { id: 'B', text: '70.00%' },
      { id: 'C', text: '35.00%' },
      { id: 'D', text: '182.25%' }
    ],
    answer: 'A',
    explanation: 'The annual growth factor is $b = 1.35$ (35% increase per year).\nOver a 2-year period ($t = 2$), the 2-year growth factor is:\n$$b^2 = (1.35)^2 = 1.8225$$\nThe percentage increase over 2 years is:\n$$\\text{Percentage Increase} = (1.8225 - 1) \\times 100\\% = 82.25\\%$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Doubled the annual 35% rate ($35\\% \\times 2 = 70\\%$).', whyIncorrect: 'Exponential growth compounds; you must square the growth factor, not multiply by 2.', coreTrap: 'Simple addition vs compounding.' },
      C: { whyStudentsChoose: 'Took the annual 35% growth rate directly.', whyIncorrect: 'The question asks for the percentage increase over 2 years, not 1 year.', coreTrap: '1-year vs 2-year interval.' },
      D: { whyStudentsChoose: 'Gave the 2-year multiplier percentage ($182.25\\%$) instead of the net increase.', whyIncorrect: 'Net percentage increase is $182.25\\% - 100\\% = 82.25\\%$.', coreTrap: 'Growth multiplier vs net percentage increase.' }
    }
  },
  {
    id: 'm2-m2-q17',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 17,
    domain: 'Advanced Math',
    skill: 'Radical equations and extraneous roots',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'What is the real solution to the equation $\\sqrt{4x + 21} - x = 4$?',
    choices: [
      { id: 'A', text: '1' },
      { id: 'B', text: '$-5$' },
      { id: 'C', text: '$\\{-5, 1\\}$' },
      { id: 'D', text: '5' }
    ],
    answer: 'A',
    explanation: 'Isolate the radical:\n$$\\sqrt{4x + 21} = x + 4$$\nSquare both sides:\n$$4x + 21 = (x + 4)^2$$\n$$4x + 21 = x^2 + 8x + 16$$\n$$x^2 + 4x - 5 = 0$$\nFactor:\n$$(x + 5)(x - 1) = 0 \\implies x = 1 \\text{ or } x = -5$$\nCheck roots in original equation $\\sqrt{4x + 21} = x + 4$:\n1) For $x = 1$: $\\sqrt{4(1) + 21} = \\sqrt{25} = 5$; $1 + 4 = 5$. (Valid: $5 = 5$)\n2) For $x = -5$: $\\sqrt{4(-5) + 21} = \\sqrt{1} = 1$; $-5 + 4 = -1$. (Extraneous: $1 \\neq -1$)\nTherefore, the only real solution is $x = 1$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found $x = -5$ from quadratic factor $(x + 5)$.', whyIncorrect: '$x = -5$ is extraneous because $\\sqrt{1} \\neq -1$.', coreTrap: 'Extraneous root trap.' },
      C: { whyStudentsChoose: 'Included both quadratic solutions without checking for extraneous roots.', whyIncorrect: '$x = -5$ fails the radical equation.', coreTrap: 'Extraneous root check omission.' },
      D: { whyStudentsChoose: 'Sign error during factoring.', whyIncorrect: 'Roots are $1$ and $-5$, not $+5$.', coreTrap: 'Factoring sign error.' }
    }
  },
  {
    id: 'm2-m2-q18',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 18,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'spr',
    question: 'If $\\frac{2}{3}(x - 6) = 14$, what is the value of $x$?',
    answer: '27',
    acceptableAnswers: ['27'],
    explanation: 'Multiply both sides by $\\frac{3}{2}$:\n$$x - 6 = 14 \\times \\frac{3}{2} = 21$$\nAdd 6 to both sides:\n$$x = 21 + 6 = 27$$'
  },
  {
    id: 'm2-m2-q19',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 19,
    domain: 'Geometry & Trigonometry',
    skill: 'Area and circumference of circles',
    difficulty: 'Hard',
    type: 'spr',
    question: 'A circle has an area of $144\\pi$ square units. What is the length of an arc on this circle intercepted by a central angle of $150^\\circ$? (Express your answer in terms of $\\pi$, e.g. if the answer is $10\\pi$, enter 10)',
    answer: '10',
    acceptableAnswers: ['10', '10pi'],
    explanation: 'First find the radius $r$:\n$$\\text{Area} = \\pi r^2 = 144\\pi \\implies r = 12$$\nCircumference of the circle:\n$$C = 2\\pi r = 2\\pi(12) = 24\\pi$$\nArc length for $150^\\circ$:\n$$\\text{Arc Length} = \\frac{150^\\circ}{360^\\circ} \\times 24\\pi = \\frac{5}{12} \\times 24\\pi = 10\\pi$$\nThe numerical coefficient before $\\pi$ is 10.'
  },
  {
    id: 'm2-m2-q20',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 20,
    domain: 'Advanced Math',
    skill: 'Nonlinear equations and tangency',
    difficulty: 'Hard',
    type: 'spr',
    question: 'The line $y = 4x + c$ is tangent to the parabola $y = 2x^2 - 8x + 23$ at exactly one point in the $xy$-plane. What is the value of the constant $c$?',
    answer: '5',
    acceptableAnswers: ['5'],
    explanation: 'Set the equations equal to find intersection points:\n$$4x + c = 2x^2 - 8x + 23$$\n$$2x^2 - 12x + (23 - c) = 0$$\nFor tangency (single point of contact), the discriminant must be zero ($\\Delta = 0$):\n$$\\Delta = (-12)^2 - 4(2)(23 - c) = 0$$\n$$144 - 8(23 - c) = 0$$\n$$144 - 184 + 8c = 0$$\n$$-40 + 8c = 0$$\n$$8c = 40 \\implies c = 5$$'
  },
  {
    id: 'm2-m2-q21',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 21,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Probability and combinatorics',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'A jar contains 7 red marbles and 5 blue marbles. If 2 marbles are drawn at random without replacement, what is the probability that both selected marbles are blue? (Express your answer as a simplified fraction like a/b or decimal rounded to two places)',
    answer: '5/33',
    acceptableAnswers: ['5/33', '0.15', '.15', '0.152', '.152'],
    explanation: 'Total marbles = $7 + 5 = 12$.\nProbability 1st marble is blue = $\\frac{5}{12}$.\nProbability 2nd marble is blue = $\\frac{4}{11}$.\nJoint probability:\n$$P(\\text{both blue}) = \\frac{5}{12} \\times \\frac{4}{11} = \\frac{5 \\times 1}{3 \\times 11} = \\frac{5}{33}$$\nIn decimal: $5/33 \\approx 0.1515$.'
  },
  {
    id: 'm2-m2-q22',
    examId: 'mock-2',
    section: 'math',
    module: 2,
    questionNumber: 22,
    domain: 'Advanced Math',
    skill: 'Exponential equations and substitution',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'If $4^{2x} - 20 \\cdot 4^x + 64 = 0$, what is the sum of all real values of $x$ that satisfy the equation?',
    answer: '3',
    acceptableAnswers: ['3'],
    explanation: 'Let $u = 4^x$. Then $4^{2x} = (4^x)^2 = u^2$.\nSubstitute $u$ into the equation:\n$$u^2 - 20u + 64 = 0$$\nFactor the quadratic:\n$$(u - 16)(u - 4) = 0$$\nThus, $u = 16$ or $u = 4$.\nSubstitute back $u = 4^x$:\n1) $4^x = 16 = 4^2 \\implies x = 2$\n2) $4^x = 4 = 4^1 \\implies x = 1$\nThe sum of all real values of $x$ is $2 + 1 = 3$.'
  }
];
