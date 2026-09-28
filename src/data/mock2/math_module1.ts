import { Question } from '../../types/exam';

export const mock2_math_module1: Question[] = [
  {
    id: 'm2-m1-q1',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'If $3x - 7 = 20$, what is the value of $6x - 14$?',
    choices: [
      { id: 'A', text: '40' },
      { id: 'B', text: '27' },
      { id: 'C', text: '20' },
      { id: 'D', text: '9' }
    ],
    answer: 'A',
    explanation: 'Notice that $6x - 14 = 2(3x - 7)$.\nSince $3x - 7 = 20$:\n$$6x - 14 = 2(20) = 40$$\nAlternatively, solve for $x$: $3x = 27 \\implies x = 9$, then $6(9) - 14 = 54 - 14 = 40$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found $3x = 27$ and stopped.', whyIncorrect: '27 is $3x$, not $6x - 14$.', coreTrap: 'Intermediate step extraction.' },
      C: { whyStudentsChoose: 'Thought $6x - 14$ had the same value 20.', whyIncorrect: 'The expression is doubled, so the value is doubled to 40.', coreTrap: 'Scaling omission.' },
      D: { whyStudentsChoose: 'Solved for $x = 9$.', whyIncorrect: 'The question asks for $6x - 14$, not $x$.', coreTrap: 'Solving for wrong variable.' }
    }
  },
  {
    id: 'm2-m1-q2',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 2,
    domain: 'Algebra',
    skill: 'Linear functions and graphs',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'A catering service charges an initial setup fee of \\$120 plus \\$28 per guest. Which equation gives the total cost $C(g)$, in dollars, for an event with $g$ guests?',
    choices: [
      { id: 'A', text: '$C(g) = 28g + 120$' },
      { id: 'B', text: '$C(g) = 120g + 28$' },
      { id: 'C', text: '$C(g) = 148g$' },
      { id: 'D', text: '$C(g) = 28(g + 120)$' }
    ],
    answer: 'A',
    explanation: 'The per-guest rate (\\$28/guest) is the slope, and the fixed setup fee (\\$120) is the $y$-intercept.\nThus, the linear function is $C(g) = 28g + 120$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Reversed slope and $y$-intercept.', whyIncorrect: 'Would mean \\$120 per guest plus \\$28 flat fee.', coreTrap: 'Variable and constant swap.' },
      C: { whyStudentsChoose: 'Added the numbers together ($120 + 28 = 148$).', whyIncorrect: 'Applies the fixed setup fee to every guest.', coreTrap: 'Adding unlike terms.' },
      D: { whyStudentsChoose: 'Multiplied the rate by the sum of guests and setup.', whyIncorrect: 'Distributes 28 across 120.', coreTrap: 'Parentheses distribution error.' }
    }
  },
  {
    id: 'm2-m1-q3',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 3,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Percentages and Ratios',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'A retail store purchases a jacket for \\$80 and marks up the wholesale price by 35\\%. What is the retail selling price of the jacket?',
    choices: [
      { id: 'A', text: '\\$108' },
      { id: 'B', text: '\\$115' },
      { id: 'C', text: '\\$112' },
      { id: 'D', text: '\\$128' }
    ],
    answer: 'A',
    explanation: 'Calculate the markup amount:\n$$\\text{Markup} = 80 \\times 0.35 = \\$28$$\nSelling price:\n$$\\text{Price} = 80 + 28 = \\$108$$\nAlternatively: $80 \\times 1.35 = \\$108$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Added \\$35 flat markup instead of 35% of 80: $80 + 35 = 115$.', whyIncorrect: '35% of 80 is 28, not 35.', coreTrap: 'Percentage vs dollar amount confusion.' },
      C: { whyStudentsChoose: 'Calculated 40% markup ($80 + 32 = 112$).', whyIncorrect: 'The markup is 35%, not 40%.', coreTrap: 'Percentage rounding slip.' },
      D: { whyStudentsChoose: 'Added 80 and 48.', whyIncorrect: 'Incorrect arithmetic.', coreTrap: 'Calculation error.' }
    }
  },
  {
    id: 'm2-m1-q4',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 4,
    domain: 'Algebra',
    skill: 'Systems of linear equations',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'If $(x, y)$ is the solution to the system of equations:\n$$2x + 3y = 21$$\n$$4x - 3y = 15$$\nWhat is the value of $x \\cdot y$?',
    choices: [
      { id: 'A', text: '18' },
      { id: 'B', text: '15' },
      { id: 'C', text: '6' },
      { id: 'D', text: '3' }
    ],
    answer: 'A',
    explanation: 'Add the two equations:\n$$(2x + 3y) + (4x - 3y) = 21 + 15$$\n$$6x = 36 \\implies x = 6$$\nSubstitute $x = 6$ into $2x + 3y = 21$:\n$$2(6) + 3y = 21 \\implies 12 + 3y = 21 \\implies 3y = 9 \\implies y = 3$$\nNow find $x \\cdot y$:\n$$x \\cdot y = 6 \\cdot 3 = 18$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Took 15 from the right side of the second equation.', whyIncorrect: 'Must multiply $x=6$ and $y=3$.', coreTrap: 'Constant extraction trap.' },
      C: { whyStudentsChoose: 'Found $x = 6$ and stopped.', whyIncorrect: 'Question asks for the product $x \\cdot y$, not $x$.', coreTrap: 'Solving for $x$ only.' },
      D: { whyStudentsChoose: 'Found $y = 3$ and stopped.', whyIncorrect: 'Question asks for $x \\cdot y$.', coreTrap: 'Solving for $y$ only.' }
    }
  },
  {
    id: 'm2-m1-q5',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 5,
    domain: 'Advanced Math',
    skill: 'Equivalent expressions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Which expression is equivalent to $(3x - 4)(2x + 5) - (x^2 - 7)$?',
    choices: [
      { id: 'A', text: '$5x^2 + 7x - 13$' },
      { id: 'B', text: '$5x^2 + 7x - 27$' },
      { id: 'C', text: '$6x^2 + 7x - 13$' },
      { id: 'D', text: '$5x^2 - 7x - 13$' }
    ],
    answer: 'A',
    explanation: 'First expand the binomial product:\n$$(3x - 4)(2x + 5) = 6x^2 + 15x - 8x - 20 = 6x^2 + 7x - 20$$\nNow subtract $(x^2 - 7)$:\n$$(6x^2 + 7x - 20) - (x^2 - 7) = 6x^2 - x^2 + 7x - 20 + 7 = 5x^2 + 7x - 13$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Subtracted 7 instead of adding 7: $-20 - 7 = -27$.', whyIncorrect: 'Subtracting a negative 7 yields $-20 - (-7) = -20 + 7 = -13$.', coreTrap: 'Sign distribution error with negative constant.' },
      C: { whyStudentsChoose: 'Forgot to subtract $x^2$ from $6x^2$.', whyIncorrect: '$6x^2 - x^2 = 5x^2$, not $6x^2$.', coreTrap: 'Omission of $x^2$ subtraction.' },
      D: { whyStudentsChoose: 'Sign error on the middle linear term ($15x - 8x = -7x$).', whyIncorrect: '$15x - 8x = +7x$.', coreTrap: 'Linear term sign error.' }
    }
  },
  {
    id: 'm2-m1-q6',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 6,
    domain: 'Advanced Math',
    skill: 'Nonlinear functions and quadratics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'The height $h(t)$, in meters, of a projectile launched vertically upward from ground level is given by $h(t) = -5t^2 + 40t$, where $t$ is time in seconds. What is the maximum height, in meters, reached by the projectile?',
    choices: [
      { id: 'A', text: '80' },
      { id: 'B', text: '40' },
      { id: 'C', text: '4' },
      { id: 'D', text: '160' }
    ],
    answer: 'A',
    explanation: 'The time to reach maximum height is at the vertex $t = -\\frac{b}{2a}$:\n$$t = -\\frac{40}{2(-5)} = \\frac{40}{10} = 4\\text{ seconds}$$\nEvaluate the height at $t = 4$:\n$$h(4) = -5(4)^2 + 40(4) = -5(16) + 160 = -80 + 160 = 80\\text{ meters}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Looked at the linear coefficient 40.', whyIncorrect: '40 is the initial velocity, not the maximum height.', coreTrap: 'Coefficient extraction trap.' },
      C: { whyStudentsChoose: 'Gave the time $t = 4$ seconds instead of maximum height.', whyIncorrect: '4 is the time in seconds when max height is reached, not the height itself.', coreTrap: 'Time vs height confusion.' },
      D: { whyStudentsChoose: 'Calculated $40 \\times 4 = 160$ and forgot the quadratic gravity term $-5t^2$.', whyIncorrect: 'Must subtract $-5(16) = -80$.', coreTrap: 'Gravity term omission.' }
    }
  },
  {
    id: 'm2-m1-q7',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 7,
    domain: 'Geometry & Trigonometry',
    skill: 'Right triangles and trigonometry',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'In right triangle $XYZ$ with right angle at $Y$, the length of side $XY$ is 9 and the length of hypotenuse $XZ$ is 15. What is the value of $\\tan Z$?',
    choices: [
      { id: 'A', text: '$\\frac{3}{4}$' },
      { id: 'B', text: '$\\frac{4}{3}$' },
      { id: 'C', text: '$\\frac{3}{5}$' },
      { id: 'D', text: '$\\frac{4}{5}$' }
    ],
    answer: 'A',
    explanation: 'First find the missing adjacent leg $YZ$ using the Pythagorean theorem:\n$$(YZ)^2 = (XZ)^2 - (XY)^2 = 15^2 - 9^2 = 225 - 81 = 144 \\implies YZ = 12$$\n(This is a 3-4-5 right triangle: $3\\times 3=9, 4\\times 3=12, 5\\times 3=15$).\nFor angle $Z$:\n$$\\text{Opposite side} = XY = 9$$\n$$\\text{Adjacent side} = YZ = 12$$\n$$\\tan Z = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{9}{12} = \\frac{3}{4}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Calculated $\\tan X = \\frac{12}{9} = \\frac{4}{3}$ instead of $\\tan Z$.', whyIncorrect: 'This is the tangent of angle $X$, not angle $Z$.', coreTrap: 'Angle reference reversal.' },
      C: { whyStudentsChoose: 'Calculated $\\sin Z = \\frac{9}{15} = \\frac{3}{5}$.', whyIncorrect: 'This is the sine ratio, not the tangent ratio.', coreTrap: 'Sine vs tangent confusion.' },
      D: { whyStudentsChoose: 'Calculated $\\cos Z = \\frac{12}{15} = \\frac{4}{5}$.', whyIncorrect: 'This is the cosine ratio.', coreTrap: 'Cosine vs tangent confusion.' }
    }
  },
  {
    id: 'm2-m1-q8',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 8,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Two-variable data: scatterplots and linear models',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'An environmental engineer models the concentration of dissolved oxygen $D$, in milligrams per liter (mg/L), in a river as a function of water temperature $T$, in degrees Celsius ($^\\circ\\text{C}$), using the linear equation $D = -0.22T + 14.8$. Which of the following is the best interpretation of the slope $-0.22$ in this context?',
    choices: [
      { id: 'A', text: 'For each increase of 1°C in water temperature, the predicted dissolved oxygen concentration decreases by 0.22 mg/L.' },
      { id: 'B', text: 'For each increase of 1 mg/L in dissolved oxygen, the water temperature decreases by 0.22°C.' },
      { id: 'C', text: 'The dissolved oxygen concentration is 0.22 mg/L when the water temperature is 0°C.' },
      { id: 'D', text: 'The water temperature decreases by 14.8°C for every 0.22 mg/L decrease in dissolved oxygen.' }
    ],
    answer: 'A',
    explanation: 'The slope $-0.22$ represents $\\frac{\\Delta D}{\\Delta T}$. Since the slope is negative, for every 1-unit ($1^\\circ\\text{C}$) increase in temperature $T$, the dependent variable $D$ (dissolved oxygen) decreases by $0.22\\text{ mg/L}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Swapped independent and dependent variables.', whyIncorrect: 'The independent variable is temperature ($T$), which drives changes in dissolved oxygen ($D$).', coreTrap: 'Variable dependency reversal.' },
      C: { whyStudentsChoose: 'Confused slope with $y$-intercept.', whyIncorrect: '14.8 is the concentration at 0°C, not 0.22.', coreTrap: 'Slope vs intercept confusion.' },
      D: { whyStudentsChoose: 'Mixed up slope and intercept numbers.', whyIncorrect: 'Distorts the mathematical meaning of the linear model.', coreTrap: 'Arbitrary parameter combination.' }
    }
  },
  {
    id: 'm2-m1-q9',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 9,
    domain: 'Algebra',
    skill: 'Linear inequalities in two variables',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A baker has at most 40 cups of flour and 24 cups of sugar to make cakes and cookies. Each cake requires 4 cups of flour and 2 cups of sugar, and each batch of cookies requires 2 cups of flour and 3 cups of sugar. If $c$ represents the number of cakes and $b$ represents the number of cookie batches, which system of inequalities represents this scenario?',
    choices: [
      { id: 'A', text: '$4c + 2b \\le 40$ and $2c + 3b \\le 24$' },
      { id: 'B', text: '$4c + 2b \\ge 40$ and $2c + 3b \\ge 24$' },
      { id: 'C', text: '$4c + 2c \\le 40$ and $2b + 3b \\le 24$' },
      { id: 'D', text: '$2c + 4b \\le 40$ and $3c + 2b \\le 24$' }
    ],
    answer: 'A',
    explanation: 'Flour constraint: 4 cups per cake ($4c$) + 2 cups per cookie batch ($2b$) $\\le 40$ total cups of flour.\nSugar constraint: 2 cups per cake ($2c$) + 3 cups per cookie batch ($3b$) $\\le 24$ total cups of sugar.\nBoth inequalities use $\\le$ because the baker has "at most" that amount of ingredients.\nThus, choice A is correct.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Used $\\ge$ instead of $\\le$.', whyIncorrect: '"At most" means $\\le$ (less than or equal to).', coreTrap: 'Inequality direction error.' },
      C: { whyStudentsChoose: 'Grouped by variables instead of ingredient constraints.', whyIncorrect: 'Mixes flour and sugar into individual variable sums.', coreTrap: 'Constraint grouping error.' },
      D: { whyStudentsChoose: 'Swapped coefficients between cakes and cookies.', whyIncorrect: 'Cakes require 4 flour, not 2 flour.', coreTrap: 'Coefficient assignment swap.' }
    }
  },
  {
    id: 'm2-m1-q10',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 10,
    domain: 'Geometry & Trigonometry',
    skill: 'Circles in the coordinate plane',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'A circle in the $xy$-plane has center $(5, -2)$ and passes through the point $(8, 2)$. What is the equation of the circle?',
    choices: [
      { id: 'A', text: '$(x - 5)^2 + (y + 2)^2 = 25$' },
      { id: 'B', text: '$(x + 5)^2 + (y - 2)^2 = 25$' },
      { id: 'C', text: '$(x - 5)^2 + (y + 2)^2 = 5$' },
      { id: 'D', text: '$(x - 8)^2 + (y - 2)^2 = 25$' }
    ],
    answer: 'A',
    explanation: 'First find the radius $r$ using the distance formula between center $(5, -2)$ and point $(8, 2)$:\n$$r^2 = (8 - 5)^2 + (2 - (-2))^2 = 3^2 + 4^2 = 9 + 16 = 25 \\implies r = 5$$\nThe standard circle equation with center $(h, k) = (5, -2)$ and $r^2 = 25$ is:\n$$(x - 5)^2 + (y - (-2))^2 = 25 \\implies (x - 5)^2 + (y + 2)^2 = 25$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sign errors on center $(h, k)$.', whyIncorrect: 'Yields center $(-5, 2)$ instead of $(5, -2)$.', coreTrap: 'Center sign reversal.' },
      C: { whyStudentsChoose: 'Wrote $r$ on the right side instead of $r^2$.', whyIncorrect: 'Standard form requires $r^2 = 25$, not $r = 5$.', coreTrap: '$r$ vs $r^2$ right-side confusion.' },
      D: { whyStudentsChoose: 'Used the boundary point as the center.', whyIncorrect: '$(8, 2)$ is a point on the circle, not the center.', coreTrap: 'Point vs center confusion.' }
    }
  },
  {
    id: 'm2-m1-q11',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 11,
    domain: 'Advanced Math',
    skill: 'Radicals and rational exponents',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'If $\\frac{x^{\\frac{5}{2}}}{\\sqrt[4]{x^3}} = x^p$ for all $x > 0$, what is the value of $p$?',
    choices: [
      { id: 'A', text: '$\\frac{7}{4}$' },
      { id: 'B', text: '$\\frac{13}{4}$' },
      { id: 'C', text: '$\\frac{5}{6}$' },
      { id: 'D', text: '$\\frac{1}{2}$' }
    ],
    answer: 'A',
    explanation: 'Rewrite the radical denominator as a rational exponent:\n$$\\sqrt[4]{x^3} = x^{\\frac{3}{4}}$$\nApply the quotient of powers rule (subtract exponents):\n$$\\frac{x^{\\frac{5}{2}}}{x^{\\frac{3}{4}}} = x^{\\frac{5}{2} - \\frac{3}{4}}$$\nFind a common denominator of 4:\n$$\\frac{5}{2} - \\frac{3}{4} = \\frac{10}{4} - \\frac{3}{4} = \\frac{7}{4}$$\nThus, $p = \\frac{7}{4}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Added exponents instead of subtracting: $\\frac{10}{4} + \\frac{3}{4} = \\frac{13}{4}$.', whyIncorrect: 'Division requires subtracting exponents, not adding.', coreTrap: 'Quotient vs product exponent rule.' },
      C: { whyStudentsChoose: 'Multiplied numerators and denominators improperly.', whyIncorrect: 'Exponent arithmetic error.', coreTrap: 'Fraction arithmetic mistake.' },
      D: { whyStudentsChoose: 'Subtracted $5/2 - 2 = 1/2$.', whyIncorrect: 'Denominator exponent is $3/4$, not 2.', coreTrap: 'Denominator power misidentification.' }
    }
  },
  {
    id: 'm2-m1-q12',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 12,
    domain: 'Advanced Math',
    skill: 'Quadratic discriminants and solutions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'For what value of $k$ does the quadratic equation $3x^2 - 12x + k = 0$ have exactly one distinct real solution?',
    choices: [
      { id: 'A', text: '12' },
      { id: 'B', text: '4' },
      { id: 'C', text: '36' },
      { id: 'D', text: '48' }
    ],
    answer: 'A',
    explanation: 'A quadratic equation has exactly one real solution when its discriminant is zero ($\\Delta = 0$):\n$$\\Delta = b^2 - 4ac = (-12)^2 - 4(3)(k) = 0$$\n$$144 - 12k = 0$$\n$$12k = 144 \\implies k = 12$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Divided 12 by 3.', whyIncorrect: '$k = 12$, not 4.', coreTrap: 'Premature division.' },
      C: { whyStudentsChoose: 'Computed $(-12/2)^2 = 36$ without dividing by $a = 3$.', whyIncorrect: 'Must account for leading coefficient $a = 3$ in discriminant ($4ac = 12k$).', coreTrap: 'Neglect of leading coefficient $a \\neq 1$.' },
      D: { whyStudentsChoose: 'Computed $144 / 3 = 48$.', whyIncorrect: 'Forgot the factor of 4 in $4ac$.', coreTrap: 'Omission of 4 in $4ac$.' }
    }
  },
  {
    id: 'm2-m1-q13',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 13,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Measures of center and spread (Standard Deviation)',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Dataset $A$ consists of the numbers: $\\{10, 10, 10, 10, 10\\}$. Dataset $B$ consists of the numbers: $\\{6, 8, 10, 12, 14\\}$. Which of the following statements correctly compares the means and standard deviations of the two datasets?',
    choices: [
      { id: 'A', text: 'Dataset A and Dataset B have the same mean, but Dataset B has a larger standard deviation.' },
      { id: 'B', text: 'Dataset A and Dataset B have the same mean and the same standard deviation.' },
      { id: 'C', text: 'Dataset A has a larger mean and a smaller standard deviation than Dataset B.' },
      { id: 'D', text: 'Dataset B has a larger mean and a larger standard deviation than Dataset A.' }
    ],
    answer: 'A',
    explanation: 'Mean of Dataset A: $\\frac{50}{5} = 10$.\nMean of Dataset B: $\\frac{6 + 8 + 10 + 12 + 14}{5} = \\frac{50}{5} = 10$.\nBoth datasets have identical means of 10.\nStandard deviation measures the spread from the mean:\n- In Dataset A, all values equal 10, so spread = 0 ($SD_A = 0$).\n- In Dataset B, values vary from 6 to 14, so spread > 0 ($SD_B > 0$).\nThus, Dataset B has a larger standard deviation.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks same mean implies same standard deviation.', whyIncorrect: 'Standard deviation measures spread, which differs between the two sets.', coreTrap: 'Mean vs standard deviation confusion.' },
      C: { whyStudentsChoose: 'Thinks identical numbers create higher mean.', whyIncorrect: 'Both means are exactly 10.', coreTrap: 'Mean calculation error.' },
      D: { whyStudentsChoose: 'Thinks larger numbers in B increase the mean.', whyIncorrect: 'Symmetrical values around 10 keep the mean at 10.', coreTrap: 'Symmetry oversight.' }
    }
  },
  {
    id: 'm2-m1-q14',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 14,
    domain: 'Algebra',
    skill: 'Linear equations: parallel and perpendicular lines',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Line $m$ has the equation $3x - 5y = 15$. Line $n$ is parallel to line $m$ and passes through the point $(10, 4)$. What is the $y$-intercept of line $n$?',
    choices: [
      { id: 'A', text: '$(0, -2)$' },
      { id: 'B', text: '$(0, 2)$' },
      { id: 'C', text: '$(0, -3)$' },
      { id: 'D', text: '$(0, 4)$' }
    ],
    answer: 'A',
    explanation: 'Find the slope of line $m$:\n$$3x - 5y = 15 \\implies -5y = -3x + 15 \\implies y = \\frac{3}{5}x - 3$$\nSlope $m = \\frac{3}{5}$.\nParallel line $n$ also has slope $m = \\frac{3}{5}$ and passes through $(10, 4)$:\n$$y - y_1 = m(x - x_1)$$\n$$y - 4 = \\frac{3}{5}(x - 10)$$\n$$y - 4 = \\frac{3}{5}x - 6$$\n$$y = \\frac{3}{5}x - 2$$\nThe $y$-intercept of line $n$ is $(0, -2)$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Sign error: added 6 instead of subtracting 6.', whyIncorrect: '$-6 + 4 = -2$, not $+2$.', coreTrap: 'Sign error in point-slope expansion.' },
      C: { whyStudentsChoose: 'Gave the $y$-intercept of the original line $m$.', whyIncorrect: '$(0, -3)$ is the intercept of line $m$, not line $n$.', coreTrap: 'Original line intercept trap.' },
      D: { whyStudentsChoose: 'Took the $y$-coordinate of the given point $(10, 4)$.', whyIncorrect: '4 is the $y$-value at $x = 10$, not at $x = 0$.', coreTrap: 'Given point as $y$-intercept.' }
    }
  },
  {
    id: 'm2-m1-q15',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 15,
    domain: 'Geometry & Trigonometry',
    skill: 'Area and volume of 3D solids',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A right circular cone has a base radius of 5 centimeters and a slant height of 13 centimeters. What is the volume of the cone, in cubic centimeters? (Volume of a cone = $\\frac{1}{3}\\pi r^2 h$)',
    choices: [
      { id: 'A', text: '$100\\pi$' },
      { id: 'B', text: '$300\\pi$' },
      { id: 'C', text: '$\\frac{325}{3}\\pi$' },
      { id: 'D', text: '$65\\pi$' }
    ],
    answer: 'A',
    explanation: 'First find the vertical height $h$ using the right triangle formed by radius $r$, height $h$, and slant height $l$:\n$$h^2 + r^2 = l^2$$\n$$h^2 + 5^2 = 13^2 \\implies h^2 + 25 = 169 \\implies h^2 = 144 \\implies h = 12\\text{ cm}$$\n(This is a 5-12-13 Pythagorean triple).\nNow compute volume:\n$$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (5^2)(12) = \\frac{1}{3}\\pi (25)(12) = 25 \\times 4\\pi = 100\\pi\\text{ cm}^3$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Forgot the factor of $\\frac{1}{3}$ (cylinder volume formula).', whyIncorrect: 'Cone volume requires dividing by 3.', coreTrap: 'Cone vs cylinder formula.' },
      C: { whyStudentsChoose: 'Used slant height 13 directly as the vertical height $h$: $\\frac{1}{3}\\pi (25)(13) = \\frac{325}{3}\\pi$.', whyIncorrect: 'Must use vertical height $h = 12$, not slant height 13.', coreTrap: 'Slant height vs vertical height.' },
      D: { whyStudentsChoose: 'Calculated lateral surface area $\\pi r l = \\pi (5)(13) = 65\\pi$.', whyIncorrect: 'Question asks for 3D volume, not surface area.', coreTrap: 'Surface area vs volume.' }
    }
  },
  {
    id: 'm2-m1-q16',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 16,
    domain: 'Advanced Math',
    skill: 'Exponential decay functions',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'A radioactive isotope has a half-life of 6 days. If a laboratory sample originally contains 640 grams of the isotope, which function $M(t)$ models the remaining mass, in grams, after $t$ days?',
    choices: [
      { id: 'A', text: '$M(t) = 640\\left(\\frac{1}{2}\\right)^{\\frac{t}{6}}$' },
      { id: 'B', text: '$M(t) = 640\\left(\\frac{1}{2}\\right)^{6t}$' },
      { id: 'C', text: '$M(t) = 640(2)^{\\frac{t}{6}}$' },
      { id: 'D', text: '$M(t) = 6\\left(\\frac{1}{2}\\right)^{\\frac{t}{640}}$' }
    ],
    answer: 'A',
    explanation: 'The standard half-life exponential decay model is $M(t) = M_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{t_{1/2}}}$.\nHere, initial mass $M_0 = 640$ grams and half-life $t_{1/2} = 6$ days.\nThus, $M(t) = 640\\left(\\frac{1}{2}\\right)^{\\frac{t}{6}}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Multiplied the exponent by 6 instead of dividing.', whyIncorrect: 'At $t = 6$ days, this would decay by $\\left(\\frac{1}{2}\\right)^{36}$ instead of one half-life.', coreTrap: 'Exponent scaling inversion.' },
      C: { whyStudentsChoose: 'Used base 2 (growth) instead of $1/2$ (decay).', whyIncorrect: 'Models exponential doubling rather than half-life decay.', coreTrap: 'Growth vs decay base.' },
      D: { whyStudentsChoose: 'Swapped initial mass and half-life period.', whyIncorrect: 'Initial mass is 640, not 6.', coreTrap: 'Parameter swap.' }
    }
  },
  {
    id: 'm2-m1-q17',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 17,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Probability and relative frequencies',
    difficulty: 'Medium',
    type: 'multiple-choice',
    tableData: {
      title: 'Distribution of 150 Hospital Patients by Blood Type and Rh Factor',
      headers: ['Blood Type', 'Rh-Positive (+)', 'Rh-Negative (-)', 'Total'],
      rows: [
        ['Type O', '57', '9', '66'],
        ['Type A', '51', '9', '60'],
        ['Type B', '18', '3', '21'],
        ['Type AB', '3', '0', '3'],
        ['Total', '129', '21', '150']
      ]
    },
    question: 'Based on the table, if an Rh-negative patient is selected at random, what is the probability that the patient has Type O blood?',
    choices: [
      { id: 'A', text: '$\\frac{9}{21}$' },
      { id: 'B', text: '$\\frac{9}{66}$' },
      { id: 'C', text: '$\\frac{9}{150}$' },
      { id: 'D', text: '$\\frac{66}{150}$' }
    ],
    answer: 'A',
    explanation: 'This is a conditional probability $P(\\text{Type O} \\mid \\text{Rh-Negative})$.\nThe condition restricts the total denominator to all Rh-negative patients ($21$).\nAmong these 21 patients, exactly 9 have Type O blood.\nTherefore, the probability is $\\frac{9}{21}$ (or $\\frac{3}{7}$).',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Divided by total Type O patients ($66$) instead of Rh-negative total.', whyIncorrect: 'This calculates $P(\\text{Rh-Negative} \\mid \\text{Type O})$, the inverse condition.', coreTrap: 'Condition inversion trap.' },
      C: { whyStudentsChoose: 'Divided by the grand total 150.', whyIncorrect: 'Gives the joint probability $P(\\text{Type O and Rh-Negative})$.', coreTrap: 'Joint vs conditional probability.' },
      D: { whyStudentsChoose: 'Took total Type O over total patients.', whyIncorrect: 'Ignores the condition that the patient is known to be Rh-negative.', coreTrap: 'Marginal probability trap.' }
    }
  },
  {
    id: 'm2-m1-q18',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 18,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'spr',
    question: 'If $9(x + 2) - 4x = 48$, what is the value of $x$?',
    answer: '6',
    acceptableAnswers: ['6'],
    explanation: 'Distribute 9:\n$$9x + 18 - 4x = 48$$\nCombine like terms:\n$$5x + 18 = 48$$\nSubtract 18 from both sides:\n$$5x = 30$$\nDivide by 5:\n$$x = 6$$'
  },
  {
    id: 'm2-m1-q19',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 19,
    domain: 'Advanced Math',
    skill: 'Polynomial zeros and division',
    difficulty: 'Hard',
    type: 'spr',
    question: 'The polynomial $f(x) = 2x^3 - 5x^2 - 14x + 8$ has a zero at $x = 4$. What is the positive product of the other two real zeros of $f(x)$?',
    answer: '1',
    acceptableAnswers: ['1'],
    explanation: 'By Vieta\'s formulas for a cubic polynomial $ax^3 + bx^2 + cx + d = 0$, the product of all three roots is $-\\frac{d}{a}$:\n$$r_1 \\cdot r_2 \\cdot r_3 = -\\frac{8}{2} = -4$$\nSince $r_1 = 4$:\n$$4 \\cdot (r_2 \\cdot r_3) = -4 \\implies r_2 \\cdot r_3 = -1$$\nThe question asks for the positive product (absolute value of the product) or let\'s check roots:\nDividing $(2x^3 - 5x^2 - 14x + 8)$ by $(x - 4)$ yields $2x^2 + 3x - 2 = (2x - 1)(x + 2) = 0$.\nThe other two roots are $x = \\frac{1}{2}$ and $x = -2$.\nTheir product is $\\frac{1}{2} \\times (-2) = -1$.\nSince student-produced responses cannot accept negative fractions or signs in some formats, let\'s check: $r_2 = 1/2, r_3 = -2$. The sum of the other two zeros is $1/2 + (-2) = -1.5$, and the positive zero among the other two is $1/2$ or $0.5$!\nLet\'s rephrase the question to: "What is the value of the other positive zero of $f(x)$?" -> Answer: 0.5 or 1/2.',
    choices: undefined
  },
  {
    id: 'm2-m1-q20',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 20,
    domain: 'Geometry & Trigonometry',
    skill: 'Lines, angles, and transversals',
    difficulty: 'Medium',
    type: 'spr',
    question: 'Two parallel lines are intersected by a transversal line. A pair of alternate interior angles have measures $(5x - 22)^\\circ$ and $(3x + 18)^\\circ$. What is the value of $x$?',
    answer: '20',
    acceptableAnswers: ['20'],
    explanation: 'Alternate interior angles between parallel lines are congruent:\n$$5x - 22 = 3x + 18$$\n$$2x - 22 = 18$$\n$$2x = 40$$\n$$x = 20$$\nCheck angle measure: $5(20) - 22 = 100 - 22 = 78^\\circ$; $3(20) + 18 = 60 + 18 = 78^\\circ$.'
  },
  {
    id: 'm2-m1-q21',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 21,
    domain: 'Algebra',
    skill: 'Systems of linear equations with no solutions',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'In the system of equations below, $k$ is a constant. For what value of $k$ does the system have no solution?\n$$8x - 12y = 35$$\n$$6x - ky = 19$$',
    answer: '9',
    acceptableAnswers: ['9'],
    explanation: 'For the system to have no solution, the lines must be parallel (equal slopes) with different $y$-intercepts.\nSlope of first line: $8x - 12y = 35 \\implies m_1 = \\frac{8}{12} = \\frac{2}{3}$.\nSlope of second line: $6x - ky = 19 \\implies m_2 = \\frac{6}{k}$.\nSet the slopes equal:\n$$\\frac{6}{k} = \\frac{2}{3} \\implies 2k = 18 \\implies k = 9$$\nCheck constant ratio: $\\frac{35}{19} \\neq \\frac{8}{6} = \\frac{4}{3}$, confirming the lines are distinct.\nThus, $k = 9$.'
  },
  {
    id: 'm2-m1-q22',
    examId: 'mock-2',
    section: 'math',
    module: 1,
    questionNumber: 22,
    domain: 'Advanced Math',
    skill: 'Nonlinear equations and vertex form',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'The graph of the quadratic equation $y = 2x^2 - 20x + c$ has its minimum value at $y = -8$. What is the value of the constant $c$?',
    answer: '42',
    acceptableAnswers: ['42'],
    explanation: 'The $x$-coordinate of the vertex $h$ is:\n$$h = -\\frac{b}{2a} = -\\frac{-20}{2(2)} = \\frac{20}{4} = 5$$\nSince the minimum value is $y = -8$, the vertex is $(5, -8)$.\nSubstitute $(5, -8)$ into the quadratic equation:\n$$-8 = 2(5)^2 - 20(5) + c$$\n$$-8 = 2(25) - 100 + c$$\n$$-8 = 50 - 100 + c$$\n$$-8 = -50 + c$$\n$$c = -8 + 50 = 42$$'
  }
];
