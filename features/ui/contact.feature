Feature: Login functionality on OrangeHRM demo

  Scenario: Successful login
    Given I open the OrangeHRM login page
    When I enter username "Admin" and password "admin123"
    And I click login
    Then I should see the dashboard page

  Scenario: Login with invalid credentials
    Given I open the OrangeHRM login page
    When I enter username "Wrong" and password "Wrong123"
    And I click login
    Then I should see an error message

  Scenario: Login with empty fields
    Given I open the OrangeHRM login page
    When I leave username and password empty
    And I click login
    Then I should see required field validation messages
