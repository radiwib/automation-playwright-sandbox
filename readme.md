# 01-day_1

This project uses Playwright and Cucumber for BDD (Behavior-Driven Development) testing. Below are the instructions to set up and run the tests.

## Prerequisites

Ensure you have Node.js and npm installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory.
3. Install the dependencies:

    ```bash
    npm install
    ```

## Project Structure


- `features`: Contains the `.feature` files where Gherkin syntax is used to define test scenarios.
- `step-definitions`: Contains the implementation of the steps defined in the feature files.
- `support`: Contains additional support files like hooks and custom world definitions.

## Running Tests

### Run All Tests

To run all the tests, use:

```bash
npm test

npm run test:smoke
npm run test:login

"scripts": {
  "test": "npx playwright test",
  "test:smoke": "npx playwright test --grep @smoke",
  "test:login": "npx playwright test tests/features/login.feature"
}
