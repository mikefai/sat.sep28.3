import { Question } from '../../types/exam';

export const mock1_math_module2: Question[] = [
  {
    id: 'm1-m2-q1',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'If $5(2x - 1) = 3(2x - 1) + 16$, what is the value of $2x - 1$?',
    choices: [
      { id: 'A', text: '4' },
      { id: 'B', text: '8' },
      { id: 'C', text: '9' },
      { id: 'D', text: '16' }
    ],
    answer: 'B',
    explanation: 'Treat the entire group $(2x - 1)$ as a single variable $u$:\n$$5u = 3u + 16$$\n$$2u = 16 \\implies u = 8$$\nSince $u = 2x - 1$, the value of $2x - 1$ is 8.',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Solved all the way for $x$: $2x - 1 = 8 \\implies 2x = 9 \\implies x = 4.5$, or miscalculated $16/4 = 4$.', whyIncorrect: 'Question asks for the expression $2x - 1$, which equals 8.', coreTrap: 'Solving for $x$ instead of the expression.' },
      C: { whyStudentsChoose: 'Found $2x = 9$ and stopped.', whyIncorrect: 'Did not subtract 1 to get $2x - 1$.', coreTrap: 'Incomplete term isolation.' },
      D: { whyStudentsChoose: 'Took the constant 16.', whyIncorrect: 'Did not divide by 2.', coreTrap: 'Constant extraction trap.' }
    }
  },
  {
    id: 'm1-m2-q2',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 2,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Percentages and Exponential change',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'An investment of \\$4,000 earns 6\\% annual interest compounded annually. Which expression gives the value of the investment, in dollars, after $t$ years?',
    choices: [
      { id: 'A', text: '$4,000(1.06)^t$' },
      { id: 'B', text: '$4,000(0.06)^t$' },
      { id: 'C', text: '$4,000 + (1.06)^t$' },
      { id: 'D', text: '$4,000(1 + 6t)$' }
    ],
    answer: 'A',
    explanation: 'The compound interest formula is $A = P(1 + r)^t$, where $P = 4,000$ and $r = 0.06$. Thus, $1 + r = 1.06$, yielding $A = 4,000(1.06)^t$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Forgot to add 1 to the interest rate ($1 + r$).', whyIncorrect: '$0.06^t$ represents a 94% loss every year.', coreTrap: 'Growth rate vs growth factor confusion.' },
      C: { whyStudentsChoose: 'Added the principal instead of multiplying.', whyIncorrect: 'Principal must be multiplied by the growth factor.', coreTrap: 'Additive vs multiplicative model.' },
      D: { whyStudentsChoose: 'Used a simple interest linear formula with incorrect percentage.', whyIncorrect: 'Represents linear growth rather than compound exponential growth.', coreTrap: 'Simple vs compound interest trap.' }
    }
  },
  {
    id: 'm1-m2-q3',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 3,
    domain: 'Algebra',
    skill: 'Linear equations in two variables',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A line in the $xy$-plane has an $x$-intercept of $(6, 0)$ and a $y$-intercept of $(0, -4)$. Which of the following is an equation of this line?',
    choices: [
      { id: 'A', text: '$2x - 3y = 12$' },
      { id: 'B', text: '$2x + 3y = 12$' },
      { id: 'C', text: '$3x - 2y = 12$' },
      { id: 'D', text: '$3x + 2y = -12$' }
    ],
    answer: 'A',
    explanation: 'Find the slope using $(6, 0)$ and $(0, -4)$:\n$$m = \\frac{-4 - 0}{0 - 6} = \\frac{-4}{-6} = \\frac{2}{3}$$\nIn slope-intercept form: $y = \\frac{2}{3}x - 4$.\nMultiply by 3:\n$$3y = 2x - 12 \\implies 2x - 3y = 12$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sign error with intercepts.', whyIncorrect: 'Yields a $y$-intercept of $+4$, not $-4$.', coreTrap: 'Sign error on $y$-intercept.' },
      C: { whyStudentsChoose: 'Swapped $x$ and $y$ coefficients.', whyIncorrect: 'Yields $x$-intercept $(4,0)$ and $y$-intercept $(0,-6)$.', coreTrap: 'Coefficient swap.' },
      D: { whyStudentsChoose: 'Inverted both intercepts.', whyIncorrect: 'Gives negative intercepts for both axes.', coreTrap: 'Global sign error.' }
    }
  },
  {
    id: 'm1-m2-q4',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 4,
    domain: 'Advanced Math',
    skill: 'Nonlinear functions and transformations',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'The graph of $g(x) = (x + 3)^2 - 8$ is shifted 5 units to the right and 4 units up to create the graph of $h(x)$. What is the vertex of the parabola defined by $h(x)$?',
    choices: [
      { id: 'A', text: '$(2, -4)$' },
      { id: 'B', text: '$-(8, -4)$' },
      { id: 'C', text: '$(2, -12)$' },
      { id: 'D', text: '$(8, 4)$' }
    ],
    answer: 'A',
    explanation: 'The original vertex of $g(x)$ is $(-3, -8)$.\nShifting 5 units right adds 5 to the $x$-coordinate: $-3 + 5 = 2$.\nShifting 4 units up adds 4 to the $y$-coordinate: $-8 + 4 = -4$.\nThus, the new vertex is $(2, -4)$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Subtracted 5 from $-3$ instead of adding: $-3 - 5 = -8$.', whyIncorrect: 'Shifting right increases the $x$-coordinate.', coreTrap: 'Horizontal shift direction confusion.' },
      C: { whyStudentsChoose: 'Subtracted 4 from $-8$ instead of adding: $-8 - 4 = -12$.', whyIncorrect: 'Shifting up increases the $y$-coordinate.', coreTrap: 'Vertical shift direction confusion.' },
      D: { whyStudentsChoose: 'Made sign errors on both coordinates.', whyIncorrect: 'Inverts the initial vertex signs and shift directions.', coreTrap: 'Double sign inversion.' }
    }
  },
  {
    id: 'm1-m2-q5',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 5,
    domain: 'Geometry & Trigonometry',
    skill: 'Circles: Arc length and sectors',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A circle with center $O$ has a radius of 18 cm. A central angle $\\angle AOB$ intercepts an arc $AB$ of length $6\\pi$ cm. What is the area, in square centimeters, of sector $AOB$?',
    choices: [
      { id: 'A', text: '$54\\pi$' },
      { id: 'B', text: '$108\\pi$' },
      { id: 'C', text: '$216\\pi$' },
      { id: 'D', text: '$324\\pi$' }
    ],
    answer: 'A',
    explanation: 'The area of a sector can be calculated using $A = \\frac{1}{2} r s$, where $r$ is the radius and $s$ is the arc length:\n$$A = \\frac{1}{2}(18)(6\\pi) = 9(6\\pi) = 54\\pi\\text{ cm}^2$$\nAlternatively, find the central angle: $\\theta = \\frac{s}{r} = \\frac{6\\pi}{18} = \\frac{\\pi}{3}$ radians.\nSector area $= \\frac{1}{2} r^2 \\theta = \\frac{1}{2}(18^2)\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}(324)\\left(\\frac{\\pi}{3}\\right) = 54\\pi$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Forgot the $\\frac{1}{2}$ in the sector formula: $18 \\times 6\\pi = 108\\pi$.', whyIncorrect: 'Must divide by 2 in sector area formula.', coreTrap: 'Omission of one-half factor.' },
      C: { whyStudentsChoose: 'Computed $\\frac{2}{3} \\pi r^2$.', whyIncorrect: 'Arc is $\\frac{1}{6}$ of the circumference, not $\\frac{2}{3}$.', coreTrap: 'Fractional proportion miscalculation.' },
      D: { whyStudentsChoose: 'Gave the area of the entire circle $\\pi r^2 = 324\\pi$.', whyIncorrect: 'Calculated the full circle rather than the sector.', coreTrap: 'Full area vs sector area.' }
    }
  },
  {
    id: 'm1-m2-q6',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 6,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Evaluating statistical claims and margin of error',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'A political polling organization surveyed a random sample of 1,200 registered voters in a state. The poll found that 54\\% of voters supported a proposed ballot initiative, with an associated margin of error of $\\pm 2.8\\%$ at a 95\\% confidence level. Which of the following statements is the most appropriate conclusion from this survey?',
    choices: [
      { id: 'A', text: 'It is plausible that the true proportion of all registered voters in the state who support the initiative is between 51.2% and 56.8%.' },
      { id: 'B', text: 'Exactly 54% of all registered voters in the state support the ballot initiative.' },
      { id: 'C', text: 'If 1,200 different voters are surveyed, exactly 54% of them will support the initiative.' },
      { id: 'D', text: 'At least 95% of all registered voters in the state support the initiative.' }
    ],
    answer: 'A',
    explanation: 'A 95% confidence interval is calculated by taking the point estimate $\\pm$ the margin of error:\n$$54\\% - 2.8\\% = 51.2\\%$$\n$$54\\% + 2.8\\% = 56.8\\%$$\nTherefore, it is plausible that the true population parameter lies within the interval $(51.2\\%, 56.8\\%)$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Treats the sample point estimate as the exact population truth.', whyIncorrect: 'Sampling variation means the true population parameter will vary around the estimate within the margin of error.', coreTrap: 'Point estimate determinism.' },
      C: { whyStudentsChoose: 'Assumes exact repeatability across samples.', whyIncorrect: 'Different random samples will yield different sample proportions.', coreTrap: 'Sample variability neglect.' },
      D: { whyStudentsChoose: 'Confuses confidence level (95%) with the proportion of supporters.', whyIncorrect: '95% refers to the confidence in the estimation methodology, not the percentage of voters in favor.', coreTrap: 'Confidence level misinterpretation.' }
    }
  },
  {
    id: 'm1-m2-q7',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 7,
    domain: 'Advanced Math',
    skill: 'Rational functions and asymptotes',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'For which value of $x$ is the function $f(x) = \\frac{x^2 - 9}{2x^2 - 5x - 3}$ undefined, and at that value, what type of discontinuity exists?',
    choices: [
      { id: 'A', text: '$x = 3$ is a removable discontinuity (hole), and $x = -\\frac{1}{2}$ is a vertical asymptote.' },
      { id: 'B', text: '$x = 3$ and $x = -\\frac{1}{2}$ are both vertical asymptotes.' },
      { id: 'C', text: '$x = -3$ is a vertical asymptote, and $x = 3$ is a removable discontinuity.' },
      { id: 'D', text: '$x = -\\frac{1}{2}$ is a hole, and $x = 3$ is a vertical asymptote.' }
    ],
    answer: 'A',
    explanation: 'Factor both numerator and denominator:\n$$\\text{Numerator: } x^2 - 9 = (x - 3)(x + 3)$$\n$$\\text{Denominator: } 2x^2 - 5x - 3 = (2x + 1)(x - 3)$$\nThe factor $(x - 3)$ cancels from both numerator and denominator, which creates a removable discontinuity (hole) at $x = 3$.\nThe factor $(2x + 1)$ remains exclusively in the denominator, which creates a vertical asymptote at $2x + 1 = 0 \\implies x = -\\frac{1}{2}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Assumes every zero of the denominator is a vertical asymptote.', whyIncorrect: 'When a common factor cancels, it creates a hole, not a vertical asymptote.', coreTrap: 'Hole vs asymptote rule confusion.' },
      C: { whyStudentsChoose: 'Factored $x^2 - 9$ as zeros rather than checking the denominator.', whyIncorrect: '$x = -3$ makes only the numerator zero ($x$-intercept), not a vertical asymptote.', coreTrap: 'Numerator vs denominator zero confusion.' },
      D: { whyStudentsChoose: 'Swapped which factor cancels.', whyIncorrect: '$(x-3)$ cancels, not $(2x+1)$.', coreTrap: 'Factor cancellation inversion.' }
    }
  },
  {
    id: 'm1-m2-q8',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 8,
    domain: 'Algebra',
    skill: 'Systems of linear equations with infinitely many solutions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'In the system of equations below, $a$ and $b$ are constants. If the system has infinitely many solutions $(x, y)$, what is the value of $\\frac{a}{b}$?\n$$ax + 6y = 18$$\n$$4x + by = 24$$',
    choices: [
      { id: 'A', text: '$\\frac{3}{8}$' },
      { id: 'B', text: '$\\frac{3}{2}$' },
      { id: 'C', text: '$\\frac{9}{16}$' },
      { id: 'D', text: '$\\frac{2}{3}$' }
    ],
    answer: 'A',
    explanation: 'For the system to have infinitely many solutions, the two equations must be proportional (representing the exact same line):\n$$\\frac{a}{4} = \\frac{6}{b} = \\frac{18}{24}$$\nFirst simplify the constant ratio: $\\frac{18}{24} = \\frac{3}{4}$.\nNow solve for $a$:\n$$\\frac{a}{4} = \\frac{3}{4} \\implies a = 3$$\nSolve for $b$:\n$$\\frac{6}{b} = \\frac{3}{4} \\implies 3b = 24 \\implies b = 8$$\nNow find $\\frac{a}{b}$:\n$$\\frac{a}{b} = \\frac{3}{8}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Computed $\\frac{b}{a} \\approx 8/3$ or inverted ratios.', whyIncorrect: '$\\frac{a}{b} = \\frac{3}{8}$, not $\\frac{3}{2}$.', coreTrap: 'Ratio computation error.' },
      C: { whyStudentsChoose: 'Squared the ratio $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$.', whyIncorrect: 'Squaring the proportion constant is unnecessary and incorrect.', coreTrap: 'Arbitrary squaring trap.' },
      D: { whyStudentsChoose: 'Computed $\\frac{4}{6} = \\frac{2}{3}$.', whyIncorrect: '$\\frac{a}{b} = \\frac{3}{8}$.', coreTrap: 'Cross-coefficient error.' }
    }
  },
  {
    id: 'm1-m2-q9',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 9,
    domain: 'Geometry & Trigonometry',
    skill: 'Right triangle trigonometry and special angles',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A surveyor stands at point $P$, located 120 meters horizontally from the base of a vertical communications tower. The angle of elevation from the surveyor\'s transit telescope (1.5 meters above the ground) to the top of the tower is $30^\\circ$. What is the total height of the communications tower, in meters?',
    choices: [
      { id: 'A', text: '$40\\sqrt{3} + 1.5$' },
      { id: 'B', text: '$120\\sqrt{3} + 1.5$' },
      { id: 'C', text: '$60 + 1.5$' },
      { id: 'D', text: '$40\\sqrt{3}$' }
    ],
    answer: 'A',
    explanation: 'Let $h_{\\text{triangle}}$ be the height of the tower above the transit level:\n$$\\tan(30^\\circ) = \\frac{h_{\\text{triangle}}}{120}$$\nSince $\\tan(30^\\circ) = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$:\n$$h_{\\text{triangle}} = 120 \\cdot \\frac{\\sqrt{3}}{3} = 40\\sqrt{3}\\text{ meters}$$\nAdding the height of the transit (1.5 m) gives total tower height:\n$$\\text{Total Height} = 40\\sqrt{3} + 1.5\\text{ meters}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Used $\\tan(60^\\circ) = \\sqrt{3}$ instead of $\\tan(30^\\circ)$.', whyIncorrect: 'The angle of elevation is $30^\\circ$, so $\\tan(30^\\circ) = \\frac{\\sqrt{3}}{3}$.', coreTrap: 'Special angle trig ratio confusion.' },
      C: { whyStudentsChoose: 'Used $\\sin(30^\\circ) = 0.5$ with 120 as the adjacent side.', whyIncorrect: 'Must use tangent (opposite/adjacent) because 120 m is the adjacent ground distance, not the hypotenuse.', coreTrap: 'Sine vs tangent confusion.' },
      D: { whyStudentsChoose: 'Forgot to add the 1.5-meter transit height.', whyIncorrect: 'The transit is 1.5 m above the ground, so total height must include $+1.5$.', coreTrap: 'Instrument height omission.' }
    }
  },
  {
    id: 'm1-m2-q10',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 10,
    domain: 'Advanced Math',
    skill: 'Quadratic formula and radicals',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'The solutions to the equation $x^2 - 6x + 2 = 0$ can be written in the form $p \\pm \\sqrt{q}$, where $p$ and $q$ are positive integers. What is the value of $p + q$?',
    choices: [
      { id: 'A', text: '10' },
      { id: 'B', text: '13' },
      { id: 'C', text: '16' },
      { id: 'D', text: '21' }
    ],
    answer: 'A',
    explanation: 'Use the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ with $a = 1, b = -6, c = 2$:\n$$x = \\frac{6 \\pm \\sqrt{(-6)^2 - 4(1)(2)}}{2} = \\frac{6 \\pm \\sqrt{36 - 8}}{2} = \\frac{6 \\pm \\sqrt{28}}{2}$$\nSimplify $\\sqrt{28} = 2\\sqrt{7}$:\n$$x = \\frac{6 \\pm 2\\sqrt{7}}{2} = 3 \\pm \\sqrt{7}$$\nHere, $p = 3$ and $q = 7$. Both are positive integers.\nTherefore, $p + q = 3 + 7 = 10$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Kept $\\sqrt{28}/2$ unsimplified and took $p = 6, q = 7 \\implies 13$.', whyIncorrect: 'Must divide both 6 and $2\\sqrt{7}$ by 2, yielding $p = 3$.', coreTrap: 'Partial division of radical.' },
      C: { whyStudentsChoose: 'Added $6 + 10$ or made an arithmetic slip with 28.', whyIncorrect: '$3 + 7 = 10$.', coreTrap: 'Calculation error.' },
      D: { whyStudentsChoose: 'Used unsimplified $p = 3, q = 28$ without reducing radical inside.', whyIncorrect: 'The format requires $\\pm \\sqrt{q}$ with no coefficient outside the radical.', coreTrap: 'Radical simplification oversight.' }
    }
  },
  {
    id: 'm1-m2-q11',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 11,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Ratios, rates, and unit conversion',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A high-speed maglev train travels at a constant speed of 432 kilometers per hour. What is the train\'s speed in meters per second? ($1\\text{ kilometer} = 1,000\\text{ meters}$, $1\\text{ hour} = 3,600\\text{ seconds}$)',
    choices: [
      { id: 'A', text: '120' },
      { id: 'B', text: '144' },
      { id: 'C', text: '240' },
      { id: 'D', text: '1,200' }
    ],
    answer: 'A',
    explanation: 'Convert kilometers per hour to meters per second by multiplying by $\\frac{1,000}{3,600} = \\frac{5}{18}$:\n$$\\text{Speed} = 432 \\times \\frac{1,000\\text{ m}}{3,600\\text{ s}} = 432 \\times \\frac{5}{18} = 24 \\times 5 = 120\\text{ m/s}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Divided 432 by 3 instead of 3.6.', whyIncorrect: 'Conversion factor from km/h to m/s is divide by 3.6 ($432 / 3.6 = 120$).', coreTrap: 'Approximation shortcut error.' },
      C: { whyStudentsChoose: 'Divided 432 by 1.8.', whyIncorrect: 'Incorrect unit factor.', coreTrap: 'Unit multiplier error.' },
      D: { whyStudentsChoose: 'Multiplied by 1,000 and divided by 360 instead of 3,600.', whyIncorrect: '1 hour contains 3,600 seconds, not 360 seconds.', coreTrap: 'Seconds per hour misremembering.' }
    }
  },
  {
    id: 'm1-m2-q12',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 12,
    domain: 'Advanced Math',
    skill: 'Polynomial graphs and multiplicity of zeros',
    difficulty: 'Elite 1500+',
    type: 'multiple-choice',
    question: 'The polynomial function $f(x) = a(x + 4)^2(x - 1)(x - 5)^3$ is graphed in the $xy$-plane, where $a$ is a negative constant. Which of the following statements correctly describes the behavior of the graph of $f$?',
    choices: [
      { id: 'A', text: 'The graph is tangent to the $x$-axis at $x = -4$ and crosses the $x$-axis at $x = 1$ and $x = 5$.' },
      { id: 'B', text: 'The graph crosses the $x$-axis at $x = -4, x = 1,$ and $x = 5$.' },
      { id: 'C', text: 'The graph is tangent to the $x$-axis at $x = -4$ and $x = 5$, and crosses at $x = 1$.' },
      { id: 'D', text: 'The graph crosses the $x$-axis at $x = -4$ and is tangent at $x = 5$.' }
    ],
    answer: 'A',
    explanation: 'Multiplicity rule for polynomial roots:\n1) Even multiplicity (e.g., $(x + 4)^2$, multiplicity 2): The graph is tangent to (touches and turns around at) the $x$-axis at $x = -4$.\n2) Odd multiplicity (e.g., $(x - 1)^1$, multiplicity 1, and $(x - 5)^3$, multiplicity 3): The graph crosses the $x$-axis at $x = 1$ and $x = 5$ (inflecting through at $x = 5$).\nTherefore, choice A is fully correct.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Assumes all zeros cross the $x$-axis.', whyIncorrect: 'Roots with even multiplicity do not cross the $x$-axis; they are tangent.', coreTrap: 'Multiplicity rule neglect.' },
      C: { whyStudentsChoose: 'Treats multiplicity 3 as tangent.', whyIncorrect: 'Multiplicity 3 is odd, so the graph crosses the axis (with an inflection point), not tangent/turning around.', coreTrap: 'Odd vs even multiplicity confusion.' },
      D: { whyStudentsChoose: 'Swapped even and odd multiplicity behaviors.', whyIncorrect: 'Reverses the behavior between degree 2 and degree 3 roots.', coreTrap: 'Inverted multiplicity behavior.' }
    }
  },
  {
    id: 'm1-m2-q13',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 13,
    domain: 'Algebra',
    skill: 'Linear equations in context',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A chemist has two acid solutions: Solution $A$ contains 20\\% acid and Solution $B$ contains 50\\% acid. How many liters of Solution $B$ must be mixed with Solution $A$ to produce a 60-liter mixture that is 32\\% acid?',
    choices: [
      { id: 'A', text: '24' },
      { id: 'B', text: '36' },
      { id: 'C', text: '18' },
      { id: 'D', text: '30' }
    ],
    answer: 'A',
    explanation: 'Let $b$ be the volume of Solution $B$ (liters). Then the volume of Solution $A$ is $60 - b$.\nSet up the pure acid equation:\n$$0.20(60 - b) + 0.50b = 0.32(60)$$\n$$12 - 0.20b + 0.50b = 19.2$$\n$$0.30b = 19.2 - 12 = 7.2$$\n$$b = \\frac{7.2}{0.30} = 24\\text{ liters}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found the volume of Solution $A$ ($60 - 24 = 36$).', whyIncorrect: 'Question asks for Solution $B$, not Solution $A$.', coreTrap: 'Complementary variable trap.' },
      C: { whyStudentsChoose: 'Estimated half of 36.', whyIncorrect: 'Does not satisfy the concentration equation.', coreTrap: 'Estimation error.' },
      D: { whyStudentsChoose: 'Assumed equal parts ($60/2 = 30$).', whyIncorrect: 'Equal parts would yield $(20+50)/2 = 35\\%$, not $32\\%$.', coreTrap: 'Midpoint assumption.' }
    }
  },
  {
    id: 'm1-m2-q14',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 14,
    domain: 'Geometry & Trigonometry',
    skill: 'Similar triangles and proportions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'In right triangle $DEF$, the altitude from right angle $E$ intersects hypotenuse $DF$ at point $G$. If $DG = 4$ and $GF = 16$, what is the length of altitude $EG$?',
    choices: [
      { id: 'A', text: '8' },
      { id: 'B', text: '10' },
      { id: 'C', text: '12' },
      { id: 'D', text: '64' }
    ],
    answer: 'A',
    explanation: 'By the Geometric Mean Theorem (Altitude Rule) for right triangles:\n$$(EG)^2 = DG \\cdot GF$$\n$$(EG)^2 = 4 \\cdot 16 = 64$$\n$$EG = \\sqrt{64} = 8$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Averaged 4 and 16: $\\frac{4 + 16}{2} = 10$.', whyIncorrect: 'The altitude is the geometric mean ($\\sqrt{ab}$), not the arithmetic mean ($\\frac{a+b}{2}$).', coreTrap: 'Arithmetic vs geometric mean.' },
      C: { whyStudentsChoose: 'Subtracted 4 from 16: $16 - 4 = 12$.', whyIncorrect: 'Difference between segments is not the altitude.', coreTrap: 'Segment subtraction.' },
      D: { whyStudentsChoose: 'Forgot to take the square root of 64.', whyIncorrect: '64 is $(EG)^2$, so the altitude $EG = 8$.', coreTrap: 'Square root omission.' }
    }
  },
  {
    id: 'm1-m2-q15',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 15,
    domain: 'Advanced Math',
    skill: 'Composite functions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'The functions $f$ and $g$ are defined by $f(x) = 3x - 5$ and $g(x) = x^2 + 2x$. What is the value of $f(g(3))$?',
    choices: [
      { id: 'A', text: '40' },
      { id: 'B', text: '24' },
      { id: 'C', text: '15' },
      { id: 'D', text: '35' }
    ],
    answer: 'A',
    explanation: 'First evaluate the inner function $g(3)$:\n$$g(3) = (3)^2 + 2(3) = 9 + 6 = 15$$\nNow substitute 15 into $f(x)$:\n$$f(15) = 3(15) - 5 = 45 - 5 = 40$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Computed $g(f(3))$ instead of $f(g(3))$: $f(3) = 4$, then $g(4) = 16 + 8 = 24$.', whyIncorrect: 'This is $g(f(3))$, the reverse composition.', coreTrap: 'Composition order reversal.' },
      C: { whyStudentsChoose: 'Evaluated $g(3) = 15$ and stopped.', whyIncorrect: 'Must evaluate $f(15)$.', coreTrap: 'Incomplete composition step.' },
      D: { whyStudentsChoose: 'Computed $3(15) - 10 = 35$ or arithmetic slip.', whyIncorrect: '$45 - 5 = 40$.', coreTrap: 'Arithmetic error.' }
    }
  },
  {
    id: 'm1-m2-q16',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 16,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Two-variable models and exponential regression',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'The population of an endangered bird species was estimated at 1,800 individuals in the year 2010. By 2020, the population had decreased to 1,152 individuals. If the population decreased exponentially by a constant annual percentage rate $r$, which equation best models the population $N(t)$, where $t$ is the number of years since 2010?',
    choices: [
      { id: 'A', text: '$N(t) = 1,800(0.956)^t$' },
      { id: 'B', text: '$N(t) = 1,800(0.64)^t$' },
      { id: 'C', text: '$N(t) = 1,800 - 64.8t$' },
      { id: 'D', text: '$N(t) = 1,152(1.044)^t$' }
    ],
    answer: 'A',
    explanation: 'At $t = 10$ (year 2020):\n$$N(10) = 1,800 \\cdot b^{10} = 1,152$$\n$$b^{10} = \\frac{1,152}{1,800} = 0.64$$\n$$b = (0.64)^{1/10} \\approx 0.956$$\nThus, $N(t) = 1,800(0.956)^t$, representing an annual decay of approximately 4.4%.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Used the 10-year factor 0.64 as the annual factor.', whyIncorrect: '0.64 is the decay over the entire 10-year decade ($b^{10} = 0.64$), not per year.', coreTrap: 'Decade factor vs annual factor.' },
      C: { whyStudentsChoose: 'Used a linear model: $(1800 - 1152)/10 = 64.8$.', whyIncorrect: 'The prompt specifies exponential decrease, not linear decrease.', coreTrap: 'Linear vs exponential model.' },
      D: { whyStudentsChoose: 'Used 2020 population as initial and positive growth rate.', whyIncorrect: 'The species population is declining from 1,800, not growing from 1,152.', coreTrap: 'Growth vs decay inversion.' }
    }
  },
  {
    id: 'm1-m2-q17',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 17,
    domain: 'Advanced Math',
    skill: 'Radical equations and extraneous solutions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'What is the sum of all real solutions to the equation $\\sqrt{3x + 19} = x + 3$?',
    choices: [
      { id: 'A', text: '1' },
      { id: 'B', text: '$-3$' },
      { id: 'C', text: '$-1$' },
      { id: 'D', text: '2' }
    ],
    answer: 'D',
    explanation: 'Square both sides:\n$$3x + 19 = (x + 3)^2$$\n$$3x + 19 = x^2 + 6x + 9$$\n$$x^2 + 3x - 10 = 0$$\nFactor:\n$$(x + 5)(x - 2) = 0 \\implies x = 2 \\text{ or } x = -5$$\nCheck for extraneous solutions:\n1) For $x = 2$: $\\sqrt{3(2) + 19} = \\sqrt{25} = 5$; $2 + 3 = 5$. (Valid: $5 = 5$)\n2) For $x = -5$: $\\sqrt{3(-5) + 19} = \\sqrt{4} = 2$; $-5 + 3 = -2$. (Extraneous: $2 \\neq -2$)\nTherefore, the only real solution is $x = 2$, and the sum of all valid real solutions is 2 (Choice D).',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Mistook $-3/a$ sum of roots formula directly or arithmetic error.', whyIncorrect: 'The only valid root is $x = 2$.', coreTrap: 'Calculation slip.' },
      B: { whyStudentsChoose: 'Took Vieta sum directly: $-b/a = -3$.', whyIncorrect: '$x = -5$ is extraneous and does not satisfy the original radical equation.', coreTrap: 'Extraneous root trap.' },
      C: { whyStudentsChoose: 'Added both roots with arithmetic error.', whyIncorrect: '$x = -5$ is an extraneous solution and must be discarded.', coreTrap: 'Extraneous root inclusion.' }
    }
  },
  {
    id: 'm1-m2-q18',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 18,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'spr',
    question: 'If $\\frac{3}{4}x - 5 = \\frac{1}{2}x + 3$, what is the value of $x$?',
    answer: '32',
    acceptableAnswers: ['32'],
    explanation: 'Multiply the entire equation by the common denominator 4:\n$$3x - 20 = 2x + 12$$\nSubtract $2x$ from both sides:\n$$x - 20 = 12$$\nAdd 20 to both sides:\n$$x = 32$$'
  },
  {
    id: 'm1-m2-q19',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 19,
    domain: 'Geometry & Trigonometry',
    skill: 'Circles and tangent lines',
    difficulty: 'Hard',
    type: 'spr',
    question: 'Point $P$ lies outside a circle with center $O$ and radius 9. A line through $P$ is tangent to the circle at point $T$. If the distance from $P$ to the center $O$ is 15, what is the length of segment $PT$?',
    answer: '12',
    acceptableAnswers: ['12'],
    explanation: 'A tangent line to a circle is perpendicular to the radius at the point of tangency, so $\\angle PTO = 90^\\circ$.\nTriangle $PTO$ is a right triangle with hypotenuse $PO = 15$ and leg $OT = 9$.\nApply the Pythagorean theorem:\n$$(PT)^2 + (OT)^2 = (PO)^2$$\n$$(PT)^2 + 9^2 = 15^2$$\n$$(PT)^2 + 81 = 225$$\n$$(PT)^2 = 144 \\implies PT = \\sqrt{144} = 12$$\n(This is a scaled 3-4-5 right triangle: $3\\times 3, 4\\times 3, 5\\times 3$).'
  },
  {
    id: 'm1-m2-q20',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 20,
    domain: 'Advanced Math',
    skill: 'Nonlinear systems of equations',
    difficulty: 'Hard',
    type: 'spr',
    question: 'In the $xy$-plane, the line $y = 2x + k$ is tangent to the parabola $y = x^2 - 4x + 14$ at exactly one point. What is the value of the constant $k$?',
    answer: '5',
    acceptableAnswers: ['5'],
    explanation: 'Set the line equation equal to the parabola equation:\n$$2x + k = x^2 - 4x + 14$$\n$$x^2 - 6x + (14 - k) = 0$$\nFor tangency (exactly one intersection point), the discriminant of this quadratic must equal zero ($\\Delta = 0$):\n$$\\Delta = b^2 - 4ac = (-6)^2 - 4(1)(14 - k) = 0$$\n$$36 - 56 + 4k = 0$$\n$$-20 + 4k = 0$$\n$$4k = 20 \\implies k = 5$$'
  },
  {
    id: 'm1-m2-q21',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 21,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Conditional probability and combinatorics',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'A quality control inspector tests a batch of 8 microchips, of which exactly 2 are defective. The inspector randomly selects 2 microchips simultaneously without replacement. What is the probability that neither of the selected microchips is defective? (Express your answer as a simplified fraction like a/b or decimal rounded to two places)',
    answer: '15/28',
    acceptableAnswers: ['15/28', '0.536', '.536', '0.54', '.54'],
    explanation: 'Total microchips = 8. Non-defective microchips = $8 - 2 = 6$.\nProbability first microchip is non-defective: $\\frac{6}{8}$.\nProbability second microchip is non-defective: $\\frac{5}{7}$.\nJoint probability:\n$$P(\\text{neither defective}) = \\frac{6}{8} \\times \\frac{5}{7} = \\frac{3}{4} \\times \\frac{5}{7} = \\frac{15}{28}$$\nIn decimal: $15/28 \\approx 0.5357$.'
  },
  {
    id: 'm1-m2-q22',
    examId: 'mock-1',
    section: 'math',
    module: 2,
    questionNumber: 22,
    domain: 'Advanced Math',
    skill: 'Equivalent expressions and exponents',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'If $3^{2x} - 10 \\cdot 3^x + 9 = 0$, what is the sum of all real values of $x$ that satisfy the equation?',
    answer: '2',
    acceptableAnswers: ['2'],
    explanation: 'Let $u = 3^x$. Then $3^{2x} = (3^x)^2 = u^2$.\nSubstitute $u$ into the equation:\n$$u^2 - 10u + 9 = 0$$\nFactor the quadratic:\n$$(u - 9)(u - 1) = 0$$\nThus, $u = 9$ or $u = 1$.\nSubstitute back $u = 3^x$:\n1) $3^x = 9 = 3^2 \\implies x = 2$\n2) $3^x = 1 = 3^0 \\implies x = 0$\nThe sum of all real values of $x$ is $2 + 0 = 2$.'
  }
];
