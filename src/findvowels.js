const findVowels = (str) => {
    if (!(typeof str === "string") && !(str instanceof String))
        return "Passed argument is not a string";
    if (!str.length)
        return "String is empty";
    let numberOfVowels = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter))
            numberOfVowels++;
    }
    return (numberOfVowels) ? numberOfVowels : "String does not contain vowels";
};

module.exports = findVowels;
