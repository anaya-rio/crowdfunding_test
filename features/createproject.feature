Feature: Crowdfunding app

    Scenario: Create a new project AC1
        Given I am logged in
        When I select "Create a new project"
        And the project is created
        Then I see an option to Edit and Delete the project
