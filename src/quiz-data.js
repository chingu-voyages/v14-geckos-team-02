const QUIZ_DATA = [
  {
    id: 0,
    name: 'Binary Search Trees',
    questions: [
      {
        id: '0',
        question: 'The first Binary Search Trees question?',
        multipleChoices: [
          'Constant: O(1)',
          'Logarithmic: O(logn)',
          'Quadratic: O(n^2)',
          'Linear: O(n)'
        ],
        answer: 'Linear: O(n)'
      },
      {
        id: '1',
        question: 'Suppose we had a function that iterated through a collection of data once to find the minimum value, and then again in a separate iteration to find the maximum value. How would we write the Big O time complexity?',
        multipleChoices: [
          'O(2n)',
          'O(n^2)',
          'O(n)',
          'O(n + n)'
        ],
        answer: 'O(n)'
      },
      {
        id: '2',
        question: 'An identical algorithm written in two different programming languages will have the same Big O runtime complexity.',
        multipleChoices: [
          'True',
          'False'
        ],
        answer: 'True'
      },
      {
        id: '3',
        question: 'Why are constant factors (such as 2N) and lower order terms (N^2 + N becomes N^2) ignored when writing Big O notation?',
        multipleChoices: [
          'As the input to the function grows toward infinity, lower order terms and constant factors cancel each other out',
          'We cannot be sure of the significance of lower order terms as they relate to the constant factors',
          'As the input to the function grows toward infinity, lower order terms and constant factors become insignificant compared to the term with the higher order of magnitude',
          'We do incorporate lower order terms and constant factors into Big O!'
        ],
        answer: 'As the input to the function grows toward infinity, lower order terms and constant factors become insignificant compared to the term with the higher order of magnitude'
      },
      {
        id: '4',
        question: 'Suppose we had a function that took in a list of data as an input. For each element in the list, the function compared it to every other element in the collection. What would the Big O time complexity be for this function?',
        multipleChoices: [
          'Constant: O(1)',
          'Quadratic: O(n^2)',
          'Exponential: O(2^n)',
          'Linear: O(n)'
        ],
        answer: 'Quadratic: O(n^2)'
      },
      {
        id: '5',
        question: 'With Big O notation, we evaluate a function’s runtime efficiency based on the ____?',
        multipleChoices: [
          'Number of conditional statements.',
          'Number of variables created within the function',
          'Size of the inputs',
          'Helper function(s)'
        ],
        answer: 'Size of the inputs'
      },
      {
        id: '6',
        question: 'Why don’t we use time-elapsed (5 minutes, for example) as a measurement for an algorithm’s runtime?',
        multipleChoices: [
          'Different units of measurement makes this approach not feasible',
          'This approach would not be relevant in quantum-computing',
          'Time is relative',
          'This approach depends on the speed of the processor, what else the computer is running, different programming language etc.'
        ],
        answer: 'This approach depends on the speed of the processor, what else the computer is running, different programming language etc.'
      },
      {
        id: '7',
        question: 'A function which only performed the operation 6 + 9 would be which Big O time complexity?',
        multipleChoices: [
          'Factorial: O(n!)',
          'Logarithmic: O(logn)',
          'Constant: O(1)',
          'Linear: O(n)'
        ],
        answer: 'Constant: O(1)'
      },
      {
        id: '8',
        question: 'What is the least efficient runtime complexity?',
        multipleChoices: [
          'O(logn)',
          'O(n!)',
          'O(1)',
          'O(n)'
        ],
        answer: 'O(n!)'
      },
      {
        id: '9',
        question: 'Search algorithms often result in which Big O complexity?',
        multipleChoices: [
          'Constant: O(1)',
          'Logarithmic: O(logn)',
          'Linear: O(n)',
          'Quadratic: O(n^2)'
        ],
        answer: 'Logarithmic: O(logn)'
      }
    ]
  },
  {
    id: 1,
    name: 'Big O Notation',
    questions: [
      {
        id: '0',
        question: 'Suppose we had a function that performed one step for each element in a collection of input data. What would the Big O time complexity be for this function?',
        multipleChoices: [
          'Constant: O(1)',
          'Logarithmic: O(logn)',
          'Quadratic: O(n^2)',
          'Linear: O(n)'
        ],
        answer: 'Linear: O(n)'
      },
      {
        id: '1',
        question: 'Suppose we had a function that iterated through a collection of data once to find the minimum value, and then again in a separate iteration to find the maximum value. How would we write the Big O time complexity?',
        multipleChoices: [
          'O(2n)',
          'O(n^2)',
          'O(n)',
          'O(n + n)'
        ],
        answer: 'O(n)'
      },
      {
        id: '2',
        question: 'An identical algorithm written in two different programming languages will have the same Big O runtime complexity.',
        multipleChoices: [
          'True',
          'False'
        ],
        answer: 'True'
      },
      {
        id: '3',
        question: 'Why are constant factors (such as 2N) and lower order terms (N^2 + N becomes N^2) ignored when writing Big O notation?',
        multipleChoices: [
          'As the input to the function grows toward infinity, lower order terms and constant factors cancel each other out',
          'We cannot be sure of the significance of lower order terms as they relate to the constant factors',
          'As the input to the function grows toward infinity, lower order terms and constant factors become insignificant compared to the term with the higher order of magnitude',
          'We do incorporate lower order terms and constant factors into Big O!'
        ],
        answer: 'As the input to the function grows toward infinity, lower order terms and constant factors become insignificant compared to the term with the higher order of magnitude'
      },
      {
        id: '4',
        question: 'Suppose we had a function that took in a list of data as an input. For each element in the list, the function compared it to every other element in the collection. What would the Big O time complexity be for this function?',
        multipleChoices: [
          'Constant: O(1)',
          'Quadratic: O(n^2)',
          'Exponential: O(2^n)',
          'Linear: O(n)'
        ],
        answer: 'Quadratic: O(n^2)'
      },
      {
        id: '5',
        question: 'With Big O notation, we evaluate a function’s runtime efficiency based on the ____?',
        multipleChoices: [
          'Number of conditional statements.',
          'Number of variables created within the function',
          'Size of the inputs',
          'Helper function(s)'
        ],
        answer: 'Size of the inputs'
      },
      {
        id: '6',
        question: 'Why don’t we use time-elapsed (5 minutes, for example) as a measurement for an algorithm’s runtime?',
        multipleChoices: [
          'Different units of measurement makes this approach not feasible',
          'This approach would not be relevant in quantum-computing',
          'Time is relative',
          'This approach depends on the speed of the processor, what else the computer is running, different programming language etc.'
        ],
        answer: 'This approach depends on the speed of the processor, what else the computer is running, different programming language etc.'
      },
      {
        id: '7',
        question: 'A function which only performed the operation 6 + 9 would be which Big O time complexity?',
        multipleChoices: [
          'Factorial: O(n!)',
          'Logarithmic: O(logn)',
          'Constant: O(1)',
          'Linear: O(n)'
        ],
        answer: 'Constant: O(1)'
      },
      {
        id: '8',
        question: 'What is the least efficient runtime complexity?',
        multipleChoices: [
          'O(logn)',
          'O(n!)',
          'O(1)',
          'O(n)'
        ],
        answer: 'O(n!)'
      },
      {
        id: '9',
        question: 'Search algorithms often result in which Big O complexity?',
        multipleChoices: [
          'Constant: O(1)',
          'Logarithmic: O(logn)',
          'Linear: O(n)',
          'Quadratic: O(n^2)'
        ],
        answer: 'Logarithmic: O(logn)'
      }
    ]
  }
];

export default QUIZ_DATA;