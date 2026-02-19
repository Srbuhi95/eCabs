# Weather and Contact Form Testing Framework

This project contains automated tests for the OpenWeather API and a web contact form using Playwright and Cucumber (TypeScript).

---

## Table of Contents

1. [Setup Instructions](#setup-instructions)  
2. [How to Run Tests](#how-to-run-tests)  
3. [Framework Structure](#framework-structure)  
4. [Assumptions and Limitations](#assumptions-and-limitations)  
5. [Test Reports, Screenshots, and Logs](#test-reports-screenshots-and-logs)  
6. [Notes](#notes)

---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Srbuhi95/eCabs.git
cd eCabs
Install dependencies:

npm install
Create a .env file in the root directory with your API key:

API_KEY="your_openweathermap_api_key"
Ensure TypeScript is installed and compiled if needed:

npx tsc --noEmit
How to Run Tests

The project includes the following scripts in package.json:

"scripts": {
  "run-all": "npx cucumber-js",
  "run-api": "npx cucumber-js features/api",
  "run-ui": "npx cucumber-js features/ui"
}

Run all tests (API + UI):
    npm run run-all
Run only API tests:
    npm run run-api
Run only UI tests:
    npm run run-ui


Framework Structure
project-root/
│
├─ features/
│   ├─ api/                  # API feature files
│   └─ ui/                   # UI feature files
│
├─ step-definitions/
│   ├─ apiSteps.ts           # API step definitions
│   └─ uiSteps.ts            # UI step definitions
│
├─ src/
│   ├─ api/
│   │   └─ WeatherClient.ts  # API client for OpenWeather
│   └─ hooks/
│       └─ hooks.ts          # Global hooks (Before/After scenarios)
│
├─ config/
│   └─ config.ts             # API base URL and environment variables
│
├─ logs/
│   └─ test.log              # Execution logs for debugging
│
├─ .env                      # Environment variables (API key)
├─ package.json
└─ cucumber.config.ts        # Cucumber configuration (timeout, require modules)

features/ – contains all .feature files.

step-definitions/ – contains corresponding step implementations.

src/api/WeatherClient.ts – manages API requests.

src/hooks/hooks.ts – contains hooks that run before and after scenarios.

config/config.ts – stores base API URL and reads environment variables.

logs/test.log – stores detailed logs of test execution for review.

Assumptions and Limitations
API key must be valid in .env for all API tests.

Tests use metric units for temperature by default.

UI tests are limited to the contact form page.

Maximum step timeout is set to 30 seconds in cucumber.config.ts.

API response validation assumes OpenWeather API returns standard JSON fields (main.temp, etc.).

Some UI interactions may vary depending on browser rendering; tested on Chromium by default.

Test Reports, Screenshots, and Logs
API tests: Validate current weather, forecast, missing API key, invalid cities, and SQL injection simulation.

UI tests: Validate contact form submission success, required field validation, and error handling.

Screenshots: Captured automatically on UI test failures (if configured in Playwright).

Network logs: Can be captured via Playwright tracing for debugging API or UI requests.

Execution logs: All test execution details are written to logs/test.log for debugging and review.

Notes
Ensure .env is present and API key is correct before running API tests.

Adjust timeout in cucumber.config.ts if some UI tests take longer than 30 seconds.

Review logs/test.log for detailed execution information and debugging failed scenarios.

Screenshots and network logs can help troubleshoot intermittent UI issues.

