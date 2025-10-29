Feature: User Management
  As a logged in user
  I want to manage users
  So that I can view and create users in the system

  Background:
    Given I am logged in as "admin" with password "password123"

  Scenario: View user list
    When I navigate to the users page
    Then I should see the user list
    And I should see the create user button

  Scenario: Create a new user
    Given I am on the users page
    When I click the create user button
    Then I should be on the user creation page
    When I fill in the user form with name "Test User" and email "test@example.com"
    And I submit the user form
    Then I should see a success message
    And I should be redirected to the user list page
    And I should see the new user in the list
