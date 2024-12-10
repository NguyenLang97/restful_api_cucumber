Feature: Test API GET endpoint

  Scenario: Get a pets by ID
    Given the API endpoint is "/pets"
    When I send a GET request
    Then the response status code should be 407
   

 