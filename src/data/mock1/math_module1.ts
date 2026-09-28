import { Question } from '../../types/exam';

export const mock1_math_module1: Question[] = [
  {
    id: 'm1-m1-q1',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 1,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'If $4x + 12 = 36$, what is the value of $x - 2$?',
    choices: [
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '10' }
    ],
    answer: 'A',
    explanation: 'First, solve for $x$:\n$$4x + 12 = 36$$\n$$4x = 24$$\n$$x = 6$$\nThe question asks for the value of $x - 2$:\n$$6 - 2 = 4$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Solved for $x$ directly.', whyIncorrect: '$x = 6$, but the question specifically asks for $x - 2$.', coreTrap: 'Solving for the wrong quantity.' },
      C: { whyStudentsChoose: 'Added 2 instead of subtracting 2 from 6.', whyIncorrect: '$6 + 2 = 8$, but $x - 2 = 4$.', coreTrap: 'Sign error in final step.' },
      D: { whyStudentsChoose: 'Subtracted 12 incorrectly as 36 - 12 = 48.', whyIncorrect: 'Arithmetic error in linear isolation.', coreTrap: 'Basic operation mistake.' }
    }
  },
  {
    id: 'm1-m1-q2',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 2,
    domain: 'Algebra',
    skill: 'Linear functions',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'A landscaping company charges an initial equipment fee of \\$75 plus \\$45 for each hour of lawn maintenance. Which equation represents the total cost $C(h)$, in dollars, for $h$ hours of service?',
    choices: [
      { id: 'A', text: '$C(h) = 45h + 75$' },
      { id: 'B', text: '$C(h) = 75h + 45$' },
      { id: 'C', text: '$C(h) = 120h$' },
      { id: 'D', text: '$C(h) = 45(h + 75)$' }
    ],
    answer: 'A',
    explanation: 'The initial fixed fee is the $y$-intercept (\\$75) and the hourly rate is the slope (\\$45/hour). Thus, the linear cost function is $C(h) = 45h + 75$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Swapped fixed fee and hourly rate.', whyIncorrect: 'This would mean \\$75 per hour plus a \\$45 flat fee.', coreTrap: 'Slope and intercept reversal.' },
      C: { whyStudentsChoose: 'Added 75 and 45 together.', whyIncorrect: 'Assumes both amounts scale with each hour.', coreTrap: 'Combining distinct terms.' },
      D: { whyStudentsChoose: 'Multiplied the hourly rate by the sum.', whyIncorrect: 'Multiplies the fixed fee by 45, which does not model the scenario.', coreTrap: 'Parentheses distribution error.' }
    }
  },
  {
    id: 'm1-m1-q3',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 3,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Percentages and Ratios',
    difficulty: 'Easy',
    type: 'multiple-choice',
    question: 'A laboratory centrifuge originally priced at \\$1,200 was discounted by 15\\% during an end-of-year sale. What was the sale price of the centrifuge?',
    choices: [
      { id: 'A', text: '\\$1,020' },
      { id: 'B', text: '\\$1,050' },
      { id: 'C', text: '\\$1,080' },
      { id: 'D', text: '\\$1,185' }
    ],
    answer: 'A',
    explanation: 'The discount amount is $15\\% \\times 1,200 = 0.15 \\times 1,200 = 180$.\nThe sale price is $1,200 - 180 = \\$1,020$.\nAlternatively, compute $1,200 \\times (1 - 0.15) = 1,200 \\times 0.85 = \\$1,020$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Subtracted \\$150 instead of 15% of 1200.', whyIncorrect: '15% of 1200 is 180, not 150.', coreTrap: 'Mental arithmetic estimation error.' },
      C: { whyStudentsChoose: 'Subtracted 10% (120) instead of 15%.', whyIncorrect: 'Only applied a 10% discount.', coreTrap: 'Partial percentage calculation.' },
      D: { whyStudentsChoose: 'Subtracted 15 dollars directly from 1200.', whyIncorrect: 'Treated 15% as a flat \\$15 deduction.', coreTrap: 'Percentage vs absolute amount confusion.' }
    }
  },
  {
    id: 'm1-m1-q4',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 4,
    domain: 'Algebra',
    skill: 'Systems of linear equations in two variables',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Consider the system of equations:\n$$3x - 2y = 14$$\n$$5x + 2y = 18$$\nWhat is the value of $x + y$?',
    choices: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '7' }
    ],
    answer: 'A',
    explanation: 'Add the two equations to eliminate $y$:\n$$(3x - 2y) + (5x + 2y) = 14 + 18$$\n$$8x = 32 \\implies x = 4$$\nSubstitute $x = 4$ into the first equation:\n$$3(4) - 2y = 14 \\implies 12 - 2y = 14 \\implies -2y = 2 \\implies y = -1$$\nNow calculate $x + y$:\n$$x + y = 4 + (-1) = 3$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found the value of $x$ and stopped.', whyIncorrect: '$x = 4$, but the question asks for $x + y$.', coreTrap: 'Incomplete resolution.' },
      C: { whyStudentsChoose: 'Subtracted negative 1 instead of adding: $4 - (-1) = 5$.', whyIncorrect: '$x + y = 4 + (-1) = 3$.', coreTrap: 'Sign error with negative value.' },
      D: { whyStudentsChoose: 'Summed $x + |y| + \\dots$ or miscalculated $y = +1$.', whyIncorrect: 'If $y$ were $+1$, $3(4)-2(1)=10 \\neq 14$.', coreTrap: 'Algebraic substitution mistake.' }
    }
  },
  {
    id: 'm1-m1-q5',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 5,
    domain: 'Advanced Math',
    skill: 'Equivalent expressions',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Which of the following is equivalent to the expression $\\frac{6x^3 - 15x^2 + 9x}{3x}$ for all $x \\neq 0$?',
    choices: [
      { id: 'A', text: '$2x^2 - 5x + 3$' },
      { id: 'B', text: '$2x^2 - 15x + 9$' },
      { id: 'C', text: '$2x^3 - 5x^2 + 3x$' },
      { id: 'D', text: '$6x^2 - 5x + 3$' }
    ],
    answer: 'A',
    explanation: 'Divide each term in the numerator by $3x$:\n$$\\frac{6x^3}{3x} - \\frac{15x^2}{3x} + \\frac{9x}{3x} = 2x^2 - 5x + 3$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Only divided the first term by $3x$.', whyIncorrect: 'Each term in the polynomial numerator must be divided by $3x$.', coreTrap: 'Partial division error.' },
      C: { whyStudentsChoose: 'Divided coefficients by 3 but forgot to reduce the exponent of $x$.', whyIncorrect: 'Exponent law: $x^3 / x = x^2$, not $x^3$.', coreTrap: 'Exponent rule neglect.' },
      D: { whyStudentsChoose: 'Forgot to divide 6 by 3.', whyIncorrect: '$6 / 3 = 2$, not 6.', coreTrap: 'Coefficient oversight.' }
    }
  },
  {
    id: 'm1-m1-q6',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 6,
    domain: 'Advanced Math',
    skill: 'Nonlinear functions and quadratics',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'The quadratic function $f$ is defined by $f(x) = -(x - 4)^2 + 25$. What is the maximum value of $f(x)$?',
    choices: [
      { id: 'A', text: '4' },
      { id: 'B', text: '9' },
      { id: 'C', text: '21' },
      { id: 'D', text: '25' }
    ],
    answer: 'D',
    explanation: 'The function is in vertex form $f(x) = a(x - h)^2 + k$, where $(h, k) = (4, 25)$. Since $a = -1 < 0$, the parabola opens downward and achieves its maximum value of $k = 25$ at the vertex $x = 4$.',
    distractorExplanations: {
      A: { whyStudentsChoose: 'Gave the $x$-coordinate where the maximum occurs.', whyIncorrect: 'The maximum value of the function is the $y$-value (25), not the $x$-value (4).', coreTrap: '$x$ vs $y$ coordinate confusion.' },
      B: { whyStudentsChoose: 'Evaluated $f(0) = -(0-4)^2 + 25 = -16 + 25 = 9$.', whyIncorrect: '9 is the $y$-intercept, not the maximum value of the parabola.', coreTrap: 'Y-intercept vs vertex trap.' },
      C: { whyStudentsChoose: 'Computed $25 - 4 = 21$.', whyIncorrect: 'Subtracting coordinates has no mathematical meaning here.', coreTrap: 'Arbitrary operation.' }
    }
  },
  {
    id: 'm1-m1-q7',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 7,
    domain: 'Geometry & Trigonometry',
    skill: 'Right triangles and trigonometry',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'In right triangle $ABC$, the measure of angle $C$ is $90^\\circ$. If $\\cos A = \\frac{8}{17}$, what is the value of $\\sin B$?',
    choices: [
      { id: 'A', text: '$\\frac{8}{17}$' },
      { id: 'B', text: '$\\frac{15}{17}$' },
      { id: 'C', text: '$\\frac{8}{15}$' },
      { id: 'D', text: '$\\frac{17}{8}$' }
    ],
    answer: 'A',
    explanation: 'In any right triangle where angle $C = 90^\\circ$, angles $A$ and $B$ are complementary: $A + B = 90^\\circ$.\nBy the complementary angle trigonometric identity, $\\sin(B) = \\sin(90^\\circ - A) = \\cos(A)$.\nTherefore, $\\sin B = \\cos A = \\frac{8}{17}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Found $\\sin A = \\frac{15}{17}$ using the Pythagorean identity $\\sqrt{17^2 - 8^2} = 15$.', whyIncorrect: '$\\sin A = \\frac{15}{17}$, but the question asks for $\\sin B$.', coreTrap: 'Angle reference switch error.' },
      C: { whyStudentsChoose: 'Calculated $\\tan A = \\frac{15}{8}$ or $\\tan B = \\frac{8}{15}$.', whyIncorrect: 'Gives the tangent rather than the sine of angle $B$.', coreTrap: 'Trig function confusion.' },
      D: { whyStudentsChoose: 'Inverted the cosine ratio to find secant.', whyIncorrect: 'Gives $\\sec A$, not $\\sin B$.', coreTrap: 'Reciprocal trap.' }
    }
  },
  {
    id: 'm1-m1-q8',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 8,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Two-variable data and scatterplots',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A marine biologist measured the shell diameter $d$, in centimeters, and body mass $m$, in grams, for a sample of giant clams. The line of best fit for the data is modeled by the equation $\\hat{m} = 4.2d - 18.5$. For a clam with a shell diameter of 12 cm, the actual recorded mass was 35.8 grams. What is the residual, in grams, for this data point? (Residual = Actual $-$ Predicted)',
    choices: [
      { id: 'A', text: '3.9' },
      { id: 'B', text: '-3.9' },
      { id: 'C', text: '31.9' },
      { id: 'D', text: '67.7' }
    ],
    answer: 'A',
    explanation: 'First, find the predicted mass $\\hat{m}$ for $d = 12$:\n$$\\hat{m} = 4.2(12) - 18.5 = 50.4 - 18.5 = 31.9\\text{ grams}$$\nThe residual is:\n$$\\text{Residual} = \\text{Actual} - \\text{Predicted} = 35.8 - 31.9 = +3.9\\text{ grams}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Subtracted Actual from Predicted (Predicted - Actual).', whyIncorrect: 'Residual is always Actual minus Predicted: $35.8 - 31.9 = +3.9$.', coreTrap: 'Inverted residual sign.' },
      C: { whyStudentsChoose: 'Gave the predicted value $\\hat{m}$ and forgot to find the residual.', whyIncorrect: '31.9 is the model\'s prediction, not the residual.', coreTrap: 'Stopping before final calculation.' },
      D: { whyStudentsChoose: 'Added Actual and Predicted together ($35.8 + 31.9$).', whyIncorrect: 'Residual is difference, not sum.', coreTrap: 'Operation error.' }
    }
  },
  {
    id: 'm1-m1-q9',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 9,
    domain: 'Algebra',
    skill: 'Linear inequalities in one or two variables',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Which of the following points $(x, y)$ lies in the solution set of the system of inequalities:\n$$y > 2x - 3$$\n$$y \\le -x + 5$$',
    choices: [
      { id: 'A', text: '$(1, 2)$' },
      { id: 'B', text: '$(0, -4)$' },
      { id: 'C', text: '$(3, 4)$' },
      { id: 'D', text: '$(4, 2)$' }
    ],
    answer: 'A',
    explanation: 'Test point $(1, 2)$:\n1) $2 > 2(1) - 3 \\implies 2 > -1$ (True)\n2) $2 \\le -(1) + 5 \\implies 2 \\le 4$ (True)\nBoth inequalities are satisfied, so $(1, 2)$ is in the solution set.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Tested only the second inequality: $-4 \\le -(0)+5$ (True).', whyIncorrect: 'Fails first inequality: $-4 > 2(0)-3 \\implies -4 > -3$ is False.', coreTrap: 'Single-condition verification.' },
      C: { whyStudentsChoose: 'Tested first: $4 > 2(3)-3 \\implies 4 > 3$ (True).', whyIncorrect: 'Fails second inequality: $4 \\le -(3)+5 \\implies 4 \\le 2$ is False.', coreTrap: 'Partial validity trap.' },
      D: { whyStudentsChoose: 'Tested $(4,2)$ carelessly.', whyIncorrect: '$2 \\le -4 + 5 = 1$ is False ($2 \\le 1$ is False).', coreTrap: 'Arithmetic evaluation error.' }
    }
  },
  {
    id: 'm1-m1-q10',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 10,
    domain: 'Geometry & Trigonometry',
    skill: 'Circles in the coordinate plane',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'The equation of a circle in the $xy$-plane is given by $x^2 + y^2 - 8x + 6y = 56$. What is the radius of the circle?',
    choices: [
      { id: 'A', text: '9' },
      { id: 'B', text: '11' },
      { id: 'C', text: '56' },
      { id: 'D', text: '81' }
    ],
    answer: 'A',
    explanation: 'Complete the square for $x$ and $y$:\n$$(x^2 - 8x + 16) + (y^2 + 6y + 9) = 56 + 16 + 9$$\n$$(x - 4)^2 + (y + 3)^2 = 81$$\nThe standard form of a circle is $(x - h)^2 + (y - k)^2 = r^2$.\nThus, $r^2 = 81 \\implies r = \\sqrt{81} = 9$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Added $56 + 64 + 36 = 156$ before dividing.', whyIncorrect: 'Squaring half the coefficients gives 16 and 9, not 64 and 36.', coreTrap: 'Did not divide coefficient by 2 before squaring.' },
      C: { whyStudentsChoose: 'Took the constant from the original equation.', whyIncorrect: 'Must complete the square and add $(b/2)^2$ terms to both sides.', coreTrap: 'Uncompleted square equation trap.' },
      D: { whyStudentsChoose: 'Found $r^2 = 81$ and forgot to take the square root.', whyIncorrect: '81 is $r^2$, so the radius $r = 9$.', coreTrap: '$r^2$ vs $r$ confusion.' }
    }
  },
  {
    id: 'm1-m1-q11',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 11,
    domain: 'Advanced Math',
    skill: 'Radical and rational exponents',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'If $\\sqrt[3]{x^4} \\cdot x^{\\frac{1}{2}} = x^k$ for all positive values of $x$, what is the value of $k$?',
    choices: [
      { id: 'A', text: '$\\frac{11}{6}$' },
      { id: 'B', text: '$\\frac{7}{6}$' },
      { id: 'C', text: '$\\frac{2}{3}$' },
      { id: 'D', text: '$\\frac{5}{6}$' }
    ],
    answer: 'A',
    explanation: 'Rewrite the radical as a rational exponent:\n$$\\sqrt[3]{x^4} = x^{\\frac{4}{3}}$$\nNow use the product of powers rule:\n$$x^{\\frac{4}{3}} \\cdot x^{\\frac{1}{2}} = x^{\\frac{4}{3} + \\frac{1}{2}}$$\nFind a common denominator of 6:\n$$\\frac{4}{3} + \\frac{1}{2} = \\frac{8}{6} + \\frac{3}{6} = \\frac{11}{6}$$\nThus, $k = \\frac{11}{6}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Wrote $\\sqrt[3]{x^4}$ as $x^{\\frac{3}{4}}$ and computed $\\frac{3}{4} + \\frac{1}{2} = \\frac{5}{4}$ or miscalculated fractions.', whyIncorrect: 'The index is the denominator: $\\sqrt[3]{x^4} = x^{4/3}$, not $x^{3/4}$.', coreTrap: 'Inverted rational exponent.' },
      C: { whyStudentsChoose: 'Multiplied exponents instead of adding them: $\\frac{4}{3} \\times \\frac{1}{2} = \\frac{2}{3}$.', whyIncorrect: 'Product of powers rule requires adding exponents, not multiplying.', coreTrap: 'Exponent multiplication error.' },
      D: { whyStudentsChoose: 'Subtracted exponents: $\\frac{4}{3} - \\frac{1}{2} = \\frac{5}{6}$.', whyIncorrect: 'Multiplication of terms requires adding exponents, not subtracting.', coreTrap: 'Product vs quotient exponent rule.' }
    }
  },
  {
    id: 'm1-m1-q12',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 12,
    domain: 'Advanced Math',
    skill: 'Nonlinear equations and systems',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'How many distinct real solutions does the equation $2x^2 - 7x + 8 = 0$ have?',
    choices: [
      { id: 'A', text: 'Zero' },
      { id: 'B', text: 'Exactly one' },
      { id: 'C', text: 'Exactly two' },
      { id: 'D', text: 'Infinitely many' }
    ],
    answer: 'A',
    explanation: 'Evaluate the discriminant $\\Delta = b^2 - 4ac$ for $a = 2, b = -7, c = 8$:\n$$\\Delta = (-7)^2 - 4(2)(8) = 49 - 64 = -15$$\nSince the discriminant is negative ($\\Delta < 0$), the quadratic equation has zero real solutions.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Thinks all quadratics have at least one real vertex solution.', whyIncorrect: 'A single real solution occurs only when $\\Delta = 0$.', coreTrap: 'Discriminant condition confusion.' },
      C: { whyStudentsChoose: 'Assumes degree 2 means two real solutions.', whyIncorrect: 'A negative discriminant yields two complex conjugate solutions, but zero real solutions.', coreTrap: 'Real vs complex root confusion.' },
      D: { whyStudentsChoose: 'Confuses with an identity.', whyIncorrect: 'A polynomial equation with non-zero coefficients cannot have infinite solutions.', coreTrap: 'Infinite solution misconception.' }
    }
  },
  {
    id: 'm1-m1-q13',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 13,
    domain: 'Problem Solving & Data Analysis',
    skill: 'One-variable data: distributions and measures of center/spread',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A dataset of 15 integer exam scores has a mean of 82 and a median of 84. If the lowest score in the dataset (42) is mistakenly changed to 12, how will the mean and median of the dataset be affected?',
    choices: [
      { id: 'A', text: 'The mean will decrease, and the median will remain unchanged.' },
      { id: 'B', text: 'Both the mean and the median will decrease.' },
      { id: 'C', text: 'The mean will remain unchanged, and the median will decrease.' },
      { id: 'D', text: 'Both the mean and the median will remain unchanged.' }
    ],
    answer: 'A',
    explanation: 'The mean is sensitive to extreme values: decreasing the lowest value from 42 to 12 decreases the sum of all values, so the mean decreases by $\\frac{42 - 12}{15} = \\frac{30}{15} = 2$ points.\nThe median is the 8th value in an ordered set of 15 values. Since 12 and 42 are both below the 8th value, changing the lowest value does not change the rank or identity of the middle (8th) value. Thus, the median remains unchanged.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Assumes any decrease pulls down both metrics.', whyIncorrect: 'The median is resistant to outliers at the extremes of the distribution.', coreTrap: 'Median resistance misunderstanding.' },
      C: { whyStudentsChoose: 'Inverts the properties of mean and median.', whyIncorrect: 'The mean changes when values change; the median is resistant.', coreTrap: 'Reversed metric sensitivity.' },
      D: { whyStudentsChoose: 'Thinks the overall ranking is unchanged.', whyIncorrect: 'While ranking is unchanged, the numerical sum changes, lowering the mean.', coreTrap: 'Mean calculation neglect.' }
    }
  },
  {
    id: 'm1-m1-q14',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 14,
    domain: 'Algebra',
    skill: 'Linear equations in two variables',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'Line $k$ in the $xy$-plane passes through the points $(-2, 5)$ and $(4, -7)$. Line $p$ is perpendicular to line $k$. What is the slope of line $p$?',
    choices: [
      { id: 'A', text: '$\\frac{1}{2}$' },
      { id: 'B', text: '$-\\frac{1}{2}$' },
      { id: 'C', text: '$-2$' },
      { id: 'D', text: '$2$' }
    ],
    answer: 'A',
    explanation: 'First, find the slope of line $k$ ($m_k$):\n$$m_k = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{-7 - 5}{4 - (-2)} = \\frac{-12}{6} = -2$$\nPerpendicular lines have negative reciprocal slopes:\n$$m_p = -\\frac{1}{m_k} = -\\frac{1}{-2} = \\frac{1}{2}$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Reciprocal without changing sign.', whyIncorrect: 'Negative reciprocal of $-2$ is $+\\frac{1}{2}$.', coreTrap: 'Sign change neglect.' },
      C: { whyStudentsChoose: 'Gave the parallel slope instead of perpendicular.', whyIncorrect: '$-2$ is the slope of line $k$ itself.', coreTrap: 'Parallel vs perpendicular trap.' },
      D: { whyStudentsChoose: 'Changed the sign but forgot to take the reciprocal.', whyIncorrect: 'Perpendicular requires both opposite sign and reciprocal.', coreTrap: 'Negative of slope without reciprocal.' }
    }
  },
  {
    id: 'm1-m1-q15',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 15,
    domain: 'Geometry & Trigonometry',
    skill: 'Area and volume',
    difficulty: 'Medium',
    type: 'multiple-choice',
    question: 'A solid right circular cylinder has a radius of 6 centimeters and a height of 15 centimeters. A cylindrical hole with a radius of 2 centimeters is drilled completely through the center from top to bottom. What is the remaining volume, in cubic centimeters, of the solid cylinder?',
    choices: [
      { id: 'A', text: '$480\\pi$' },
      { id: 'B', text: '$520\\pi$' },
      { id: 'C', text: '$540\\pi$' },
      { id: 'D', text: '$60\\pi$' }
    ],
    answer: 'A',
    explanation: 'Volume of the outer cylinder:\n$$V_{\\text{outer}} = \\pi r_1^2 h = \\pi (6^2)(15) = \\pi (36)(15) = 540\\pi$$\nVolume of the inner hole removed:\n$$V_{\\text{hole}} = \\pi r_2^2 h = \\pi (2^2)(15) = \\pi (4)(15) = 60\\pi$$\nRemaining solid volume:\n$$V_{\\text{remaining}} = 540\\pi - 60\\pi = 480\\pi\\text{ cm}^3$$',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Subtracted $20\\pi$ instead of $60\\pi$.', whyIncorrect: 'Forgot to square the inner radius correctly or multiply by 15.', coreTrap: 'Inner volume calculation error.' },
      C: { whyStudentsChoose: 'Calculated the full cylinder and did not subtract the hole.', whyIncorrect: 'Must subtract the drilled hole volume.', coreTrap: 'Omitted hole subtraction.' },
      D: { whyStudentsChoose: 'Gave the volume of the hole removed.', whyIncorrect: 'Question asks for remaining volume of the solid.', coreTrap: 'Complement question trap.' }
    }
  },
  {
    id: 'm1-m1-q16',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 16,
    domain: 'Advanced Math',
    skill: 'Exponential functions and equations',
    difficulty: 'Hard',
    type: 'multiple-choice',
    question: 'A bacterial culture initially contains 500 cells. The population triples every 4 hours. Which function $P(t)$ models the number of bacterial cells after $t$ hours?',
    choices: [
      { id: 'A', text: '$P(t) = 500(3)^{\\frac{t}{4}}$' },
      { id: 'B', text: '$P(t) = 500(3)^{4t}$' },
      { id: 'C', text: '$P(t) = 500(4)^{\\frac{t}{3}}$' },
      { id: 'D', text: '$P(t) = 3(500)^{\\frac{t}{4}}$' }
    ],
    answer: 'A',
    explanation: 'The general formula for exponential growth is $P(t) = P_0 \\cdot (b)^{\\frac{t}{k}}$, where $P_0 = 500$ is the initial population, $b = 3$ is the growth factor (tripling), and $k = 4$ is the time period required for one tripling cycle. Thus, $P(t) = 500(3)^{\\frac{t}{4}}$.',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Multiplied the exponent by 4 instead of dividing.', whyIncorrect: 'At $t = 4$, this would yield $500(3)^{16}$ instead of $500(3)^1 = 1500$.', coreTrap: 'Exponent scaling reversal.' },
      C: { whyStudentsChoose: 'Swapped the base 3 and period 4.', whyIncorrect: 'The base must be the growth factor (3), not the time interval.', coreTrap: 'Base and period transposition.' },
      D: { whyStudentsChoose: 'Swapped initial value and base.', whyIncorrect: 'Initial value is 500, not 3.', coreTrap: 'Initial value and growth base swap.' }
    }
  },
  {
    id: 'm1-m1-q17',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 17,
    domain: 'Problem Solving & Data Analysis',
    skill: 'Probability and two-way tables',
    difficulty: 'Medium',
    type: 'multiple-choice',
    tableData: {
      title: 'Survey of 200 University Students: Major vs Housing Status',
      headers: ['Major', 'On-Campus Dormitory', 'Off-Campus Apartment', 'Total'],
      rows: [
        ['STEM', '68', '32', '100'],
        ['Humanities', '42', '58', '100'],
        ['Total', '110', '90', '200']
      ]
    },
    question: 'Based on the table, if a student who lives in an on-campus dormitory is selected at random, what is the probability that the student is a STEM major?',
    choices: [
      { id: 'A', text: '$\\frac{68}{110}$' },
      { id: 'B', text: '$\\frac{68}{100}$' },
      { id: 'C', text: '$\\frac{68}{200}$' },
      { id: 'D', text: '$\\frac{110}{200}$' }
    ],
    answer: 'A',
    explanation: 'This is a conditional probability: $P(\\text{STEM} \\mid \\text{On-Campus})$.\nThe condition restricts the sample space to the total number of students living in on-campus dormitories ($110$).\nAmong these 110 on-campus students, 68 are STEM majors.\nTherefore, the probability is $\\frac{68}{110}$ (or $\\frac{34}{55}$).',
    distractorExplanations: {
      B: { whyStudentsChoose: 'Divided by the STEM total ($100$) instead of the On-Campus total ($110$).', whyIncorrect: 'This calculates $P(\\text{On-Campus} \\mid \\text{STEM})$, the reverse condition.', coreTrap: 'Condition inversion trap.' },
      C: { whyStudentsChoose: 'Divided by the grand total ($200$).', whyIncorrect: 'This gives the joint probability $P(\\text{STEM and On-Campus})$, ignoring the condition.', coreTrap: 'Joint vs conditional probability.' },
      D: { whyStudentsChoose: 'Took total On-Campus over grand total.', whyIncorrect: 'This is just the overall probability of living on campus.', coreTrap: 'Marginal probability trap.' }
    }
  },
  {
    id: 'm1-m1-q18',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 18,
    domain: 'Algebra',
    skill: 'Linear equations in one variable',
    difficulty: 'Easy',
    type: 'spr',
    question: 'If $7(x - 3) = 4x + 15$, what is the value of $x$?',
    answer: '12',
    acceptableAnswers: ['12'],
    explanation: 'Distribute 7:\n$$7x - 21 = 4x + 15$$\nSubtract $4x$ from both sides:\n$$3x - 21 = 15$$\nAdd 21 to both sides:\n$$3x = 36$$\nDivide by 3:\n$$x = 12$$'
  },
  {
    id: 'm1-m1-q19',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 19,
    domain: 'Advanced Math',
    skill: 'Polynomial factors and zeros',
    difficulty: 'Hard',
    type: 'spr',
    question: 'The polynomial function $p(x) = x^3 - 4x^2 - 11x + 30$ has a known factor of $(x - 2)$. What is the largest real zero of the function $p(x)$?',
    answer: '5',
    acceptableAnswers: ['5'],
    explanation: 'Perform polynomial division of $p(x)$ by $(x - 2)$:\n$$(x^3 - 4x^2 - 11x + 30) \\div (x - 2) = x^2 - 2x - 15$$\nNow factor the quadratic quotient:\n$$x^2 - 2x - 15 = (x - 5)(x + 3)$$\nThe zeros of $p(x)$ are $x = 2, x = 5,$ and $x = -3$.\nThe largest real zero is 5.'
  },
  {
    id: 'm1-m1-q20',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 20,
    domain: 'Geometry & Trigonometry',
    skill: 'Lines, angles, and triangles',
    difficulty: 'Medium',
    type: 'spr',
    question: 'In triangle $PQR$, the measure of angle $P$ is $48^\\circ$ and the measure of angle $Q$ is $74^\\circ$. The exterior angle at vertex $R$ measures $x^\\circ$. What is the value of $x$?',
    answer: '122',
    acceptableAnswers: ['122'],
    explanation: 'By the Exterior Angle Theorem, the measure of an exterior angle of a triangle is equal to the sum of the measures of its two remote interior angles:\n$$x = m\\angle P + m\\angle Q = 48^\\circ + 74^\\circ = 122^\\circ$$\nAlternatively, interior angle $R = 180 - (48 + 74) = 58^\\circ$, and the exterior angle is $180 - 58 = 122^\\circ$.'
  },
  {
    id: 'm1-m1-q21',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 21,
    domain: 'Algebra',
    skill: 'Systems of linear equations',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'For what value of the constant $c$ does the system of equations have no solutions?\n$$6x - 9y = 20$$\n$$cx + 15y = 40$$',
    answer: '-10',
    acceptableAnswers: ['-10'],
    explanation: 'A system of two linear equations has no solutions if the lines are parallel with different $y$-intercepts (equal slopes, proportional coefficients for $x$ and $y$ but not constants).\nRatio of $y$-coefficients:\n$$\\frac{15}{-9} = -\\frac{5}{3}$$\nFor the slopes to be identical, the $x$-coefficients must have the same ratio:\n$$\\frac{c}{6} = -\\frac{5}{3} \\implies c = 6 \\times \\left(-\\frac{5}{3}\\right) = -10$$\nCheck constants:\n$$\\frac{40}{20} = 2 \\neq -\\frac{5}{3}$$\nThus, when $c = -10$, the lines are parallel and distinct, producing no solutions.'
  },
  {
    id: 'm1-m1-q22',
    examId: 'mock-1',
    section: 'math',
    module: 1,
    questionNumber: 22,
    domain: 'Advanced Math',
    skill: 'Nonlinear equations and vertex form',
    difficulty: 'Elite 1500+',
    type: 'spr',
    question: 'The graph of the quadratic equation $y = 3x^2 - 24x + c$ has its vertex at the point $(h, 7)$ in the $xy$-plane. What is the value of the constant $c$?',
    answer: '55',
    acceptableAnswers: ['55'],
    explanation: 'First find the $x$-coordinate of the vertex $h$ using $h = -\\frac{b}{2a}$:\n$$h = -\\frac{-24}{2(3)} = \\frac{24}{6} = 4$$\nSince the vertex $(4, 7)$ lies on the parabola, substitute $x = 4$ and $y = 7$ into the equation:\n$$7 = 3(4)^2 - 24(4) + c$$\n$$7 = 3(16) - 96 + c$$\n$$7 = 48 - 96 + c$$\n$$7 = -48 + c$$\n$$c = 7 + 48 = 55$$'
  }
];
