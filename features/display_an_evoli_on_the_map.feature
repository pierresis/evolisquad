Feature: Display a population of 1 Evoli on the map
  Scenario: User start the simulation
    Given a population with an initial count of 1 Evoli
    And a map full of grass
    When the User start the simulation
    Then I count 1 Evoli
