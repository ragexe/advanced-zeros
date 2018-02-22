module.exports = function getZerosCount(number, base) {
    let multipleSet = {};
    let result = {};

    const PRIMES = [
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
        47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109,
        113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181,
        191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];

    while (base > 1) {
        for (let prime of PRIMES) {
            if (base % prime === 0) {
                multipleSet[prime] = multipleSet[prime] || 0;
                multipleSet[prime]++;
                base /= prime;
                break;
            }
        }
    }


    for (let prime in multipleSet){
        result[prime] = Math.floor(getPrimeMultiplierCount(number, prime) / multipleSet[prime])
    }

    function getPrimeMultiplierCount(number, prime) {

        let result = 0;
        let power = 1;
        let poweredMultiplier = prime ** power;

        while (number >= poweredMultiplier){
            number = number - number % poweredMultiplier;
            result += number / poweredMultiplier;
            poweredMultiplier = prime ** ++power;
        }

        return result
    }

    return Object.values(result).sort((a, b) => a - b)[0];

};