Feature: Navigation
  As a user
  I want to navigate through the application
  So that I can access different features

  Background:
    Given I am logged in as "admin" with password "password123"

  Scenario: Navigate to home page
    When I am on the home page
    Then I should see the welcome message
    And I should see my username "admin" in the welcome message

  Scenario: Navigate to users page from menu
    Given I am on the home page
    When I click on the Users menu
    Then I should be on the users page
    And I should see the user list
