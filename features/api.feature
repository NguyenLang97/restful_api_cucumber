Feature: Test RESTful API

  Scenario: Get a list of products                     # features/api.feature:3
    When I send a GET request to "/api/products"       # features/step_definitions/api.steps.js:6
    Then the response status should be 200             # features/step_definitions/api.steps.js:10
    And the response body should contain a list of products # features/step_definitions/api.steps.js:14

  Scenario: Add a new product                          # features/api.feature:8
    When I send a POST request to "/api/products" with: # features/step_definitions/api.steps.js:18
      | name          | price |
      | "Test Product" | 300   |
    Then the response status should be 201             # features/step_definitions/api.steps.js:10
    And the response body should contain the new product # features/step_definitions/api.steps.js:23
