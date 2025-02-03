const express = require('express');
require('dotenv').config();
const { isPerfect, isPrime, isArmstrong, isFloat } = require('./helpers/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/classify-number', async (req, res) => {
    try {
        const number = req.query.number;

        // if (Object.keys(query).length !== 1) {
        //     return res.status(400).json({ message: 'Please provide only one parameter (positive integer) for you query', error: true });
        // }
        // if (query.number === undefined) {
        //     return res.status(400).json({ message: 'Please provide a number as a query for your api', error: true });
        // }
        // if (query.number < 0) {
        //     return res.status(400).json({ message: 'Please provide a positive number', error: true });
        // }

        // const number = query.number;

        if (typeof number !== 'number' && isNaN(number)) {
            return res.status(400).json({ number: null, error: true });
        }
        if (isFloat(number)) {
            return res.status(400).json({ number: null, error: true });
        }
        const is_prime = isPrime(number);
        const is_perfect = isPerfect(number);
        const properties = [];

        if (isArmstrong(number)) properties.push('armstrong');
        if (number % 2 !== 0) properties.push('odd');
        if (number % 2 === 0) properties.push('even');

        const digit_sum = Math.abs(number).toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);

        const response = await fetch(`http://numbersapi.com/${number}/math`);
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        const fun_fact = await response.text();

        res.status(200).json({ number, is_prime, is_perfect, properties, digit_sum, fun_fact });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});
console.log(typeof 5.3);
// console.log(isPrime(5.3));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})