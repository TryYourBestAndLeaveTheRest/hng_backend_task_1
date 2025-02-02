const express = require('express');
require('dotenv').config();
const { isPerfect, isPrime, isArmstrong } = require('./helpers/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/api/classify-number', (req, res) => {
    try {

        const query = req.query;
        if (Object.keys(query).length !== 1) {
            return res.status(400).json({ message: 'Please provide only one parameter (positive integer) for you query' });
        }
        if (query.number === undefined) {
            return res.status(400).json({ message: 'Please provide a number as a query for your api' });
        }
        if (query.number < 0) {
            return res.status(400).json({ message: 'Please provide a positive number' });
        }
        const number = query.number;
        const is_prime = isPrime(number);
        const is_perfect = isPerfect(number);
        const properties = [];
        if (isArmstrong(number)) {
            properties.push('armstrong');
        }
        if (number % 2 !== 0) {
            properties.push('odd');
        }
        if (number % 2 === 0) {
            properties.push('even');
        }
        const digit_sum = num.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);

        res.status(200).json({ number, is_prime, is_perfect, properties, digit_sum });
    } catch (error) {
        res.status(`500`).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
const obj = { fi: 'sh', se: 'co', th: 'de' };


//api/classify-number?number=371

/*

{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,  // sum of its digits
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
*/