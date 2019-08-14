// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function getMaxBinaryGap (N) {
    // write your code in JavaScript

    let maxGaps = 0;
    let actualGaps = 0;
    
    const binary = N.toString(2);
    
    for (let x = 0; x < binary.length; x++) {
        
        if (binary.charAt(x) === '0') {
            actualGaps += 1;
        } else {
            if (maxGaps < actualGaps) {
                maxGaps = actualGaps;
            }
            actualGaps = 0;
        }
        
    }
    return maxGaps;
}

module.exports = getMaxBinaryGap;
