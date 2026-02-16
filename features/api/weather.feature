Feature: OpenWeather API Testing

  Scenario: Retrieve current weather for valid city
    Given I request current weather for city "Berlin"
    Then the response status should be 200
    And the response should contain temperature data

  Scenario: Retrieve current weather for invalid city
    Given I request current weather for city "InvalidCity123"
    Then the response status should be 404

  Scenario: SQL injection simulation
    Given I request current weather for city "' OR '1'='1"
    Then the response status should not be 200

  Scenario: Missing API key
    Given I request weather without API key for city "Berlin"
    Then the response status should be 401

  Scenario: Integration test weather vs forecast
    Given I retrieve current weather and forecast for "Berlin"
    Then the temperatures should match for current day
