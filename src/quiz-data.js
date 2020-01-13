const QUIZ_DATA = [
  {
    id: 0,
    name: 'Binary Search Trees',
    questions: [
      {
        id: 0,
        question: "BST search, insert, and delete operations typically run in time O(d). What is d?",
        multipleChoices: [
          'The number of divisions at each level',  
          'The total number of entries in all the nodes of the tree',
          'The depth of the relevant node in the tree',
          'The number of entries in each node',
          'The number of nodes in the tree'
        ],
        answer: 'The depth of the relevant node in the tree',
      },
      {
        id: 1,
        question: 'A binary tree is another name for a BST.',
        multipleChoices: ['True', 'False'],
        answer: 'False',
      },
      {
        id: 2,
        question: 'RAM access time is normally measured in:',
        multipleChoices: [
          'Nanoseconds (billionths of a second)', 
          'Milliseconds (thousandths of a second)',
          'Microseconds (millionths of a second)'
        ],
        answer: 'Nanoseconds (billionths of a second)',
      },
      {
        id: 3,
        question: 'The Sequential Search algorithm is in O(n^2)O(n2).',
        multipleChoices: ['True', 'False'],
        answer: 'True',
      },
      {
        id: 4,
        question: 'Given an array-based list implementation, deleting the current element takes how long in the average case?',
        multipleChoices: ['Θ(nlogn) time', 'Θ(n) time', 'Θ(1) time', 'Θ(logn) time'],
        answer: 'Θ(n) time',
      },
      {
        id: 5,
        question: 'An advantage of linked lists over the array-based list implementation is:',
        multipleChoices: [
          'Expandability',
          'Low- access cost to arbitrary positions',
          'None of these","Θ(logn) time', 
          'Zero overhead',
          'Optimal search speed'
        ],
        answer: 'Expandability',
      },
      {
        id: 6,
        question: 'Which of these is the best upper bound for a growth rate of 5n + 3?',
        multipleChoices: [
          'O(1)',
          'O(logn)',
          'O(nlogn)', 
          'O(n)'
        ],
        answer: "O(n)",
      },
      {
        id: 7,
        question: 'Determine the proper relationship between the pair of functions: f(n)=10 and g(n)=log 10',
        multipleChoices: [
          'f(n)is in Ω(g(n))',
          'f(n)is Θ(g(n))',
          'f(n) is in O(g(n))'
        ],
        answer: "f(n)is Θ(g(n))",
      },
      {
        id: 8,
        question: 'The worst case upper bound for sorting an array is O(nlogn) since this is the cost of the best algorithm (in the worst case) that we know about.',
        multipleChoices: ['True', 'False'],
        answer: "True",
      },
      {
        id: 9,
        question: 'An inversion is:',
        multipleChoices: [
          'A swap',
          'When a record with key value greater than the current record\'s key appears before it in the array',
          'A type of sort'
        ],
        answer: 'When a record with key value greater than the current record\'s key appears before it in the array'
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