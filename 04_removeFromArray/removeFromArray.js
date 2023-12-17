const removeFromArray = function(array, number) {
    const undesiredElementIndex = array.indexOf(number);
    array.splice(undesiredElementIndex, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
