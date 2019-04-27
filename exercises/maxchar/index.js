// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let result, mapChar = {}, max = 0
    for (let i = 0; i < str.length; i++) {
        if (mapChar[str.charAt(i)]) {
            mapChar[str.charAt(i)]++
        } else {
            mapChar[str.charAt(i)] = 1
        }
    }
 
    for (let char in mapChar) {
        if (mapChar[char] > max) {
            max = mapChar[char]
            result = char
        }
    }

    return result
}

module.exports = maxChar;
