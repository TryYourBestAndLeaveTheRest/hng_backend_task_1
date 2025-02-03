const isPerfect = (num) => {
    if (num <= 1) return false;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const numDigits = digits.length;

    const sum = digits.reduce((acc, digit) => {
        return acc + Math.pow(Number(digit), numDigits);
    }, 0);

    return sum === num;
}

const isFloat = (value) => typeof value === 'number' && !Number.isInteger(value);

module.exports = { isPerfect, isPrime, isArmstrong, isFloat };