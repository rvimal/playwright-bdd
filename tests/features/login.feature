Feature: User Login
  As a user
  I want to login to the application
  So that I can access the application features

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter username "admin" and password "password123"
    And I click the login button
    Then I should be redirected to the home page
    And I should see the welcome message

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter username "invalid" and password "wrong"
    And I click the login button
    Then I should see an error message
