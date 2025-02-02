const express = require('express');
require('dotenv').config();
const isPrime = require('./helpers/isPrime');
const isPerfect = require('./helpers/isPerfect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/api/classify-number', (req, res) => {
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

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