const repeatString = function(string = "", num = 0) {
    let finalText = '';
    for (i = 0; i < num; i++) {
        finalText += string;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
