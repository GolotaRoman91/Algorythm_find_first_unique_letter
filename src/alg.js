const text = `The Tao gave birth to machine language.  Machine language gave birth
			to the assembler.
			The assembler gave birth to the compiler.  Now there are ten thousand
			languages.
			Each language has its purpose, however humble.  Each language
			expresses the Yin and Yang of software.  Each language has its place within
			the Tao.
			But do not program in COBOL if you can avoid it.
        		-- Geoffrey James, "The Tao of Programming"`;

function findFirstUniqueCharInText(text) {
    const splitedText = text.split(" ");
    const dictionary = {};

    for (const word of splitedText) {
        let currentWord = dictionary[findFirstUniqueLetter(word)];

        dictionary[findFirstUniqueLetter(word)] = (currentWord || 0) + 1;
    }

    removeNonLetterKeys(dictionary);

    return findFirstKeyWithOneValue(dictionary);
}

function findFirstUniqueLetter(word) {
    const charCount = {};

    for (const char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of word) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

function removeNonLetterKeys(obj) {
    for (const key in obj) {
        if (!key.match(/^[a-zA-Z]$/)) {
            delete obj[key];
        }
    }
}

function findFirstKeyWithOneValue(obj) {
    const key = Object.keys(obj).find((key) => obj[key] === 1);
    return key || null;
}

console.log(findFirstUniqueCharInText(text));
