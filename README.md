# Playwright Project

This repository contains a set of end-to-end tests for various web applications using Playwright.

## Table of Contents
- [Playwright Project](#playwright-project)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [What You Can Do in `playwright.config.ts`](#what-you-can-do-in-playwrightconfigts)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Contributing](#contributing)

## Project Overview

This project is built with [Playwright](https://playwright.dev/), a Node.js library to automate Chromium, Firefox, and WebKit browsers with a single API. The focus of this repository is to perform automated testing across different areas including smoke tests, regression tests, API testing, and more.

## Installation

To get started with the project, you need to have Node.js installed on your machine. Follow these steps to set up the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/manukippes/Playwright.git
    cd Playwright
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

## Project Structure

Here is a brief overview of the project structure:

```plaintext
Playwright/
├── node_modules/
├── pages/
├── tests/
│   ├── api/
│   ├── kima-testing/
│   ├── mocks/
│   ├── movies-endpoint-test.spec.ts
│   ├── regression-test.spec.ts
│   ├── smoke-test.spec.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
```

- **pages/**: Contains the page objects for the applications being tested.
- **tests/**: Includes all the test scripts categorized into subdirectories like `api`, `kima-testing`, and `mocks`.
- **playwright.config.ts**: Configuration file for Playwright, defining various test projects and settings.

## What You Can Do in `playwright.config.ts`

The `playwright.config.ts` file is the central place to configure how Playwright runs your tests. Here are some of the things you can do:

- **Define Base URL**: Set a base URL for your tests so you don’t have to repeat the full path every time you navigate to a page.
    ```typescript
    baseURL: 'https://www.kimatesting.com',
    ```

- **Set Test Projects**: Configure different projects to run your tests in different environments, browsers, or configurations.
    ```typescript
    projects: [
        {
            name: 'smoke',
            testMatch: 'tests/smoke-test.spec.ts',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'regression',
            testMatch: 'tests/regression-test.spec.ts',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    ```

- **Enable Trace and Video Recording**: Capture traces and videos for your tests, useful for debugging failures.
    ```typescript
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    ```

- **Custom Test Match Patterns**: Specify which test files should be run in each project.
    ```typescript
    testMatch: ['tests/api/**/*.ts', 'tests/kima-testing/**/*.ts'],
    ```

- **Browser Launch Options**: Customize how browsers are launched, including options like headless mode or viewport size.
    ```typescript
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
    ```

- **Global Setup and Teardown**: Run global setup or teardown scripts before or after all tests.
    ```typescript
    globalSetup: require.resolve('./global-setup'),
    globalTeardown: require.resolve('./global-teardown'),
    ```

- **Environment Variables**: Inject environment-specific variables or settings.
    ```typescript
    use: {
        baseURL: process.env.BASE_URL || 'https://www.kimatesting.com',
    },
    ```

These are just a few examples of what you can configure in `playwright.config.ts`. This file allows you to tailor the testing environment to fit your exact needs, making it a powerful tool in your testing suite.

## Usage

To run the tests, you can use the following commands:

- **Run all tests**:
    ```bash
    npx playwright test
    ```
- **Run a specific test project, e.g., `smoke`**:
    ```bash
    npx playwright test --project=smoke
    ```
- **Run a specific test file**:
    ```bash
    npx playwright test tests/smoke-test.spec.ts
    ```
- **Run a specific test inside of test file**
    ```bash
    npx playwright test tests/smoke-test.spec.ts -g “Check available Contact button”
     ```

## Configuration

The Playwright configuration file (`playwright.config.ts`) is set up to run different test projects:

- **Smoke Tests**: Quick checks to ensure the main functionalities are working as expected.
- **Regression Tests**: Comprehensive tests to ensure recent changes haven't broken existing functionality.
- **API Tests**: Focused on testing the API endpoints.
- **Github Tests**: Join API endpoints and UI Test. Using the API to generate preconditions.
- **Mocks**: Tests using mock data or services.

Each project can be customized within the `playwright.config.ts` file.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
6. Open a pull request.