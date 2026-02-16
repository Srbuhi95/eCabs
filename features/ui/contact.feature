Feature: Contact Form Testing

  Scenario: Submit form successfully
    Given I open the contact page
    When I fill the form with valid data
    And I submit the form
    Then success message should be displayed

  Scenario: Submit form without required fields
    Given I open the contact page
    When I submit the form without filling fields
    Then validation message should be displayed
