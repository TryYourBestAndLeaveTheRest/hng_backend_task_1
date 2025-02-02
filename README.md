# Number Classification API

This is a simple Express.js API that classifies a given number and provides interesting facts about it.

## Features

- Classifies a number as prime, perfect, Armstrong, odd, or even.
- Calculates the digit sum of the number.
- Fetches a fun fact about the number from the Numbers API.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/TryYourBestAndLeaveTheRest/hng_backend_task_1.git
    ```
2. Navigate to the project directory:
    ```sh
    cd hng_backend_task_1
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the root directory and add your environment variables:
    ```env
    PORT=3000
    ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    ```
2. Make a GET request to the `/api/classify-number` endpoint with a query parameter `number`:
    ```sh
    curl "http://localhost:3000/api/classify-number?number=28"
    ```

## Example Response

```json
{
    "number": 28,
    "is_prime": false,
    "is_perfect": true,
    "properties": ["even"],
    "digit_sum": 10,
    "fun_fact": "28 is the atomic mass of silicon."
}
```

## Helper Functions

The following helper functions are used to classify the number:

- `isPrime(number)`: Checks if the number is prime.
- `isPerfect(number)`: Checks if the number is perfect.
- `isArmstrong(number)`: Checks if the number is an Armstrong number.