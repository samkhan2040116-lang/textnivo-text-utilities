
# TextNivo Text Utilities

A collection of simple JavaScript utilities for cleaning,
formatting, and analyzing text.

This open-source project provides reusable functions for
common text-processing tasks.

## Features

- Word counting
- Character counting
- Removing extra whitespace
- Uppercase conversion
- Lowercase conversion
- Text reversal
- Removing empty lines

## Installation

Clone this repository:

```bash
git clone https://github.com/samkhan2040116-lang/textnivo-text-utilities.git
```

## Usage

Import the functions into your Node.js project:

```javascript
const {
  countWords,
  removeExtraSpaces,
  reverseText
} = require("./text-utils");

console.log(countWords("Hello JavaScript world"));
// 3

console.log(removeExtraSpaces("Hello    world"));
// Hello world

console.log(reverseText("Hello"));
// olleH
```

## Explore TextNivo

For more online text-processing utilities, visit
[TextNivo](https://textnivo.com/).

TextNivo provides online tools for everyday text-related tasks.

## Contributing

Contributions, bug reports, and suggestions are welcome.

## Character-to-Word Converter

Estimate how many words a given character count may represent using JavaScript.

The utility provides a minimum, typical, and maximum word estimate based on average word lengths.

### Example

```javascript
const { charactersToWords } = require('./characters-to-words');

console.log(charactersToWords(3000));
```

### Try the Online Calculator

For an interactive calculator with conversion examples and additional explanations, try the [TextNivo Characters to Words Converter](https://textnivo.com/characters-to-words-converter/).

**Note:** Character-to-word conversion is an estimate. Actual word counts depend on word length, spaces, and punctuation.
## Character Counter for Application Forms

Application forms, profile fields, short-answer questions, and other text inputs often have strict character limits.

The `character-counter.js` utility provides a simple way to analyze text before submission. It returns:

- Total characters
- Characters without spaces
- Word count
- Remaining characters
- Whether the specified limit has been exceeded

### Example

```javascript
const { analyzeText } = require('./character-counter');

const result = analyzeText(
  "This is my application response.",
  1000
);

console.log(result);
```


### Character Limits in Forms

A live character counter can help users understand how much space remains while completing application forms, profile descriptions, feedback fields, and other limited text inputs.

Some platforms count spaces while others may report characters with and without spaces separately.

### Try the Online Character Counter

If you need to check existing text without writing JavaScript, use the [TextNivo Character Counter](https://textnivo.com/character-counter/).

It shows character counts with and without spaces, along with additional text statistics.


## License

No license has been selected yet. Please contact the
repository owner before reusing the code outside this project.

