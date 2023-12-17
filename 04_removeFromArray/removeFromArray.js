const removeFromArray = function(array, ...undesiredElements) {
    for (i = 0; i < undesiredElements.length; i++) {
        const undesiredElementIndex = array.indexOf(undesiredElements[i]);
        if(undesiredElements[i] === array[undesiredElementIndex]) {
            array.splice(undesiredElementIndex, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
